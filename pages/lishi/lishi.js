var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmp: 0,
    tianqi: 0,
    pm25: 0,
    location: "北京",
    wind1: 0,
    tmp1: 0,
    tianqi1: 0,
    pm251: 0,
    wind1: 0,
    tmp2: 0,
    tianqi2: 0,
    pm252: 0,
    wind2: 0,
    tmp3: 0,
    tianqi3: 0,
    pm253: 0,
    wind3: 0,
    tmp4: 0,
    tianqi4: 0,
    pm254: 0,
    wind4: 0,
    tmp5: 0,
    tianqi5: 0,
    pm255: 0,
    wind5: 0,
    num: 0
  },
  /*  input1: function (e) {
      var value1 = e.detail.value
      this.setData({
        location: value1
      })
    }, */
  onLoad: function () {
  },
  onShow: function () {//这里用成生命周期函数了//
    
    this.setData({
      num: app.globalData.slider
    });
    var hh = this.data.num-1;
    var theBaiDuAPPkey = "DtVoy4gGYALsgAwZFewZlEWm6ZpGSACx";
    var location = this.data.location
    //调用百度天气API
    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + location + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /* var str = res.data.results[0].weather_data[0].date;
           var tmp1 = str.match(/实时.+/);
           var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
           var tmp = +tmp2;*/
          this.setData({
            tmp: res.data.results[0].weather_data[hh].temperature,
            tianqi: res.data.results[0].weather_data[0].weather,
            pm25: res.data.results[0].pm25,
            wind: res.data.results[0].weather_data[0].wind

          });

        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })

    //这里是通过把代码重新写一遍执行了多次，可以看一下有没有什么循环结构可以多次执行的//


    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + "敦煌" + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /*var str = res.data.results[0].weather_data[0].date;
          var tmp1 = str.match(/实时.+/);
          var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
          var tmp = +tmp2;*/
          this.setData({
            tmp1: res.data.results[0].weather_data[hh].temperature,
            tianqi1: res.data.results[0].weather_data[0].weather,
            pm251: res.data.results[0].pm25,
            wind1: res.data.results[0].weather_data[0].wind

          });

        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + "南京" + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /*var str = res.data.results[0].weather_data[0].date;
           var tmp1 = str.match(/实时.+/);
           var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
           var tmp = +tmp2;*/
          this.setData({
            tmp2: res.data.results[0].weather_data[hh].temperature,
            tianqi2: res.data.results[0].weather_data[0].weather,
            pm252: res.data.results[0].pm25,
            wind2: res.data.results[0].weather_data[0].wind

          });

        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })

    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + "苏州" + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /* var str = res.data.results[0].weather_data[0].date;
           var tmp1 = str.match(/实时.+/);
           var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
           var tmp = +tmp2;*/
          this.setData({
            tmp3: res.data.results[0].weather_data[hh].temperature,
            tianqi3: res.data.results[0].weather_data[0].weather,
            pm253: res.data.results[0].pm25,
            wind3: res.data.results[0].weather_data[0].wind

          });
        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + "武汉" + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /*  var str = res.data.results[0].weather_data[0].date;
            var tmp1 = str.match(/实时.+/);
            var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
            var tmp = +tmp2;*/
          this.setData({
            tmp4: res.data.results[0].weather_data[hh].temperature,
            tianqi4: res.data.results[0].weather_data[0].weather,
            pm254: res.data.results[0].pm25,
            wind4: res.data.results[0].weather_data[0].wind

          });

        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
    wx.request({

      url: 'https://api.map.baidu.com/telematics/v3/weather?location=' + "井冈山" + '&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)

        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          /*  var str = res.data.results[0].weather_data[0].date;
            var tmp1 = str.match(/实时.+/);
            var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
            var tmp = +tmp2;*/
          this.setData({
            tmp5: res.data.results[0].weather_data[hh].temperature,
            tianqi5: res.data.results[0].weather_data[0].weather,
            pm255: res.data.results[0].pm25,
            wind5: res.data.results[0].weather_data[0].wind

          });

        } catch (e) {
          throw new Error(e)
        }
      },
      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },
A:function()
{
  wx.navigateTo({
    url: '../longmen/longmen'
  })
},
B: function () {
    wx.navigateTo({
      url: '../mogaoku/mogaoku'
    })
  },
  C: function () {
    wx.navigateTo({
      url: '../nanjing/nanjing'
    })
  },
  D: function () {
    wx.navigateTo({
      url: '../suzhougucheng/suzhougucheng'
    })
  },
  E: function () {
    wx.navigateTo({
      url: '../huanghelou/huanghelou'
    })
  },
  F: function () {
    wx.navigateTo({
      url: '../jinggangshan/jinggangshan'
    })
  }
})