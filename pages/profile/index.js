const { profile } = require('../../utils/mock')

Page({
  data: {
    ...profile,
    chartDots: [
      { left: '0rpx', top: '96rpx' },
      { left: '58rpx', top: '48rpx' },
      { left: '116rpx', top: '66rpx' },
      { left: '174rpx', top: '78rpx' },
      { left: '232rpx', top: '62rpx' },
      { left: '290rpx', top: '70rpx' },
      { left: '348rpx', top: '88rpx' },
      { left: '406rpx', top: '126rpx' }
    ],
    chartSegments: [
      { left: '8rpx', top: '99rpx', width: '66rpx', rotate: '-39deg' },
      { left: '66rpx', top: '55rpx', width: '64rpx', rotate: '17deg' },
      { left: '124rpx', top: '69rpx', width: '60rpx', rotate: '11deg' },
      { left: '182rpx', top: '75rpx', width: '62rpx', rotate: '-15deg' },
      { left: '240rpx', top: '65rpx', width: '60rpx', rotate: '8deg' },
      { left: '298rpx', top: '74rpx', width: '62rpx', rotate: '17deg' },
      { left: '356rpx', top: '96rpx', width: '68rpx', rotate: '33deg' }
    ]
  }
})
