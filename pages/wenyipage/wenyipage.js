// miniprogram/pages/yundongpage/yundongpage.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupstanding: "",
  },

  onShow: function () {
    this.setData({
    groupstanding:app.globalData.pagenum
    })
  },

 
})