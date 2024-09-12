<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-bar">
			<image class="search-icon" src="/static/search-icon.png"></image>
			<input v-model="searchQuery" class="search-input" placeholder="搜索考试科目" />
		</view>

		<!-- 分类和内容区域 -->
		<view class="main-content">
			<!-- 分类列表 -->
			<view class="categories">
				<view v-for="(category, index) in categories" :key="index" class="category-item"
					:class="{ active: selectedCategory === category }" @click="selectCategory(category)">
					{{ category.name }}
					<view v-if="selectedCategory === category" class="underline"></view>
				</view>
			</view>

			<!-- 分类内容 -->
			<view class="content">
				<view v-if="selectedCategory">
					<view v-for="(item, index) in filteredItems" :key="index" class="content-row">
						<button v-for="(button, btnIndex) in item.buttons" :key="btnIndex" class="content-button">
							{{ button }}
						</button>
					</view>
				</view>
				<view v-else class="placeholder">请选择一个分类</view>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<view class="footer">
			<view class="bottom-icon">
				<image src="/static/shouye.png"></image>
				<text>首页</text>
			</view>
			<view class="bottom-icon">
				<image src="/static/fenlei.png"></image>
				<text>分类</text>
			</view>
			<image class="main-icon" src="/static/kecheng.png"></image>
			<view class="bottom-icon">
				<image src="/static/faxian.png"></image>
				<text>发现</text>
			</view>
			<view class="bottom-icon">
				<image src="/static/wo.png"></image>
				<text>我的</text>
			</view>
		</view>


	</view>
</template>


<script>
	export default {
		data() {
			return {
				searchQuery: '',
				selectedCategory: null,
				categories: [{
						name: '建筑工程',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					},
					{
						name: '物理',
						items: [{
							buttons: ['按钮5', '按钮6']
						}, {
							buttons: ['按钮7', '按钮8']
						}]
					}, {
						name: '数学',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					}, {
						name: '数学',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					}, {
						name: '数学',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					}, {
						name: '数学',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					}, {
						name: '数学',
						items: [{
							buttons: ['按钮1', '按钮2']
						}, {
							buttons: ['按钮3', '按钮4']
						}]
					},
					// 更多分类和内容...
				]
			};
		},
		computed: {
			filteredItems() {
				if (!this.selectedCategory) return [];
				const filtered = this.selectedCategory.items.filter(item =>
					item.buttons.some(button => button.includes(this.searchQuery))
				);
				return filtered;
			}
		},
		methods: {
			selectCategory(category) {
				this.selectedCategory = category;
			}
		}
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.search-bar {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: #ffffff;
	}

	.search-icon {
		position: absolute;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		left: 20px;
	}

	.search-input {
		flex: 1;
		padding: 5px;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding-left: 35px;
		background-color: #e7ebec;
	}

	.main-content {
		display: flex;
		flex: 1;
	}

	.categories {
		width: 27%;
		background-color: #ffff;
		padding: 10px;
		box-sizing: border-box;
		border-right: 2px solid #EDEDED;
	}

	.category-item {
		position: relative;
		padding: 10px;
		cursor: pointer;
		color: #323232;
		width: 90%;
		/* 默认字色 */
	}

	.category-item.active {
		color: #24B993;
		/* 激活时字色 */
	}

	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 90%;
		height: 3px;
		background-color: #17C194;
		/* 横杠颜色 */
	}

	.content {
		width: 70%;
		padding: 10px;
		box-sizing: border-box;
	}

	.content-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

	}

	.content-button {
		flex: 1;
		margin-right: 5px;
		background-color: #F5F5F5;
	}

	.placeholder {
		text-align: center;
		line-height: 200px;
		color: #999;
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