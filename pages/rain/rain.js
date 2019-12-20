// miniprogram/pages/rain/rain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  turntostart: function () {
    wx.navigateTo({
      url: "../start/start"
    })
  },
  turntocountry: function () {
    wx.navigateTo({
      url: "../index2/index2"
    })
  }
})