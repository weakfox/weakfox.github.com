angular.module('templates-jade_app', ['home/home.html']);

angular.module("home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.html",
    "<h1>XRP Value</h1><div ng-repeat=\"(name,book) in prices\" class=\"row\"><div class=\"name col-xs-12\">{{name}}</div><div class=\"col-xs-12 col-sm-6\"><div class=\"value\"><div ng-show=\"book.asks\"><span id=\"asks\">{{book.asks}} XRP</span> can get you<span id=\"asks\"> $1</span><br/><span id=\"asks\">1 XRP</span> can get you<span id=\"asks\"> {{1/book.asks | number:4}} USD</span></div><div ng-hide=\"book.asks\">Loading...</div></div></div><div class=\"col-xs-12 col-sm-6\"><div class=\"value\"><div ng-show=\"book.bids\"><span id=\"bids\">$1</span> can get you<span id=\"bids\"> {{book.bids}} XRP</span><br/><span id=\"asks\">{{1/book.bids | number:4}} USD</span> can get you<span id=\"bids\"> 1 XRP.</span></div><div ng-hide=\"book.bids\">Loading...</div></div></div></div><div ng-hide=\"loaded\" class=\"row\"><div class=\"value\">Loading...</div></div>");
}]);
