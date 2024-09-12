<template>
	<view class="container">
		<view class="a" style="height: 1px; ">
		</view>
<view style="background-color: #fff;">
	<!-- 第一部分 -->
	<view class="section1">
		<image class="big-image one-style" src="https://via.placeholder.com/300x200" mode="aspectFill"></image>
		<view class="text-content one-style">
			<view class="text-line">
				<text class="description">图片描述文字</text>
				<view class="amount">
					<text class="amount-text">\$100.00</text>
					<view class="amount-icon">
						<image class="icon" src="https://via.placeholder.com/20" />
						<text class="icon-text">99</text>
					</view>
	
				</view>
			</view>
		</view>
	</view>
	
	<!-- 第二部分 -->
	<view class="section2">
		<view class="image-wrapper" v-for="(image, index) in images" :key="index">
			<image class="section2-image" :src="image.src" mode="aspectFill"></image>
			<view class="overlay">
				<image class="overlay-icon" src="https://via.placeholder.com/20" />
				<text class="overlay-time">130.58</text>
			</view>
		</view>
	</view>
	
	<!-- 第三部分 -->
	<view class="section3">
		<text class="left-text">课程内容为:</text>
		<text class="right-text">详情</text>
	</view>
	
	<!-- 第四部分 -->
	<view class="section4">
		<button class="btn-yellow">选择课程</button>
		<button class="btn-blue">购买课程</button>
	</view>
</view>
		




	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [{
						src: 'https://via.placeholder.com/100x100'
					},
					{
						src: 'https://via.placeholder.com/100x100'
					},
					{
						src: 'https://via.placeholder.com/100x100'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.one-style {
		margin-top: 10px;
	}

	.container {
		background-color: #e2e5e6;
		height: 100vh;

	}

	/* 第一部分 */
	.section1 {
		display: flex;
		margin-bottom: 10px;
		background-color: #fff;
		height: 120px;
		margin-top: 10px;
	}

	.big-image {
		width: 170px;
		height: 100px;
		margin-left: 10px;
	}

	.text-content {
		margin-left: 10px;
		flex: 1;
	}

	.text-line {
		display: flex;
		flex-direction: column;
		/* 使子元素垂直排列 */
		height: 100%;
		/* 确保高度适合内容 */
	}

	.description {
		font-size: 16px;
	}

	.amount {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 水平分散对齐 */
		margin-top: 50px;
		/* 添加上边距以分隔description和amount */
	}

	.amount-text {
		font-size: 16px;
		margin-right: 5px;
	}

	.amount-icon {
		margin-right: 10px;
		display: flex;
		align-items: center;
		/* 垂直居中对齐 */
	}

	.icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}

	.icon-text {
		font-size: 14px;
	}


	/* 第二部分 */
	.section2 {
		display: flex;
		overflow-x: auto;
		margin-bottom: 10px;
		height: 85px;
		background-color: #fff;
	}

	.image-wrapper {
		position: relative;
		width: 120px;
		height: 80px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.section2-image {
		width: 100%;
		height: 100%;
	}

	.overlay {
		position: absolute;
		bottom: 3px;
		right: 2px;
		background-color: black;
		color: white;
		display: flex;
		align-items: center;
		padding: 1px;
		
		border-radius: 50upx 50upx 50upx 50upx;
	}

	.overlay-icon {
		width: 15px;
		height: 15px;
		margin-right: 5px;
		border-radius: 50upx 50upx 50upx 50upx;
		margin-left: 3px;
	}

	.overlay-time {
		font-size: 12px;
		margin-right: 3px;
	}

	/* 第三部分 */
	.section3 {
		
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

	}

	.left-text,
	.right-text {
		font-size: 16px;
		margin-top: 10px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.right-text {
		color: #57C69C;
	}

	/* 第四部分 */
	.section4 {
		display: flex;
		background-color: #fff;
		padding-bottom: 15px;
	}

	.btn-yellow,
	.btn-blue {
		flex: 1;
		height: 40px;
		border: none;
		color: white;
		font-size: 16px;
		border-radius: 5px;
		margin: 0 10px;
		/* 添加水平间距 */
		margin-top: 20px;
	}

	.btn-yellow {
		background-color: #FDBD1D;
	}

	.btn-blue {
		background-color: #57C69C;
	}
</style>