<template>
	<view class="page">
		<!-- 顶部导航栏 -->
		<view class="header">
			<text class="title">程序员</text>
			<image class="icon" src="/static/icon14.png"></image>
		</view>

		<!-- 第一部分 -->
		<view class="section first-section">
			<view class="circle-container">
				<view class="circle">
					<view class="percentage"
						:style="{ background: `conic-gradient(#aaffff ${percentage}%, #e0e0e0 ${percentage}% 100%)` }">
					</view>
					<text class="percentage-text">{{ percentage }}%</text>
				</view>
				<text class="label"><b>正确率</b></text>
			</view>
			<view class="stats">
				<view class="stat">
					<text class="stat-title"><b>总题数</b></text>
					<text class="stat-value">{{ totalQuestions }}</text>
				</view>
				<view class="divider"></view>
				<view class="stat">
					<text class="stat-title"><b>已做</b></text>
					<text class="stat-value">{{ completed }}</text>
				</view>
				<view class="divider"></view>
				<view class="stat">
					<text class="stat-title"><b>错题</b></text>
					<text class="stat-value1">{{ incorrect }}</text>
				</view>
			</view>
		</view>

		<!-- 第二部分 -->
		<view class="section second-section">
			<view class="icon-container">
				<view class="icon-item" v-for="(item, index) in icons" :key="index">
					<view class="icon-item-1">
						<image class="icon-image" :src="item.image"></image>
					</view>
					<text class="icon-text"><b>{{ item.text }}</b></text>
				</view>
			</view>
		</view>

		<!-- 第三部分 -->
		<view class="section third-section">
			<swiper class="swiper" indicator-dots="true" autoplay="true">
				<swiper-item v-for="(item, index) in swiperItems" :key="index">
					<image class="swiper-image" :src="item.image"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 第四部分 -->
		<view class="section fourth-section">
			<view class="list-item" v-for="(item, index) in listItems" :key="index">
				<image class="list-icon" :src="item.icon"></image>
				<view class="list-content">
					<text class="list-title">{{ item.title }}</text>
					<text class="list-subtitle">{{ item.subtitle }}</text>
				</view>
			</view>

		</view>




		<!-- 底部导航栏 -->
		<view class="footer">
			<view class="bottom-icon" @click="gotoPath('../home/home')">
				<image src="/static/shouye.png"></image>
				<text>首页</text>
			</view>
			<view class="bottom-icon" @click="gotoPath('../goods_cate/goods_cate')">
				<image src="/static/fenlei.png"></image>
				<text>分类</text>
			</view>
			<image class="main-icon" src="/static/kecheng.png"></image>
			<view class="bottom-icon" @click="gotoPath('../faxian/faxian')">
				<image src="/static/faxian.png"></image>
				<text>发现</text>
			</view>
			<view class="bottom-icon">
				<image src="/static/wode.png" @click="gotoPath('../my/my')"></image>
				<text>我的</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				percentage: 75, // 示例数据
				totalQuestions: 100,
				completed: 80,
				incorrect: 10,
				icons: [{
						image: '/static/icon1.png',
						text: '章节练习'
					},
					{
						image: '/static/icon2.png',
						text: '案例分析'
					},
					{
						image: '/static/icon3.png',
						text: '历年真题'
					},
					{
						image: '/static/icon4.png',
						text: '模拟试题'
					},
				],
				swiperItems: [{
						image: '/static/logo.png'
					},
					{
						image: '/static/swiper2.png'
					},
					{
						image: '/static/swiper3.png'
					},
				],
				listItems: [{
						icon: '/static/list-icon1.png',
						title: '我的错题',
						subtitle: '所有错题在这里查'
					},
					{
						icon: '/static/list-icon2.png',
						title: '我的收藏',
						subtitle: '查看所有收藏题目'
					},
					{
						icon: '/static/list-icon3.png',
						title: '错题榜',
						subtitle: '那些题最容易踩坑'
					},
					{
						icon: '/static/list-icon4.png',
						title: '收藏榜',
						subtitle: '那些题才是收藏之最'
					},
				],
			};
		},
		methods:{
			gotoPath(path){
				console.log(path);
				uni.redirectTo({
					url:path
				})
			},
		}
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f8f8f8;
	}

	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: #ffffff;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
	}

	.icon {
		width: 24px;
		height: 24px;
		margin-left: 10px;
	}

	.section {
		padding: 10px;
	}

	.first-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		width: 90%;
		margin-left: 10px;
		border-radius: 20px;
		margin-top: 10px;
		box-shadow: 0 0 10px rgba(223, 232, 231, 0.9);
	}

	.circle-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 10px;
	}

	.circle {
		position: relative;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 5px solid #e0e0e0;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.percentage {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.percentage-text {
		position: absolute;
		font-size: 18px;
		color: #23B797;
	}

	.label {
		margin-top: 5px;
		font-size: 17px;
	}

	.stats {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 15%;

	}

	.stat {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 100px;
		margin-top: 15px;
		justify-content: space-between;
	}


	.stat-title {
		font-size: 15px;
		margin-right: 20px;
		color: #333;
	}

	.stat-value {
		font-size: 16px;
		font-weight: bold;
		color: #000;
	}

	.stat-value1 {
		font-size: 16px;
		font-weight: bold;
		color: #DD9533;
	}

	.divider {
		height: 1px;
		background-color: #9f9f9f;
		width: 100%;
		margin-top: 10px;
	}

	.second-section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 90%;
		margin-left: 2%;
		margin-top: 20px;
		border-radius: 20upx 20upx 20upx 20upx;
	}

	.icon-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	}

	.icon-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 20%;
		/* 调整宽度，以确保每行最多显示四个 */
		margin-bottom: 20px;
		box-sizing: border-box;
		/* 确保宽度包括内边距和边框 */
	}

	.icon-item-1 {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		/* 垂直居中对齐 */
		justify-content: center;
		/* 水平居中对齐 */
		border-radius: 20upx 20upx 20upx 20upx;
		box-shadow: 0 0 10px rgba(225, 244, 238, 0.9);
	}

	.icon-image {
		width: 50px;
		height: 50px;
	}

	.icon-text {
		margin-top: 15px;
		font-size: 15px;
	}


	.third-section {
		/* background-color: #000; */
	}

	.swiper {
		width: 100%;
		height: 140px;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}

	.fourth-section {
		display: flex;
		flex-wrap: wrap;
		/* 允许换行 */
		gap: 10px;
		/* 设置元素之间的间距 */
		padding: 10px;
		justify-content: space-between;
		/* 确保项目在每行中均匀分布 */
		margin-bottom: 80px;

	}

	.list-item {
		display: flex;
		align-items: center;
		width: calc(50% - 10px);
		/* 每行两个元素，减去 gap 的一半 */
		box-sizing: border-box;
		/* 确保宽度计算包括内边距和边框 */
		margin-top: 10px;
		background-color: #ebebeb;
		height: 150px;
		border-radius: 20upx 20upx 20upx 20upx;
	}

	.list-icon {
		width: 40px;
		height: 40px;
		margin-right: 10px;
		margin-left: 10px;
	}

	.list-content {
		display: flex;
		flex-direction: column;
	}

	.list-title {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 15px;
		margin-left: 5px;
	}

	.list-subtitle {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 94%;
		bottom: 0px;
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 40px;
		position: fixed;
	}

	.bottom-icon {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.bottom-icon image {
		width: 30px;
		height: 30px;
	}

	.main-icon {
		width: 60px;
		height: 60px;
		margin: 0 10px;
	}
</style>