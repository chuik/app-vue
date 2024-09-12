<template>
	<view class="container">
		<view style="display: flex;">
			<image class="header-icon" src="@/static/back-icon.png" mode="aspectFit" @click="tui"></image>
			<view class="title">重置密码</view>
		</view>
		<view class="form">
			<!-- 手机号输入框 -->
			<view class="input-group">
				<image src="/static/phone.png" class="icon" />
				<input v-model="phoneNumber" type="number" maxlength="11" placeholder="请输入手机号" class="input" />
			</view>

			<!-- 验证码输入框 -->
			<view class="input-group">
				<image src="/static/lock.png" class="icon" />
				<input v-model="verificationCode" type="text" placeholder="请输入验证码" class="input" />
				<text :class="{'code-text': true, 'disabled': !isPhoneNumberValid || isCountingDown}"
					@click="getVerificationCode">
					{{ countdownText }}
				</text>
			</view>

			<!-- 密码输入框 -->
			<view class="input-group">
				<image src="/static/lock.png" class="icon" />
				<input v-model="password" :type="isPasswordVisible ? 'text' : 'password'" placeholder="请输入密码"
					class="input" />
				<image v-if="password" src="/static/clear-icon.png" class="clear-icon" @click="clearPassword" />
			</view>

			<!-- 确认设置按钮 -->
			<button @click="confirmSetting" class="confirm-button">
				确认设置
			</button>
		</view>
	</view>
</template>

<script>
	import {
		request
	} from 'http';
	export default {
		data() {
			return {
				phoneNumber: '',
				verificationCode: '',
				password: '',
				isPasswordVisible: false,
				isCountingDown: false,
				countdown: 60
			};
		},
		computed: {
			isPhoneNumberValid() {
				return this.phoneNumber.length === 11;
			},
			countdownText() {
				return this.isCountingDown ? `${this.countdown}秒后重试` : '获取验证码';
			}
		},
		methods: {
			tui(){
				uni.navigateBack()
			},
			getVerificationCode() {
				if (this.isCountingDown || !this.isPhoneNumberValid) return;

				// 发送验证码请求的逻辑
				console.log('验证码已发送');

				this.isCountingDown = true;
				this.startCountdown();
				this.send();
			},
			startCountdown() {
				const interval = setInterval(() => {
					if (this.countdown <= 0) {
						clearInterval(interval);
						this.isCountingDown = false;
						this.countdown = 60;
					} else {
						this.countdown--;
					}
				}, 1000);
			},
			clearPassword() {
				this.password = '';
			},
			send() {
				uni.$request(
					"users/send",
					"post", {
						"phone": this.phoneNumber
					}
				).then(res => {
					console.log(res);
					res = res.data
					if (res.code == 200) {
						uni.showToast({
							icon: "success",
							title: res.data
						})
					} else {
						uni.showToast({
							icon: "error",
							title: res.data
						})
					}
				})
			},
			confirmSetting() {
				// 提交表单的逻辑
				console.log('设置已确认');
				uni.$request(
					"users/updatePwd",
					"post", {
						"phone": this.phoneNumber,
						"capCode": this.verificationCode,
						"password": this.password,
					}
				).then(res => {
					res=res.data
					if (res.code == 200) {
						uni.showToast({
							title: res.data,
							icon: 'success'
						});
					} else {
						uni.showToast({
							icon: 'error',
							title: res.data,
						});
					}
					uni.hideLoading();
				})
			}
		}
	};
</script>

<style scoped>
	.container {
		padding: 20px;
	}
	.header-icon {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	
	}

	.title {
		text-align: center;
		font-size: 20px;
		margin-left: 29%;
		margin-bottom: 20px;
	}

	.form {
		display: flex;
		flex-direction: column;
	}

	.input-group {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		border-bottom: 2px solid #E8ECEF;
	}

	.icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
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

	.code-text {
		margin-left: 10px;
		color: #007AFF;
		cursor: pointer;
	}

	.disabled {
		color: #ccc;
		cursor: not-allowed;
	}

	.clear-icon {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		cursor: pointer;
	}

	.confirm-button {
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
		/* 设置圆角半径为8px */
		color: #FEFFFF;
		/* 设置字体颜色为白色 */
		font-size: 40rpx;
	}
</style>