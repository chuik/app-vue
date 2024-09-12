<template>
	<view class="body">
		
		<view class="loginOut" @click="loginOut">退出登录</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			loginOut(){
				uni.removeStorageSync("token")
				
				uni.redirectTo({
					url:'../index/index'
				})
			
			}
		}
	}
</script>

<style>
.body{
	height: 100vh;
	background-color: rgb(246, 247, 248);
}

.loginOut{
	position: relative;
	top: 50px;
	background-color: rgb(253, 72, 82);
	border-radius: 10px;
	text-align: center;
	color: #fff;
	width: 80%;
	margin-left: 10%;
	line-height: 50px;
	
}
</style>
