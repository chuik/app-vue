<template>
	<view class="container">
		<!-- Top Image with Icon -->
		<view class="top-section">
			<image class="top-image" :src="topImage" />
			<image class="top-icon" :src="topIcon" />
		</view>

		<!-- Tabs for Switching Content -->
		<view class="tabs">
			<text :class="['tab', { active: activeTab === '套餐' }]" @click="changeTab('套餐')">
				套餐
			</text>
			<text :class="['tab', { active: activeTab === '介绍' }]" @click="changeTab('介绍')">
				介绍
			</text>
			<view class="underline" :style="{ left: underlineLeft + 'px' }"></view>
		</view>

		<!-- Content Area -->
		<view v-if="activeTab === '套餐'" class="content">
			<!-- First Section -->
			<view class="section">
				<text class="section-title">套餐标题{{}}</text>
				<view class="tags">
					<text class="tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</text>
				</view>
				<view class="price-info">
					<view style="margin-left: 20px;">
						<text class="price-label">折后</text>
						<text class="price">¥99</text>
						<text class="price-original">¥80</text>
					</view>
					<text class="validity">有效期：30天</text>
				</view>
			</view>

			<view class="section">
				<text class="title">类型</text>
				<view class="label-container">
					<view class="label" v-for="(label, index) in labels" :key="label" :class="{ 'selected': label.cha }"
						@click="toggleLabel(label.id)">
						{{ label.title }}
					</view>
				</view>
			</view>



			<view class="section">
				<text class="section-title">科目</text>
				<view class="subject-tags">
					<view v-for="(subject, index) in subjects" :key="index"
						:class="['subject-tag', { selected: selectedSubjects.includes(subject) }]"
						@click="toggleSubject(subject)">
						{{ subject }}
					</view>
				</view>
			</view>
		</view>

		<view v-else class="content">
			<!-- Content for Explanation Tab -->
			<view class="section">
				<text class="section-title">解释标题</text>
				<text class="section-detail">解释详细内容</text>
			</view>
		</view>

		<!-- Bottom Section -->
		<view class="bottom-section">
			<view class="bottom-left">
				<image class="bottom-icon" :src="bottomIcon" />
				<text class="bottom-text">咨询</text>
			</view>
			<view class="bottom-right">
				<view class="btn-left" @click="clickTrial">点击试用</view>
				<view class="btn-redis" @click="buyNow">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topImage: 'https://via.placeholder.com/750x300',
				topIcon: 'https://via.placeholder.com/50',
				bottomIcon: 'https://via.placeholder.com/50',
				activeTab: '套餐',
				underlineLeft: 0,
				tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
				subjects: ['科目1', '科目2', '科目3', '科目4', '科目5', '科目6'],
				labels: [{
					"title": "bq1",
					"cha": 1,
					"id": "1"
				}, {
					"title": "bq1",
					"cha": 0,
					"id": "a"
				}],
				selectedLabels: [0],
				selectedSubjects: [],
			};
		},
		methods: {
			changeTab(tab) {
				this.activeTab = tab;
				this.underlineLeft = tab === '套餐' ? 0 : 190; // Adjust according to your layout
			},

			toggleSubject(subject) {
				const index = this.selectedSubjects.indexOf(subject);
				if (index === -1) {
					this.selectedSubjects.push(subject);
				} else {
					this.selectedSubjects.splice(index, 1);
				}
			},
			toggleLabel(index) {
				uni.$request("", index).then(res => {


					this.labels = res.data.data
				})



				const selected = this.selectedLabels.includes(index);
				if (selected) {
					this.selectedLabels = this.selectedLabels.filter(i => i !== index);
				} else {

				}
			},
			clickTrial() {
				console.log('Clicked Try Now');
			},
			buyNow() {
				console.log('Clicked Buy Now');
			},
		},
	};
</script>

<style scoped>
	.container {}

	.top-section {
		position: relative;
	}

	.top-image {
		width: 100%;
		height: 200px;
	}

	.top-icon {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.tabs {
		display: flex;
		position: relative;
		justify-content: space-around;
		/* Changed to space-around */
		margin-top: 10px;
	}

	.tab {
		font-size: 16px;
		color: #666;
		cursor: pointer;
		padding: 10px;
		flex: 1;
		text-align: center;
	}

	.tab.active {
		color: #007aff;
	}

	.underline {
		position: absolute;
		bottom: 0;
		margin-left: 55px;
		height: 2px;
		background-color: #007aff;
		transition: left 0.3s;
		width: 20%;
		/* Adjust the width as needed */
	}

	.content {
		margin-top: 20px;
	}

	.section {
		margin-bottom: 20px;
	}

	.section-title {
		font-size: 18px;
		font-weight: bold;
		margin-left: 20px;
	}

	.title {
		font-weight: bold;
		margin-left: 20px;
		font-size: 18px;
	}

	.tag-container,
	.label-container,
	.subject-container {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
		margin-left: 20px;
	}

	.tag,
	.label,
	.subject {
		padding: 5px 10px;
		border-radius: 10px;
		background: grey;
		color: white;
		cursor: pointer;
	}

	.label.selected,
	.subject.selected {
		background: blue;
	}

	.tags {
		margin: 10px 20px;
		display: flex;
		/* 指定为弹性盒模型 */
		justify-content: space-between;
		/* 使子元素在主轴两端对齐 */
		margin-top: 30px;
	}

	.tag {
		display: inline-block;
		margin-right: 5px;
		background-color: #f0f0f0;

	}

	.price-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 使子元素在主轴两端对齐 */
		margin-top: 20px;
	}

	.price-label {
		font-size: 16px;
		color: red;
	}

	.price {
		font-size: 25px;
		color: #ff4d4f;
		margin: 0 5px;
	}
	.price-original{
		text-decoration: line-through;
		color: #999;
		margin-left: 10px;
	}

	.validity {
		font-size: 14px;
		color: #999;
		margin-right: 20px;
	}

	.subject-tags {
		display: flex;
		flex-wrap: wrap;
		margin-left: 20px;
		margin-top: 20px;
	}

	.subject-tag {
		padding: 5px 10px;
		margin: 5px;
		background-color: #f0f0f0;
		border-radius: 5px;
		cursor: pointer;
	}

	.subject-tag.selected {
		background-color: #007aff;
		color: #fff;
	}

	.bottom-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 38px;
		border-top: 1px solid #F0F0F0;
	}

	.bottom-left {
		display: flex;
		flex-direction: column;
		/* 垂直排列 */
		align-items: center;
		margin-left: 20px;
		/* 水平居中对齐 */
	}

	.bottom-icon {
		width: 30px;
		height: 30px;
		margin-bottom: 5px;
		/* 图标和文字之间的间距 */
	}

	.bottom-text {
		font-size: 14px;
	}

	.bottom-right {
		display: flex;
		justify-content: space-between;
	}

	.btn-left {
		background-color: #FFC138;
		color: #fff;
		border: none;
		/* cursor: pointer; */
		height: 55px;
		width: 150px;
		text-align: center;
		line-height: 55px;
	}

	.btn-redis {
		background-color: #FEA901;
		color: #fff;
		border: none;
		cursor: pointer;
		height: 55px;
		width: 150px;
		text-align: center;
		line-height: 55px;
	}
</style>