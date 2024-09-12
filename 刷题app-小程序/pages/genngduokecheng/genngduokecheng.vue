<template>
	<view class="container">
		<!-- 第一行内容 -->
		<view class="header">
			<text>共计课程: {{ totalCourses }}</text>
			<view class="dropdown">
				<view class="dropdown-toggle" :class="{ active: dropdownVisible }" @click="toggleDropdown">
					{{ selectedClass }}
					<image class="arrow" :src="dropdownVisible ? '/static/arrow-up.png' : '/static/arrow-down.png'" />
				</view>
				<!-- 选择 -->
				<view v-if="dropdownVisible" class="dropdown-menu">
					<view v-for="option in classOptions" :key="option.value" class="dropdown-item"
						:class="{ selected: selectedClass === option.text }" @click="selectClass(option)">
						<text v-if="!option.flag">{{ option.text }}</text>
						<text v-if="option.flag" style="color: #57C69C;">{{ option.text }}</text>
						<image v-if="selectedClass === option.text" src="/static/checkmark.png" />
					</view>
				</view>
			</view>
			<view class="filter-toggle" :class="{ active: filterVisible }" @click="toggleFilter">
				筛选
				<image class="arrow" :src="filterVisible ? '/static/arrow-up.png' : '/static/arrow-down.png'" />
			</view>
		</view>

		<!-- 筛选内容 -->
		<view v-if="filterVisible" class="filter-content">
			<text class="filter-title">科目</text>
			<view class="filter-buttons">
				<view v-for="subject in subjects" :key="subject" class="filter-button"
					:class="{ selected: selectedSubjects.includes(subject) }" @click="toggleSubject(subject)">
					<text>{{ subject }}</text>
				</view>
			</view>
			<view class="filter-actions">
				<button @click="applyFilter" style="background-color: #57C69C;">确定</button>
				<button @click="resetFilter">重置</button>
			</view>
		</view>

		<!-- 页面内内容 -->
		<view class="content">
			<text>当前筛选: {{ selectedClass }} | {{ selectedSubjects.join(', ') }}</text>
			<!-- 这里根据实际需要渲染内容 -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalCourses: 10,
				dropdownVisible: false,
				filterVisible: false,
				selectedClass: '全部班级',
				classOptions: [{
						text: '班级A',
						value: 'A',
						flag: false,
					},
					{
						text: '班级B',
						value: 'B',
						flag: false,
					},
					{
						text: '班级C',
						value: 'C',
						flag: false,
					}
				],
				subjects: ['语文', '数学', '英语', '物理', '化学'],
				selectedSubjects: []
			};
		},
		methods: {
			toggleDropdown() {
				this.dropdownVisible = !this.dropdownVisible;
			},
			selectClass(selectedClass) {

				for (var obj of this.classOptions) {
					obj.flag = false
				}
				this.selectedClass = selectedClass.text;
				selectedClass.flag = true
				this.dropdownVisible = false;
				// 更新页面内容
			},
			toggleFilter() {
				this.filterVisible = !this.filterVisible;
			},
			toggleSubject(subject) {
				if (this.selectedSubjects.includes(subject)) {
					this.selectedSubjects = this.selectedSubjects.filter(sub => sub !== subject);
				} else {
					this.selectedSubjects.push(subject);
				}
			},
			applyFilter() {
				this.filterVisible = false;
				// 更新页面内容
			},
			resetFilter() {
				this.selectedSubjects = [];
			}
		}
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;

	}

	.content {
		background-color: #57C69C;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #ddd;
		height: 50px;
	}

	.dropdown,
	.filter-toggle {
		display: flex;
		align-items: center;
		cursor: pointer;

	}

	.dropdown-toggle.active {
		color: #57C69C;
		/* 你想要的背景颜色 */
	}


	.arrow {
		width: 10px;
		height: 10px;
		margin-left: 5px;
	}

	.dropdown-menu {
		width: 100%;
		height: 571px;
		top: 52px;
		position: absolute;
		right: 0px;
		background-color: #d0d0d0;
	}

	.filter-content {
		position: absolute;
		background: #fff;
		border-bottom: 1px solid #ddd;
		border-radius: 4px;
		width: 300px;
		height: 569px;
		top: 52px;
		left: 73px;
		border: 1px solid #ddd;
	}

	.filter-title {
		position: relative;
		font-size: 20px;
		top: 10px;
		left: 20px;
	}


	.dropdown-item {
		padding: 10px;
		cursor: pointer;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}

	.dropdown-item.selected {
		color: #000000;
	}

	.dropdown-item>image {
		width: 18px;
		height: 18px;
		left: 280px;
	}

	.filter-buttons {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		margin-left: 15px;
	}

	.filter-button {
		padding: 10px;
		margin: 5px;
		border: 1px solid #ddd;
		border-radius: 4px;
		cursor: pointer;
	}

	.filter-button.selected {
		background-color: #57C69C;
		color: #fff;
	}

	.filter-actions {
		display: flex;
		justify-content: space-between;
		/* 在两按钮之间留出空间 */
		position: absolute;
		/* 使其固定在底部 */
		bottom: 0;
		/* 定位到底部 */
		left: 0;
		right: 0;

	}

	.filter-actions button {
		flex: 1;
		/* 按钮占据50%的宽度 */
		/* 可选的额外样式 */
		padding: 10px;
		border-radius: 4px;
	}
</style>