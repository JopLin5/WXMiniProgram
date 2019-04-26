// pages/pagetext/pagetext.js
Page({
  data: {
    pageone: [{
      name: 'pages1',
      text: 'pages1',
      checked: false
    }],
    pagetwo: [{
      name: 'pages2',
      text: 'pages2',
      checked: false
    }],
    pagethree: [{
      name: 'pages3',
      text: 'pages3',
      checked: false
    }],
  },
  // 获取value的值
  radioChange1: function (e) {
    let pages1 = e.detail.value;
    this.setData({
      seleted: "选中的value：" + pages1
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindtap1: function (e) {
    var newpage = this.data.pageone; /*获取brand数组*/
    newpage[0].checked = !(newpage[0].checked);
    this.setData({
      pageone: newpage
    });
    console.log('newpage', newpage)
  },

  radioChange2: function (e) {
    let pages2 = e.detail.value;
    this.setData({
      seleted: "选中的value：" + pages2
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindtap2: function (e) {
    var newpage = this.data.pagetwo; /*获取brand数组*/
    newpage[0].checked = !(newpage[0].checked);
    this.setData({
      pagetwo: newpage
    });
    console.log('newpage', newpage)
  },

  radioChange3: function (e) {
    let pages3 = e.detail.value;
    this.setData({
      seleted: "选中的value：" + pages3
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindtap3: function (e) {
    var newpage = this.data.pagethree; /*获取brand数组*/
    newpage[0].checked = !(newpage[0].checked);
    this.setData({
      pagethree: newpage
    });
    console.log('newpage', newpage)
  },
})