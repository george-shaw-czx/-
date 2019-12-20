Page({
  data:{
    groupStanding:4,
    disabled: false,
    },
setDisabled: function (e) {
  this.setData({
    disabled: !this.data.disabled
    })
  },
Harry:function ()
{
this.setData({
  groupStanding:this.data.groupStanding-1
})
},
turnToCity:function(){
  console.log("1")
  wx.navigateTo({
    url: "../choice/choice"
  })
}

})