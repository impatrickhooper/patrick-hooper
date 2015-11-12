function tweenLettersComplete(){letters.addClass("letter-collapsed").removeAttr("style")}function cycle(){taglines.eq(i).fadeIn(1e3).delay(1e3).fadeOut(1e3,cycle),i=++i%taglines.length}!function(e){var t={init:function(t){var n={maxSize:-1,minSize:-1,spacing:5,duration:500,isVertical:!1,easing:void 0,autoResize:!0,behavior:null,delayMouseIn:0,delayMouseOut:0,selectOnClick:!0,deselectOnClick:!1,interval:2500,interactive:!0},a=e.extend(n,t);if(-1!==a.minSize&&-1!==a.maxSize)throw new Error("Kwicks options minSize and maxSize may not both be set");if(a.behavior&&"menu"!==a.behavior&&"slideshow"!==a.behavior)throw new Error("Unrecognized Kwicks behavior specified: "+a.behavior);return e.each(["minSize","maxSize","spacing"],function(e,t){var i=a[t];switch(typeof i){case"number":a[t+"Units"]="px";break;case"string":if("%"===i.slice(-1))a[t+"Units"]="%",a[t]=+i.slice(0,-1)/100;else{if("px"!==i.slice(-2))throw new Error("Invalid value for Kwicks option "+t+": "+i);a[t+"Units"]="px",a[t]=+i.slice(0,-2)}break;default:throw new Error("Invalid value for Kwicks option "+t+": "+i)}}),this.each(function(){e(this).data("kwicks",new i(this,a))})},expand:function(t,i){"object"==typeof t&&(i=t,t=void 0);var n=i&&i.delay||0;return this.each(function(){var i=e(this),a=i.data("kwicks");if(a)t="number"==typeof t?t:-1;else{if(!(a=i.parent().data("kwicks")))return;t=i.index()}var s=function(){if(t!==a.expandedIndex){var e=a.$panels,i=e[t]||null;a.$container.trigger("expand.kwicks",{index:t,expanded:i,collapsed:e.not(i).get(),oldIndex:a.expandedIndex,oldExpanded:a.getExpandedPanel(),isAnimated:a.isAnimated})}},o=a.$container.data("kwicks-timeout-id");o&&(a.$container.removeData("kwicks-timeout-id"),clearTimeout(o)),n>0?a.$container.data("kwicks-timeout-id",setTimeout(s,n)):s()})},expanded:function(){var e=this.first().data("kwicks");return e?e.expandedIndex:void 0},select:function(t){return this.each(function(){var i=e(this),n=i.data("kwicks");if(n)t="number"==typeof t?t:-1;else{if(!(n=i.parent().data("kwicks")))return;t=i.index()}if(t!==n.selectedIndex){var a=n.$panels,s=a[t]||null;n.$container.trigger("select.kwicks",{index:t,selected:s,unselected:a.not(s).get(),oldIndex:n.selectedIndex,oldSelected:n.getSelectedPanel()})}n.$container.kwicks("expand",t)})},selected:function(){var e=this.first().data("kwicks");return e?e.selectedIndex:void 0},resize:function(){return this.each(function(){var t=e(this),i=t.data("kwicks");i&&i.resize()})},destroy:function(){return this.each(function(){var t=e(this),i=t.data("kwicks");i&&i.destroy()})}};e.fn.kwicks=function(e){if(t[e])return t[e].apply(this,Array.prototype.slice.call(arguments,1));if("object"!=typeof e&&e)throw new Error("Unrecognized kwicks method: "+e);return t.init.apply(this,arguments)},e.event.special.expand={_default:function(t,i){if("kwicks"===t.namespace){var n=e(t.target).data("kwicks");n&&n.expand(i.index)}}},e.event.special.select={_default:function(t,i){if("kwicks"===t.namespace){var n=e(t.target).data("kwicks");n&&n.select(i.index)}}};var i=function(t,i){var n=this;this.opts=i,this.onDestroyHandlers=[];var a=i.isVertical?"vertical":"horizontal";this.$container=e(t),this.$panels=this.$container.children();var s=["kwicks","kwicks-"+a];e.each(s,function(e){n.$container.hasClass(e)||(n.$container.addClass(e),n.onDestroy(function(){n.$container.removeClass(e)}))}),this.selectedIndex=this.$panels.filter(".kwicks-selected").index(),this.expandedIndex=this.selectedIndex,this.primaryDimension=i.isVertical?"height":"width",this.secondaryDimension=i.isVertical?"width":"height",this.calculatePanelSizes(),this.primaryAlignment=i.isVertical?"top":"left",this.secondaryAlignment=i.isVertical?"bottom":"right",this.$timer=e({progress:0}),this.isAnimated=!1,this.offsets=this.getOffsetsForExpanded(),this.updatePanelStyles(),this.initBehavior(),this.initWindowResizeHandler(),setTimeout(function(){n.updatePanelStyles()},100)};i.prototype.calculatePanelSizes=function(){var e=this.opts,t=this.getContainerSize(!0);this.panelSpacing="%"===e.spacingUnits?t*e.spacing:e.spacing;var i=this.$panels.length,n=this.panelSpacing*(i-1),a=t-n;this.panelSize=a/i,-1===e.minSize?(this.panelMaxSize=-1===e.maxSize?5>i?2*(t/3):t/3:"%"===e.maxSizeUnits?a*e.maxSize:e.maxSize,this.panelMinSize=(a-this.panelMaxSize)/(i-1)):-1===e.maxSize&&(this.panelMinSize="%"===e.minSizeUnits?a*e.minSize:e.minSize,this.panelMaxSize=a-this.panelMinSize*(i-1))},i.prototype.getOffsetsForExpanded=function(){for(var e=this.expandedIndex,t=this.$panels.length,i=this.panelSpacing,n=this.panelSize,a=this.panelMinSize,s=this.panelMaxSize,o=[0],r=1;t>r;r++)o[r]=-1===e?r*(n+i):e>=r?r*(a+i):s+a*(r-1)+r*i;return o},i.prototype.setStyle=function(){return e.support.style?function(e,t){e.setAttribute("style",t)}:function(e,t){e.style.cssText=t}}(),i.prototype.updatePanelStyles=function(){for(var e,t,i,n,a=this.offsets,s=this.$panels,o=this.primaryDimension,r=this.primaryAlignment,l=this.secondaryAlignment,c=this.panelSpacing,d=this.getContainerSize(),h=this._stylesInited?"":"position:absolute;",p=s.length;p--;)i=e,e=Math.round(a[p]),p===s.length-1?(t=d-e,n=l+":0;"+o+":"+t+"px;"):(t=i-e-c,n=r+":"+e+"px;"+o+":"+t+"px;"),this.setStyle(s[p],h+n);this._stylesInited||(this.$container.addClass("kwicks-processed"),this._stylesInited=!0)},i.prototype.initBehavior=function(){if(this.opts.behavior)switch(this.opts.behavior){case"menu":this.initMenuBehavior();break;case"slideshow":this.initSlideshowBehavior();break;default:throw new Error("Unrecognized behavior option: "+this.opts.behavior)}},i.prototype.initMenuBehavior=function(){var t=this,i=t.opts;this.addEventHandler(this.$container,"mouseleave",function(){t.$container.kwicks("expand",-1,{delay:i.delayMouseOut})}),this.addEventHandler(this.$panels,"mouseenter",function(){e(this).kwicks("expand",{delay:i.delayMouseIn})}),(i.selectOnClick||i.deselectOnClick)&&this.addEventHandler(this.$panels,"click",function(){var t=e(this),n=t.hasClass("kwicks-selected");n&&i.deselectOnClick?t.parent().kwicks("select",-1):!n&&i.selectOnClick&&t.kwicks("select")})},i.prototype.initSlideshowBehavior=function(){var t,i=this,n=this.$panels.length,a=0,s=!1,o=function(){s||(t=setInterval(function(){i.$container.kwicks("expand",++a%n)},i.opts.interval),s=!0)},r=function(){clearInterval(t),s=!1};o(),this.onDestroy(r),this.opts.interactive&&(this.addEventHandler(this.$container,"mouseenter",r),this.addEventHandler(this.$container,"mouseleave",o),this.addEventHandler(this.$panels,"mouseenter",function(){a=e(this).kwicks("expand").index()}))},i.prototype.initWindowResizeHandler=function(){if(this.opts.autoResize){var t=this,i=0,n=!1,a=e(window),s=function(e){e||(n=!1);var a=+new Date;if(20>a-i){if(n)return;return setTimeout(s,20-(a-i)),void(n=!0)}i=a,t.resize()};this.addEventHandler(a,"resize",s)}},i.prototype.getContainerSize=function(e){var t=this._containerSize;return(e||!t)&&(t=this._containerSize=this.$container[this.primaryDimension]()),t},i.prototype.getExpandedPanel=function(){return this.$panels[this.expandedIndex]||null},i.prototype.getCollapsedPanels=function(){return-1===this.expandedIndex?[]:this.$panels.not(this.getExpandedPanel()).get()},i.prototype.getSelectedPanel=function(){return this.$panels[this.selectedIndex]||null},i.prototype.getUnselectedPanels=function(){return this.$panels.not(this.getSelectedPanel()).get()},i.prototype.onDestroy=function(e){this.onDestroyHandlers.push(e)},i.prototype.addEventHandler=function(e,t,i){e.on(t,i),this.onDestroy(function(){e.off(t,i)})},i.prototype.destroy=function(){this.$timer.stop();for(var e=0,t=this.onDestroyHandlers.length;t>e;e++)this.onDestroyHandlers[e]();this.$panels.attr("style","").removeClass("kwicks-expanded kwicks-selected kwicks-collapsed"),this.$container.removeClass("kwicks-processed").removeData("kwicks")},i.prototype.resize=function(){this.getContainerSize()!==this.getContainerSize(!0)&&(this.calculatePanelSizes(),this.offsets=this.getOffsetsForExpanded(),this.isAnimated?this._dirtyOffsets=!0:this.updatePanelStyles())},i.prototype.select=function(t){t!==this.selectedIndex&&(e(this.getSelectedPanel()).removeClass("kwicks-selected"),this.selectedIndex=t,e(this.getSelectedPanel()).addClass("kwicks-selected"))},i.prototype.expand=function(t){var i=this,n=this.expandedIndex,a=this.getExpandedPanel();if(-1===t&&(t=this.selectedIndex),t!==this.expandedIndex){e(this.getExpandedPanel()).removeClass("kwicks-expanded"),e(this.getCollapsedPanels()).removeClass("kwicks-collapsed"),this.expandedIndex=t,e(this.getExpandedPanel()).addClass("kwicks-expanded"),e(this.getCollapsedPanels()).addClass("kwicks-collapsed");var s=this.$timer,o=this.$panels.length,r=this.offsets.slice(),l=this.offsets,c=this.getOffsetsForExpanded();s.stop()[0].progress=0,this.isAnimated=!0,s.animate({progress:1},{duration:this.opts.duration,easing:this.opts.easing,step:function(e){i._dirtyOffsets&&(l=i.offsets,c=i.getOffsetsForExpanded(),i._dirtyOffsets=!1),l.length=0;for(var t=0;o>t;t++){var n=c[t],a=n-(n-r[t])*(1-e);l[t]=a}i.updatePanelStyles()},complete:function(){i.isAnimated=!1,i.$container.trigger("expand-complete.kwicks",{index:t,expanded:i.getExpandedPanel(),collapsed:i.getCollapsedPanels(),oldIndex:n,oldExpanded:a,isAnimated:!1})}})}}}(jQuery),window.Modernizr=function(e,t,i){function n(e){f.cssText=e}function a(e,t){return typeof e===t}var s,o,r,l="2.8.3",c={},d=!0,h=t.documentElement,p="modernizr",u=t.createElement(p),f=u.style,v=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),m={},w=[],y=w.slice,g=function(e,i,n,a){var s,o,r,l,c=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(n,10))for(;n--;)r=t.createElement("div"),r.id=a?a[n]:p+(n+1),c.appendChild(r);return s=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),c.id=p,(d?c:u).innerHTML+=s,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(u)),o=i(c,e),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),h.style.overflow=l),!!o},k=function(t){var i=e.matchMedia||e.msMatchMedia;if(i)return i(t)&&i(t).matches||!1;var n;return g("@media "+t+" { #"+p+" { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n},x={}.hasOwnProperty;r=a(x,"undefined")||a(x.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return x.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=y.call(arguments,1),n=function(){if(this instanceof n){var a=function(){};a.prototype=t.prototype;var s=new a,o=t.apply(s,i.concat(y.call(arguments)));return Object(o)===o?o:s}return t.apply(e,i.concat(y.call(arguments)))};return n}),m.touch=function(){var i;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?i=!0:g(["@media (",v.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){i=9===e.offsetTop}),i};for(var S in m)r(m,S)&&(o=S.toLowerCase(),c[o]=m[S](),w.push((c[o]?"":"no-")+o));return c.addTest=function(e,t){if("object"==typeof e)for(var n in e)r(e,n)&&c.addTest(n,e[n]);else{if(e=e.toLowerCase(),c[e]!==i)return c;t="function"==typeof t?t():t,"undefined"!=typeof d&&d&&(h.className+=" "+(t?"":"no-")+e),c[e]=t}return c},n(""),u=s=null,c._version=l,c._prefixes=v,c.mq=k,c.testStyles=g,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(d?" js "+w.join(" "):""),c}(this,this.document);var wrapper=$("#wrapper"),masthead=$("#masthead"),mainNav=$(".main-nav"),letters=$(".letter-animate"),navAbout=$(".nav-about"),navPortfolio=$(".nav-portfolio"),lastActive=null,hero=$("#hero"),heroAnimate=$("#hero .hero-animate"),heroArrow=$("#hero .hero_arrow"),fadeHeroDiv,fadeHeroArrow,taglines=$(".tagline"),i=0,learnMore=$(".learn-more"),about=$("#about"),portfolio=$("#portfolio"),contact=$("#contact"),project=$(".portfolio-page");if(Modernizr.mq("(min-width: 46.0625rem)")){var tweenLetters=TweenMax.to(letters,.6,{delay:.6,width:0,opacity:0,onComplete:tweenLettersComplete});fadeHeroDiv=TweenMax.to(heroAnimate,1,{opacity:0,top:"75%"}),fadeHeroArrow=TweenMax.to(heroArrow,.3,{borderLeftWidth:320,borderRightWidth:320,borderTopWidth:0,bottom:0,marginLeft:-320})}var scrollMagicController=new ScrollMagic.Controller,heroScene=new ScrollMagic.Scene({triggerElement:"#hero",triggerHook:"onLeave",duration:"100%"}).setTween(fadeHeroDiv),heroArrow=new ScrollMagic.Scene({triggerElement:"#hero",triggerHook:"onLeave",duration:"75%"}).setTween(fadeHeroArrow);if(wrapper.hasClass("layout-default"))var aboutWaypoint=about.waypoint(function(e){"down"===e?(masthead.addClass("scroll-header"),navAbout.addClass("active"),navPortfolio.removeClass("active"),lastActive=navAbout):(masthead.removeClass("scroll-header"),navAbout.removeClass("active"),navPortfolio.removeClass("active"),lastActive=null)},{offset:function(){return Modernizr.mq("(min-width: 46.0625rem)")?masthead.height()+17:mainNav.height()}}),portfolioWaypoint=portfolio.waypoint(function(e){"down"===e?(navAbout.removeClass("active"),navPortfolio.addClass("active"),lastActive=navPortfolio):(navAbout.addClass("active"),navPortfolio.removeClass("active"),lastActive=navAbout)},{offset:function(){return Modernizr.mq("(min-width: 46.0625rem)")?masthead.height()+17:mainNav.height()}}),contactWaypoint=contact.waypoint(function(e){"down"===e?(navAbout.removeClass("active"),navPortfolio.addClass("active")):(navAbout.removeClass("active"),navPortfolio.removeClass("active"),lastActive.addClass("active"))},{offset:"100%"});else var projectWaypoint=project.waypoint(function(e){"down"===e?masthead.addClass("scroll-header"):masthead.removeClass("scroll-header")},{offset:-1*parseFloat(project.find(".project_summary h2.title").css("margin-top"))});scrollMagicController.scrollTo(function(e){TweenMax.to(window,.5,{scrollTo:{y:e}})}),$(document).on("click","a[href^='#']",function(e){var t=$(this).attr("href");$(t).length>0&&(e.preventDefault(),scrollMagicController.scrollTo(t),window.history&&window.history.pushState&&history.pushState("",document.title,t))}),$("img.lazy").unveil(568),wrapper.hasClass("layout-default")&&(Modernizr.mq("(min-width: 46.0625rem)")&&(taglines.hide(),setTimeout(cycle,500),setTimeout(function(){learnMore.animate({opacity:1},3e3)},5e3),scrollMagicController.addScene([heroScene,heroArrow])),$(".kwicks-vertical").kwicks({behavior:"menu",duration:300,maxSize:"85%",isVertical:!0,selectOnClick:!1,spacing:0}),Modernizr.touch||$(".project").hover(function(){$(this).find(".project_overlay").css("max-height",$(this).height()).slideToggle(300)}));
//# sourceMappingURL=bundle.js.map
