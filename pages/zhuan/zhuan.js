var app = getApp();
Page({

  data: {
    checkbox: "",
    checkbox1:"",
    checkbox2: "",
    checkbox3: "",
    checkbox4: "",
    weather:""
  },
  onShow: function () {
    this.setData({
      checkbox : app.globalData.checkbox,
      checkbox1: app.globalData.checkbox1,
      checkbox2: app.globalData.checkbox2,
      checkbox3: app.globalData.checkbox3,
      checkbox4: app.globalData.checkbox4,
      weather:app.globalData.weather
    });
    console.log(this.data.checkbox, this.data.checkbox1, this.data.checkbox2, this.data.checkbox3, this.data.checkbox4)
  },
   A:function(){
  console.log(this.data.checkbox)
     wx.navigateTo({
       url: '../inthecity/inthecity'
     })
     app.globalData.pagenum="1"
     console.log(app.globalData.pagenum)
  },
  B: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "2"
  },
  C: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "3"
  }, 
  D: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "4"
  }, 
  E: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "5"
  },
   F: function () {
    console.log(this.data.checkbox)
     wx.navigateTo({
       url: '../inthecity/inthecity'
     })
     app.globalData.pagenum = "6"
  },
   G: function () {
    console.log(this.data.checkbox)
     wx.navigateTo({
       url: '../inthecity/inthecity'
     })
     app.globalData.pagenum = "7"
  },
   H: function () {
    console.log(this.data.checkbox)
     wx.navigateTo({
       url: '../inthecity/inthecity'
     })
    app.globalData.pagenum = "8"
  }, 
  I: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "9"
  },
  J: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "10"
  },
   K: function () {
    console.log(this.data.checkbox)
     wx.navigateTo({
       url: '../inthecity/inthecity'
     })
     app.globalData.pagenum = "11"
  },
  L: function () {
    console.log(this.data.checkbox)
    wx.navigateTo({
      url: '../inthecity/inthecity'
    })
    app.globalData.pagenum = "12"
  },
})