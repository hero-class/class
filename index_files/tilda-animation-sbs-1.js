function t_animateSbs__init(){var t=document.querySelector(".t-records"),t=t?t.getAttribute("data-tilda-mode"):null;window.isSearchBot||t_animateParallax__checkOldIE()||"edit"===t||(document.querySelectorAll('[data-animate-sbs-event="scroll"]').length&&(document.querySelector(".t-records#allrecords").style.overflowX="hidden"),isZeroBlocksRender(function(){t_animateSbs__wrapAnimatedAtomEls(),setTimeout(function(){t_animateSbs__initAllRes()},50)}))}function isZeroBlocksRender(t){var e,a=document.querySelector(".t396__artboard");a&&(e=setInterval(function(){a.classList.contains("rendered")&&(t(),clearTimeout(e))},30))}function t_animateSbs__wrapAnimatedAtomEls(){var t=document.querySelectorAll("[data-animate-sbs-event]");Array.prototype.forEach.call(t,function(t){var e,a,s,n,i,c,r,o,m,l,_=t.querySelector(".tn-atom");_&&(-1===navigator.userAgent.indexOf("Chrome")&&(_.style.WebkitBackfaceVisibility="hidden",_.style.backfaceVisibility="hidden"),!_.closest(".tn-atom__sbs-anim-wrapper")&&t_animateSbs__getOptsPublishMode(t)&&(t_animateSbs__wrapEl(_.closest(".tn-atom__scale-wrapper")||_,"tn-atom__sbs-anim-wrapper"),t=(_=t.querySelector(".tn-atom")).closest(".t396__elem"),e=_.closest(".tn-atom__sbs-anim-wrapper"),a=t?t.getAttribute("data-elem-type"):"",s=window.getComputedStyle(t).getPropertyValue("border-radius"),"shape"===a&&s&&parseInt(s)&&(e.style.borderRadius=s),a=window.getComputedStyle(t).getPropertyValue("filter"),s=window.getComputedStyle(t).getPropertyValue("-webkit-filter"),n=window.getComputedStyle(t).getPropertyValue("backdrop-filter"),i=window.getComputedStyle(t).getPropertyValue("-webkit-backdrop-filter"),c=t?a&&"none"!==a||s&&"none"!==s:null,r=t?n&&"none"!==n||i&&"none"!==i:null,o=window.getComputedStyle(_).transform,l=window.getComputedStyle(_).getPropertyValue("background-color"),m=window.getComputedStyle(_).getPropertyValue("opacity"),"rgba(0, 0, 0, 0)"!==l&&"1"!==m&&-1!==navigator.userAgent.indexOf("Chrome")&&r&&(l=l.substring(l.indexOf("(")+1,l.indexOf(")")),e.style.backgroundColor="rgba("+l+","+m+")",_.style.opacity="1",_.style.backgroundColor="transparent"),c&&(e.style.WebkitFilter=s,e.style.filter=a,t.style.filter="none",(t.style.WebkitFilter="none")===o&&(_.style.transform="translateZ(0)")),r&&(e.style.WebkitBackdropFilter=i,e.style.backdropFilter=n,t.style.backdropFilter="none",(t.style.WebkitBackdropFilter="none")===o&&(_.style.transform="translateZ(0)"))))})}function t_animateSbs__initAllRes(){var t,e,s={els:document.querySelectorAll("[data-animate-sbs-event]"),scrollTop:window.pageYOffset,stop:!1,needUpdate:!0};function a(){clearTimeout(t),t=setTimeout(function(){s.stop=!1,t_animateSbs__cashElsData(s),t_animateSbs__triggerScrollAnim(s);var t=Array.prototype.filter.call(s.els,function(t){return"intoview"===t.getAttribute("data-animate-sbs-event")||"blockintoview"===t.getAttribute("data-animate-sbs-event")}),t=(t_animateSbs__checkIntoviewEls(s,t),t_animateSbs__generateKeyframes(s)),e=document.head.querySelector("style.sbs-anim-keyframes"),a=e?e.textContent:"";t&&e&&t!==a&&(e.textContent=t)},500)}s.mode=s.els[0]&&s.els[0].hasAttribute("data-field-sbsevent-value")?"edit":"publish",0!==s.els.length&&(t_animateSbs__cashElsData(s),(e=t_animateSbs__generateKeyframes(s))&&document.head.insertAdjacentHTML("beforeend",'<style class="sbs-anim-keyframes">'+e+"</style>"),e=(e=document.getElementById("allrecords"))?e.getAttribute("data-tilda-lazy"):null,"y"!==window.lazy&&"yes"!==e||t_animateSbs__onFuncLoad("t_lazyload_update",function(){t_lazyload_update()}),window.addEventListener(window.isMobile?"orientationchange":"resize",a),e=document.querySelectorAll(".t396"),Array.prototype.forEach.call(e,function(t){"undefined"!=typeof jQuery?$(t).bind("displayChanged",a):t.addEventListener("displayChanged",a)}),window.isSafari&&window.addEventListener("scroll",function t(){0!==window.pageYOffset&&a();window.removeEventListener("scroll",t)}),t_animateSbs__triggerTimeAnim(s),document.querySelectorAll("[data-animate-sbs-event=scroll]").length&&(t_animateSbs__triggerScrollAnim(s),t_animateSbs__checkFrame(s)),window.addEventListener("load",function(){t_animateSbs__rereadElsValues(s)}),setTimeout(function(){t_animateSbs__rereadElsValues(s)},3e3))}function t_animateSbs__rereadElsValues(e){var t=e?e.els:null;t&&t.length&&Array.prototype.forEach.call(t,function(t){t_animateSbs__cashElsTopOffset(t,e),"scroll"===t.changeType&&t_animateSbs__updateStepsStartValues(t)})}function t_animateSbs__checkFrame(t){t.needUpdate=t_animateSbs__checkChanges(t),t.needUpdate&&!1===t.stop&&t_animateSbs__triggerScrollAnim(t),requestAnimationFrame(function(){t_animateSbs__checkFrame(t)})}function t_animateSbs__checkChanges(t){var e=t.scrollTop;return t.scrollTop=window.pageYOffset,e!==t.scrollTop&&!1===t.stop}function t_animateSbs__triggerScrollAnim(s){var t=s?s.els:[];Array.prototype.forEach.call(t,function(t){var e,a;"time"!==t.changeType&&(e={opacity:1,blur:0,fix:!1,fixedShiftY:0,translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0},(a=t.querySelector(".tn-atom__scale-wrapper"))&&t.wrapperEl&&"fixed"!==window.getComputedStyle(t.wrapperEl).position&&(0<(a=t.wrapperEl.getBoundingClientRect().top-a.getBoundingClientRect().top)&&t.setAttribute("data-scaled-diff",a.toString())),t_animateSbs__triggerScrollAnim__checkElSteps(s,t,e),t_animateSbs__triggerScrollAnim__changeEl(t,e))})}function t_animateSbs__triggerScrollAnim__checkElSteps(r,o,l){var t=o?o.steps:null;t&&t.length&&Array.prototype.forEach.call(t,function(t,e){t.index=e;var e=o.getAttribute("data-scaled-diff")||"0",e=parseInt(e,10),e=r.scrollTop+o.triggerOffset+e,a=e>=t.start,s=e<t.start,n=t.end<=e,i=t.end>e;a&&i&&(t.state="started",o.wrapperEl&&(o.wrapperEl.style.willChange="transform"),a=e-t.start,i=0===t.dist?1:a/t.dist,l.prevUnfixedDist=t.prevUnfixedDist,t_animateSbs__triggerScrollAnim__calcStyle(l,t,i)),n&&(t.state="finished",o.wrapperEl&&(o.wrapperEl.style.willChange=""),t_animateSbs__triggerScrollAnim__calcStyle(l,t,1)),!s||"started"!==t.state&&"finished"!==t.state||(t.state="unactive",o.wrapperEl&&(o.wrapperEl.style.willChange=""),t_animateSbs__triggerScrollAnim__calcStyle(l,t,0))}),o.steps[1]&&"unactive"===o.steps[1].state&&0===o.steps[1].styles.opacity&&0===o.steps[1].dist&&(l.opacity=0)}function t_animateSbs__generateKeyframes(t){var s="",t=t?t.els:null;return t&&t.length&&Array.prototype.forEach.call(t,function(t){var e,a;"time"===t.changeType&&(t_animateSbs__generateKeyframes__combineObjects(t.steps,a=[],e={timeDuration:0}),t_animateSbs__generateKeyframes__correctFrames(a),t_animateSbs__generateKeyframes__countPercent(a,e),t_animateSbs__generateKeyframes__correctOpacityOnFirstStep(t,a),a=t_animateSbs__generateKeyframes__getTxtStyles(t,a),e.timeDuration/=1e3,""!==a&&(s+=t_animateSbs__generateKeyframes__getFinalCss(t,e,a),"loop"===t.loop||"noreverse"===t.loop||"hover"!==t.animType&&"click"!==t.animType||(s+=t_animateSbs__generateKeyframes__getReverseAnim(t))))}),s}function t_animateSbs__generateKeyframes__getReverseAnim(t){var e=t.getAttribute("data-elem-id"),a="";return(a+="#"+(t.closest(".t-rec")?t.closest(".t-rec").getAttribute("id"):"")+" ")+('[data-elem-id="'+e+'"].t-sbs-anim_started.t-sbs-anim_reversed .tn-atom__sbs-anim-wrapper')+"{\n-webkit-animation-direction: reverse;\nanimation-direction: reverse;\n}\n\n"}function t_animateSbs__generateKeyframes__getFinalCss(t,e,a){var s="",n=t?t.getAttribute("data-elem-id"):"",i="sbs-anim-"+n,r=t?t.closest(".t-rec"):null,r=r?r.getAttribute("id"):"",r=(t.timeDuration=e.timeDuration,r&&(s+="#"+r+" ",i="sbs-anim-"+r+"-"+n,!0===e.reverse&&(i+="_reverse")),!0===e.hover?'[data-elem-id="'+n+'"].t-sbs-anim_started:hover .tn-atom__sbs-anim-wrapper':'[data-elem-id="'+n+'"].t-sbs-anim_started .tn-atom__sbs-anim-wrapper'),n=(s+=r+" {\nanimation: "+i+" "+(0===e.timeDuration?1e-5:e.timeDuration)+"s","loop"===t.loop&&(s+=" infinite"),/^((?!chrome|android).)*safari/i.test(navigator.userAgent));return s+=n?" linear 0.000001s":" linear","loop"!==t.loop&&(s+=" forwards"),s+=";\nbackface-visibility: hidden;\n}\n\n@keyframes "+i+" {\n"+a+"}\n\n"}function t_animateSbs__generateKeyframes__combineObjects(t,e,a){for(var s=0;s<t.length;s++){var n=t[s],i={};i.styles=n.styles,i.time=+n.time||0,s!==t.length-1&&(i.ease=t[s+1].ease),e.push(i),a.timeDuration+=i.time}}function t_animateSbs__generateKeyframes__correctFrames(t){for(var e=0;e<t.length;e++){var a,s,n,i=t[e],r=e===t.length-1,o=0===e;for(n in r||(a=t[e+1]),o||(s=t[e-1]),i.styles)o||n in s.styles||t_animateSbs__generateKeyframes__addStyleToKeyframe(i,s,n,0),r||(n in a.styles?"moveX"!==n&&"moveY"!==n&&"rotate"!==n||t_animateSbs__generateKeyframes__recalculateValue(i,a,n):t_animateSbs__generateKeyframes__addStyleToKeyframe(i,a,n,1))}}function t_animateSbs__generateKeyframes__addStyleToKeyframe(t,e,a,s){"blur"!==a&&"rotate"!==a&&"moveX"!==a&&"moveY"!==a||(e.styles[a]=0===s?0:t.styles[a]),"opacity"!==a&&"scaleX"!==a&&"scaleY"!==a||(e.styles[a]=0===s?1:t.styles[a])}function t_animateSbs__generateKeyframes__recalculateValue(t,e,a){switch(a){case"rotate":e.styles.rotate=+t.styles.rotate+ +e.styles.rotate;break;case"moveX":e.styles.moveX=+t.styles.moveX+ +e.styles.moveX;break;case"moveY":e.styles.moveY=+t.styles.moveY+ +e.styles.moveY}}function t_animateSbs__generateKeyframes__countPercent(t,e){for(var a=0;a<t.length;a++){var s,n=t[a];if(0===a)0===e.timeDuration?n.percent=0:(s=(100*n.time/e.timeDuration).toFixed(2),n.percent=parseInt(s,10));else if(a===t.length-1)n.percent=100;else{var i=t[a-1].percent;if(0===e.timeDuration)n.percent=0;else{if(s=(100*n.time/e.timeDuration+i).toFixed(2),100===parseInt(s,10)&&a===t.length-2&&0!==a)continue;n.percent=parseInt(s,10)}n.percent===i&&(n.percent+=1),100<n.percent&&(n.percent=99)}}}function t_animateSbs__generateKeyframes__correctOpacityOnFirstStep(t,e){var a=e[1];a&&0===a.time&&0===a.styles.opacity&&((a=t?t.querySelector(".tn-atom__sbs-anim-wrapper"):null)&&(a.style.opacity="0"),e[0].styles.opacity=0)}function t_animateSbs__generateKeyframes__getTxtStyles(t,e){for(var a="",s=0;s<e.length;s++)void 0===e[s].changes&&(e[s].changes=t_animateSbs__generateKeyframes__getFrameChanges(t,e[s])),a+="number"==typeof e[s].percent?e[s].percent+"% {"+e[s].changes+"}\n":"";return a}function t_animateSbs__generateKeyframes__getFrameChanges(t,e){var a,s="",n="",i={x:1,y:1,changed:!1},r=1;for(a in t_animationSbs__isOnlyScalableElem()&&(r=t_animationSbs__getZoom(t)),e.styles)switch(a){case"opacity":s+="opacity:"+e.styles.opacity+";";break;case"scaleX":i.x=e.styles.scaleX,i.changed=!0;break;case"scaleY":i.y=e.styles.scaleY,i.changed=!0;break;case"moveX":n+="translateX("+e.styles.moveX*r+"px)";break;case"moveY":n+="translateY("+e.styles.moveY*r+"px)";break;case"rotate":n+="rotate("+e.styles.rotate+"deg)"}if(!0===i.changed&&(n+="scale("+i.x+","+i.y+")"),""!==n&&(s+="transform:"+n+";"),void 0!==e.ease)switch(s+="animation-timing-function:",e.ease){case"easeIn":s+="ease-in;";break;case"easeOut":s+="ease-out;";break;case"easeInOut":s+="ease-in-out;";break;case"bounceFin":s+="cubic-bezier(0.34,1.61,0.7,1);";break;default:s+="linear;"}return s}function t_animateSbs__triggerScrollAnim__changeEl(t,e){var a,s=t_animationSbs__getZoom(t),n=(t_animationSbs__isOnlyScalableElem()&&(s=1/s),!0===e.fix&&t.wrapperEl&&"fixed"!==t.wrapperEl.style.position&&(n=t.triggerOffset-e.prevUnfixedDist,a=t.getAttribute("data-scaled-diff")||"0",a=parseInt(a,10),t.wrapperEl.style.top=n+a+"px",t.wrapperEl.style.position="fixed",t.zIndexVal&&(t.wrapperEl.style.zIndex=t.zIndexVal)),!1===e.fix&&t.wrapperEl&&"fixed"===t.wrapperEl.style.position&&(t.wrapperEl.style.position="",t.wrapperEl.style.top="",t.wrapperEl.style.zIndex="",t.zIndexVal&&(t.style.zIndex=t.zIndexVal)),null!==e.opacity&&t.wrapperEl&&(t.wrapperEl.style.opacity=e.opacity),"");e.translateX&&(a=e.translateX,t_animationSbs__isOnlyScalableElem()&&(a/=s),n+="translateX("+a+"px)"),0===e.translateY&&0===e.fixedShiftY||(t_animationSbs__isOnlyScalableElem()?n+="translateY("+(e.translateY+e.fixedShiftY)+"px)":n+="translateY("+(e.translateY/s+e.fixedShiftY/s)+"px)"),1===e.scaleX&&1===e.scaleY||(n+="scale("+e.scaleX+","+e.scaleY+")"),0!==e.rotate&&(n+="rotate("+e.rotate+"deg)"),t.wrapperEl&&(t.wrapperEl.style.transform=n,t.wrapperEl.style.transform=""!==n?n:"scale(1)")}function t_animateSbs__triggerScrollAnim__calcStyle(t,e,a){if(!0===e.styles.fix&&"started"===e.state&&(t.fix=!0,t.fixedShiftY=0),!0===e.styles.fix&&"finished"===e.state&&(t.fix=!1,t.fixedShiftY+=+e.dist),!0===e.styles.fix&&"unactive"===e.state){if(0<e.index&&!0===t.fix)return;t.fix=!1}t.opacity+=a*(e.styles.opacity-t.opacity),t.blur+=a*(e.styles.blur-t.blur),t.translateX+=a*e.styles.moveX,t.translateY+=a*e.styles.moveY,t.scaleX+=a*(e.styles.scaleX-t.scaleX),t.scaleY+=a*(e.styles.scaleY-t.scaleY),t.rotate+=a*e.styles.rotate}function t_animateSbs__getOptsPublishMode(t){var e=window.innerWidth;return 1200<=e?t.getAttribute("data-animate-sbs-opts"):"y"===t.getAttribute("data-animate-mobile")?960<=e?t.getAttribute("data-animate-sbs-opts-res-960")||t.getAttribute("data-animate-sbs-opts"):640<=e?t.getAttribute("data-animate-sbs-opts-res-640")||t.getAttribute("data-animate-sbs-opts-res-960")||t.getAttribute("data-animate-sbs-opts"):480<=e?t.getAttribute("data-animate-sbs-opts-res-480")||t.getAttribute("data-animate-sbs-opts-res-640")||t.getAttribute("data-animate-sbs-opts-res-960")||t.getAttribute("data-animate-sbs-opts"):320<=e?t.getAttribute("data-animate-sbs-opts-res-320")||t.getAttribute("data-animate-sbs-opts-res-480")||t.getAttribute("data-animate-sbs-opts-res-640")||t.getAttribute("data-animate-sbs-opts-res-960")||t.getAttribute("data-animate-sbs-opts"):void 0:void 0}function t_animateSbs__getOptsEditMode(t){var e=window.tn.curResolution;return 1200<=e?t.getAttribute("data-field-sbsopts-value"):960<=e?t.getAttribute("data-field-sbsopts-res-960-value")||t.getAttribute("data-field-sbsopts-value"):640<=e?t.getAttribute("data-field-sbsopts-res-640-value")||t.getAttribute("data-field-sbsopts-res-960-value")||t.getAttribute("data-field-sbsopts-value"):480<=e?t.getAttribute("data-field-sbsopts-res-480-value")||t.getAttribute("data-field-sbsopts-res-640-value")||t.getAttribute("data-field-sbsopts-res-960-value")||t.getAttribute("data-field-sbsopts-value"):320<=e?t.getAttribute("data-field-sbsopts-res-320-value")||t.getAttribute("data-field-sbsopts-res-480-value")||t.getAttribute("data-field-sbsopts-res-640-value")||t.getAttribute("data-field-sbsopts-res-960-value")||t.getAttribute("data-field-sbsopts-value"):void 0}function t_animateSbs__getTriggetElems(t){var e=window.innerWidth;return 1200<=e?t.getAttribute("data-animate-sbs-trgels"):960<=e?t.getAttribute("data-animate-sbs-trgels-res-960")||t.getAttribute("data-animate-sbs-trgels"):640<=e?t.getAttribute("data-animate-sbs-trgels-res-640")||t.getAttribute("data-animate-sbs-trgels-res-960")||t.getAttribute("data-animate-sbs-trgels"):480<=e?t.getAttribute("data-animate-sbs-trgels-res-480")||t.getAttribute("data-animate-sbs-trgels-res-640")||t.getAttribute("data-animate-sbs-trgels-res-960")||t.getAttribute("data-animate-sbs-trgels"):320<=e?t.getAttribute("data-animate-sbs-trgels-res-320")||t.getAttribute("data-animate-sbs-trgels-res-480")||t.getAttribute("data-animate-sbs-trgels-res-640")||t.getAttribute("data-animate-sbs-trgels-res-960")||t.getAttribute("data-animate-sbs-trgels"):void 0}function t_animateSbs__cashElsData(t){var e=t.els;t.triggerElemsAttrName="edit"===t.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels";for(var a=0;a<e.length;a++){var s=e[a],n=t_animationSbs__getZoom(s);if(s.state="unactive",s.animType="edit"===t.mode?s.getAttribute("data-field-sbsevent-value"):s.getAttribute("data-animate-sbs-event"),s.changeType="scroll"===s.animType?"scroll":"time",s.trigger="edit"===t.mode?s.getAttribute("data-field-sbstrg-value"):s.getAttribute("data-animate-sbs-trg"),s.trigger=s.trigger||1,s.triggerElems=t_animateSbs__getTriggetElems(s),s.wrapperEl=s.querySelector(".tn-atom__sbs-anim-wrapper"),s.steps=[],i=("edit"===t.mode?t_animateSbs__getOptsEditMode:t_animateSbs__getOptsPublishMode)(s)){-1!==i.indexOf("fixed")&&(s.zIndexVal=window.getComputedStyle(s).getPropertyValue("z-index"));for(var i=i.replace(/'/g,'"'),r=JSON.parse(i),o=(t_animateSbs__addDelayStepsToStepsArr(r),s.loop="edit"===t.mode?s.getAttribute("data-field-sbsloop-value"):s.getAttribute("data-animate-sbs-loop"),t_animateSbs__cashElsTopOffset(s,t),0),l=0;l<r.length;l++){var _={state:"unactive"};_.styles=t_animateSbs__getStylesObj(r[l]),"scroll"===s.changeType?(_.prevUnfixedDist=o,_.dist=r[l].di*n,!1===_.styles.fix&&(o+=Number(_.dist)),_.start=0===l?s.topOffset:s.steps[l-1].end,_.end=_.start+ +_.dist):(_.time=r[l].ti,_.ease=r[l].ea),s.steps.push(_)}t_animateSbs__updateInfoOnImgLoad(s,t),t_animateSbs__recalcStepsStylesDiff(s.steps)}}}function t_animateSbs__updateInfoOnImgLoad(e,a){var t=e.querySelectorAll("img");Array.prototype.forEach.call(t,function(t){t.addEventListener("load",function(){t_animateSbs__cashElsTopOffset(e,a),"scroll"===e.changeType&&t_animateSbs__updateStepsStartValues(e)}),t.complete&&(t_animateSbs__cashElsTopOffset(e,a),"scroll"===e.changeType&&t_animateSbs__updateStepsStartValues(e))})}function t_animateSbs__updateStepsStartValues(t){for(var e=0;e<t.steps.length;e++){var a=t.steps[e];a.start=0===e?t.topOffset:t.steps[e-1].end,a.end=a.start+ +a.dist}}function t_animateSbs__cashElsTopOffset(t,e){var a;"scroll"!==t.animType&&"intoview"!==t.animType&&"blockintoview"!==t.animType||"publish"!==e.mode||(e=parseInt(t.style.top),a=(a=t.closest(".r"))?a.getBoundingClientRect().top+window.pageYOffset:0,t.blockTopOffset=a,t.topOffset=a+e,t_animateSbs__getElTrigger(t))}function t_animateSbs__addDelayStepsToStepsArr(t){for(var e=0;e<t.length;e++){var a,s=t[e];(s.dd&&"0"!==s.dd||s.dt&&"0"!==s.dt)&&(a=0!==e?t_animateSbs__cloneStep(t[e-1]):{mx:"0",my:"0",sx:"1",sy:"1",op:"1",ro:"0",bl:"0",ea:""},void 0!==s.dt?a.ti=s.dt:a.di=s.dd,t.splice(e,0,a),e++)}}function t_animateSbs__cloneStep(t){return{mx:t.mx,my:t.my,sx:t.sx,sy:t.sy,op:t.op,ro:t.ro,bl:t.bl,ea:t.ea}}function t_animateSbs__recalcStepsStylesDiff(t){for(var e=t[0].styles.moveX,a=t[0].styles.moveY,s=t[0].styles.rotate,n=1;n<t.length;n++){var i=t[n].styles;i.moveX=i.moveX-e,e+=i.moveX,i.moveY=i.moveY-a,a+=i.moveY,i.rotate=i.rotate-s,s+=i.rotate}}function t_animateSbs__getStylesObj(t){var e={};return e.moveX=void 0!==t.mx?+t.mx:0,e.moveY=void 0!==t.my?+t.my:0,e.scaleX=void 0!==t.sx?+t.sx:1,e.scaleY=void 0!==t.sy?+t.sy:1,e.opacity=void 0!==t.op?+t.op:1,e.rotate=void 0!==t.ro?+t.ro:0,e.blur=void 0!==t.bl?+t.bl:0,e.fix=void 0!==t.fi&&"fixed"===t.fi,e}function t_animateSbs__getElTrigger(t){var e=window.innerHeight,a=1;t_animationSbs__isOnlyScalableElem()&&(a=t_animationSbs__getZoom(t)),t.triggerOffset=t.getAttribute("data-animate-sbs-trgofst")*a,t.triggerOffset=t.triggerOffset?Number(t.triggerOffset):0,.5==+t.trigger&&(t.triggerOffset+=e/2,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e/2&&(t.triggerOffset=t.topOffset),"blockintoview"===t.animType&&t.triggerOffset>t.blockTopOffset&&t.triggerOffset<=e/2&&(t.triggerOffset=t.blockTopOffset)),1==+t.trigger&&(t.triggerOffset+=e,("intoview"===t.animType||"scroll"===t.animType)&&t.triggerOffset>t.topOffset&&t.triggerOffset<=e&&(t.triggerOffset=t.topOffset),"blockintoview"===t.animType&&t.triggerOffset>t.blockTopOffset&&t.triggerOffset<=e&&(t.triggerOffset=t.blockTopOffset))}function t_animateSbs__triggerTimeAnim(t){var e=Array.prototype.filter.call(t.els,function(t){return"intoview"===t.getAttribute("data-animate-sbs-event")||"blockintoview"===t.getAttribute("data-animate-sbs-event")});t_animateSbs__checkIntoviewEls(t,e),window.addEventListener("scroll",t_throttle(function(){t_animateSbs__checkIntoviewEls(t,e)},200)),t_animateSbs__onActions__initClick(t),t_animateSbs__onActions__initHover(t)}function t_animateSbs__onActions__initClick(t){function e(t){t=t.currentTarget["data-els-to-animate-on-click"]||[],(((t=window.innerWidth<1200?Array.prototype.filter.call(t,function(t){return"y"===t.getAttribute("data-animate-mobile")}):t)[0]?t[0].classList.contains("t-sbs-anim_started")&&!t[0].classList.contains("t-sbs-anim_reversed"):null)?t_animateSbs__onActions__end:t_animateSbs__onActions__start)(t)}t_animateSbs__onActions__connectTrgrsWithAnimatedEls(Array.prototype.filter.call(t.els,function(t){return"click"===t.getAttribute("data-animate-sbs-event")}),{},"click");t=document.querySelectorAll(".js-sbs-anim-trigger_click");Array.prototype.forEach.call(t,function(t){t.style.cursor="pointer"});Array.prototype.forEach.call(t,function(t){t.removeEventListener("click",e),t.addEventListener("click",e)})}function t_animateSbs__onActions__initHover(t){function e(t){t_animateSbs__onActions__start(t.target["data-els-to-animate-on-hover"])}function a(t){t_animateSbs__onActions__end(t.target["data-els-to-animate-on-hover"])}t_animateSbs__onActions__connectTrgrsWithAnimatedEls(Array.prototype.filter.call(t.els,function(t){return"hover"===t.getAttribute("data-animate-sbs-event")}),{},"hover");t=document.querySelectorAll(".js-sbs-anim-trigger_hover");Array.prototype.forEach.call(t,function(t){t.removeEventListener("mouseenter",e),t.removeEventListener("mouseleave",a),t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",a)})}function t_animateSbs__onActions__connectTrgrsWithAnimatedEls(t,i,r){Array.prototype.forEach.call(t,function(s){var n,t,e=s.triggerElems;e?(e=e?e.split(","):[],t=s.closest(".t396__artboard"),n=t?t.getAttribute("data-artboard-recid"):"",e.forEach(function(t){var e,a=n+t,t=document.querySelector(".tn-elem__"+n+t);t&&(i[a]&&i[a]["data-els-to-animate-on-"+r]?(e=i[a]["data-els-to-animate-on-"+r],(e=Array.prototype.slice.call(e)).push(s),i[a]["data-els-to-animate-on-"+r]=e):(i[a]=t,i[a].classList.add("js-sbs-anim-trigger_"+r),i[a]["data-els-to-animate-on-"+r]=[s]))})):((t=s.querySelector(".tn-atom__sbs-anim-wrapper"))&&(t["data-els-to-animate-on-"+r]=[s]),t&&t.classList.add("js-sbs-anim-trigger_"+r))})}function t_animateSbs__onActions__start(t){Array.prototype.forEach.call(t,function(t){t.classList.contains("t-sbs-anim_playing")?t.setAttribute("data-planned-dir","play"):t_animateSbs__onActions__play(t)})}function t_animateSbs__onActions__end(t){Array.prototype.forEach.call(t,function(t){"loop"===t.getAttribute("data-animate-sbs-loop")?t.onanimationiteration=function(){t.classList.remove("t-sbs-anim_started"),t.classList.remove("t-sbs-anim_reversed"),t.classList.remove("t-sbs-anim_playing"),this.onanimationiteration=null}:t.classList.contains("t-sbs-anim_playing")?t.setAttribute("data-planned-dir","reverse"):t_animateSbs__onActions__playReverse(t)})}function t_animateSbs__onActions__onAnimationEnd(e){function t(){e.classList.remove("t-sbs-anim_playing"),e.removeEventListener("animationend",e["data-callback-dep-anim"]);var t=e.getAttribute("data-planned-dir");"play"===t&&e.classList.contains("t-sbs-anim_reversed")?t_animateSbs__onActions__play(e):"reverse"!==t||e.classList.contains("t-sbs-anim_reversed")||t_animateSbs__onActions__playReverse(e),e.setAttribute("data-planned-dir","")}e.removeEventListener("animationend",t),e.addEventListener("animationend",t),e["data-callback-dep-anim"]=t}function t_animateSbs__getAnimationTime(t){for(var e=t.getAttribute("data-animate-sbs-opts")?JSON.parse(t.getAttribute("data-animate-sbs-opts").split("'").join('"')):[],a=0,s=0;s<e.length;s++){var n=e[s];a+=parseInt(n.ti)}return a}function t_animateSbs__onActions__play(e){e.classList.remove("t-sbs-anim_started"),e.classList.remove("t-sbs-anim_reversed"),t_animateSbs__forceRepaint(e);var t=["t-sbs-anim_started"];0<t_animateSbs__getAnimationTime(e)&&t.push("t-sbs-anim_playing"),t.forEach(function(t){e.classList.add(t)}),t_animateSbs__onActions__onAnimationEnd(e)}function t_animateSbs__onActions__playReverse(e){e.classList.remove("t-sbs-anim_started"),t_animateSbs__forceRepaint(e);var t=["t-sbs-anim_started","t-sbs-anim_reversed"];0<t_animateSbs__getAnimationTime(e)&&t.push("t-sbs-anim_playing"),t.forEach(function(t){e.classList.add(t)}),t_animateSbs__onActions__onAnimationEnd(e)}function t_animateSbs__forceRepaint(t){t.offsetWidth}function t_animateSbs__checkIntoviewEls(s,t){t&&t.length&&(s.scrollTop=window.pageYOffset,t.filter(function(t){var e=s.scrollTop+t.triggerOffset,e="blockintoview"===t.animType?e>=t.blockTopOffset:e>=t.topOffset,a=t.closest(".t396").parentElement,a=a.classList.contains("t397__off")||a.classList.contains("t395__off")||a.classList.contains("t400__off");return!(e&&!t.classList.contains("t-sbs-anim_started")&&!a)||(t.classList.add("t-sbs-anim_started"),!1)}))}function t_animateParallax__checkOldIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE"),a=!1;return 0<e&&(8!==(t=parseInt(t.substring(e+5,t.indexOf(".",e))))&&9!==t||(a=!0)),a}function t_animationSbs__isOnlyScalableElem(){var t=-1!==navigator.userAgent.search("Firefox"),e=!!window.opr&&!!window.opr.addons||!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");return t||e}function t_animationSbs__getZoom(t){var e=1,t=t.closest(".t396__artboard");return e=t&&t.classList.contains("t396__artboard_scale")?window.tn_scale_factor:e}function t_animateSbs__wrapAtomEls(){var t=document.querySelectorAll("[data-animate-sbs-event]");Array.prototype.forEach.call(t,function(t){var e,a=t.querySelector(".tn-atom");a&&!a.closest(".tn-atom__sbs-anim-wrapper")&&(t_animateSbs__wrapEl(a,"tn-atom__sbs-anim-wrapper"),a=t.getAttribute("data-elem-type"),e=window.getComputedStyle(t).getPropertyValue("border-radius"),"shape"===a&&e&&parseInt(e)&&((a=t.querySelector(".tn-atom__sbs-anim-wrapper"))&&(a.style.borderRadius=e)))})}function t_animateSbs__cashElsInfo(r){var t=r.els;r.triggerElemsAttrName="edit"===r.mode?"data-field-sbstrgels-value":"data-animate-sbs-trgels",Array.prototype.forEach.call(t,function(t){if(t.state="unactive",t.animType="edit"===r.mode?t.getAttribute("data-field-sbsevent-value"):t.getAttribute("data-animate-sbs-event"),t.changeType="scroll"===t.animType?"scroll":"time",t.trigger="edit"===r.mode?t.getAttribute("data-field-sbstrg-value"):t.getAttribute("data-animate-sbs-trg"),t.trigger=t.trigger||1,t.triggerElems=t.getAttribute(r.triggerElemsAttrName),t.wrapperEl=t.querySelector(".tn-atom__sbs-anim-wrapper"),t.steps=[],e="edit"===r.mode?t.getAttribute("data-field-sbsopts-value"):t.getAttribute("data-animate-sbs-opts")){-1!==e.indexOf("fixed")&&(t.zIndexVal=window.getComputedStyle(t).getPropertyValue("z-index"));for(var e=e.replace(/'/g,'"'),a=JSON.parse(e),s=(t_animateSbs__addDelayStepsToStepsArr(a),t.loop="edit"===r.mode?t.getAttribute("data-field-sbsloop-value"):t.getAttribute("data-animate-sbs-loop"),t_animateSbs__cashElsTopOffset(t,r),0),n=0;n<a.length;n++){var i={state:"unactive"};i.styles=t_animateSbs__getStylesObj(a[n]),"scroll"===t.changeType?(i.prevUnfixedDist=s,i.dist=a[n].di,!1===i.styles.fix&&(s+=Number(i.dist)),i.start=0===n?t.topOffset:t.steps[n-1].end,i.end=i.start+ +i.dist):(i.time=a[n].ti,i.ease=a[n].ea),t.steps.push(i)}t_animateSbs__updateInfoOnImgLoad(t,r),t_animateSbs__recalcStepsStylesDiff(t.steps)}})}function t_animateSbs__reset(t){for(var e=t.els,a=0;a<e.length;a++){var s=e[a].animType;"intoview"===s||"blockintoview"===s||"click"===s||"hover"===s?(e[a].classList.remove("t-sbs-anim_started"),(s=e[a].querySelector(".tn-atom__sbs-anim-wrapper"))&&(s.style.opacity="")):(e[a].state="reseted",(s=e[a].wrapperEl)&&(s.style.transform="",s.style.position="",s.style.top="",s.style.opacity=""))}}function t_animateSbs__onFuncLoad(e,a){"function"==typeof window[e]?a():setTimeout(function t(){if("function"!=typeof window[e]){if("complete"===document.readyState&&"function"!=typeof window[e])throw new Error(e+" is undefined");setTimeout(t,100)}else a()})}function t_animateSbs__wrapEl(t,e){if(!t)return!1;var a=t.parentNode,s=document.createElement("div");s.classList.add(e),s.style.display="table",s.style.width="inherit",s.style.height="inherit",s.appendChild(t),a&&a.appendChild(s)}"loading"!==document.readyState?t_animateSbs__init():document.addEventListener("DOMContentLoaded",t_animateSbs__init),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}return null});