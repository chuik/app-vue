<template>
	<view class="container">
		<!-- 顶部导航 -->
		<view class="header">
			<image class="back-icon" src="/static/back-icon.png" @click="goBack" />
			<text class="title">个人信息</text>
		</view>

		<!-- 第一部分 -->
		<view class="section">
			<!-- 第一行 -->
			<view class="row">
				<text class="left-text">头像</text>
				<view class="right-content">
					<image class="avatar" src="/static/avatar.png" />
					<image class="arrow-icon" src="/static/icon0.png" />
				</view>
			</view>
			<!-- 第二行 -->
			<view class="row">
				<text class="left-text">用户名</text>
				<view class="right-content">
					<text class="username">JohnDoe</text>
					<image class="arrow-icon" src="/static/icon0.png" />
				</view>
			</view>
			<!-- 第三行 -->
			<!-- 性别选择弹出框 -->
			<picker mode="selector" :range="genderOptions" @change="onGenderChange" v-model="genderIndex">
				<view class="row" @click="showGenderPicker">
					<text class="left-text">性别</text>
					<view class="right-content">
						<text class="gender">{{ selectedGender }}</text>
						<image class="arrow-icon" src="/static/icon0.png" />
					</view>
				</view>
			</picker>
		</view>

		<!-- 第二部分 -->
		<view class="section">
			<!-- 第一行 -->
			<view class="row">
				<text class="left-text">绑定手机号</text>
				<image class="icon" src="/static/icon0.png" />
			</view>
			<!-- 第二行 -->
			<view class="row" @click="password">
				<text class="left-text">修改手机号</text>
				<image class="icon" src="/static/icon0.png" />
			</view>
		</view>

	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedGender: '保密',
				genderOptions: ['男', '女', '保密'],
				genderIndex: 2
			}
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			showGenderPicker() {
				// this.$refs.genderPicker.open();
			},
			onGenderChange(e) {
				this.selectedGender = this.genderOptions[e.detail.value];
				this.genderIndex = e.detail.value;
				console.log(this.genderIndex);
			},
			password(){
				uni.navigateTo({
					url:"/pages/wangjimima/wangjimima"
				})
			}
		}
	}
</script>

<style>
	.container {
		background-color: #F3F7F8;
	}

	.header {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: #fff;
	}

	.back-icon {
		width: 25px;
		height: 25px;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		margin-left: 35%;
	}

	.section {
		margin-top: 20px;
		background-color: #fff;
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		border-bottom: 1px solid #e0e0e0;
	}

	.left-text {
		font-size: 16px;
		margin-left: 20px;
		font-weight: bold;
	}

	.right-content {
		display: flex;
		align-items: center;
	}

	.avatar,
	.icon,
	.arrow-icon {
		width: 15px;
		height: 15px;
		margin-left: 10px;
	}

	.username {
		font-size: 16px;
		color: #bdbdbd;
	}
	.gender{
		color: #bdbdbd;
	}

	.picker {
		padding: 10px;
		background-color: #f0f0f0;
		border: 1px solid #d0d0d0;
	}

	.picker-text {
		font-size: 16px;
	}
</style>