const { pk } = require('../../utils/mock')

Page({
  data: pk,
  goCheckIn() {
    wx.switchTab({ url: '/pages/checkin/index' })
  }
})
