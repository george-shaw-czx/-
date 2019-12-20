//index.js
// const app = getApp()
// const date = new Date()
var app = getApp();
var bmap = require('../../libs/bmap-wx.min.js');

Page({
  data: {
    // weatherData: '',
    weatherInfoExt: []
  },
  
  formSubmit: function (e) {
    console.log(e.detail.value)
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'DtVoy4gGYALsgAwZFewZlEWm6ZpGSACx'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      // var weatherData = data.currentWeather[0];
      var weatherInfoExt = data.originalData.results[0].weather_data;
      // weatherData = weatherData.weatherDesc;
      weatherInfoExt[e.detail.value.slider] = weatherInfoExt[e.detail.value.slider].weather;
      
      // console.log(weatherInfoExt[e.detail.value.slider])
      that.setData({
        // weatherData: weatherData,
        weatherInfoExt: weatherInfoExt
      });
      app.globalData.checkbox  = e.detail.value.checkbox.indexOf("checkbox1")
      app.globalData.checkbox1 = e.detail.value.checkbox.indexOf("checkbox2")
      app.globalData.checkbox2 = e.detail.value.checkbox.indexOf("checkbox3")
      app.globalData.checkbox3 = e.detail.value.checkbox.indexOf("checkbox4")
      app.globalData.checkbox4 = e.detail.value.checkbox.indexOf("checkbox5")
      app.globalData.weather = weatherInfoExt[e.detail.value.slider]
      // console.log(app.globalData.checkbox)
    if (weatherInfoExt[e.detail.value.slider] != "晴") {
      wx.navigateTo({
        url: '../rain/rain'
      })
    }
    else {
      wx.navigateTo({
        url: '../zhuan/zhuan'
      })
    }
    // else if (e.detail.value.checkbox[0] == "checkbox1")
    //   wx.navigateTo({
    //     url: '../zhuan/zhuan',
    //   })
    // else if (e.detail.value.checkbox[0] = "checkbox2")
    //   wx.redirectTo({
    //     url: '../zhuan/zhuan',
    //   })
    // else if (e.detail.value.checkbox = "checkbox3")
    //   wx.redirectTo({
    //     url: '../zhuan/zhuan',
    //   })
    // else if (e.detail.value.checkbox = "checkbox4")
    //   wx.redirectTo({
    //     url: '../zhuan/zhuan',
    //   })
    // else if (e.detail.value.checkbox = "checkbox5")
    //   wx.redirectTo({
    //     url: '../zhuan/zhuan',
    //   })
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
//     var input1 = e.detail.value
// //初始化数据库
//     var db=wx.cloud.database()
//     //向数据库添加一条记录
//     db.collection('forspark').add({
//       // data 字段表示需新增的 JSON 数据
//       data: {
//         answear:input1,
//       },
//       success: function (res) {
        // wx.navigateTo({
        //   url:"../city/city"
        // })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
  })
