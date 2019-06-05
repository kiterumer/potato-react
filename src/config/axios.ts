import axios from 'axios'
import history from './history'
const appID = "tiiKNGY78wuRYFS5L2fnrHF7"
const appSecret = "knjbV5hkLAzCEjFmy6Wj8WLa"

/* tslint:disable:no-string-literal */
const instance = axios.create({
	baseURL: 'https://gp-server.hunger-valley.com/',
	headers: {
		't-app-id': appID,
		't-app-secret': appSecret
	}
});

// Add a request interceptor  请求拦截器，添加x-token
instance.interceptors.request.use((config) => {
	// 从本地localStorage中获取x-token
	const xToken = localStorage.getItem('x-token')
	if(xToken){
		config.headers['Authorization'] = `Bearer ${xToken}`
	}
	return config;
},  (error) => {
	console.error(error)
	return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
	// Do something with response data
	// 获取响应的x-token更新本地的x-token
	if(response.headers['x-token']){
		localStorage.setItem('x-token',response.headers['x-token'])
	}
	return response;
},  (error) => {
	// 全局响应拦截，如果返回401就跳转到登录界面
    if(error.response.status === 401){
		// window.location.href = '/login'
		history.push('/login')
	}
	// Do something with response error
	return Promise.reject(error);
});

/* tslint:enable:no-string-literal */
export default instance 