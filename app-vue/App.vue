<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>

<style>
	/*每个页面公共css */
	
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