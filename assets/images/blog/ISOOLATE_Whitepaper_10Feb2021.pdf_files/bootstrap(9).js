(()=>{var e,r,t,n,o={"DH/Q":(e,r,t)=>{"use strict";t.d(r,{c:()=>urlWithoutQueryParam});var n=t("plsW");const urlWithoutQueryParam=(e,r)=>{const t=n.router.getQueryParams();if(t&&t[r]&&delete t[r],t){let r=Object.keys(t).reduce(((e,r)=>`${e}${0===e.length?"?":"&"}${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`),"");return""===r&&(r="?"),n.router.withQueryParams(`${n.discovery.dropins[e].router_path}`,{search:r})}return n.router.withQueryParams(`${n.discovery.dropins[e].router_path}`)}},Issy:(e,r,t)=>{"use strict";t.d(r,{F:()=>getMessage,Z:()=>o});var n=t("plsW");const loadTranslations=e=>(t.p=n.discovery.dropins["nav-bar"].public_path,t("AWKe")(`./${e}.json`).catch((()=>t.e(818).then(t.t.bind(t,"t39f",19))))),getMessage=e=>loadTranslations(n.locale2.getLocale()).then((r=>{const t=r[e];if(t)return t;throw new Error(`No translation for ${e}`)})),o=loadTranslations},r16C:(e,r,t)=>{var n=t("YWiy");function SDCMsTeamsAcrobatTrefoil32N(e){return n.createElement("svg",e,[n.createElement("path",{d:"M29.55469,3.01074H2.44531c-.79688,0-1.44531.66895-1.44531,1.49219v23.01562c0,.82324.64844,1.49219,1.44531,1.49219h27.10938c.79688,0,1.44531-.66895,1.44531-1.49219V4.50293c0-.82324-.64844-1.49219-1.44531-1.49219ZM29.5,4.51074l.01068,4.50049-27.05463.0166-.01074-4.51709h27.05469ZM2.5,27.51855l-.04041-16.99072,27.05469-.0166.04041,16.99951-27.05469.00781Z",fill:"var(--iconFill, #464646)",strokeWidth:"0",key:0}),n.createElement("path",{d:"M6,6.02053c.54648,0,.99.44352.99.99s-.44352.99-.99.99-.99-.44352-.99-.99.44352-.99.99-.99",fill:"var(--iconFill, #464646)",fillRule:"evenodd",strokeWidth:"0",key:1}),n.createElement("g",{id:"b","data-name":"Outlined Mnemonics Logos",key:2},n.createElement("path",{id:"c","data-name":" 256",d:"M28.20837,16.86007c-.2893-.30739-.83778-.46409-1.63336-.46409-.43998.00603-.88599.04219-1.31995.11452-.27725-.27122-.53642-.56655-.75942-.88599-.17479-.23506-.33149-.48217-.47615-.74134.28328-.88599.4219-1.5972.4219-2.13362,0-.65093-.25917-1.35009-.98243-1.35009-.25314.00603-.48217.14465-.60874.3556-.30739.53039-.18684,1.62734.30739,2.73633-.17479.51231-.36163,1.00654-.59066,1.56104-.1989.47012-.41587.93421-.66299,1.38022-.74134.29533-2.31443,1.01859-2.46511,1.8202-.04822.23506.03616.47615.21698.63888.17479.15671.40382.23506.63888.22903.94627,0,1.89253-1.31392,2.53141-2.441.36163-.12054.72929-.23506,1.09695-.33149.40382-.10849.78956-.19287,1.15722-.25917,1.00051.87394,1.89253,1.00654,2.34457,1.00654.61477,0,.8438-.2652.92818-.4882.09041-.25314.03616-.54244-.14465-.74737ZM27.55141,17.31814c-.03616.17479-.21095.2893-.45807.2893-.07233,0-.13863-.00603-.20492-.02411-.45204-.10849-.88599-.32547-1.31392-.66299.31944-.04822.64491-.07233.9764-.07233.21698-.00603.43396.01205.65093.04822.18684.03013.40382.13862.34958.4219ZM23.23595,11.98409c.04219-.07835.12054-.1326.21095-.1326.22903,0,.27725.27725.27725.50628,0,.36766-.10849.95832-.30136,1.60925-.37971-1.02462-.32547-1.73582-.18684-1.98294ZM23.78442,16.82391c-.1989.05424-.39779.10849-.59669.16876.10849-.21698.20492-.42793.2893-.63285.10849-.27122.21698-.53642.31341-.80161.08438.1326.16876.25917.25917.38574.17479.24109.3556.47012.5545.6871,0-.00603-.54847.12054-.81969.19287ZM21.66889,18.02934c-.60874.9764-1.20543,1.59117-1.55501,1.59117-.05424,0-.11452-.01808-.15671-.05424-.0663-.05424-.09643-.13863-.07835-.22301.07233-.34958.75942-.85586,1.79007-1.31392Z",fill:"var(--iconAcrobatRed, #fa0f00)",strokeWidth:"0"})),n.createElement("path",{d:"M4.9249,26.5c-.8916-.00195-1.6167-.72656-1.61865-1.61621,0-1.44824,2.51758-4.22656,5.96191-4.22656,3.44336,0,5.96045,2.77734,5.96045,4.22363-.00439.88867-.72852,1.6123-1.61377,1.61816l-8.68994.00098ZM9.26816,22.15723c-2.80762,0-4.42236,2.27051-4.46191,2.73145,0,.05762.0542.11133.12012.11133l8.68408-.00098c.06299,0,.11768-.05469.11816-.12207-.04004-.4502-1.65625-2.71973-4.46045-2.71973ZM9.28916,19.87109c-1.79053,0-3.24707-1.45703-3.24707-3.24707s1.45654-3.24609,3.24707-3.24609,3.24756,1.45605,3.24756,3.24609-1.45703,3.24707-3.24756,3.24707ZM9.28916,14.87793c-.96338,0-1.74707.7832-1.74707,1.74609s.78369,1.74707,1.74707,1.74707,1.74756-.78418,1.74756-1.74707-.78418-1.74609-1.74756-1.74609Z",fill:"var(--iconFill, #464646)",strokeWidth:"0",key:3}),n.createElement("g",{key:4},[n.createElement("path",{d:"M12.66502,13.29419c.0946-.01758.18781-.04224.28558-.04224.86035,0,1.56055.69922,1.56055,1.55957,0,.46826-.21173.88379-.53943,1.16992.02911.21216.065.42261.065.64258,0,.37354-.05475.73218-.13672,1.08105,1.22119-.40186,2.11115-1.53955,2.11115-2.89355,0-1.6875-1.37305-3.05957-3.06055-3.05957-.61279,0-1.20459.18066-1.71143.52344l.03473.05127c.51984.24121.99329.56445,1.39111.96753Z",fill:"var(--iconFill, #464646)",strokeWidth:"0",key:0}),n.createElement("path",{d:"M13.5416,18.69165c-.17627.3606-.39569.69312-.6535.99585v.35742c.08563.04346.16699.09131.25043.13721,2.64325.13428,4.17175,2.25879,4.21051,2.69385-.00049.06738-.05566.12305-.11914.12305l-1.09595.00049c.29944.51538.4812,1.02441.54956,1.49976l.55127-.00024c.88477-.00586,1.60889-.72949,1.61426-1.61816,0-1.35303-2.20337-3.87036-5.30743-4.18921Z",fill:"var(--iconFill, #464646)",strokeWidth:"0",key:1})])])}SDCMsTeamsAcrobatTrefoil32N.defaultProps={id:"a","data-name":"Icons",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=SDCMsTeamsAcrobatTrefoil32N,SDCMsTeamsAcrobatTrefoil32N.default=SDCMsTeamsAcrobatTrefoil32N},AWKe:(e,r,t)=>{var n={"./cs-CZ.json":["08B1",650],"./da-DK.json":["acN1",507],"./de-DE.json":["EjZn",472],"./en-GB.json":["pUtz",195],"./en-US.json":["t39f",818],"./es-ES.json":["SPzx",178],"./fi-FI.json":["hrqw",128],"./fr-FR.json":["1xIn",46],"./hi-IN.json":["zPVF",629],"./id-ID.json":["ncw5",441],"./it-IT.json":["XeRS",723],"./ja-JP.json":["YtLb",834],"./ko-KR.json":["8Y6V",959],"./nb-NO.json":["G976",748],"./nl-NL.json":["SqX1",550],"./pl-PL.json":["u9al",494],"./pt-BR.json":["GN92",633],"./ro-RO.json":["kx8t",813],"./ru-RU.json":["v5cd",299],"./sv-SE.json":["Te3y",690],"./th-TH.json":["9Hge",960],"./tr-TR.json":["gQP8",13],"./zh-CN.json":["dI7b",887],"./zh-TW.json":["Rm8P",218],"./zz-ZY.json":["gwRR",707],"./zz-ZZ.json":["9hE6",965]};function webpackAsyncContext(e){if(!t.o(n,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=n[e],o=r[0];return t.e(r[1]).then((()=>t.t(o,19)))}webpackAsyncContext.keys=()=>Object.keys(n),webpackAsyncContext.id="AWKe",e.exports=webpackAsyncContext},YWiy:(e,r,t)=>{e.exports=t("2pFd")("GiK3")},plsW:(e,r,t)=>{e.exports=t("2pFd")("o4sN")},"2pFd":e=>{"use strict";e.exports=window.adobe_dc_sdk["dc-core"]},U2o4:e=>{"use strict";e.exports=window.adobe_dc_sdk["dc-extras"]},M2Fx:e=>{"use strict";e.exports=window.adobe_dc_sdk["dc-mobx"]},SEmX:e=>{"use strict";e.exports=window.adobe_dc_sdk["dc-spectrum-v3-core"]}},a={};function __webpack_require__(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=o,__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);__webpack_require__.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var _=2&n&&t;"object"==typeof _&&!~e.indexOf(_);_=r(_))Object.getOwnPropertyNames(_).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,__webpack_require__.d(o,a),o},__webpack_require__.d=(e,r)=>{for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,t)=>(__webpack_require__.f[t](e,r),r)),[])),__webpack_require__.u=e=>(({13:"translations-tr-TR-json",46:"translations-fr-FR-json",128:"translations-fi-FI-json",178:"translations-es-ES-json",192:"progress",195:"translations-en-GB-json",218:"translations-zh-TW-json",299:"translations-ru-RU-json",352:"legal-dialog",396:"focus-region",441:"translations-id-ID-json",452:"global-nav",472:"translations-de-DE-json",480:"upsell-banner",494:"translations-pl-PL-json",507:"translations-da-DK-json",550:"translations-nl-NL-json",560:"modal-promo",562:"unc-provider",629:"translations-hi-IN-json",633:"translations-pt-BR-json",650:"translations-cs-CZ-json",690:"translations-sv-SE-json",707:"translations-zz-ZY-json",719:"first-time-experience",723:"translations-it-IT-json",748:"translations-nb-NO-json",782:"menu-bar",811:"welcome-screen",813:"translations-ro-RO-json",818:"translations-en-US-json",834:"translations-ja-JP-json",862:"web-push-notification",863:"modal-container",887:"translations-zh-CN-json",920:"user-preferences",929:"global-nav-customizer",959:"translations-ko-KR-json",960:"translations-th-TH-json",965:"translations-zz-ZZ-json",993:"global-nav-store"}[e]||e)+"-chunk.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="adobe_dc_sdk.components.global-nav:",__webpack_require__.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var _,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){_=u;break}}_||(i=!0,(_=document.createElement("script")).charset="utf-8",_.timeout=120,__webpack_require__.nc&&_.setAttribute("nonce",__webpack_require__.nc),_.setAttribute("data-webpack",n+o),_.src=e),t[e]=[r];var onScriptComplete=(r,n)=>{_.onerror=_.onload=null,clearTimeout(l);var o=t[e];if(delete t[e],_.parentNode&&_.parentNode.removeChild(_),o&&o.forEach((e=>e(n))),r)return r(n)},l=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:_}),12e4);_.onerror=onScriptComplete.bind(null,_.onerror),_.onload=onScriptComplete.bind(null,_.onload),i&&document.head.appendChild(_)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={672:0};__webpack_require__.f.j=(r,t)=>{var n=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=__webpack_require__.p+__webpack_require__.u(r),_=new Error;__webpack_require__.l(a,(t=>{if(__webpack_require__.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;_.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",_.name="ChunkLoadError",_.type=o,_.request=a,n[1](_)}}),"chunk-"+r,r)}};var webpackJsonpCallback=(r,t)=>{var n,o,[a,_,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in _)__webpack_require__.o(_,n)&&(__webpack_require__.m[n]=_[n]);if(i)i(__webpack_require__)}for(r&&r(t);s<a.length;s++)o=a[s],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackJsonp-global-nav"]=self["webpackJsonp-global-nav"]||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})(),__webpack_require__.nc=void 0;var _={};(()=>{"use strict";__webpack_require__.r(_),__webpack_require__.d(_,{dropins:()=>k,providers:()=>w});var e=__webpack_require__("plsW"),r=__webpack_require__("YWiy"),t=__webpack_require__("DH/Q"),n=__webpack_require__("Issy");const o={context:"MenuBar"};class MenuGroupHome extends r.Component{constructor(){super(...arguments),this.getText=async()=>({label:await(0,n.F)("menu.group.home"),title:"",description:""}),this.getActions=()=>[],this.executeGroup=()=>e.router.history.push((0,t.c)(this.id,"group")),this.id="group-home",this.initializeGroup=e=>{const r=Object.assign(e,o);r.showCallback&&r.showCallback(!0)},this.load=()=>Promise.resolve()}}const a=MenuGroupHome,i={context:"MenuBar"};class MenuGroupDocuments extends r.Component{constructor(){super(...arguments),this.getText=async()=>{const e=await(0,n.F)("menu.group.documents");let r;try{r=await(0,n.F)("menu.bar.tooltip.group-documents")}catch(e){}return{label:e,tooltip:r,title:"",description:""}},this.getActions=()=>[],this.getTourId=()=>"ManageYourFilesStep",this.executeGroup=()=>{window.location.pathname.startsWith(e.discovery.dropins[this.id].router_path)||e.router.history.push((0,t.c)(this.id,"group"))},this.id="group-documents",this.initializeGroup=e=>{const r=Object.assign(e,i);r.showCallback&&r.showCallback(!0)},this.load=()=>Promise.resolve()}}const s=MenuGroupDocuments,c={context:"MenuBar"};class MenuGroupAllTools extends r.Component{constructor(){super(...arguments),this.getText=async()=>({label:await(0,n.F)("menu.group.all_tools"),title:await(0,n.F)("menu.group.all_tools.title"),description:await(0,n.F)("menu.group.all_tools.description")}),this.getActions=()=>[],this.executeGroup=()=>e.router.history.push((0,t.c)(this.id,"group")),this.id="group-all_tools",this.initializeGroup=e=>{const r=Object.assign(e,c);r.showCallback&&r.showCallback(!0)},this.load=()=>Promise.resolve()}}const u=MenuGroupAllTools;var l=__webpack_require__("r16C"),p=__webpack_require__.n(l);class LearnDownloadMsTeamsBootstrap extends r.Component{constructor(){super(),this.getIcon=()=>r.createElement(p(),null),this.getLabel=async()=>(0,n.F)("learn.downloadMSTeams.label"),this.getDescription=async()=>(0,n.F)("learn.downloadMSTeams.description"),this.getAriaLabel=async()=>(0,n.F)("learn.downloadMSTeams.label"),this.getCTALabel=async()=>(0,n.F)("learn.downloadMSTeams.ctaLabel"),this.id="learn-download-ms-teams",this.closeAction=()=>{},this.contexts={}}initializeAction(r){if(r&&r.showCallback){const t=e.auth2.getUserProfile(),n=t&&"type1"!==t.account_type;r.showCallback(n)}}executeAction(r){e.analytics.sendEvent({event:{workflow:"acrobat",subcategory:"learn-download-ms-teams",type:"discover",subtype:"clicked"},source:{click_context:r.context}}),window.open("https://teams.microsoft.com/l/entity/10aea93d-20cf-44c2-b4a5-284c5ef2e6a5/documentTab","_blank")}render(){return null}}const d=LearnDownloadMsTeamsBootstrap,b="user_preferences";const w={"focus-regions":{load:async function focusRegionProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(396).then(__webpack_require__.bind(__webpack_require__,"EptA")).then((e=>e.default))}},"nav-config":{load:async function loadNavProvider(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(993).then(__webpack_require__.bind(__webpack_require__,"R9kL")).then((e=>e.default))}},progress:{load:async function progressProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(192).then(__webpack_require__.bind(__webpack_require__,"aZzl")).then((e=>e.default))}},"progress-entry":{load:async function progressEntryLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(192).then(__webpack_require__.bind(__webpack_require__,"aFdX")).then((e=>e.default))}},"get-unc-obj":{load:async function uncProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(562).then(__webpack_require__.bind(__webpack_require__,"681u")).then((e=>e.default))}},"first-time-experience":{load:async function firstTimeExperienceProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(719).then(__webpack_require__.bind(__webpack_require__,"Ge78")).then((e=>e.default))}},"modal-promo":{load:async function modalPromoProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(560).then(__webpack_require__.bind(__webpack_require__,"aOAe")).then((e=>e.default))}},"web-push":{load:async function webPushNotificationProviderLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(862).then(__webpack_require__.bind(__webpack_require__,"7c4L")).then((e=>e.default))}}};let h;function executeAction(r){h=e.router.withQueryParams(e.router.history.location.pathname);const t=function appendQueryParams(r,t){const n=r.indexOf("?"),o=n>=0?r.substr(n):"",a=e.router.getQueryParams(o);let _=r.substring(0,n>=0?n:void 0);const i=_.length;i>0&&"/"===_.charAt(i-1)&&(_=_.substr(0,i-1));const s=t||window.location.search,c=e.router.getQueryParams(s);return Object.assign(c,a),`${_}/${Object.entries(c).reduce(((e,r)=>{let[t,n]=r;return`${e}${0===e.length?"?":"&"}${t}=${n}`}),"")}`}(h,`?dialog!dropin=${r}`);e.router.history.push(t)}const k={"upsell-banner":{id:"upsell_banner",label:"UpsellBanner",name:"UpsellBanner",load:async function loadUpsellBannerDropin(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(480).then(__webpack_require__.bind(__webpack_require__,"uijv")).then((e=>e.default))}},"nav-bar":{id:"nav-bar",label:"Nav Bar",name:"NavBar",load:async function loadNavBar(e){return e&&(__webpack_require__.p=e),Promise.all([__webpack_require__.e(400),__webpack_require__.e(452)]).then(__webpack_require__.bind(__webpack_require__,"ap2Z")).then((e=>e.default))}},"progress-indicator":{id:"progress-indicator",load:async function progressIndicatorDropinLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(192).then(__webpack_require__.bind(__webpack_require__,"U11i")).then((e=>e.default))}},"legal-dialog":{id:"legal-dialog",load:async function legalDialogDropinLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(352).then(__webpack_require__.bind(__webpack_require__,"M91o")).then((e=>e.default))}},"welcome-screen":{id:"welcome-screen",load:async function welcomeScreenDropinLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(811).then(__webpack_require__.bind(__webpack_require__,"aKyN")).then((e=>e.default))}},"menu-bar":{id:"menu-bar",load:async function menuBarLoad(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(782).then(__webpack_require__.bind(__webpack_require__,"6Vg8")).then((e=>e.default))}},user_preferences:{id:b,label:"UserPreferences",name:"UserPreferences",load:async function loadPreferences(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(920).then(__webpack_require__.bind(__webpack_require__,"jaZc")).then((e=>e.default))},executeAction:()=>{executeAction(b)}},"group-home":new a,"group-documents":new s,"group-all_tools":new u,"modal-container":{id:"modal-container",load:async function loadModalContainerDropin(e){return __webpack_require__.p=e,Promise.all([__webpack_require__.e(400),__webpack_require__.e(863)]).then(__webpack_require__.bind(__webpack_require__,"45AD")).then((e=>e.default))}},"global-nav-customizer":{id:"global-nav-customizer",load:async function loadGlobalNavCustomizer(e){return e&&(__webpack_require__.p=e),__webpack_require__.e(929).then(__webpack_require__.bind(__webpack_require__,"BuUJ")).then((e=>e.default))}},"learn-download-ms-teams":new d}})(),((window.adobe_dc_sdk=window.adobe_dc_sdk||{}).components=window.adobe_dc_sdk.components||{})["global-nav"]=_})();
//# sourceMappingURL=private/bootstrap.js.map