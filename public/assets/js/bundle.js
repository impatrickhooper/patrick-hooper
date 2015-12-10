"use strict";function tweenLogoLettersComplete(){$logoLetters.addClass("collapsed").removeAttr("style")}function cycle(){$heroTaglines.eq(heroTaglineNum).fadeIn(1e3).delay(1e3).fadeOut(1e3,cycle),heroTaglineNum=++heroTaglineNum%$heroTaglines.length}var $page=$(".page"),$header=$("header"),$mainNav=$(".main-nav"),$logoLetters=$(".logo-letter.animate"),$mainNavAbout=$(".main-nav .nav-about"),$mainNavPortfolio=$(".main-nav .nav-portfolio"),$lastActiveSection=null,$heroAnimation=$(".home-hero-section .hero-animation"),$heroArrow=$(".home-hero-section .arrow"),$heroTaglines=$(".home-hero-section .tagline"),heroTaglineNum=0,$heroCTA=$(".home-hero-section .cta"),$aboutSection=$(".home-about-section"),$portfolioSection=$(".home-portfolio-section"),$footer=$("footer"),$portfolioPage=$(".portfolio-page"),tweenLogoLetters=TweenMax.to($logoLetters,.6,{delay:.6,width:0,opacity:0,onComplete:tweenLogoLettersComplete}),fadeHeroDiv=TweenMax.to($heroAnimation,1,{opacity:0,top:"75%"}),fadeHeroArrow=TweenMax.to($heroArrow,.3,{borderLeftWidth:320,borderRightWidth:320,borderTopWidth:0,bottom:0,marginLeft:-320}),scrollMagicController=new ScrollMagic.Controller,heroScene=new ScrollMagic.Scene({triggerElement:".home-hero-section",triggerHook:"onLeave",duration:"100%"}).setTween(fadeHeroDiv),heroArrowScene=new ScrollMagic.Scene({triggerElement:".home-hero-section",triggerHook:"onLeave",duration:"75%"}).setTween(fadeHeroArrow);if($page.hasClass("default-page"))var aboutWaypoint=$aboutSection.waypoint(function(e){"down"===e?($page.addClass("scrolling"),$mainNavAbout.addClass("active"),$mainNavPortfolio.removeClass("active"),$lastActiveSection=$mainNavAbout):($page.removeClass("scrolling"),$mainNavAbout.removeClass("active"),$mainNavPortfolio.removeClass("active"),$lastActiveSection=null)},{offset:function(){return Modernizr.mq("(min-width: 46.0625rem)")?$header.height():$mainNav.height()+1}}),portfolioWaypoint=$portfolioSection.waypoint(function(e){"down"===e?($mainNavAbout.removeClass("active"),$mainNavPortfolio.addClass("active"),$lastActiveSection=$mainNavPortfolio):($mainNavAbout.addClass("active"),$mainNavPortfolio.removeClass("active"),$lastActiveSection=$mainNavAbout)},{offset:function(){return Modernizr.mq("(min-width: 46.0625rem)")?$header.height():$mainNav.height()+1}}),footerWaypoint=$footer.waypoint(function(e){"down"===e?($mainNavAbout.removeClass("active"),$mainNavPortfolio.addClass("active")):($mainNavAbout.removeClass("active"),$mainNavPortfolio.removeClass("active"),$lastActiveSection.addClass("active"))},{offset:"100%"});else var projectWaypoint=$portfolioPage.waypoint(function(e){"down"===e?$page.addClass("scrolling"):$page.removeClass("scrolling")},{offset:-1*parseFloat($portfolioPage.find(".title").css("margin-top"))});scrollMagicController.scrollTo(function(e){TweenMax.to(window,.5,{scrollTo:{y:e}})}),$(document).on("click",'a[href^="#"]',function(e){var o=$(this).attr("href");$(o).length>0&&(e.preventDefault(),scrollMagicController.scrollTo(o),window.history&&window.history.pushState&&history.pushState("",document.title,o))}),$("img.lazy").unveil(568),$page.hasClass("default-page")&&(Modernizr.mq("(min-width: 46.0625rem)")&&($heroTaglines.hide(),setTimeout(cycle,500),setTimeout(function(){$heroCTA.animate({opacity:1},3e3)},5e3),scrollMagicController.addScene([heroScene,heroArrowScene])),$(".kwicks-vertical").kwicks({behavior:"menu",duration:300,maxSize:"85%",isVertical:!0,selectOnClick:!1,spacing:0}));
//# sourceMappingURL=bundle.js.map
