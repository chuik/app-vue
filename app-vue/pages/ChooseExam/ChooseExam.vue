<template>
	<view style="background-color: #F3F7F8; height: 100%;  width: 100%;">
		<!-- 第一部分 -->
		<view class="search-section">
			<view class="search-input-container">
				<image class="search-icon" src="/static/search-icon.png" />
				<input class="search-input" placeholder-style="color: #C7C7C9;" type="text" placeholder="搜索" />
			</view>
			<text class="search-btn">搜索</text>
		</view>

		<!-- 第二部分 -->
		<view class="accordion-section">
			<view v-for="(item, index) in items" :key="index" >
				<view class="accordion-item">
					<view class="accordion-header" @click="toggle(index)">
						<image class="icon" :src="item.src" />
						<view class="accordion-text-container">
							<view class="text">{{ item.title }}</view>
							<text class="title-text">{{ item.titletext }}</text>
						</view>
						<image class="arrow" :src="item.open ? '../../static/arrow-up.png' : '../../static/down-arrow.png'" />
					</view>
				</view>
				<view v-if="item.open" class="accordion-content" @click="goChooseExam_one">
					<view class="content-item" v-for="(content, cIndex) in item.contents" :key="cIndex">
						<view class="content-text">{{ content.text }}</view>
						<image class="icon-src" :src="icon" />
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: "../../static/icon0.png",
				items: [{
						src: '../../static/ShoppingCart.png',
						title: '已购课程',
						titletext: '为购买课程',
						open: false,
						contents: [{
								text: '内容1'
							},
							{
								text: '内容2'
							}
						]
					},
					{
						src: '../../static/book.png',
						title: '已购题库',
						titletext: '为购买题库',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/Architecture.png',
						title: '建筑工程',
						titletext: '一级建筑师 二级建筑师',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/money.png',
						title: '财会经济',
						titletext: '初级经济师 中级经济师',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/occupation.png',
						title: '职业资格',
						titletext: 'CCAA注册审核员 眼睛验光员',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/bank.png',
						title: '银行金融',
						titletext: '证券从业 初级银行从业资格',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/teacher.png',
						title: '教师考试',
						titletext: '特岗教师 教师资格',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/publicoffice.png',
						title: '公职考试',
						titletext: '军人文职人员招聘 国家公务员',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					{
						src: '../../static/drug.png',
						title: '医药卫生',
						titletext: '高级卫生专业技术资格考试(正高) 高...',
						open: false,
						contents: [{
								text: '内容3'
							},
							{
								text: '内容4'
							}
						]
					},
					// 添加更多的项
				]
			};
		},
		methods: {
			toggle(index) {
				this.items[index].open = !this.items[index].open;
			},
			goChooseExam_one(){
				uni.navigateTo({
					url:'/pages/ChooseExam-one/ChooseExam-one'
				})
			}
		}
	}
</script>

<style>
	.search-section {
		display: flex;
		align-items: center;
		background-color: #F3F7F8;
		height: 50px;
	}

	.search-input-container {
		display: flex;
		align-items: center;
		flex: 1;
		position: relative;
		background-color: #fff;
		border-radius: 50px;
		height: 30px;
		margin-left: 20px;
	}

	.search-input {
		flex: 1;
		padding-left: 50px;
	}

	.search-icon {
		position: absolute;
		left: 20px;
		width: 20px;
		height: 20px;
	}

	.search-btn {
		margin-left: 30px;
		margin-right: 25px;
	}

	.accordion-section {
		margin-top: 20rpx;
	}

	.accordion-item {
		margin-bottom: 50rpx;
		background-color: #fff;
		height: 150rpx;
	}

	.accordion-header {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.icon {
		width: 30px;
		height: 30px;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}
	
	.icon-src{
		width: 40rpx;
		height: 40rpx;
		margin-right: 40rpx;
	}

	.accordion-text-container {
		display: flex;
		flex-direction: column;
		/* 使标题和副标题垂直排列 */
		flex: 1;
		margin-left: 20px;
		margin-top: 25rpx;
	}

	.text {
		/* 标题样式 */
		font-size: 18px;
	}

	.title-text {
		/* 副标题样式 */
		font-size: 10px;
		color: #BCBCBC;
		margin-top: 15rpx;
	}

	.arrow {
		width: 15px;
		height: 15px;
		margin-right: 40rpx;
		margin-top: 20rpx;
	}

	.accordion-content {
		margin-top: -47rpx;
		background-color: #fff;
	}

	.content-item {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #efefef;
		padding: 10px 0;
	}

	.content-text {
		flex: 1;
		margin-left: 80rpx;
	}
</style>