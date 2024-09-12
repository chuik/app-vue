<template>
	<view class="container">
		<image class="back-icon" src="/static/back-icon.png" @click="goBack"></image>
		<!-- 第一部分 -->
		<view class="instruction">
			<text class="instruction-text">请绑定您的手机号</text>
			<text class="instruction-subtext">绑定手机号才能购买商品</text>
		</view>

		<!-- 第二部分 -->
		<view class="form">
			<!-- 手机号输入框 -->
			<view class="input-group">
				<text class="label">+86 </text>
				<text style="margin-left: 17px; color: #EDEDEF;">|</text>
				<input class="phone-input" type="number" maxlength="11" placeholder="请输入手机号" v-model="phoneNumber"
					@input="onPhoneNumberInput" />
			</view>

			<!-- 横线 -->
			<view class="divider"></view>

			<!-- 验证码输入框 -->
			<view class="input-group">
				<text class="label">验证码 </text>
				<text style="color: #EDEDEF;">|</text>
				<input class="code-input" type="number" placeholder="请输入验证码" v-model="verificationCode" />
				<text class="get-code-btn" :disabled="!isPhoneNumberValid" @click="getVerificationCode">
					获取验证码
				</text>
			</view>
			<view class="divider"></view>
		</view>

		<!-- 确定按钮 -->
		<button class="confirm-btn" :disabled="!(isPhoneNumberValid && verificationCode)" @click="confirm">
			确定
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: '',
				verificationCode: '',
				isPhoneNumberValid: false
			};
		},
		methods: {
			onPhoneNumberInput() {
				// 检查手机号是否为11位
				this.isPhoneNumberValid = this.phoneNumber.length === 11;
			},
			getVerificationCode() {
				if (this.isPhoneNumberValid) {
					// 获取验证码逻辑
					uni.$request(
						'users/send',
						'post', {
							"phone": this.phoneNumber
						}
						).then(res => {
							res = res.data
							if (res.code == 200) {
								uni.showToast({
									icon: 'success',
									title: res.data
								})
							} else {
								uni.showToast({
									icon: 'error',
									title: res.data
								})
							}
						})
				}
			},
			confirm() {
				if (this.isPhoneNumberValid && this.verificationCode) {
					// 确认逻辑
					uni.showToast({
						title: '信息已提交',
						icon: 'success'
					});
					
				} else {
					uni.showToast({
						title: '请填写完整信息',
						icon: 'none'
					});
				}
			},
			goBack() {
				uni.navigateTo({
					url: '/pages/gerenxinxi/gerenxinxi'
				})
			}
		}
	};
</script>

<style scoped>
	.container {
		background-color: #fff;
		flex: 1;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}

	.back-icon {
		width: 25px;
		height: 25px;
	}

	.instruction {
		margin-bottom: 20px;
		display: block;
		margin-top: 30px;
	}

	.instruction-text {
		font-size: 20px;
		font-weight: bold;
	}

	.instruction-subtext {
		font-size: 14px;
		color: #666;
		display: block;
		/* 确保在新的一行显示 */
		margin-top: 10px;
	}


	.form {
		margin-bottom: 20px;
		margin-top: 30px;
	}

	.input-group {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		background-color: #FFFFFF;
	}

	.label {
		font-size: 16px;
		color: #333;
		margin-right: 10px;
	}

	/* 输入框样式 */
	.phone-input,
	.code-input {
		flex: 1;
		height: 40px;
		border: none;
		/* 取消边框 */
		padding: 0 10px;
		background-color: #fff;
	}

	/* 横线的样式 */
	.divider {
		height: 1px;
		/* 横线高度 */
		background-color: #ccc;
		/* 横线颜色 */
		margin: 10px 0;
		/* 上下间距 */
	}

	.get-code-btn {
		color: #B9B9B9;
		border: none;
		margin-left: 10px;
	}

	.get-code-btn:disabled {
		background-color: #d0d0d0;
	}

	.confirm-btn {
		color: black;
		border: none;
		border-radius: 4px;
		width: 280px;
		height: 50px;
		font-size: 18px;
		margin-top: 20px;
	}
</style>