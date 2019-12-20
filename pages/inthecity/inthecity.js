var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupstanding: "",
    mapUrl: "",
  },
  onLoad: function () {
    this.setData({ mapUrl: "https://vdept.bdstatic.com/6c5136667976726943344a6566756a50/386e466232775553/4be7a6ab09c379eedaac3803ba352dedc99fc2d8d0879bebcab58be9ae551cd3fffd5dd737e9b0ef60a3f6776acab247.mp4?auth_key=1576776708-0-0-9422dddf7d32a51232bf4b684a8ef757" })
  },
  onShow: function () {
    this.setData({
      groupstanding: app.globalData.pagenum
    });
    console.log(this.data.groupstanding)
  },


})