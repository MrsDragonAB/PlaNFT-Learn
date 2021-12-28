import axios from "axios";
import QS from 'qs'

const request = axios.create({
    baseURL:'https://test.planft.com',
    timeout:'5000'
})

//请求拦截
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
        if(response.status == 200)
            Promise.resolve(response)
        else
            Promise.reject(response)
    },
    error => {
        const {response} = error
        if(response){
            //判断状态码做相应操作
            if(response.status == 401 || response.status == 403){
                Message({
                    type: 'error',
                    message: response.data.message
                })
                //移除header
                winndow.localStorage.removeItem('header')
                //跳转登录页
                window.location.herf='/'
            }else if(resposne.status==404){
                Message({
                    type: 'error',
                    message: '接口不存在'
                })
            }
            return Promise.reject(error)
        }
        
    }
)

//get请求
export function get(url, params){

    return new Promise((resolve, reject) =>{
    
    axios.get(url, {
    
    params: params
    
    }).then(res => {
    
    resolve(res.data);
    
    }).catch(err =>{
    
    reject(err.data)
    
    })
    
    });
}

//post请求
    export function post(url, params) {

        return new Promise((resolve, reject) => {
        
        axios.post(url, QS.stringify(params))
        
        .then(res => {
        
        resolve(res.data);
        
        })
        
        .catch(err =>{
        
        reject(err.data)
        
        })
        
        });
        
        }
export default {
    request,
    get,
    post
}