(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{9720:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return c}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="fast-refresh",f="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(8754),o=r(1757)._(r(7294)),i=n._(r(3935)),l=n._(r(4764)),u=r(8484),a=r(2666),s=r(4845);r(9982);let f=r(4167),c=n._(r(4148)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,n,o,i){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:u,decoding:a,className:s,style:f,fetchPriority:c,placeholder:d,loading:h,unoptimized:m,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:C,onLoad:w,onError:E,...P}=e;return o.default.createElement("img",{...P,...g(c),loading:h,width:u,height:l,decoding:a,"data-nimg":b?"fill":"1",className:s,style:f,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,d,v,y,_,m))},[r,d,v,y,_,E,m,t]),onLoad:e=>{p(e.currentTarget,d,v,y,_,m)},onError:e=>{C(!0),"empty"!==d&&_(!0),E&&E(e)}})});function m(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let b=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(s.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=d||n||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:p}=e,g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let b=(0,o.useRef)(p);(0,o.useEffect)(()=>{b.current=p},[p]);let[v,y]=(0,o.useState)(!1),[_,C]=(0,o.useState)(!1),{props:w,meta:E}=(0,u.getImgProps)(e,{defaultLoader:c.default,imgConf:i,blurComplete:v,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...w,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:C,ref:t}),E.priority?o.default.createElement(m,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754)._(r(7294)),o=r(4879),i=r(1572),l=r(8373),u=r(6221),a=r(5933),s=r(4167),f=r(8874),c=r(6342),d=r(245),p=r(6015),g=r(9720),h=new Set;function m(e,t,r,n,o,l){if(l||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(o))return;h.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=n.default.forwardRef(function(e,t){let r,l;let{href:h,as:v,children:y,prefetch:_=null,passHref:C,replace:w,shallow:E,scroll:P,locale:O,onClick:S,onMouseEnter:j,onTouchStart:R,legacyBehavior:M=!1,...I}=e;r=y,M&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let x=n.default.useContext(s.RouterContext),k=n.default.useContext(f.AppRouterContext),z=null!=x?x:k,A=!x,T=!1!==_,L=null===_?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:N,as:D}=n.default.useMemo(()=>{if(!x){let e=b(h);return{href:e,as:v?b(v):e}}let[e,t]=(0,o.resolveHref)(x,h,!0);return{href:e,as:v?(0,o.resolveHref)(x,v):t||e}},[x,h,v]),U=n.default.useRef(N),F=n.default.useRef(D);M&&(l=n.default.Children.only(r));let B=M?l&&"object"==typeof l&&l.ref:t,[G,H,K]=(0,c.useIntersection)({rootMargin:"200px"}),V=n.default.useCallback(e=>{(F.current!==D||U.current!==N)&&(K(),F.current=D,U.current=N),G(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,N,K,G]);n.default.useEffect(()=>{z&&H&&T&&m(z,N,D,{locale:O},{kind:L},A)},[D,N,H,O,T,null==x?void 0:x.locale,z,A,L]);let W={ref:V,onClick(e){M||"function"!=typeof S||S(e),M&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,o,l,u,a,s,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](r,o,{shallow:u,locale:s,scroll:e}):t[l?"replace":"push"](o||r,{scroll:e})};f?n.default.startTransition(d):d()}(e,z,N,D,w,E,P,O,A)},onMouseEnter(e){M||"function"!=typeof j||j(e),M&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),z&&(T||!A)&&m(z,N,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)},onTouchStart(e){M||"function"!=typeof R||R(e),M&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),z&&(T||!A)&&m(z,N,D,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:L},A)}};if((0,u.isAbsoluteUrl)(D))W.href=D;else if(!M||C||"a"===l.type&&!("href"in l.props)){let e=void 0!==O?O:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,d.getDomainLocale)(D,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);W.href=t||(0,p.addBasePath)((0,a.addLocale)(D,e,null==x?void 0:x.defaultLocale))}return M?n.default.cloneElement(l,W):n.default.createElement("a",{...I,...W},r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(6231),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(9982);let n=r(2528),o=r(2666);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:y=!1,style:_,onLoad:C,onLoadingComplete:w,placeholder:E="empty",blurDataURL:P,fetchPriority:O,layout:S,objectFit:j,objectPosition:R,lazyBoundary:M,lazyRoot:I,...x}=e,{imgConf:k,showAltText:z,blurComplete:A,defaultLoader:T}=t,L=k||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let N=x.loader||T;delete x.loader,delete x.srcSet;let D="__next_img_default"in N;if(D){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!c&&(c=t)}let U="",F=l(b),B=l(v);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,U=e.src,!y){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(f="string"==typeof f?f:U)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,G=!1),u.unoptimized&&(d=!0),D&&f.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(O="high");let H=l(m),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:R}:{},z?{}:{color:"transparent"},_),V=A||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:a,blurHeight:s,blurDataURL:P||"",objectFit:K.objectFit})+'")':'url("'+E+'")',W=V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[f]})}}({config:u,src:f,unoptimized:d,width:F,quality:H,sizes:c,loader:N});return{props:{...x,loading:G?"lazy":g,fetchPriority:O,width:F,height:B,decoding:"async",className:h,style:{...K,...W},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:d,priority:p,placeholder:E,fill:y}}}},2528:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return s}});let n=r(8754),o=r(8484),i=r(9982),l=r(1100),u=n._(r(4148)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=l.Image},4148:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(256)},1664:function(e,t,r){e.exports=r(1032)}}]);