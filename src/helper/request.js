/**
 * 使用axios进行简易封装
 * request(url,type,data)
 * 只有url是必须的，其他两个参数可以不传。
 */

import axios from 'axios';
import {Message} from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode';
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';    //它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.withCredentials = true;                              //`withCredentials` 表示跨域请求时是否需要使用凭证

export default function request(url, type = 'GET',data = {}) {
    return new Promise((resolve,reject) => {
        let option = {
            url,
            method: type
        }
        if(type.toLowerCase() === 'get') {
            option.params = data;
        }else {
            option.data = data;
        }
        axios(option).then(res => {
            if(res.data.status === 'ok') {
                resolve(res.data);
            }else {
                Message.error(res.data.msg); //使用element-ui弹出错误信息。
                reject(res.data);
            }
        }).catch(err => {
            Message.err('网络异常');
            reject({msg: '网络异常'});
        })
    })
}