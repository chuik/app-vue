<template>
	<view class="container">
		<!-- 页面顶部注册按钮 -->
		<view class="header">
			<view class="register-btn" @click="goToRegister"><b>注册</b></view>
		</view>

		<!-- 页面中间的图片 -->
		<view class="image-container">
			<image class="logo" src="/static/图标.png" mode="aspectFit"></image>
		</view>

		<!-- 输入框 -->
		<view class="input-container">
			<!-- 手机号输入框 -->
			<view class="input-group">
				<image class="icon" src="/static/phone.png" mode="aspectFit"></image>
				<input class="input" v-model="username" maxlength="11" type="number" placeholder="请输入手机号" />
			</view>

			<!-- 密码输入框 -->
			<view class="input-group">
				<image class="icon" src="/static/lock.png" mode="aspectFit"></image>
				<input class="input" :type="passwordVisible ? 'text' : 'password'" placeholder="请输入密码"
					v-model="password" />
				<image class="icon-eye" :src="passwordVisible ? '/static/eye-open.png' : '/static/eye-closed.png'"
					@click="togglePasswordVisibility" mode="aspectFit"></image>
				<text class="forget-password" @click="goToForgotPassword">忘记密码？</text>
			</view>
		</view>

		<!-- 登录按钮 -->
		<button class="login-btn"  
			v-if="!isFormValid">登录</button>
			
		<button class="login-btn" style="background-color: red;" @click="login"
			v-if="isFormValid">登录</button>

		<!-- 底部登录图标 -->
		<view class="footer">
			<image class="footer-icon" src="/static/wechat.png" mode="aspectFit"></image>
			<image class="footer-icon" src="/static/apple.png" mode="aspectFit"></image>
			<image class="footer-icon" src="/static/user.png" mode="aspectFit"></image>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				password: '',
				passwordVisible: false,
				username: '',
				isFormValid: false,
			};
		},
		watch: {
			username(val) {
				this.validateForm();
			},
			password(val) {
				this.validateForm();
			},
		},
		methods: {
			togglePasswordVisibility() {
				this.passwordVisible = !this.passwordVisible;
			},
			goToRegister() {
				uni.navigateTo({
					url: '/pages/zhuce/zhuce',
				});
			},
			goToForgotPassword() {
				uni.navigateTo({
					url: '/pages/forgot-password/forgot-password',
				});
			},
			validateForm() {
				const isUsernameValid = this.username.length === 11;
				const isPasswordValid = this.password.length >= 6;
				this.isFormValid = isUsernameValid && isPasswordValid;
			},
			login() {
				uni.showLoading({
					title:"加载中"
				})
				if (!this.isFormValid) return;
				// 登录逻辑
				uni.$request(
					'users/login',
					'post', {
						username: this.username,
						password: this.password
					}
				).then(res => {
					res = res.data;
					if (res.code == 200) {
						uni.setStorageSync('token', res.data.token);
						uni.setStorageSync('avatar', res.data.avatar);
						uni.setStorageSync('nickName', res.data.nickName);
						uni.setStorageSync('studentId', res.data.studentId);
						console.log(uni.getStorageSync('token'));
						uni.redirectTo({
							url: '../my/my',
						});
						
					} else {
						uni.showToast({
							icon: 'error',
							title: res.data,
						});
					}
					uni.hideLoading()
				});
			},
		},
	};
</script>


<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding: 20px;
		box-sizing: border-box;
	}

	.header {
		display: flex;
		justify-content: flex-end;
	}

	.register-btn {
		color: #000000;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 50rpx;
	}
input[type="password"]::-ms-reveal{
 display:none
}

	.image-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.logo {
		width: 100px;
		height: 100px;
	}

	.input-container {
		margin-top: 20px;
	}

	.input-group {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		border-bottom: 2px solid #E8ECEF;

	}

	.icon {
		width: 30px;
		height: 30px;
		margin-left: 15px;
	}

	.input {
		flex: 1;
		padding: 10px;
		border: none;
		/* border-bottom: 2px solid #E8ECEF; */
		padding: 30rpx;
		/* 添加内边距以便于输入 */
		font-size: 30rpx;
		outline: none;
		/* 去掉默认的焦点轮廓 */
	}
	
	.input::-ms-reveal{
	     display:none;
	 }

	.icon-eye {
		width: 24px;
		height: 24px;
		margin-left: -70px;
		cursor: pointer;
	}

	.forget-password {
		margin-left: 15px;
		color: #007aff;
		font-size: 35rpx;
	}

	.login-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		/* 你可以调整宽度 */
		height: 8%;
		/* 你可以调整高度 */
		text-align: center;
		margin-top: 20px;
		background-color: #CAD0CE;
		/* 可选的背景色 */
		cursor: pointer;
		/* 提示点击效果 */
		border-radius: 100px;
		/* 设置圆角半径 */
		color: #FEFFFF;
		/* 设置字体颜色为白色 */
		font-size: 40rpx;
	}



	.footer {
		display: flex;
		justify-content: space-around;
		margin-top: auto;
		padding: 10px 0;
	}

	.footer-icon {
		width: 30px;
		height: 30px;
	}
</style>