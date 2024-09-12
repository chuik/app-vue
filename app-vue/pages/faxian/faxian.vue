<template>
	<view class="container">
		<!-- 分类标签 -->
		<view class="tabs">
			<view :class="['tab', { active: currentTab === 'hot' }]" @click="setTab('hot')"><b>热门</b></view>
			<view :class="['tab', { active: currentTab === 'chat' }]" @click="setTab('chat')"><b>闲聊</b></view>
			<view :class="['tab', { active: currentTab === 'exam' }]" @click="setTab('exam')"><b>考试</b></view>
		</view>

		<!-- 评论列表 -->
		<view class="comments-list">
			<view v-for="(comment, index) in filteredComments" :key="index" class="comment-item">
				<view class="comment-header">
					<image class="avatar" :src="comment.avatar" />
					<view class="comment-info">
						<text class="user-name">{{ comment.userName }}</text>
						<text class="timestamp">{{ comment.timestamp }}</text>
					</view>
				</view>
				<view class="comment-content">{{ comment.content }}</view>
				<view class="comment-actions">
					<view class="action" @click="likeComment(index)">
						<image class="icon" src="/static/like.png" />
						<text :class="['action-count', { liked: comment.liked }]">{{ comment.likes }}</text>
					</view>
					<view class="action" @click="shareComment(index)">
						<image class="icon" src="/static/share.png" />
						<text class="action-count">{{ comment.shares }}</text>
					</view>
					<view class="action">
						<image class="icon" src="/static/comments.png" />
						<text class="action-count">{{ comment.comments }}</text>
					</view>
				</view>
			</view>
		</view>
		
	<!-- 底部导航栏 -->
	<view class="footer">
		<view class="bottom-icon" @click="gotoPath('../home/home')">
			<image src="/static/shouye.png"></image>
			<text>首页</text>
		</view>
		<view class="bottom-icon" @click="gotoPath('../goods_cate/goods_cate')">
			<image src="/static/fenlei.png"></image>
			<text>分类</text>
		</view>
		<image class="main-icon" src="/static/kecheng.png" @click="gotoPath('../zhuye/zhuye')"></image>
		<view class="bottom-icon" >
			<image src="/static/faxian_xuanz.png"></image>
			<text>发现</text>
		</view>
		<view class="bottom-icon" @click="gotoPath('../my/my')">
			<image src="/static/wode.png"></image>
			<text>我的</text>
		</view>
	</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 'hot',
				comments: [{
						avatar: '/static/avatar1.png',
						userName: '用户1',
						timestamp: '2024-09-07 10:00',
						content: '这是评论内容1',
						likes: 0,
						shares: 0,
						comments: 10,
						liked: false
					},
					{
							avatar: '/static/avatar1.png',
							userName: '用户1',
							timestamp: '2024-09-07 10:00',
							content: '这是评论内容1',
							likes: 0,
							shares: 0,
							comments: 10,
							liked: false
						},
					// 其他评论数据
				]
			};
		},
		computed: {
			filteredComments() {
				// 根据当前选中的标签过滤评论
				// 实际应用中可能需要根据 `currentTab` 过滤不同的数据
				return this.comments;
			}
		},
		methods: {
			gotoPath(path){
				console.log(path);
				uni.redirectTo({
					url:path
				})
			},
			setTab(tab) {
				this.currentTab = tab;
			},
			likeComment(index) {
				const comment = this.comments[index];
				if (!comment.liked) {
					comment.likes += 1;
					comment.liked = true;
				} else {
					comment.likes -= 1;
					comment.liked = false;
				}
			},
			shareComment(index) {
				this.comments[index].shares += 1;
			}
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #ddd;
	}

	.tabs {
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		padding: 10px;
		border-bottom: 1px solid #ddd;
	}

	.tab {
		flex: 1;
		text-align: center;
		padding: 10px;
		font-size: 16px;
		color: #333;
	}

	.tab.active {
		font-size: 20px;
		color: #007aff;
	}

	.comments-list {
		background-color: #fff;
	}

	.comment-item {
		border-bottom: 1px solid #ddd;
		padding: 10px;
	}

	.comment-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		margin-left: 10px;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.comment-info {
	    margin-left: 30px;
	    display: flex;
	    flex-direction: column; /* 垂直排列子元素 */
	    align-items: flex-start; /* 可选：确保子元素在左侧对齐 */
	}
	
	.user-name {
	    font-weight: bold;
	}
	
	.timestamp {
	    font-size: 12px;
	    color: #666;
		margin-top: 10px;
	}

	.comment-content {
		margin: 10px 0;
		margin-left: 30px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.comment-actions {
		display: flex;
		align-items: center;
	}

	.action {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
	}

	.icon {
		width: 20px;
		height: 20px;
	}

	.action-count {
		margin-left: 5px;
		font-size: 14px;
	}

	.liked {
		color: #007aff;
	}
	
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 94%;
		bottom: 0px;
		padding: 10px;
		background-color: #FFFFFF;
		margin-top: 40px;
		z-index: 1;
		position: fixed;
	}
	
	.bottom-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	
	.bottom-icon image {
		width: 30px;
		height: 30px;
	}
	
	.main-icon {
		width: 60px;
		height: 60px;
		margin: 0 10px;
	}
</style>