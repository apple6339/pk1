const { pk } = require('../../utils/mock')

Page({
  data: pk,
  goCheckIn() {
    wx.navigateTo({ url: '/pages/checkin/index' })
  }
})
