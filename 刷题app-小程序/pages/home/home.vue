<template>
	<view class="container">
		<view style="background-color: #2AB28E; height: 170px;">
			<!-- 搜索框部分 -->
			<view class="search-bar">
				<view class="search-box">
					<image class="search-icon" src="/static/search-icon.png" />
					<input class="search-input" type="text" placeholder-style="color: #fff;" placeholder="点击搜索试题" />
				</view>
				<view class="extra-icons">
					<image class="extra-icon" src="/static/icon1.png" />
					<image class="extra-icon" src="/static/icon2.png" />
				</view>
			</view>
			<view class="countdown-section">
				<view class="countdown">
					<text>离考试还有 {{ daysLeft }} 天</text>
					<view class="countdown-1">
						<text @click="showTimePicker">修改</text>
						<image class="calendar-icon" src="/static/calendar-icon.png" @click="showTimePicker" />
					</view>
				</view>

				<view class="ranking">
					<text>今日我的排行：未上榜 | 正与 {{ onlineUsers }}名学员并肩作战 </text>
				</view>
			</view>
		</view>


		<!-- 导航栏 -->
		<view class="navigation-bar">
			<view class="nav-item" v-for="(item, index) in navItems" :key="index">
				<image class="nav-image" :src="item.image" />
				<view class="nav-text">{{ item.text }}</view>
			</view>
		</view>


		<!-- 第一行：热门课程和查看更多 -->
		<view class="header">
			<text class="header-title">热门课程</text>
			<text class="view-more" @click="viewMore">查看更多</text>
		</view>

		<!-- 第二行：课程信息 -->
		<view class="course-info">
			<image class="course-image" src="/static/course-image.png" />
			<view class="course-details">
				<text class="course-title">信息处理技术员</text>
				<view class="course-price">
					<image class="price-icon" src="/static/price-icon.png" />
					<text class="price-amount">￥199</text>
				</view>
			</view>
			<view class="shiting">
				<image src="../../static/wo.png"></image>
				<text class="shiting-button">试听</text>
			</view>
		</view>


		<!-- 第一行：今日任务和说明 -->
		<view class="header1">
			<text class="header-title">今日任务</text>
			<text class="header-description">完成下列任务，即可领取C币</text>
		</view>

		<!-- 任务列表 -->
		<view class="task-list">
			<view v-for="(task, index) in tasks" :key="index" class="task-item">
				<view class="task-content">
					<image class="task-image" :src="task.image" />
					<view class="task-details">
						<text class="task-title">{{ task.title }} {{ task.completed }}/{{ task.total }}</text>
						<br><text class="task-description">{{ task.description }}</text>
					</view>
				</view>
				<view class="complete-button" @click="completeTask(task.id)">去完成</view>
				<view v-if="index < tasks.length - 1" class="divider1"></view>
			</view>
		</view>

		<!-- 分类标题 -->
		<scroll-view class="categories" scroll-x="true">
			<view v-for="(category, index) in categories" :key="index"
				:class="['category', { active: activeCategory === index }]" @click="setActiveCategory(index)">
				{{ category.name }}
				<view class="underline" v-if="activeCategory === index"></view>
			</view>
		</scroll-view>

		<!-- 内容区域 -->
		<view class="content">
			<view v-for="(item, index) in displayedItems" :key="index" class="content-item">
				<view class="left-section">
					<text class="title">{{ item.title }}</text>
					<view class="stats">
						<text class="date">{{ item.date }}</text>
						<view class="likes">
							<image src="/static/like-icon.png" class="icon" />
							<text>{{ item.likes }}</text>
						</view>
						<view class="comments">
							<image src="/static/comment-icon.png" class="icon" />
							<text>{{ item.comments }}</text>
						</view>
					</view>
				</view>
				<image :src="item.image" class="right-image" />
				<view class="divider"></view>
			</view>
			<!-- 加载更多按钮 -->
			<view v-if="hasMore" class="load-more" @click="loadMore">加载更多</view>
		</view>
		<!-- 底部弹出框 -->
		<view v-if="showPicker" class="overlay" @click="hideTimePicker">
			<view class="picker-container" @click.stop>
				<picker mode="date" @change="onDateChange">
					<view class="picker-button">选择日期</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				daysLeft: 0, // 默认值
				onlineUsers: 5, // 默认值
				navItems: [{
						image: '/static/image1.png',
						text: '图标1'
					},
					{
						image: '/static/image2.png',
						text: '图标2'
					},
					{
						image: '/static/image3.png',
						text: '图标3'
					},
					{
						image: '/static/image4.png',
						text: '图标4'
					},
					{
						image: '/static/image4.png',
						text: '图标4'
					},
				],
				showPopup: false,
				startDate: new Date().toISOString().split('T')[0],
				endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
				tasks: [{
						id: 1,
						image: '/static/task-image.png',
						title: '完成10道任意题',
						completed: 0,
						total: 10,
						description: '累计做完10道题即可完成任务'
					},
					// 可以添加更多任务项
				],
				categories: [{
						name: '分类1'
					},
					{
						name: '分类2'
					},
					{
						name: '分类3'
					},
				],
				activeCategory: 0,
				items: [{
						title: '事件1',
						date: '2024-01-01',
						likes: 10,
						comments: 5,
						image: '/static/image1.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					{
						title: '事件2',
						date: '2024-01-02',
						likes: 20,
						comments: 15,
						image: '/static/image2.jpg'
					},
					// Add more items as needed
				],
				displayedItems: [],
				itemsPerPage: 5,
				currentPage: 0,
				hasMore: true,
				showPicker: false,
				selectedDate: null,
			};
		},
		mounted() {
			this.loadMore();
		},
		methods: {
			showTimePicker() {
				this.showPicker = true;
			},
			hideTimePicker() {
				this.showPicker = false;
			},
			onDateChange(event) {
				const selectedDate = event.target.value;
				this.selectedDate = new Date(selectedDate);
				this.calculateDaysLeft();
				this.hideTimePicker();
			},
			calculateDaysLeft() {
				if (this.selectedDate) {
					const today = new Date();
					const timeDiff = this.selectedDate - today;
					this.daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
				}
			},
			confirmDate() {
				this.showPopup = false;
			},
			cancelDate() {
				this.showPopup = false;
			},
			viewMore() {
				// 处理“查看更多”按钮的点击事件
				console.log('查看更多 clicked');
				// 你可以在这里添加逻辑，例如跳转到更多课程的页面
			},
			completeTask(taskId) {
				// 处理任务完成的逻辑
				console.log(`完成任务: ${taskId}`);
				// 你可以在这里添加具体的完成任务逻辑
			},
			setActiveCategory(index) {
				console.log(index);
				this.activeCategory = index;
				this.loadMore();
			},
			loadMore() {
				const start = this.currentPage * this.itemsPerPage;
				const end = start + this.itemsPerPage;
				this.displayedItems = this.displayedItems.concat(this.items.slice(start, end));
				if (end >= this.items.length) {
					this.hasMore = false;
				} else {
					this.hasMore = true;
				}

				this.currentPage++;
			}
		},



	};
</script>

<style scoped>
	.container {
		background-color: #F3F7F8;
	}

	.search-bar {
		display: flex;
		align-items: center;

	}

	.search-box {
		display: flex;
		align-items: center;
		flex: 1;
		margin-top: 10px;
		margin-left: 15px;
		border: 1px solid #fff;
		border-radius: 50upx 50upx 50upx 50upx;
	}

	.search-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		margin-left: 15px;
		filter: invert(1) brightness(3);
	}

	.search-input {
		flex: 1;
		padding: 5px;

	}
	.extra-icons {
		display: flex;
		align-items: center;
		margin-right: 20px;
		margin-top: 13px;
	}

	.extra-icon {
		width: 20px;
		height: 20px;
		margin-left: 30px;
	}

	.countdown-section {
		margin-top: 30px;
	}

	.countdown {
		display: flex;
		align-items: center;
		margin-left: 15px;
	}

	.countdown-1 {
		margin-left: 160px;
	}

	.calendar-icon {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		cursor: pointer;
	}

	.ranking {
		margin-top: 25px;
		margin-left: 15px;
	}

	.navigation-bar {
		margin-top: 20px;
		display: flex;
		overflow-x: auto;
		/* 添加此属性以启用水平滚动 */
		white-space: nowrap;
		/* 保持导航项在同一行 */
		background-color: #fff;
	}

	.navigation-bar::-webkit-scrollbar {
		display: none;
		/* 隐藏滚动条 */
	}

	.nav-item {
		display: inline-flex;
		/* 修改为inline-flex，以便在一行中显示 */
		flex-direction: column;
		align-items: center;
		flex: 1 0 auto;
		/* 允许项按需调整大小 */
		margin-right: 10px;
		/* 增加右边距以分隔项 */
	}

	.nav-image {
		width: 80px;
		height: 80px;
	}

	.nav-text {
		margin-top: 5px;
	}

	.popup-buttons {
		display: flex;
		justify-content: space-between;
	}


	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin-bottom: 10px; */
		background-color: #fff;
		margin-top: 20px;
	}

	.header-title {
		font-size: 18px;
		font-weight: bold;
		margin-left: 15px;
		margin-top: 10px;
	}

	.view-more {
		margin-right: 20px;
		margin-top: 5px;
		color: #AAAAAA;
		font-size: 15px;
	}

	.course-info {
		display: flex;
		align-items: center;
		background-color: #fff;
	}

	.course-image {
		width: 80px;
		height: 80px;
		margin-right: 10px;
	}

	.course-details {
		flex: 1;
	}

	.course-title {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 5px;
		margin-left: 15px;
	}

	.course-price {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.price-icon {
		width: 20px;
		height: 20px;
	}

	.price-amount {
		font-size: 16px;
		color: #FF5722;
		margin-left: 5px;
		/* 调整价格图标和金额之间的间距 */
		margin-top: 10px;
	}

	.shiting {
		display: flex;
		flex-direction: column;
		/* 垂直排列图标和文本 */
		align-items: center;
		/* 水平居中对齐 */
		margin-right: 20px;
	}

	.shiting-image {
		width: 25px;
		/* 调整图标的大小 */
		height: 25px;
	}

	.shiting-button {
		margin-top: 5px;
		/* 调整文本与图标之间的间距 */
		font-size: 14px;
		/* 可选：调整文本大小 */
	}

	.shiting>image {
		width: 25px;
		height: 25px;
	}


	.header1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		margin-top: 20px;
	}

	.header-title {
		font-size: 18px;
		font-weight: bold;
	}

	.header-description {
		font-size: 14px;
		color: #666;
		margin-right: 20px;
	}

	.task-list {
		background-color: #fff;
	}

	.task-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.task-content {
		display: flex;
		flex: 1;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.task-image {
		width: 60px;
		height: 60px;
		margin-right: 10px;
	}

	.task-details {
		flex: 1;
	}

	.task-title {
		font-size: 16px;
		font-weight: bold;
	}

	.task-description {
		font-size: 14px;
		color: #999;
	}

	.complete-button {
		background-color: #FFA500;
		color: white;
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		width: 50px;
		margin-right: 10px;
	}

	.divider1 {
		height: 1px;
		background-color: #000;
		margin-top: 10px;
	}

	.categories {
		white-space: nowrap;
		overflow-x: auto;
		display: flex;
		background-color: #fff;
	}

	.category {
		padding: 10px;
		font-size: 16px;
		color: gray;
		cursor: pointer;
		display: inline-block;
		position: relative;
	}

	.category.active {
		font-size: 18px;
		color: #15BE93;
	}

	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 90%;
		height: 2px;
		background-color: #15BE93;
		margin-left: 5px;
	}

	.content {
		flex: 1;
	}

	.content-item {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
		background-color: #fff;
	}

	.left-section {
		flex: 1;
		margin-left: 20px;
		margin-top: 10px;
	}

	.title {
		font-weight: bold;
	}

	.bottom-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 5px;
	}

	.date {
		font-size: 14px;
		color: gray;
	}

	.stats {
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	.likes,
	.comments {
		display: flex;
		align-items: center;
		margin-left: 40px;
		/* 左侧边距 */
	}

	.icon {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}

	.right-image {
		width: 80px;
		height: 60px;
		margin-left: 10px;
	}

	.divider {
		height: 1px;
		background-color: #eee;
	}

	.load-more {
		text-align: center;
		padding: 10px;
		color: #007AFF;
	}

	.overlay {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.picker-container {
		background-color: #fff;
		padding: 20px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.picker-button {
		background-color: #007aff;
		color: #fff;
		text-align: center;
		padding: 10px;
		border-radius: 5px;
	}
</style>