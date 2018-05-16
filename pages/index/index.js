Page({
  //初始化数据
  data: {
    array: ['商品A', '商品B', '商品C', '商品D'],
  },
  //地区选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //支付按钮
  openToast: function () {
    wx.showToast({
      title: '付款成功',
      icon: 'success',
      duration: 3000
    });
  }
});