<template>
	<view class="container">
		<view style="display: flex;">
			<image class="header-icon" src="@/static/back-icon.png" mode="aspectFit" @click="tui"></image>
			<view class="title">注册</view>
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
			<button @click="confirmSetting" :class="['confirm-button']">
				确认设置
			</button>

			<!-- 隐私政策和服务协议 -->
			<view class="agreement-section">
				<checkbox :checked="isAgreementChecked" class="checkbox" @click="checkClick"></checkbox>
				<text class="agreement-text">
					点击"按钮勾选"即同意<text class="black">《才士题库隐私政策》</text>及<text class="black">《才士题库用户服务协议》</text>
				</text>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				phoneNumber: '',
				verificationCode: '',
				password: '',
				isPasswordVisible: false,
				isCountingDown: false,
				countdown: 60,
				isAgreementChecked: false, // 新增的变量用于跟踪复选框状态
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
			checkClick() {
				this.isAgreementChecked = !this.isAgreementChecked
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
			register() {
				uni.$request(
					"users/register",
					"post", {
						"capCode": this.verificationCode,
						"password": this.password,
						"phone": this.phoneNumber
					}
				).then(res => {
					console.log(res);
					res = res.data
					if (res.code == 200) {
						uni.showToast({
							icon: 'success',
							title: res.data,
							// duration:1000,
							// complete() {
							// 	uni.redirectTo({
							// 		url: '../index/index',
							// 	});
							// }
						})

					} else {
						uni.showToast({
							icon: 'error',
							title: res.data,
						});
					}
					uni.hideLoading();
				})

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
			confirmSetting() {
				console.log(this.isAgreementChecked);
				if (!this.isAgreementChecked) {
					console.log('请勾选同意协议');
					return;
				}
				this.register();
				// 提交表单的逻辑
				console.log('设置已确认');
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
		margin-bottom: 20px;
		margin-left: 35%;
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
		padding: 30rpx;
		font-size: 30rpx;
		outline: none;
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
		height: 8%;
		text-align: center;
		margin-top: 20px;
		background-color: #CAD0CE;
		cursor: pointer;
		border-radius: 100px;
		color: #FEFFFF;
		font-size: 40rpx;
	}

	.confirm-button.disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	.agreement-section {
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	.checkbox {
		margin-right: 10px;
	}

	.agreement-text {
		color: #333;
		font-size: 24rpx;
	}

	.black {
		color: #007AFF;
	}
</style>