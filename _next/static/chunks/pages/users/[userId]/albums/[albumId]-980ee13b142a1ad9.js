(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{2689:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[userId]/albums/[albumId]",function(){return r(6158)}])},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(8754),n=r(1757)._(r(7294)),o=i._(r(3935)),l=i._(r(4764)),s=r(8484),a=r(2666),u=r(4845);r(9982);let d=r(4167),c=i._(r(4148)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,r,i,n,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){let[t,r]=n.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:s,decoding:a,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:h,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:v,setShowAltText:y,onLoad:S,onError:j,...x}=e;return n.default.createElement("img",{...x,...m(c),loading:g,width:s,height:l,decoding:a,"data-nimg":b?"fill":"1",className:u,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&p(e,f,_,w,v,h))},[r,f,_,w,v,j,h,t]),onLoad:e=>{p(e.currentTarget,f,_,w,v,h)},onError:e=>{y(!0),"empty"!==f&&v(!0),j&&j(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,i),null):n.default.createElement(l.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let b=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(d.RouterContext),i=(0,n.useContext)(u.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=f||i||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:p}=e,m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let b=(0,n.useRef)(p);(0,n.useEffect)(()=>{b.current=p},[p]);let[_,w]=(0,n.useState)(!1),[v,y]=(0,n.useState)(!1),{props:S,meta:j}=(0,s.getImgProps)(e,{defaultLoader:c.default,imgConf:o,blurComplete:_,showAltText:v});return n.default.createElement(n.default.Fragment,null,n.default.createElement(g,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:y,ref:t}),j.priority?n.default.createElement(h,{isAppRouter:!r,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(9982);let i=r(2528),n=r(2666);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:_,fill:w=!1,style:v,onLoad:y,onLoadingComplete:S,placeholder:j="empty",blurDataURL:x,fetchPriority:E,layout:C,objectFit:P,objectPosition:z,lazyBoundary:O,lazyRoot:I,...k}=e,{imgConf:N,showAltText:M,blurComplete:R,defaultLoader:A}=t,D=N||n.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}let B=k.loader||A;delete k.loader,delete k.srcSet;let F="__next_img_default"in B;if(F){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let G="",L=l(b),T=l(_);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,G=e.src,!w){if(L||T){if(L&&!T){let t=L/e.width;T=Math.round(e.height*t)}else if(!L&&T){let t=T/e.height;L=Math.round(e.width*t)}}else L=e.width,T=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:G)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),s.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let U=l(h),V=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},M?{}:{color:"transparent"},v),X=R||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:T,blurWidth:a,blurHeight:u,blurDataURL:x||"",objectFit:V.objectFit})+'")':'url("'+j+'")',q=X?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[d]})}}({config:s,src:d,unoptimized:f,width:L,quality:U,sizes:c,loader:B});return{props:{...k,loading:W?"lazy":m,fetchPriority:E,width:L,height:T,decoding:"async",className:g,style:{...V,...q},sizes:J.sizes,srcSet:J.srcSet,src:J.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:w}}}},2528:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,s=i?40*i:t,a=n?40*n:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return u}});let i=r(8754),n=r(8484),o=r(9982),l=r(1100),s=i._(r(4148)),a=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},4148:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6158:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return c}});var i=r(5893),n=r(9008),o=r.n(n),l=r(5675),s=r.n(l),a=r(1483),u=r.n(a),d=!0;function c(e){let{album:t,photos:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"album "+t.id})}),(0,i.jsxs)("div",{className:u().album_wrapper,children:[(0,i.jsx)("h2",{className:u().album_title,children:t.title}),(0,i.jsx)("ul",{className:u().photos_wrapper,children:r.map(e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{className:u().photo,children:(0,i.jsx)(s(),{src:e.url,alt:e.title,width:200,height:200})})}))})]})]})}},1483:function(e){e.exports={album_wrapper:"Album_album_wrapper__OIkTe",album_title:"Album_album_title__XzmBo",photos_wrapper:"Album_photos_wrapper__ej0M3",photo:"Album_photo__x7xax"}},5675:function(e,t,r){e.exports=r(256)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2689)}),_N_E=e.O()}]);