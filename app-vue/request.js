// 创建全局配置对象
const globalConfig = {
	baseUrl: 'http://192.168.31.168:8082/',
};
const request = async (url, method = 'GET', data = null, headers = {"content-type":"application/json"}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: globalConfig.baseUrl + url,
			method,
			data,
			header: headers,
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
			},
		});
	});
};
uni.$request=request;
uni.$BaseUrl='http://192.168.31.168:8082/'
export default request;
