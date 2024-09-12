<template>
	<view class="container">
		<!-- 顶部导航 -->
		<view class="header">
			<image class="icon" @click="tui" :src="iconSrc" />
			<text class="title">设置昵称</text>
			<text class="finish-btn" @click="onFinish">完成</text>
		</view>

		<!-- 输入框 -->
		<view class="input-container">
			<input class="nickname-input" placeholder="请输入昵称" v-model="name" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				iconSrc: '/static/back-icon.png' // 替换为实际图标路径
			};
		},
		onLoad(options) {
			console.log(options.name);
			this.name = options.name;
		},
		methods: {
			tui() {
				uni.navigateTo({
					url: '../gerenxinxi/gerenxinxi',
				})
			},
			onFinish() {
				// 完成按钮点击事件处理
				uni.$request(
				'userParam/nickName/'+this.name,
				'post',
				null, 
				{
					"content-type": "application/json",
					"token": uni.getStorageSync('token')
				}
				).then(res=>{
					res = res.data
					if(res.code == 200){
						uni.showToast({
							title: res.data,
							icon: 'success',
						});
					}else{
						uni.showToast({
							title: res.data,
							icon: 'error',
						})
					}
				})
				
			}
		}
	};
</script>

<style scoped>
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
		color: #D1D1D1;
		border: none;
		border-radius: 4px;
		padding: 0px 10px;
		margin-left: 25%;
		font-size: 18px;
	}

	.input-container {
		margin: 20px;
		display: flex;
	}

	.nickname-input {
		width: 100%;
		height: 40px;
		border-radius: 10upx 10upx 10upx 10upx;
		border: 1px solid #d0d0d0;
		padding: 0 10px;
		background-color: #ffffff;
		right: 20px;
	}
</style>