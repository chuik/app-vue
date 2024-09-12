<template>
	<view class="container">
		<view class="item" v-for="(item, index) in items" :key="index">
			<image class="icon" :src="item.icon" />
			<view class="text-content">
				<text class="main-text">{{ item.mainText }}</text>
				<text class="sub-text">{{ item.subText }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						icon: '/static/shuqian.png',
						mainText: '第一行文字',
						subText: '第二行文字'
					},
					{
						icon: 'https://via.placeholder.com/40',
						mainText: '第一行文字',
						subText: '第二行文字'
					},
					// 添加更多条目
				]
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 10px;
		background-color: #F3F7F8;
	}

	.item {
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: 10px;
		padding: 10px;
		margin-bottom: 10px;
		height: 70px;
		box-shadow: 0 0 4px rgba(225, 244, 238, 0.9);
	}

	.icon {
		width: 30px;
		height: 35px;
		margin-right: 10px;
		bottom: 27px;
	}

	.text-content {
		display: flex;
		flex-direction: column;
		margin-top: 15px;
	}

	.main-text {
		font-size: 16px;
		color: #CACACA;
		margin-bottom: 15px;
		/* 添加上下间距 */
		font-weight: bold;
	}

	.sub-text {
		font-size: 14px;
		color: #C5C5C5;
	}
</style>