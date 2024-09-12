<template>
	<view class="body">
		<span class="title">题库</span>

		<view style="margin-top: 80rpx;">
			<view class="card" v-for="item in tikuList">
				<view class="title2">{{item.name}}</view>
				<view class="title3">{{item.summary}}</view>
				<view style="overflow: hidden; height: 50px;margin-top: 20rpx;">
					<view class="tagList" v-for="tag in item.tagLists">
						{{tag }}
					</view>
				</view>
				<view style="margin-top: 50rpx;">
					
					<span class="title3">共{{item.categoryNumber}}科</span>
					<span class="title3 " style="margin-left: 100rpx;">{{item.buyNumber}}人已学习</span>
					
				</view>
				
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {

				tikuList: []
			}
		},
		methods: {
			init(id) {
				uni.$request("classify/setmeal/list/" + id, "get", null, {
					"token": uni.getStorageSync("token")
				}).then(res => {
					res = res.data
					console.log(res.data);
					this.tikuList = res.data;

				})
			}
		},
		onLoad(op) {
			console.log(op.class);
			this.init(op.class);
		}
	}
</script>

<style>
	.body {

		background-color: rgb(246, 247, 248);
		overflow-y: auto;
		/* 允许垂直滚动 */
		height: 100vh;
		/* 相对于父元素的高度为 100% */
	}

	.title {
		color: rgb(113, 113, 114);
		font-size: 20px;
		margin-top: 50rpx;
		position: relative;
		top: 50rpx;
		left: 50rpx;
	}
	
	.title2{
		color: rgb(50, 50, 51);
		font-size: 30rpx
		
	}
	.title3{
		color: #d1d1d1;
		font-size: 30rpx;
		margin-top: 20rpx;
	}
	.tagList{
		background-color: #fff;
		border: 2px solid rgb(35, 193, 151);
		border-radius: 50rpx;
		padding: 5rpx;
		padding-left: 15rpx;
		padding-right: 15rpx;
		color: rgb(35, 193, 151);
		line-height: 50px;
		text-align: center;
		height: 50px;
		display: inline;
	
		margin-right: 20rpx;
	}
	.card {
		padding: 30rpx;
		margin-top: 20rpx;
		width: 80%;
		margin-left: 5%;
		height: 290rpx;
		background-color: #fff;
		border-radius: 15rpx;
	}
</style>