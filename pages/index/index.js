const indexSwiperListReqUrl = "http://127.0.0.1:6789/api/howell/v1/cps_rebate_discounts/query"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], // 轮播图数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this; // 保存 this 的引用  
    // 1 开始发送异步请求获取轮播图数据
    console.log("[index.js] found swiper list...")
    console.log(indexSwiperListReqUrl)
    wx.request({
      url: indexSwiperListReqUrl, // 你的API地址  
      data: {
        "page_index": 1,
        "page_size": 2
      }, // 你要发送的数据  
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {  
        'content-type': 'application/json' // 默认值  
      },  // 设置请求的 header
      success: function(res) {
        if (res.data.status == 0) {
          console.log("found swiper list success, res.data=", res.data)
          self.setData({
            swiperList: res.data.data.item_list,
          }) 
        } else {
          console.error("found swiper list err")
        }
        // success
      },
      fail: function() {
        // fail
          console.error("found swiper list err")
      },
      complete: function() {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("[index.js] rendering finish...")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("[index.js] on show...")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})