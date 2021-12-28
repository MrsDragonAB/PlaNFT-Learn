import axios from "axios";
import { Promise } from "core-js";
import { Message } from "element-ui";
import QS from 'qs'



const request = axios.create({
    baseURL: 'https://test.planft.com',
    timeout:5000,
})


//请求拦截器
request.interceptors.request.use(
    config => {
        let token = JSON.parse(window.localStorage.getItem('header')).token
        //配置请求头
        token && (config.headers['X-Access-Token'] = token)
        return config
    },
    error => Promise.reject(error)
)

//响应拦截
request.interceptors.response.use(
    response => {
        if(response.status == 200){
           return Promise.resolve(response)
        }else{
           return Promise.reject(response)  
        }  
    },
    error => {
        const {response} = error
        if(response){
            //判断状态码做相应操作
            Message({
                type: 'error',
                message: response.data.message
            })
            //移除header
            window.localStorage.removeItem('header')
            //跳转登录页面
            window.location.href='/'
        }else if(response.status==404){
            Message({
                type:'error',
                message:'接口不存在'
            })
        }
        return Promise.reject(error)
    }
)



//get请求的封装
export function get(url,params){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })     
    })   
}



//post请求封装
export function post(url,params={},headers={'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}){
    return new Promise((resolve,reject) => {
        
axios.post(url, QS.stringify(params))

.then(res => {

resolve(res.data);

})

.catch(err => {

reject(err.data)

})

    })
}

export default {
    request,
    get,
    post
}