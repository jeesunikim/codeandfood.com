"use strict";!function(t,i,n,s){n(function(){t.onbeforeunload=function(){t.scrollTo(0,0)}})}(window,document,jQuery),function(t,i,n,s){var e,o=function(){};o.prototype.init=function(){this.isSticky=!1,this.header=n("header"),this.mainNav=this.header.find("nav.site-nav"),this.bodyContainer=n("body"),this.scrollPositionStart=0,this.defaultLH=parseInt(this.header.css("line-height")),e=this,this.bindEvents(),this.checkSticky()},o.prototype.bindEvents=function(){this.startScrolling()},o.prototype.checkSticky=function(){var t=n(i).scrollTop();e.isSticky||(this.currentLH=parseInt(e.header.css("line-height")),this.calculatedLH,e.scrollPositionStart,e.defaultLH>88&&t>e.scrollPositionStart?(this.calculatedLH=e.defaultLH-t,e.header.css("line-height",this.calculatedLH+"px"),this.currentLH<92?this.setSticky():this.setUnsticky()):(this.calculatedLH=e.defaultLH+t,e.header.css("line-height",this.calculatedLH+"px"),this.currentLH>92&&this.setUnsticky()))},o.prototype.startScrolling=function(){e.bodyContainer.on("scroll",this.onScroll),n(t).on("scroll",this.onScroll)},o.prototype.onScroll=function(){e.checkSticky()},o.prototype.setSticky=function(){e.isSticky=!0,e.mainNav.addClass("fixed")},o.prototype.setUnsticky=function(){e.isSticky=!1,e.mainNav.removeClass("fixed")},n(function(){var t=new o;t.init()})}(window,document,jQuery);var posts=$("ul.posts"),eachPost=posts.find("li");$(document).ready(function(){eachPost.each(function(t){$(this).delay(350*t).queue(function(){$(this).addClass("fadein")})})});
//# sourceMappingURL=main.js.map
