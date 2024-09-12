<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-bar">
			<image class="search-icon" src="/static/search-icon.png"></image>
			<input @input="onInputChange" v-model="searchQuery" class="search-input" placeholder="搜索考试科目" />
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

				<view v-for="(item, index) in filteredList" :key="index" class="content-row">

					<view class="content-button" @click="gotoTiku(item.id)">
						<view>{{ item.name }}</view>
					</view>
				</view>

				<!-- <view class="placeholder">请选择一个分类</view> -->
			</view>
		</view>

		<!-- 底部导航栏 -->
		<view class="footer">
			<view class="bottom-icon" @click="gotoPath('../home/home')">
				<image src="/static/shouye.png"></image>
				<text>首页</text>
			</view>
			<view class="bottom-icon">
				<image src="/static/fenlei_xuanz.png"></image>
				<text>分类</text>
			</view>
			<image class="main-icon" src="/static/kecheng.png" @click="gotoPath('../zhuye/zhuye')"></image>
			<view class="bottom-icon" @click="gotoPath('../faxian/faxian')">
				<image src="/static/faxian.png"></image>
				<text>发现</text>
			</view>
			<view class="bottom-icon" @click="gotoPath('../my/my')">
				<image src="/static/我的.png"></image>
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
				filteredList: [],
				categories: [],
				tmpList:[],
			};
		},
		computed: {
			filteredItems() {
				if (!this.selectedCategory) return [];
				const filtered = this.filteredList.items.filter(item =>
					item.buttons.some(button => button.includes(this.searchQuery))
				);
				return filtered;
			}
		},
		mounted() {
			this.init()
		},
		
		methods: {
			gotoTiku(id){
				uni.navigateTo({
					url:"../tiku/tiku?class="+id
				})
			},
			onInputChange() {
				// 当输入框内容变化时触发的搜索方法
				this.performSearch();
			},
			performSearch() {
				if (this.tmpList) {
					const filtered = this.tmpList.filter(item =>
						item.name.includes(this.searchQuery)
					);
					if(filtered == undefined){
						this.filteredList=this.tmpList
						return
					}else{
						this.filteredList = filtered;
					}
					
				
				}
			},
			init() {
				uni.$request("classify/list", "get", null, {
					"token": uni.getStorageSync("token")
				}).then(res => {
					res = res.data
					if (res.code == 200) {
						this.categories = res.data
						var index = this.categories[0]
						this.selectCategory(index)

						this.refuseList(index.id)


					}

				})
			},

			refuseList(id) {
				uni.$request("classify/examination/list/" + id, "get", null, {
					"token": uni.getStorageSync("token")
				}).then(res => {
					console.log(res.data);
					this.filteredList = res.data.data
					this.tmpList=res.data.data
				})
			},

			gotoPath(path) {
				console.log(path);
				uni.redirectTo({
					url: path
				})
			},
			selectCategory(category) {
				this.selectedCategory = category;
				this.refuseList(category.id)




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
		position: fixed;
		width: 100%;
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
		margin-top: 55px;
		display: flex;
		flex: 1;
	}

	.categories {
		position: fixed;
		width: 27%;
		background-color: #ffff;
		padding: 10px;
		box-sizing: border-box;
		border-right: 2px solid #EDEDED;
	}

	.category-item {
		margin-bottom: 30px;
		font-size: 18px;
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
		margin-left: 30%;
		margin-bottom: 90px;
		display: flex;
		flex-wrap: wrap;
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
		text-align: center;
		word-break: break-all;
		border-radius: 5px;
		margin: 5px;
		width: 156px;
		height: 60px;
		border: 1px solid #000;
		flex: 2;
		background-color: #F5F5F5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.placeholder {
		text-align: center;
		line-height: 200px;
		color: #999;
	}
</style>