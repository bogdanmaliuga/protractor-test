'use strict';

var MyReeltyPage = function() {
  browser.get('http://www.myreelty.com');
};

MyReeltyPage.prototype = Object.create({}, {
  address: {
    get: function() {
      return element(by.model('address'));
    }
  },
  typeAddress: {
    value: function(text) {
      return this.address.sendKeys(text);
    }
  },
  searchButton:{
    get:function () {
      return element(by.css('.serch_button'));
    }
  },
  searchVideo:{
    value:function () {
      this.searchButton.click();
    }
  },
  videoItem:{
    get:function () {
      return element.all(by.binding('video.city')).get(0);
    }
  },
  getVideoItem:{
    value:function () {
      return this.videoItem.getText();
    }
  }
});

module.exports = MyReeltyPage;
