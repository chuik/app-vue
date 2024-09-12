<template>
	<view class="container">
		<!-- 顶部部分 -->
		<view class="header">
			<image class="header-icon" src="@/static/back-icon.png" mode="aspectFit"></image>
			<text class="header-title">拍照搜题</text>
		</view>

		<!-- 搜索框部分 -->
		<view class="search-section">
			<view class="search-input-wrapper">
				<input class="search-input" placeholder-style="color: #fff;" placeholder="输入关键词搜索" />
				<image class="search-icon" src="@/static/search-icon.png" mode="aspectFit"></image>
			</view>
			<view class="a"></view>
		</view>

		<!-- 圆圈部分 -->
		<view class="circle-section">
			<view class="circle">
				<image class="circle-image" src="@/static/photo-icon.png" mode="aspectFit"></image>
				<text class="circle-label">拍照搜题</text>
			</view>
			<text class="lishi">历史搜索</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 665px;
		background-color: #F3F2F8;
	}

	.header {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: #57C69C;
	}

	.header-icon {
		width: 25px;
		height: 25px;
		margin-right: 10px;
		filter: invert(1) brightness(3);
	}

	.header-title {
		font-size: 20px;
		font-weight: bold;
		margin-left: 27%;
		color: #fff;
	}
	
	.a{
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-color: #FED636;
		margin-left: 38%;
		margin-top: 30px;
	}

	.search-section {
		padding: 10px;
		background-color: #57C69C;
		height: 120px;
		z-index: 1;
	}

	.search-label {
		font-size: 14px;
		color: #333;
		margin-bottom: 5px;
	}

	.search-input-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	.search-input {
		flex: 1;
		height: 40px;
		border: 1px solid #ddd;
		border-radius: 20px;
		padding:  0 10px;
		/* 给左边的内边距留出空间 */
		font-size: 15px;
		background-color: #9BDDC2;
	}

	.search-icon {
		position: absolute;
		right: 15px;
		/* 调整图标的位置 */
		width: 20px;
		height: 20px;
		filter: invert(1) brightness(3);
	}

	.circle-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		border-top-left-radius: 20px;
		/* 左上角圆角 */
		border-top-right-radius: 20px;
		/* 右上角圆角 */
		z-index: 2;
	}

	.circle {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background-color: #DFF4ED;
		display: flex;
		flex-direction: column;
		/* 添加此行使子元素垂直排列 */
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
		margin-top: 40px;
	}

	.circle-image {
		width: 60px;
		height: 60px;
	}

	.circle-label {
		font-size: 16px;
		font-weight: bold;
		color: #333;
		margin-top: 8px;
		/* 添加上边距，使文字和图片之间有间隔 */
	}


	.lishi {
		background-color: #fff;
		font-weight: bold;
		font-size: 20px;
		margin-right: 70%;
		margin-top: 10px;
		margin-bottom: 20px;
	}
</style>