Page({

  data: {
    latitude: '',
    longitude: ''
  },

turntopeking:function(){
  wx.navigateTo({
    url: "../index1/index1"
  })
// },
// getlocation: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
},

turntocountry:function(){
  wx.navigateTo({
    url: "../index2/index2"
  })

}
})