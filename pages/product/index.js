import {getWx} from '../../utils/common'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    currentId:1,
    productList:[],
  },
  getMenuList(){
    getWx('/product/menuList').then(res=>{
      this.setData({
        menuList:res
      })
    })
  },
  clicked(e){
    let id = e.currentTarget.dataset.id
    this.setData({
      currentId:id
    })
    this.getProductList(id)
  },
  getProductList(id){
    getWx('/product/productList/'+id).then(res=>{
      this.setData({
        productList:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMenuList()
    this.getProductList(this.data.currentId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})