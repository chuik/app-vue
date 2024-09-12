<template>
	<view class="container">
		<view class="beijing"></view>
		<!-- 页面顶部 -->
		<view class="header">
			<image  @click="toShezhi" class="settings-icon" src="/static/settings-icon.png"></image>
		</view>

		<!-- 第一部分 -->
		<view class="section one">
			<view class="profile">
				<image class="avatar" :src="tou" @click="gerenxinxi"></image>
				<view class="info">
					<span class="username">{{myname}}</span>
					<view class="c-coin">
						<text class="bi">我的c币<text
								style="color: #fff; margin-left: 5px;margin-right: 5px; ">|</text>0枚</text>
					</view>
					<view class="random-number">学号：{{ randomNumber }}</view>
				</view>
			</view>
			<view class="icons">
				<view class="icon-item" v-for="(icon, index) in icons" :key="index">
					<image class="icon" :src="icon.src"></image>
					<br>
					<text><b>{{ icon.label }}</b></text>
				</view>
			</view>
		</view>

		<!-- 第二部分 -->
		<view class="section two">
			<view v-for="(item, index) in sectionTwo" :key="index" class="row">
				<image class="small-icon" :src="item.leftIcon"></image>
				<text class="text"><b>{{ item.text }}</b></text>
				<image class="small-icon" :src="item.rightIcon"></image>
			</view>
		</view>

		<!-- 第三部分 -->
		<view class="section three">
			<view v-for="(item, index) in sectionThree" :key="index" class="row">
				<image class="small-icon" :src="item.leftIcon"></image>
				<text class="text"><b>{{ item.text }}</b></text>
				<image class="small-icon" :src="item.rightIcon"></image>
			</view>
		</view>
		<view style="height: 100px;"></view>

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
		<image class="main-icon" src="/static/kecheng.png" @click="gotoPath('../zhuye/zhuye')"></image>
		<view class="bottom-icon" @click="gotoPath('../faxian/faxian')">
			<image src="/static/faxian.png"></image>
			<text>发现</text>
		</view>
		<view class="bottom-icon" >
			<image src="/static/wode_xuanz.png"></image>
			<text>我的</text>
		</view>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				randomNumber: uni.getStorageSync("studentId"),
				myname: uni.getStorageSync("nickName"),
				tou: uni.$BaseUrl+"static/"+uni.getStorageSync("avatar"),
				icons: [{
						src: '/static/icon1.png',
						label: '我的题库'
					},
					{
						src: '/static/icon2.png',
						label: '我的课程'
					},
					{
						src: '/static/icon3.png',
						label: '我的订单'
					},
					{
						src: '/static/icon4.png',
						label: '我的发布'
					}
				],
				sectionTwo: [{
						leftIcon: '/static/icon5.png',
						text: '我的下载',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon6.png',
						text: '快速提分',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon7.png',
						text: '数据报告',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon8.png',
						text: '我的关注',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon9.png',
						text: '课程激活',
						rightIcon: '/static/icon0.png'
					},
					// 继续添加其他行
				],
				sectionThree: [{
						leftIcon: '/static/icon10.png',
						text: '分享给好友',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon11.png',
						text: '联系客服',
						rightIcon: '/static/icon0.png'
					},
					{
						leftIcon: '/static/icon12.png',
						text: '关于我们',
						rightIcon: '/static/icon0.png'
					}, {
						leftIcon: '/static/icon13.png',
						text: '意见反馈',
						rightIcon: '/static/icon0.png'
					},
					// 继续添加其他行
				]
			};
		},
		methods: {
			gotoPath(path){
				console.log(path);
				uni.redirectTo({
					url:path
				})
			},
			toShezhi(){
				uni.navigateTo({
					url:"../shezhi/shezhi"
				})
			},
			generateRandomNumber() {
				return Math.floor(1000000 + Math.random() * 9000000).toString();
			},
			gerenxinxi(){
				uni.navigateTo({
					url:"/pages/gerenxinxi/gerenxinxi"
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #F3F7F8;
	}

	.beijing {
		background-color: #57C69C;
		width: 100%;
		position: Fixed;
		height: 210px;
		z-index: 0;
		border-radius: 0px 0px 50% 50%;
	}

	.header {
		display: flex;
		justify-content: flex-start;
		padding: 10px;
	}

	.settings-icon {
		width: 20px;
		height: 20px;
		margin-left: 90%;
	}

	.section {
		z-index: 1;
		flex: 1;
		padding: 10px;
	
	}

	.one {
		z-index: 1;
		background-color: #fff;
		width: 85%;
		margin-left: 5%;
		border-radius: 20upx 20upx 20upx 20upx;
		margin-top: 10px;
		
	}

	.profile {
		display: flex;
		align-items: center;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-left: 30px;
	}

	.info {
		margin-left: 30px;
	}

	.username {
		font-size: 18px;
	}

	.c-coin {
		display: flex;
		align-items: center;
		border-radius: 100px;
		background-color: aquamarine;
		font-size: 10px;
		width: 90px;
		height: 20px;
	}

	.bi {
		margin-left: 6%;
	}

	.random-number {
		margin-top: 5px;
		font-size: 16px;
	}

	.icons {
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}

	.icon-item {
		text-align: center;

	}

	.icon {
		width: 40px;
		height: 40px;
	}

	.section.two .row,
	.section.three .row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0;
		margin-top: 10px;
		margin-bottom: 15px;
		border-bottom: 1px solid #F0F1F3;

	}

	.two {
		background-color: #fff;
		width: 85%;
		margin-left: 5%;
		border-radius: 20upx 20upx 20upx 20upx;
		margin-top: 10px;
		height: 900px;
	}

	.three {
		background-color: #fff;
		width: 85%;
		margin-left: 5%;
		border-radius: 20upx 20upx 20upx 20upx;
		margin-top: 20px;
		height: 1800px;
	}

	.text {
		margin-right: 55%;
	}

	.small-icon {
		width: 20px;
		height: 20px;
	}

	
</style>