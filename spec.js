'use strict';

var MyReeltyPage = require('./pages/angular.page.js');

describe('myreelty homepage', function () {
  var page;
  beforeEach(function () {
    page = new MyReeltyPage();
  });
  it('compare video result', function () {
    page.typeAddress('Los Angeles');
    page.searchVideo();
    expect(page.getVideoItem()).toEqual('Los Angeles');
  });
});
