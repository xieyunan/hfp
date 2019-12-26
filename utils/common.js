import {BASE_URL} from '../config/index'
export function getWx(url,data){
    return new Promise((resolve,reject)=>{
        wx.showLoading({
            title:'加载中',
        })
        wx.request({
            url:BASE_URL+url,
            data,
            method:'get',
            success:res=>{
                resolve(res.data)
            },
            fail(e){
                reject(e)
            },
            complete(){
                wx.hideLoading()
            }
        })
    })
}