!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()}(this,function(){return n=[function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,s){return e&&o(t.prototype,e),s&&o(t,s),t},i=s(1),a=s(3),s=(n(r,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(n,i){var r=this,t=(this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass)),this.humanizer(this.typeSpeed)),o=1;return!0===this.pause.status?void this.setPauseStatus(n,i,!0):void(this.timeout=setTimeout(function(){i=a.htmlParser.typeHtmlChars(n,i,r);var t=0,e=n.substr(i);if("^"===e.charAt(0)&&/^\^\d+/.test(e)&&(s=1,s+=(e=/\d+/.exec(e)[0]).length,t=parseInt(e),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),n=n.substring(0,i)+n.substring(i+s),r.toggleBlinking(!0)),"`"===e.charAt(0)){for(;"`"!==n.substr(i+o).charAt(0)&&!(i+ ++o>n.length););var s=n.substring(0,i);n=s+n.substring(s.length+1,i+o)+n.substring(i+o+1),o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),i===n.length?r.doneTyping(n,i):r.keepTyping(n,i,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},t)},t))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));s=t.substr(0,e+=s);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(s,n){var i=this;if(!0===this.pause.status)this.setPauseStatus(s,n,!0);else{if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var t=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=a.htmlParser.backSpaceHtmlChars(s,n,i);var t,e=s.substr(0,n);i.replaceText(e),i.smartBackspace&&((t=i.strings[i.arrayPos+1])&&e===t.substr(0,n)?i.stopNum=n:i.stopNum=0),n>i.stopNum?(n--,i.backspace(s,n)):n<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],n))},t)}}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){!this.cursor||this.pause.status||this.cursorBlinking!==t&&((this.cursorBlinking=t)?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))}},{key:"insertCursor",value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),r);function r(t,e){if(!(this instanceof r))throw new TypeError("Cannot call a class as a function");i.initializer.load(this,e,t),this.begin()}function o(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.default=s,t.exports=e.default},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s,n=arguments[e];for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},n=function(t,e,s){return e&&r(t.prototype,e),s&&r(t,s),t},s=s(2),u=(s=s)&&s.__esModule?s:{default:s},s=(n(i,[{key:"load",value:function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=a({},u.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var r=0;r<i;r+=1){var o=n[r];t.strings.push(o.innerHTML.trim())}}for(var r in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[r]=r;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e,s="data-typed-js-css";t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+s+"]")&&((e=document.createElement("style")).type="text/css",e.setAttribute(s,!0),s="",t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=s,document.body.appendChild(e)))}}]),i);function i(){if(!(this instanceof i))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}n=new(e.default=s);e.initializer=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});(function(t,e,s){e&&i(t.prototype,e),s&&i(t,s)})(n,[{key:"typeHtmlChars",value:function(t,e,s){if("html"===s.contentType){s=t.substr(e).charAt(0);if("<"===s||"&"===s){for(var n="<"===s?">":";";t.substr(e+1).charAt(0)!==n&&!(++e+1>t.length););e++}}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"===s.contentType){s=t.substr(e).charAt(0);if(">"===s||";"===s){for(var n=">"===s?"<":"&";t.substr(e-1).charAt(0)!==n&&!(--e<0););e--}}return e}}]);var s=n;function n(){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}s=new(e.default=s);e.htmlParser=s}],i={},s.m=n,s.c=i,s.p="",s(0);function s(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,s),e.loaded=!0,e.exports}var n,i});