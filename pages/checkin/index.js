const { checkin } = require('../../utils/mock')

Page({
  data: {
    ...checkin,
    ticks: Array.from({ length: 11 }, (_, index) => index)
  },
  decreaseWeight() {
    const next = Math.max(30, Number((this.data.weight - 0.1).toFixed(1)))
    this.setData({ weight: next })
  },
  increaseWeight() {
    const next = Number((this.data.weight + 0.1).toFixed(1))
    this.setData({ weight: next })
  },
  submitCheckIn() {
    wx.showToast({ title: '确认打卡成功', icon: 'success' })
  }
})
