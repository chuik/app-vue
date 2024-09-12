<template>
	<view class="container">
		<view class="header">
			<image class="icon" src="/static/back-icon.png" />
			<view class="tabs">
				<view class="tab" :class="{ active: activeTab === 'notifications' }"
					@click="setActiveTab('notifications')">
					通知
					<view v-if="activeTab === 'notifications'" class="underline"></view>
				</view>
				<view class="tab" :class="{ active: activeTab === 'chat' }" @click="setActiveTab('chat')">
					群聊
					<view v-if="activeTab === 'chat'" class="underline"></view>
				</view>
			</view>
		</view>

		<view class="content">
			<view v-if="activeTab === 'notifications'">
				<!-- 通知内容 -->
				<text>这是通知内容</text>
			</view>
			<view v-if="activeTab === 'chat'" class="qlnr-1">
				<!-- 群聊内容 -->
				<view class="qlnr">
					<text>群聊</text>
					<view class="qlnr-2">
						<image></image>
						<text>全部已读</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'notifications' // 默认选中 '通知'
			};
		},
		methods: {
			setActiveTab(tab) {
				this.activeTab = tab;
			}
		}
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #F3F7F8;
		;
	}

	.header {
		display: flex;
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}

	.icon {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}

	.tabs {
		display: flex;
		flex: 1;
	}

	.tab {
		flex: 1;
		text-align: center;
		padding: 10px;
		cursor: pointer;
		color: #333;
		font-size: 20px;
	}

	.tab.active {
		color: #57C69C;
		font-weight: bold;
	}

	.underline {
		width: 50%;
		height: 2px;
		background-color: #57C69C;
		margin-top: 5px;
		margin-left: 35px;
	}

	.content {
		flex: 1;
		margin-top: 10px;
	}

	.qlnr-1 {
		background-color: #fff;
		height: 50px;
		
	}
	.qlnr{
		display: flex;
		justify-content: space-between; /*左右平分*/
	}
	.qlnr>text{
		margin-top: 12px;
		margin-left: 20px;
		font-size: 18px;
	}
	.qlnr-2{
		margin-top: 10px;
		margin-right: 20px;
		color: #57C69C;
	}
	.qlnr-2>image {
		width: 20px;
		height: 20px;
	}
</style>