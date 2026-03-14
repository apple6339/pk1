const { home } = require('../../utils/mock')

Page({
  data: home,
  createPk() {
    wx.showToast({ title: '创建新 PK', icon: 'none' })
  },
  joinPk() {
    wx.switchTab({ url: '/pages/pk/index' })
  }
})
