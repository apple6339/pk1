Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/home/index', text: 'Home', icon: '⌂' },
      { pagePath: '/pages/pk/index', text: 'Stats', icon: '▤' },
      { pagePath: '/pages/checkin/index', text: 'Check', icon: '＋' },
      { pagePath: '/pages/profile/index', text: 'Profile', icon: '◉' }
    ]
  },
  methods: {
    switchTab(event) {
      const { path, index } = event.currentTarget.dataset
      this.setData({ selected: index })
      wx.switchTab({ url: path })
    },
    syncSelected() {
      const pages = getCurrentPages()
      const current = pages[pages.length - 1]
      if (!current) {
        return
      }
      const route = `/${current.route}`
      const selected = this.data.list.findIndex((item) => item.pagePath === route)
      if (selected !== -1 && selected !== this.data.selected) {
        this.setData({ selected })
      }
    }
  },
  lifetimes: {
    attached() {
      this.syncSelected()
    }
  },
  pageLifetimes: {
    show() {
      this.syncSelected()
    }
  }
})
