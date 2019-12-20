var app=getApp();
Page({
  data: {


  },
  formSubmit: function (e) {
    console.log(e.detail.value)

    app.globalData.slider =e.detail.value.slider
    app.globalData.checkbox = e.detail.value.checkbox

if(e.detail.value.checkbox=="checkbox1"){
wx.navigateTo({
  url:"../wenyi/wenyi"
})}
else if (e.detail.value.checkbox == "checkbox2"){
  wx.navigateTo({
    url: "../yule/yule"
  })}
else if (e.detail.value.checkbox == "checkbox3") {
  wx.navigateTo({
    url: "../lishi/lishi"
  })
}
else if (e.detail.value.checkbox == "checkbox4") {
  wx.navigateTo({
    url: "../ziran/ziran"
  })
}
},
  formReset: function () {
    console.log('form发生了reset事件')
  }

})