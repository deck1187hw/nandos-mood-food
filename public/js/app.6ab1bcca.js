(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},"184b":function(t,e,a){t.exports=a.p+"img/periometer-extra-hot.a10b3f92.svg"},"19ab":function(t,e,a){t.exports=a.p+"img/periometer-hot.34c79384.svg"},2:function(t,e){},3:function(t,e){},"30c0":function(t,e,a){t.exports=a.p+"img/barci.4fbcf184.svg"},"3dfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=a("2877"),s={},o=Object(i["a"])(s,n,r,!1,null,null,null);e["a"]=o.exports},4:function(t,e){},"4cbf":function(t,e,a){t.exports=a.p+"img/periometer-mild.6cc8920e.svg"},5:function(t,e){},5665:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"\n      relative\n      min-h-screen\n      font-mono\n      bg-gradient-to-r\n      from-blue-500\n      to-pink-500\n      py-6\n      flex flex-col\n      justify-center\n      relative\n      overflow-hidden\n      sm:py-12\n      bg-top-left bg-origin-border bg-clip-border bg-fixed bg-center bg-cover\n    ",style:"\n    background-image: linear-gradient("+t.spotify.gradient+"), url('"+t.spotify.image+"');\n    "},[t.spotify.artistName&&"OK"===t.action?n("div",{staticClass:"\n        fixed\n        right-5\n        bottom-5\n        opacity-10\n        text-right text-white\n        tracking-tighter\n      "},[n("div",{staticClass:"artist-name font-sans text-9xl font-black"},[t._v(" "+t._s(t.spotify.artistName)+" ")]),n("div",{staticClass:"artist-name font-sans font-bold"},[t._v(" "+t._s(t.spotify.songTitle)+" ")])]):t._e(),n("div",{staticClass:"\n        pt-5\n        top-5\n        pr-3\n        pl-3\n        pb-5\n        max-w-md\n        rounded-none\n        sm:px-10\n        mx-auto\n        text-white\n        z-20\n        xl:fixed\n        font-mono\n        sm:max-w-lg\n      "},["OK"===t.action.main?n("div",[n("div",{staticClass:"\n            audioStats\n            bg-black bg-opacity-20\n            grid grid-cols-1\n            text-right\n            pr-2\n            pb-2\n          "},[n("div",{staticClass:"stats-artist mb-3 mt-3 pr-5 xl:pr-1"},[t.spotify.artistName?n("div",{staticClass:"top-date"},[n("span",{staticClass:"font-extrabold"},[t._v(t._s(t.spotify.artistName))]),n("br"),n("span",{},[t._v(t._s(t.spotify.songTitle))]),n("br"),n("span",{},[t._v(t._s(t.spotify.albumName))])]):t._e()]),n("Positiveness",{attrs:{"audio-features":t.spotify.audioFeatures,"main-text":"Positiveness","key-positive":"valence"}}),n("Positiveness",{attrs:{"audio-features":t.spotify.audioFeatures,"main-text":"Danceability","key-positive":"danceability"}}),n("Positiveness",{attrs:{"audio-features":t.spotify.audioFeatures,"main-text":"Energy","key-positive":"energy"}}),n("div",{staticClass:"peri-total pb-3"},[t.spotify.audioFeatures?n("div",{staticClass:"`positiveness positiveness-total pt-1 pb-4`"},[t._v(" Total: "+t._s(t.spotify.periTotal.percentage)+"% - "),n("span",{staticClass:"pl-3 pr-3 text-white mr-5",style:"background-color:"+t.spotify.periTotal.peri.color},[t._v(" "+t._s(t.spotify.periTotal.peri.title))])]):t._e()])],1)]):t._e(),t.current.data.user?n("div",{staticClass:"\n          grid grid-flow-row-dense grid-cols-4 grid-rows-1\n          bg-black bg-opacity-30\n        "},[t._.get(t.current,"data.user.data.images[0]")?n("div",{},[n("div",{staticClass:"md:shrink-0"},[n("img",{staticClass:"pl-0",attrs:{src:t.current.data.user.data.images[0].url,alt:t.current.data.user.data.display_name}})])]):t._e(),n("div",{staticClass:"col-span-3"},[n("div",{staticClass:"pt-2 pl-5"},[n("div",{staticClass:"\n                uppercase\n                tracking-wide\n                text-sm text-white\n                font-semibold\n                text-center\n              "},[t._v(" "+t._s(t.current.data.user.data.display_name)+" ")]),n("div",{staticClass:"mt-2 text-white uppercase text-center"},[n("a",{staticClass:"mr-2 text-xs underline",attrs:{href:"javascript:void(0)",title:"Logout"},on:{click:t.logout}},[t._v("Logout")])]),n("div",{staticClass:"text-center top-date font-light text-xs mt-2 italic"},[t._v(" "+t._s(t.now)+" ")])])])]):t._e()]),n("div",{staticClass:"\n        relative\n        px-6\n        pt-5\n        pb-8\n        bg-white bg-opacity-80\n        shadow-xl\n        sm:max-w-lg sm:mx-auto sm:px-10\n        rounded-none\n      "},[n("div",{staticClass:"max-w-md mx-auto"},[n("div",{staticClass:"divide-y"},["LOADING"===t.action.main?n("div",{staticClass:"text-center pt-5 pb-5 animate-pulse"},[t._m(0),n("h2",{staticClass:"text-2xl"},[t._v("Loading...")])]):t._e(),"OK"===t.action.main?n("div",{staticClass:"grid grid-cols-1 gap-3 place-items-center"},[n("Transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",[t.spotify.audioFeatures?n("img",{staticClass:"mb-10",attrs:{src:t.imagePath(t.spotify.periTotal.peri.title),alt:t.spotify.periTotal.peri.title}}):t._e()])]),n("Transition",{attrs:{name:"fade",mode:"out-in"}},[n("Albumcover",{attrs:{"spotify-image":t.spotify.image,"peri-ometer":t.spotify.periTotal.peri.title}})],1),t.current.data.user?n("ShareNetwork",{staticClass:"text-black",attrs:{network:"facebook",url:""+t.current.data.user.data.external_urls.spotify,title:"Listening to "+t.spotify.artistName,description:"This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You.",quote:"Listening to "+t.spotify.periTotal.peri.title+"'s "+t.spotify.artistName,hashtags:t.spotify.artistName.replace(/\s/g,"")+", nando's"}},[t._v(" Share on Facebook ")]):t._e(),t.current.data.user?n("div",{},[n("div",{staticClass:"grid grid-cols-2 gap-3 place-items-center opacity-50"},[t._m(1),n("div",[n("a",{attrs:{href:t.current.data.user.data.external_urls.spotify,target:"_blank",title:"Spotify profile"}},[n("img",{staticClass:"items-center justify-center pb-2",staticStyle:{width:"140px"},attrs:{src:a("f06f")}})])])])]):t._e()],1):t._e(),"NOT_LISTENING"===t.action.main?n("div",{staticClass:"text-black"},[n("Nolistening")],1):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},["NOT_LOGGED_IN"===t.action.main?n("div",[n("div",{staticClass:"grid grid-cols-2 gap-3 place-items-center mb-7"},[n("img",{staticClass:"items-center justify-center opacity-30",staticStyle:{width:"140px"},attrs:{src:a("f06f")}}),n("img",{staticClass:"\n                    items-center\n                    grayscale\n                    justify-center\n                    opacity-30\n                    mb-3\n                    nandos-logo\n                  ",staticStyle:{width:"120px"},attrs:{src:a("30c0")}})]),n("a",{staticClass:"\n                  flex\n                  items-center\n                  justify-center\n                  rounded-none\n                  w-full\n                  px-14\n                  py-2\n                  mt-2\n                  space-x-3\n                  text-2xl text-center\n                  bg-transparent\n                  transition-colors\n                  duration-200\n                  transform\n                  border\n                  font-sans\n                  dark:text-white\n                  dark:border-white\n                  dark:hover:bg-white\n                  dark:hover:text-black\n                  hover:bg-black hover:text-white\n                  subpixel-antialiased\n                  font-bold\n                  border-black\n                  uppercase\n                  text-black\n                  tracking-wide\n                  animate-bounce\n                ",attrs:{href:"javascript:void(0)"},on:{click:t.login}},[n("span",{staticClass:"text-xl"},[t._v("What are you listening?")])]),n("p",{staticClass:"text-center text-sm mt-7 opacity-60 text-black"},[t._v(" Click above to give permission "),n("br"),n("small",[t._v("We won't share any information with anyone or store it anywhere")])])]):t._e()]),n("div",{staticClass:"divide-y divide-gray-400/50 my-5"})],1)])]),t._m(2)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                flex\n                items-center\n                justify-center\n                space-x-2\n                animate-bounce\n                pb-3\n              "},[a("div",{staticClass:"w-8 h-8 bg-black rounded-full"}),a("div",{staticClass:"w-8 h-8 bg-black rounded-full"}),a("div",{staticClass:"w-8 h-8 bg-black rounded-full"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"https://www.nandos.co.uk/",target:"_blank",title:"Nando's"}},[n("img",{staticClass:"items-center justify-center mb-5 nandos-logo",staticStyle:{width:"120px"},attrs:{src:a("30c0")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n        pt-5\n        bottom-5\n        right-5\n        pr-3\n        pl-3\n        pb-5\n        max-w-md\n        rounded-none\n        sm:px-10\n        mx-auto\n        text-white\n        z-20\n        xl:fixed\n        font-mono\n        sm:max-w-lg\n      "},[a("div",{staticClass:"copy"},[t._v(" Built with love by "),a("a",{attrs:{href:"https://miguelpuig.com/",target:"_blank"}},[t._v(" deck1187hw")])])])}],i=a("1da1"),s=(a("96cf"),a("2ef0")),o=a.n(s),c=(a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("9861"),a("7a8d")),l=a.n(c),u=a("ec26"),d=a("bc3a"),p=a.n(d),f="spotify_auth_state",m="spotify_code_verifier",g="spotify_access_token",h="spotify_access_token_expires_in",b="spotify_access_token_refresh",v="user-read-playback-state",y="98a7381e0e614cfbbbd57bc772c8fed1",_="https://perimood.miguelpuig.com/callback",x="S256",w="https://accounts.spotify.com";function k(){var t=l()(),e=t.code_challenge,a=t.code_verifier,n=Object(u["a"])();return localStorage.setItem(m,a),localStorage.setItem(f,n),"".concat(w,"/authorize?")+new URLSearchParams({client_id:y,response_type:"code",redirect_uri:_,code_challenge_method:x,show_dialog:!1,code_challenge:e,scope:v,state:n}).toString()}function C(){window.location.href=k()}function P(){localStorage.setItem(g,""),localStorage.setItem(h,""),localStorage.setItem(b,"")}function O(t,e){return S.apply(this,arguments)}function S(){return S=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=localStorage.getItem(f),localStorage.removeItem(f),e===n){t.next=4;break}return t.abrupt("return",{error:!0});case 4:return r={headers:{"content-type":"application/x-www-form-urlencoded"}},i={client_id:y,grant_type:"authorization_code",code:a,redirect_uri:_,code_verifier:localStorage.getItem(m)},t.prev=6,t.next=9,p.a.post("".concat(w,"/api/token"),new URLSearchParams(i).toString(),r);case 9:return s=t.sent,t.abrupt("return",s.data);case 13:return t.prev=13,t.t0=t["catch"](6),t.abrupt("return",{error:!0});case 16:case"end":return t.stop()}}),t,null,[[6,13]])}))),S.apply(this,arguments)}function E(){return I.apply(this,arguments)}function I(){return I=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=localStorage.getItem(b),a={headers:{"content-type":"application/x-www-form-urlencoded"}},n={client_id:y,grant_type:"refresh_token",refresh_token:e},t.prev=3,t.next=6,p.a.post("".concat(w,"/api/token"),new URLSearchParams(n).toString(),a);case 6:return r=t.sent,N(r.data),t.abrupt("return",r.data);case 11:return t.prev=11,t.t0=t["catch"](3),t.abrupt("return",{error:!0});case 14:case"end":return t.stop()}}),t,null,[[3,11]])}))),I.apply(this,arguments)}function N(t){var e=t.access_token,a=t.expires_in,n=t.refresh_token;localStorage.setItem(g,e),localStorage.setItem(h,Math.floor(Date.now()/1e3)+a),localStorage.setItem(b,n)}function T(){return localStorage.getItem(g)}var j=C;function A(t){var e={title:"",color:""};return t>=0&&t<.2&&(e={title:"extra-mild",color:"#5a642d"}),t>=.2&&t<.4&&(e={title:"mild",color:"#97c31e"}),t>=.4&&t<.6&&(e={title:"medium",color:"#faa500"}),t>=.6&&t<.8&&(e={title:"hot",color:"#ce1a23"}),t>=.8&&t<1&&(e={title:"extra-hot",color:"#46230f"}),e}function R(t){var e=t.valence+t.danceability+t.energy,a=e/3,n=A(a);return{peri:n,percentage:Math.ceil(100*a),tf:a}}a("e9c4");var F="https://api.spotify.com/v1";function U(){return L.apply(this,arguments)}function L(){return L=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={user:null,currentlyPlaying:null,audioFeatures:null},t.next=3,z();case 3:if(e.user=t.sent,401!==e.user.status&&""!==T()){t.next=15;break}return t.next=7,E();case 7:if(a=t.sent,!a.access_token){t.next=14;break}return t.next=11,z();case 11:e.user=t.sent,t.next=15;break;case 14:return t.abrupt("return",{status:401,data:"Oops no log in at all..."});case 15:if(200===e.user.status){t.next=17;break}return t.abrupt("return",{status:e.user.status,data:e.user.data});case 17:return t.next=19,M();case 19:if(e.currentlyPlaying=t.sent,200===e.currentlyPlaying.status){t.next=22;break}return t.abrupt("return",{status:e.currentlyPlaying.status,data:e.currentlyPlaying.data});case 22:if(o.a.get(e.currentlyPlaying,"data.item.id")){t.next=24;break}return t.abrupt("return",{status:204,data:"No song identified"});case 24:return t.next=26,V(e.currentlyPlaying.data.item.id);case 26:if(e.audioFeatures=t.sent,o.a.get(e.audioFeatures,"data.audio_features[0]")){t.next=29;break}return t.abrupt("return",{status:204,data:"No audio features identified"});case 29:return t.abrupt("return",{status:200,data:e});case 30:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function M(){return D.apply(this,arguments)}function D(){return D=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={method:"get",url:"".concat(F,"/me/player/currently-playing"),headers:{Authorization:"Bearer ".concat(T())}},t.prev=1,t.next=4,p()(e);case 4:return a=t.sent,t.abrupt("return",{status:a.status||204,data:a.data});case 8:if(t.prev=8,t.t0=t["catch"](1),!o.a.get(t.t0,"response.data.error.status")){t.next=14;break}return t.abrupt("return",{status:t.t0.response.data.error.status,data:t.t0.response.data.error.message});case 14:throw{status:500,message:JSON.stringify(t.t0)};case 15:case"end":return t.stop()}}),t,null,[[1,8]])}))),D.apply(this,arguments)}function V(t){return $.apply(this,arguments)}function $(){return $=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=3;break}throw"Specify some track ids";case 3:return a={method:"get",url:"".concat(F,"/audio-features?ids=").concat(e),headers:{Authorization:"Bearer ".concat(T())}},t.next=6,p()(a);case 6:return n=t.sent,t.abrupt("return",{status:n.status,data:n.data});case 10:if(t.prev=10,t.t0=t["catch"](0),!o.a.get(t.t0,"response.data.error.status")){t.next=16;break}return t.abrupt("return",{status:t.t0.response.data.error.status,data:t.t0.response.data.error.message});case 16:throw{status:500,message:JSON.stringify(t.t0)};case 17:case"end":return t.stop()}}),t,null,[[0,10]])}))),$.apply(this,arguments)}function z(){return Y.apply(this,arguments)}function Y(){return Y=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("".concat(F,"/me"),{headers:{Authorization:"Bearer ".concat(T())}});case 3:return e=t.sent,t.abrupt("return",{status:e.status,data:e.data});case 7:if(t.prev=7,t.t0=t["catch"](0),!o.a.get(t.t0,"response.data.error.status")){t.next=13;break}return t.abrupt("return",{status:t.t0.response.data.error.status,data:t.t0.response.data.error.message});case 13:throw{status:500,message:JSON.stringify(t.t0)};case 14:case"end":return t.stop()}}),t,null,[[0,7]])}))),Y.apply(this,arguments)}var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.audioFeatures?a("div",{class:"positiveness positiveness-"+t.keyPositive+" pt-1 pb-1"},[t._v(" "+t._s(t.mainText)+": "+t._s(Math.ceil(100*t.audioFeatures[t.keyPositive]))+"% - "),a("span",{class:"pl-1 pr-1 w-44\tbadge-"+t.getPositiveness(t.keyPositive,t.audioFeatures).peri.title+" text-white",style:"background-color:"+t.getPositiveness(t.keyPositive,t.audioFeatures).peri.color+"; border:none"},[t._v(t._s(t.getPositiveness(t.keyPositive,t.audioFeatures).peri.title))]),a("Question",{staticClass:"invisible xl:visible",attrs:{"main-text":t.getExplanation()}})],1):t._e()},G=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"inline-block pl-1 tooltip cursor-help",attrs:{"data-tip":t.mainText}},[a("svg",{staticClass:"bi bi-question-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),a("path",{attrs:{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"}})])])},J=[],K={name:"Question",methods:{},props:["mainText"]},Q=K,q=a("2877"),W=Object(q["a"])(Q,H,J,!1,null,null,null),X=W.exports,Z={components:{Question:X},props:["mainText","audioFeatures","keyPositive"],data:function(){return{explanation:"",positiveness:{peri:null,percentage:null,tf:null}}},name:"Positiveness",created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.positiveness={};case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getExplanation:function(){switch(this.keyPositive){case"valence":return"Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (happy, cheerful, euphoric), while tracks with low valence sound more negative (sad, depressed, angry).";case"danceability":return"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.";case"energy":return"Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."}},getPositiveness:function(t,e){var a=e[t],n=A(a);return{peri:n,percentage:Math.ceil(100*a),tf:a}}}},tt=Z,et=(a("a7a9"),Object(q["a"])(tt,B,G,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"grid grid-cols-3 gap-2 place-items-center"},[a("div",{staticClass:"opacity-30"},[a("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}})])]),a("div",{staticClass:"opacity-100",staticStyle:{color:"#1db954"}},[a("svg",{staticClass:"h-16 w-16",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clip-rule":"evenodd"}}),a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"}})])]),a("div",{staticClass:"opacity-30"},[a("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])])]),t._m(0),a("div",{staticClass:"grid grid-cols-2 gap-3 place-items-center"})])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-cols-1 gap-3 place-items-center pt-10 pb-10"},[a("h1",{staticClass:"text-3xl opacity-60 font-extrabold"},[t._v("Not playing?")]),a("p",[t._v("Play something on Spotify and come back.")])])}],it={name:"Playback",methods:{next:function(){}}},st=it,ot=Object(q["a"])(st,nt,rt,!1,null,null,null),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("a",{staticClass:"\n        inset-0\n        z-10\n        h-full\n        bg-black\n        text-center\n        flex flex-col\n        items-center\n        justify-center\n        opacity-0\n        hover:opacity-100\n        bg-opacity-60\n        duration-300\n      "}),a("div",{staticClass:"relative"},[a("div",{staticClass:"flex flex-wrap content-center"},[t.spotifyImage?a("img",{key:t.spotifyImage,staticClass:"mx-auto",attrs:{src:t.spotifyImage,alt:""}}):t._e()])]),t._m(0),a("div",{staticClass:"flex flex-wrap  place-items-center"},[a("div",{staticClass:"w-full sm:w-1/2 mb-4"},[a("a",{staticClass:"\n              flex\n              items-center\n              justify-center\n              rounded-none\n              w-full\n              px-10\n              py-2\n              text-base\n              bg-transparent\n              transition-colors\n              duration-200\n              transform\n              border\n              hover:bg-white hover:text-black hover:border-black\n              dark:bg-white dark:text-black dark:border-black\n              subpixel-antialiased\n              border-black\n              uppercase\n              text-black\n              tracking-wide\n            ",attrs:{href:"https://order.nandos.co.uk/store/store-selection?sauce="+t.periOmeter,target:"_blank"}},[a("span",{staticClass:"text-xl"},[t._v("Delivery")])])]),a("div",{staticClass:"w-full sm:w-1/2 mb-4"},[a("a",{staticClass:"\n         \n             flex\n              items-center\n              justify-center\n              rounded-none\n              w-full\n              px-10\n              py-2\n              text-base\n              bg-transparent\n              transition-colors\n              duration-200\n              transform\n              border\n              hover:bg-white hover:text-black hover:border-black\n              dark:bg-white dark:text-black dark:border-black\n              subpixel-antialiased\n              border-black\n              uppercase\n              text-black\n              tracking-wide\n            ",attrs:{href:"https://www.nandos.co.uk/order/search?sauce="+t.periOmeter,target:"_blank"}},[a("span",{staticClass:"text-xl"},[t._v("Collect")])])])])])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-cols-1 gap-3 place-items-center pb-4 text-black pt-8 text-center"},[a("div",{staticClass:"hungry            items-center\n              justify-center"},[a("h2",{staticClass:"text-2xl"},[t._v("Hungry?")]),a("p",{staticClass:"lead"},[t._v("Order something for")])])])}],dt={name:"Albumcover",props:["spotifyImage","periOmeter"],methods:{}},pt=dt,ft=Object(q["a"])(pt,lt,ut,!1,null,null,null),mt=ft.exports,gt=a("9c32"),ht="dd MMMM yyyy HH:mm:ss",bt={image:null,songTitle:null,albumName:null,albumYear:null,artistName:null,audioFeatures:null,gradient:"rgba(42, 51, 61, 1), rgba(66, 78, 92, 1)"},vt={id:null,data:{user:null,audioFeatures:null,currentlyPlaying:null}},yt={name:"Home",metaInfo:{title:"Nando's Peri Mood",htmlAttrs:{lang:"en",amp:!1},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Find out the mood of a song based on its valance, danceability and energy"}]},components:{Positiveness:at,Nolistening:ct,Albumcover:mt},data:function(){return{envs:Object({VUE_APP_SILENT_REFRESH_SECONDS:"60",VUE_APP_SPOTIFY_API_URL:"https://api.spotify.com",VUE_APP_SPOTIFY_ACCOUNT_URL:"https://accounts.spotify.com",VUE_APP_SPOTIFY_CLIENT_ID:"98a7381e0e614cfbbbd57bc772c8fed1",VUE_APP_SPOTIFY_REDIRECT_URI:"https://perimood.miguelpuig.com/callback",VUE_APP_NANDOS_API_SERVICE_URL:"https://perimood.miguelpuig.com/",NODE_ENV:"production",BASE_URL:"/"}),periTotal:null,action:{main:null},now:this.$date(new Date,ht),current:vt,spotify:bt,spoti:null,periometer:"medium"}},methods:{login:function(){j()},imagePath:function(t){return a("8b8d")("./periometer-"+t+".svg")},logout:function(){P(),location.reload()},getToken:function(){return T()},refreshUi:function(){this.spotify.image=this.spoti.getImage(),this.spotify.songTitle=this.spoti.getSongTitle(),this.spotify.albumName=this.spoti.getAlbumName(),this.spotify.albumYear=this.spoti.getAlbumYear(),this.spotify.artistName=this.spoti.getArtistName(),this.spotify.gradient=this.spoti.getGradient(),this.spotify.audioFeatures=this.spoti.getAudioFeatures(),this.spotify.periTotal=R(this.spotify.audioFeatures)},refreshApi:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e=t.sent,200===e.status&&(this.current.id=e.data.currentlyPlaying.data.item.id,this.current.data=e.data,this.action.main="OK"),204===e.status&&(this.action.main="NOT_LISTENING",this.current.data=vt),401===e.status&&(this.current.data=e.data,this.current.data=vt,this.action.main="NOT_LOGGED_IN");case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),computed:{currentTrackId:function(){return this.current.id},_:function(){return o.a}},watch:{currentTrackId:function(){this.spoti=new gt(this.current),this.refreshUi()}},mounted:function(){var t=this;this.action.main="LOADING",this.refreshApi(),window.setInterval((function(){"OK"===t.action.main&&t.refreshApi()}),5e3),window.setInterval((function(){t.now=t.$date(new Date,ht)}),1e3)}},_t=yt,xt=(a("ba17"),Object(q["a"])(_t,n,r,!1,null,"1cb62e75",null)),wt=xt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("About")]),a("router-link",{attrs:{to:"/"}},[t._v("Home!")])],1)},Ct=[],Pt={},Ot=Pt,St=Object(q["a"])(Ot,kt,Ct,!1,null,null,null),Et=St.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n    min-h-screen\n    bg-gradient-to-r\n    from-blue-500\n    to-pink-500\n    py-6\n    flex flex-col\n    justify-center\n    relative\n    overflow-hidden\n    sm:py-12\n    bg-top-left bg-origin-border bg-clip-border bg-fixed bg-center bg-cover\n  "})},Nt=[];a("ac1f"),a("1276");function Tt(){var t,e={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.href.split("?")[1];while(t=a.exec(n))e[t[1]]=decodeURIComponent(t[2]);return e}var jt={name:"Callback",data:function(){return{envs:Object({VUE_APP_SILENT_REFRESH_SECONDS:"60",VUE_APP_SPOTIFY_API_URL:"https://api.spotify.com",VUE_APP_SPOTIFY_ACCOUNT_URL:"https://accounts.spotify.com",VUE_APP_SPOTIFY_CLIENT_ID:"98a7381e0e614cfbbbd57bc772c8fed1",VUE_APP_SPOTIFY_REDIRECT_URI:"https://perimood.miguelpuig.com/callback",VUE_APP_NANDOS_API_SERVICE_URL:"https://perimood.miguelpuig.com/",NODE_ENV:"production",BASE_URL:"/"}),msg:""}},methods:{},created:function(){var t=this,e=Tt(),a=e.error,n=e.code,r=e.state;a&&(this.msg="There was an error during the authentication"),O(r,n).then((function(e){e.error?(t.msg="Access token retrive error",t.$router.push("/")):(N(e),t.$router.push("/"))}))}},At=jt,Rt=Object(q["a"])(At,It,Nt,!1,null,null,null),Ft=Rt.exports;e["a"]=[{path:"/",component:wt},{path:"/about",component:Et},{path:"/callback",component:Ft}]},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=a("8c4f"),r=a("3dfd"),i=a("58ca"),s=(a("a766"),a("4c9f")),o=a.n(s),c=a("bd8c"),l=a.n(c),u=a("5665");e["a"].use(n["a"]),e["a"].use(o.a),e["a"].use(i["a"],{refreshOnceOnNavigation:!0}),e["a"].use(l.a);var d=new n["a"]({mode:"history",base:t,routes:u["a"]});new e["a"]({router:d,render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,"/")},6:function(t,e){},7:function(t,e){},8:function(t,e){},"8b8d":function(t,e,a){var n={"./periometer-extra-hot.svg":"184b","./periometer-extra-mild.svg":"d07c","./periometer-hot.svg":"19ab","./periometer-medium.svg":"c5b3","./periometer-mild.svg":"4cbf"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="8b8d"},9:function(t,e){},"9c32":function(t,e,a){var n=a("970b").default,r=a("5bc3").default;a("b0c0"),a("99af");var i=a("2ef0"),s=function(){"use strict";function t(e){n(this,t),this.data=e}return r(t,[{key:"getPeriAttrs",value:function(t){var e={title:"",color:""};return t>=0&&t<.2&&(e={title:"extra-mild",color:"#5a642d"}),t>=.2&&t<.4&&(e={title:"mild",color:"#97c31e"}),t>=.4&&t<.6&&(e={title:"medium",color:"#faa500"}),t>=.6&&t<.8&&(e={title:"hot",color:"#ce1a23"}),t>=.8&&t<1&&(e={title:"extra-hot",color:"#46230f"}),e}},{key:"getImage",value:function(){return i.get(this.data,"data.currentlyPlaying.data.item.album.images[0].url")?this.data.data.currentlyPlaying.data.item.album.images[0].url:null}},{key:"getSongTitle",value:function(){return i.get(this.data,"data.currentlyPlaying.data.item.name")?this.data.data.currentlyPlaying.data.item.name:null}},{key:"getAlbumName",value:function(){return i.get(this.data,"data.currentlyPlaying.data.item.album.name")?this.data.data.currentlyPlaying.data.item.album.name:null}},{key:"getAlbumYear",value:function(){return i.get(this.data,"data.currentlyPlaying.data.item.album.release_date")?this.data.data.currentlyPlaying.data.item.album.release_date:null}},{key:"getArtistName",value:function(){return i.get(this.data,"data.currentlyPlaying.data.item.album.artists[0].name")?this.data.data.currentlyPlaying.data.item.album.artists[0].name:null}},{key:"getAudioFeatures",value:function(){return i.get(this.data,"data.audioFeatures.data.audio_features[0]")?this.data.data.audioFeatures.data.audio_features[0]:null}},{key:"getGradient",value:function(){var t=.9,e=["rgba(65, 88, 208, ".concat(t,"), rgba(200, 80, 192, ").concat(t,"), rgba(255, 204, 112, ").concat(t,")"),"rgba(217, 175, 217, ".concat(t,"), rgba(151, 217, 225, ").concat(t,")"),"rgba(255, 229, 59, ".concat(t,"), rgba(255, 37, 37, ").concat(t,")")];return e[Math.floor(Math.random()*e.length)]}}]),t}();t.exports=s},a766:function(t,e,a){},a7a9:function(t,e,a){"use strict";a("bb63")},ba17:function(t,e,a){"use strict";a("d22a")},bb63:function(t,e,a){},c5b3:function(t,e,a){t.exports=a.p+"img/periometer-medium.60ee98f7.svg"},d07c:function(t,e,a){t.exports=a.p+"img/periometer-extra-mild.eee35240.svg"},d22a:function(t,e,a){},f06f:function(t,e,a){t.exports=a.p+"img/Spotify-Black-Logo.wine.d72f6cea.svg"}});
//# sourceMappingURL=app.6ab1bcca.js.map