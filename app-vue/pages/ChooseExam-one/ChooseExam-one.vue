<template>
	<view class="container">
		<!-- 顶部导航 -->
		<view class="header">
			<image class="icon" @click="tui" :src="iconSrc" />
			<text class="title">选择考试</text>
			<text class="finish-btn" @click="onFinish">完成</text>
		</view>
		<view class="search-section">
			<view class="search-input-container">
				<image class="search-icon" src="/static/search-icon.png" />
				<input class="search-input" placeholder-style="color: #C7C7C9;" type="text" placeholder="搜索" />
			</view>
			<text class="search-btn">搜索</text>
		</view>
		
		

		<view v-for="test in items">
			<view class="accordion-item">
				<view class="text">{{test.name}}</view>
				<checkbox :value="test.name" class="checkbox"></checkbox>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconSrc: '/static/back-icon.png', // 替换为实际图标路径
				items: [{
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, {
					"name": '护理学(护师)[专业代码:203]'
				}, ]
			}
		},
		methods: {
			tui(){
				uni.navigateTo({
					url:'/pages/ChooseExam/ChooseExam'
				})
			}
		}
	}
</script>

<style>
	.container {
		background-color: #F3F7F8;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		background-color: #ffffff;
		border-bottom: 1px solid #e0e0e0;
		height: 50px;
	}

	.icon {
		width: 24px;
		height: 24px;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
		margin-left: 28%;
	}

	.finish-btn {
		color: #b5b5b5;
		border: none;
		border-radius: 4px;
		padding: 0px 10px;
		margin-left: 25%;
		font-size: 18px;
	}
	
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
	
	

	.accordion-item {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		height: 100rpx;
		border-bottom: 1px solid #b5b5b5;
	}
	.text{
		margin-top: 30rpx;
		margin-left: 20rpx;
		font-weight: bold;
	}
	
	.checkbox{
		border-radius: 50%;
		margin-top: 25rpx;
		margin-right: 20rpx;
	}
	
</style>