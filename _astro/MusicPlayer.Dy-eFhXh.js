import{b as H,e as Tt,s as z,c as _t,o as Lt,a as Dt}from"./attributes.1zgctzZK.js";import{i as Mt}from"./legacy.CACZ8Jn1.js";import{ap as It,al as Rt,bo as zt,bp as Ht,e as Bt,u as Vt,bq as At,br as Ft,q as Nt,bs as rt,bt as pt,b as Q,a5 as st,a6 as J,a as p,p as Z,c as d,d as c,g as k,t as L,f as C,a7 as X,aa as T,h as v,ab as ut,m as Kt,a3 as jt,s as Xt,bu as Wt,aA as qt,N as vt}from"./utils.DdM9Azmo.js";import{a as Ot,s as N}from"./render.B6M796YU.js";import{i as V}from"./if.BcBnl55n.js";import{I as M}from"./Icon.CjwgqsEJ.js";import{m as ht}from"./config.5gSeKfG2.js";import{C as mt,P as Yt,a as Ut,N as Gt,s as Jt,m as S}from"./PrevButton.s8K_CKQW.js";import{p as G}from"./props.D1AUPjMz.js";import{I as W}from"./zh_TW.b8nCSsFr.js";import{i as q}from"./translation.1rPM8tUZ.js";import{a as Qt}from"./actions.CkjFByyX.js";import{e as Zt,i as $t}from"./each.SCNPSAgR.js";const te=()=>performance.now(),j={tick:i=>requestAnimationFrame(i),now:()=>te(),tasks:new Set};function Pt(){const i=j.now();j.tasks.forEach(t=>{t.c(i)||(j.tasks.delete(t),t.f())}),j.tasks.size!==0&&j.tick(Pt)}function ee(i){let t;return j.tasks.size===0&&j.tick(Pt),{promise:new Promise(e=>{j.tasks.add(t={c:i,f:e})}),abort(){j.tasks.delete(t)}}}function lt(i,t){pt(()=>{i.dispatchEvent(new CustomEvent(t))})}function ie(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const t=i.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function xt(i){const t={},e=i.split(";");for(const r of e){const[o,a]=r.split(":");if(!o||a===void 0)break;const f=ie(o.trim());t[f]=a.trim()}return t}const ne=i=>i;function re(i,t,e,r){var o=(i&At)!==0,a="both",f,m=t.inert,w=t.style.overflow,n,u;function g(){return pt(()=>f??=e()(t,r?.()??{},{direction:a}))}var b={is_global:o,in(){t.inert=m,n=ft(t,g(),u,1,()=>{lt(t,"introend"),n?.abort(),n=f=void 0,t.style.overflow=w})},out(P){t.inert=!0,u=ft(t,g(),n,0,()=>{lt(t,"outroend"),P?.()})},stop:()=>{n?.abort(),u?.abort()}},y=It;if((y.nodes.t??=[]).push(b),Ot){var _=o;if(!_){for(var l=y.parent;l&&(l.f&Rt)!==0;)for(;(l=l.parent)&&(l.f&zt)===0;);_=!l||(l.f&Ht)!==0}_&&Bt(()=>{Vt(()=>b.in())})}}function ft(i,t,e,r,o){var a=r===1;if(Ft(t)){var f,m=!1;return Nt(()=>{if(!m){var P=t({direction:a?"in":"out"});f=ft(i,P,e,r,o)}}),{abort:()=>{m=!0,f?.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(e?.deactivate(),!t?.duration&&!t?.delay)return lt(i,a?"introstart":"outrostart"),o(),{abort:rt,deactivate:rt,reset:rt,t:()=>r};const{delay:w=0,css:n,tick:u,easing:g=ne}=t;var b=[];if(a&&e===void 0&&(u&&u(0,1),n)){var y=xt(n(0,1));b.push(y,y)}var _=()=>1-r,l=i.animate(b,{duration:w,fill:"forwards"});return l.onfinish=()=>{l.cancel(),lt(i,a?"introstart":"outrostart");var P=e?.t()??1-r;e?.abort();var h=r-P,E=t.duration*Math.abs(h),s=[];if(E>0){var I=!1;if(n)for(var A=Math.ceil(E/16.666666666666668),B=0;B<=A;B+=1){var O=P+h*g(B/A),at=xt(n(O,1-O));s.push(at),I||=at.overflow==="hidden"}I&&(i.style.overflow="hidden"),_=()=>{var $=l.currentTime;return P+h*g($/E)},u&&ee(()=>{if(l.playState!=="running")return!1;var $=_();return u($,1-$),!0})}l=i.animate(s,{duration:E,fill:"forwards"}),l.onfinish=()=>{_=()=>r,u?.(r,1-r),o()}},{abort:()=>{l&&(l.cancel(),l.effect=null,l.onfinish=rt)},deactivate:()=>{o=rt},reset:()=>{r===0&&u?.(1,0)},t:()=>_()}}var ae=C('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),oe=C('<div class="text-xs text-30 mt-1"> </div>'),le=C('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function kt(i,t){Q(t,!0);const e=G(t,"showTime",3,!1),r=G(t,"size",3,"mini");function o(n){if(!Number.isFinite(n)||n<0)return"0:00";const u=Math.floor(n/60),g=Math.floor(n%60);return`${u}:${g.toString().padStart(2,"0")}`}var a=st(),f=J(a);{var m=n=>{var u=ae(),g=d(u),b=d(g,!0);c(g);var y=k(g,2),_=d(y,!0);c(y),c(u),L(()=>{N(b,t.song.title),N(_,t.song.artist)}),p(n,u)},w=n=>{var u=le(),g=d(u),b=d(g,!0);c(g);var y=k(g,2),_=d(y,!0);c(y);var l=k(y,2);{var P=h=>{var E=oe(),s=d(E);c(E),L((I,A)=>N(s,`${I??""} / ${A??""}`),[()=>o(t.currentTime),()=>o(t.duration)]),p(h,E)};V(l,h=>{e()&&h(P)})}c(u),L(()=>{N(b,t.song.title),N(_,t.song.artist)}),p(n,u)};V(f,n=>{r()==="mini"?n(m):n(w,-1)})}p(i,a),Z()}var se=C('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),ue=C('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),ce=C("<!> <!> <!>",1),de=C("<div><!></div>");function Ct(i,t){Q(t,!0);const e=G(t,"size",3,"mini"),r=G(t,"showControls",3,!1),o=G(t,"showPlaylist",3,!1);var a=de(),f=d(a);{var m=n=>{var u=se(),g=J(u);mt(g,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",interactive:!0,get onclick(){return t.onCoverClick}});var b=k(g,2),y=d(b);kt(y,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},size:"mini"}),c(b);var _=k(b,2),l=d(_),P=d(l);M(P,{icon:"material-symbols:visibility-off",class:"text-lg"}),c(l);var h=k(l,2),E=d(h);M(E,{icon:"material-symbols:expand-less",class:"text-lg"}),c(h),c(_),L((s,I)=>{z(b,"aria-label",s),z(l,"title",I)},[()=>q(W.musicPlayerExpand),()=>q(W.musicPlayerHide)]),T("click",b,function(...s){t.onInfoClick?.apply(this,s)}),T("keydown",b,s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),t.onInfoClick?.())}),T("click",l,s=>{s.stopPropagation(),t.onHideClick?.()}),T("click",h,s=>{s.stopPropagation(),t.onExpandClick?.()}),p(n,u)},w=n=>{var u=ce(),g=J(u);mt(g,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded"});var b=k(g,2);kt(b,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},showTime:!0,size:"expanded"});var y=k(b,2);{var _=l=>{var P=ue(),h=d(P),E=d(h);M(E,{icon:"material-symbols:visibility-off",class:"text-lg"}),c(h);var s=k(h,2);let I;var A=d(s);M(A,{icon:"material-symbols:queue-music",class:"text-lg"}),c(s),c(P),L((B,O)=>{z(h,"title",B),I=H(s,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,I,{"text-[var(--primary)]":o()}),z(s,"title",O)},[()=>q(W.musicPlayerHide),()=>q(W.musicPlayerPlaylist)]),T("click",h,function(...B){t.onHideClick?.apply(this,B)}),T("click",s,function(...B){t.onPlaylistClick?.apply(this,B)}),p(l,P)};V(y,l=>{r()&&l(_)})}p(n,u)};V(f,n=>{e()==="mini"?n(m):n(w,-1)})}c(a),L(()=>H(a,1,Tt(e()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),p(i,a),Z()}X(["click","keydown"]);var ge=C("<div><!></div>");function ve(i,t){var e=ge();let r;var o=d(e);Ct(o,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",get onCoverClick(){return t.onCoverClick},get onInfoClick(){return t.onInfoClick},get onHideClick(){return t.onHideClick},get onExpandClick(){return t.onExpandClick}}),c(e),L(()=>r=H(e,1,"mini-player card-base shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-[17.5rem] svelte-g9ac72",null,r,{"mini-enter":!t.isHidden,"mini-leave":t.isHidden,"pointer-events-none":t.isHidden})),p(i,e)}var me=C("<button><!></button>"),fe=C("<button><!></button>");function wt(i,t){const e=G(t,"repeatMode",3,0),r=G(t,"disabled",3,!1);var o=st(),a=J(o);{var f=w=>{var n=me();let u;var g=d(n);M(g,{icon:"material-symbols:shuffle",class:"text-lg"}),c(n),L(()=>{u=H(n,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t.isActive,"btn-plain":!t.isActive}),n.disabled=r()}),T("click",n,function(...b){t.onclick?.apply(this,b)}),p(w,n)},m=w=>{var n=fe();let u;var g=d(n);{var b=l=>{M(l,{icon:"material-symbols:repeat-one",class:"text-lg"})},y=l=>{M(l,{icon:"material-symbols:repeat",class:"text-lg"})},_=l=>{M(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};V(g,l=>{e()===1?l(b):e()===2?l(y,1):l(_,-1)})}c(n),L(()=>u=H(n,1,"w-10 h-10 rounded-lg",null,u,{"btn-regular":t.isActive,"btn-plain":!t.isActive})),T("click",n,function(...l){t.onclick?.apply(this,l)}),p(w,n)};V(a,w=>{t.mode==="shuffle"?w(f):w(m,-1)})}p(i,o)}X(["click"]);var ye=C('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function be(i,t){var e=ye(),r=d(e);wt(r,{mode:"shuffle",get isActive(){return t.isShuffled},get onclick(){return t.onShuffleClick}});var o=k(r,2);Yt(o,{get onclick(){return t.onPrevClick},disabled:!1});var a=k(o,2);Ut(a,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get onclick(){return t.onPlayClick}});var f=k(a,2);Gt(f,{get onclick(){return t.onNextClick},disabled:!1});var m=k(f,2);{let w=ut(()=>t.isRepeating>0);wt(m,{mode:"repeat",get isActive(){return v(w)},get repeatMode(){return t.isRepeating},get onclick(){return t.onRepeatClick}})}c(e),p(i,e)}var he=C('<div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>');function xe(i,t){Q(t,!0);var e=he(),r=d(e);c(e),L(o=>{z(e,"aria-label",o),z(e,"aria-valuenow",t.duration>0?t.currentTime/t.duration*100:0),_t(r,`width: ${t.duration>0?t.currentTime/t.duration*100:0}%`)},[()=>q(W.musicPlayerProgress)]),T("click",e,function(...o){t.onclick?.apply(this,o)}),T("keydown",e,function(...o){t.onkeydown?.apply(this,o)}),p(i,e),Z()}X(["click","keydown"]);var ke=C('<div class="progress-section mb-4"><!></div>');function we(i,t){var e=ke(),r=d(e);xe(r,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onclick(){return t.onProgressClick},get onkeydown(){return t.onProgressKeyDown}}),c(e),p(i,e)}var _e=C('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function pe(i,t){var e=_e(),r=d(e);{var o=m=>{M(m,{icon:"material-symbols:volume-off",class:"text-lg"})},a=m=>{M(m,{icon:"material-symbols:volume-down",class:"text-lg"})},f=m=>{M(m,{icon:"material-symbols:volume-up",class:"text-lg"})};V(r,m=>{t.isMuted||t.volume===0?m(o):t.volume<.5?m(a,1):m(f,-1)})}c(e),T("click",e,function(...m){t.onclick?.apply(this,m)}),p(i,e)}X(["click"]);var Pe=C('<div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function Ce(i,t){var e=Pe(),r=d(e);let o;c(e),Qt(e,a=>t.volumeBarRef?.(a)),L(()=>{z(e,"aria-label",t.ariaLabel),z(e,"aria-valuenow",t.volume*100),o=H(r,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,o,{"duration-100":!t.isVolumeDragging,"duration-0":t.isVolumeDragging}),_t(r,`width: ${t.volume*100}%`)}),T("pointerdown",e,function(...a){t.onpointerdown?.apply(this,a)}),T("keydown",e,function(...a){t.onkeydown?.apply(this,a)}),p(i,e)}X(["pointerdown","keydown"]);var Se=C('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function Ee(i,t){var e=Se(),r=d(e);pe(r,{get volume(){return t.volume},get isMuted(){return t.isMuted},get onclick(){return t.onVolumeButtonClick}});var o=k(r,2);{let f=ut(()=>t.isMuted?0:t.volume);Ce(o,{get volume(){return v(f)},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onpointerdown(){return t.onSliderPointerDown},get onkeydown(){return t.onSliderKeyDown},get ariaLabel(){return t.ariaLabel}})}var a=k(o,2);Jt(a,t,"default",{}),c(e),p(i,e)}var Te=C('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),Le=C("<div><!> <!> <!> <!></div>");function De(i,t){Q(t,!0);var e=Le();let r;var o=d(e);Ct(o,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return t.showPlaylist},get onHideClick(){return t.onHideClick},get onPlaylistClick(){return t.onPlaylistClick}});var a=k(o,2);we(a,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onProgressClick(){return t.onProgressClick},get onProgressKeyDown(){return t.onProgressKeyDown}});var f=k(a,2);be(f,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get isShuffled(){return t.isShuffled},get isRepeating(){return t.isRepeating},get onPlayClick(){return t.onPlayClick},get onPrevClick(){return t.onPrevClick},get onNextClick(){return t.onNextClick},get onShuffleClick(){return t.onShuffleClick},get onRepeatClick(){return t.onRepeatClick}});var m=k(f,2);{let w=ut(()=>q(W.musicPlayerVolume));Ee(m,{get volume(){return t.volume},get isMuted(){return t.isMuted},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onVolumeButtonClick(){return t.onVolumeButtonClick},get onSliderPointerDown(){return t.onSliderPointerDown},get onSliderKeyDown(){return t.onSliderKeyDown},get ariaLabel(){return v(w)},children:(n,u)=>{var g=Te(),b=d(g);M(b,{icon:"material-symbols:expand-more",class:"text-lg"}),c(g),L(y=>z(g,"title",y),[()=>q(W.musicPlayerCollapse)]),T("click",g,function(...y){t.onCollapseClick?.apply(this,y)}),p(n,g)},$$slots:{default:!0}})}c(e),L(()=>r=H(e,1,"expanded-player card-base shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,r,{"opacity-0":t.isHidden,"scale-95":t.isHidden,"pointer-events-none":t.isHidden})),p(i,e),Z()}X(["click"]);function Me(i){const t=i-1;return t*t*t+1}function Ie(i,{delay:t=0,duration:e=400,easing:r=Me,axis:o="y"}={}){const a=getComputedStyle(i),f=+a.opacity,m=o==="y"?"height":"width",w=parseFloat(a[m]),n=o==="y"?["top","bottom"]:["left","right"],u=n.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),g=parseFloat(a[`padding${u[0]}`]),b=parseFloat(a[`padding${u[1]}`]),y=parseFloat(a[`margin${u[0]}`]),_=parseFloat(a[`margin${u[1]}`]),l=parseFloat(a[`border${u[0]}Width`]),P=parseFloat(a[`border${u[1]}Width`]);return{delay:t,duration:e,easing:r,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*f};${m}: ${h*w}px;padding-${n[0]}: ${h*g}px;padding-${n[1]}: ${h*b}px;margin-${n[0]}: ${h*y}px;margin-${n[1]}: ${h*_}px;border-${n[0]}-width: ${h*l}px;border-${n[1]}-width: ${h*P}px;min-${m}: 0`}}var Re=C('<span class="text-sm text-[var(--content-meta)]"> </span>'),ze=C('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function He(i,t){Q(t,!0);function e(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}var r=ze();let o;var a=d(r),f=d(a);{var m=s=>{M(s,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},w=s=>{M(s,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},n=s=>{var I=Re(),A=d(I,!0);c(I),L(()=>N(A,t.index+1)),p(s,I)};V(f,s=>{t.isCurrent&&t.isPlaying?s(m):t.isCurrent?s(w,1):s(n,-1)})}c(a);var u=k(a,2),g=d(u);c(u);var b=k(u,2),y=d(b);let _;var l=d(y,!0);c(y);var P=k(y,2);let h;var E=d(P,!0);c(P),c(b),c(r),L(s=>{o=H(r,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,o,{"bg-[var(--btn-plain-bg)]":t.isCurrent,"text-[var(--primary)]":t.isCurrent}),z(r,"aria-label",`播放 ${t.song.title??""} - ${t.song.artist??""}`),z(g,"src",s),z(g,"alt",t.song.title),_=H(y,1,"font-medium truncate",null,_,{"text-[var(--primary)]":t.isCurrent,"text-90":!t.isCurrent}),N(l,t.song.title),h=H(P,1,"text-sm text-[var(--content-meta)] truncate",null,h,{"text-[var(--primary)]":t.isCurrent}),N(E,t.song.artist)},[()=>e(t.song.cover)]),T("click",r,function(...s){t.onclick?.apply(this,s)}),T("keydown",r,s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),t.onclick())}),p(i,r),Z()}X(["click","keydown"]);var Be=C('<div class="playlist-panel card-base-transparent fixed bottom-70 right-4 w-80 max-h-96 overflow-hidden z-50 svelte-1v267om"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>');function Ve(i,t){Q(t,!0);var e=st(),r=J(e);{var o=a=>{var f=Be(),m=d(f),w=d(m),n=d(w,!0);c(w);var u=k(w,2),g=d(u);M(g,{icon:"material-symbols:close",class:"text-lg"}),c(u),c(m);var b=k(m,2);Zt(b,21,()=>t.playlist,$t,(y,_,l)=>{{let P=ut(()=>l===t.currentIndex);He(y,{get song(){return v(_)},index:l,get isCurrent(){return v(P)},get isPlaying(){return t.isPlaying},onclick:()=>t.onPlaySong(l)})}}),c(b),c(f),L(y=>N(n,y),[()=>q(W.musicPlayerPlaylist)]),T("click",u,function(...y){t.onClose?.apply(this,y)}),re(3,f,()=>Ie,()=>({duration:300,axis:"y"})),p(a,f)};V(r,a=>{t.show&&a(o)})}p(i,e),Z()}X(["click"]);var Ae=C('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Fe=C(`<!> <div><div><!></div> <!> <!> <!></div> <style>.orb-player-container {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.orb-enter {
			animation: orbElasticIn 460ms cubic-bezier(0.22, 1.25, 0.36, 1)
				forwards;
		}

		.orb-leave {
			animation: orbElasticOut 360ms cubic-bezier(0.4, 0, 1, 1) forwards;
		}

		@keyframes orbElasticIn {
			0% {
				opacity: 0;
				transform: translateX(0) scale(0.55);
			}
			70% {
				opacity: 1;
				transform: translateX(0) scale(1.12);
			}
			100% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}

		@keyframes orbElasticOut {
			0% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			100% {
				opacity: 0;
				transform: translateX(0) scale(0.6);
			}
		}

		.music-player.hidden-mode {
			width: 3rem;
			height: 3rem;
		}

		.music-player {
			width: 20rem;
			max-width: 20rem;
			min-width: 20rem;
			user-select: none;
		}

		:global(.mini-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.expanded-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.orb-player) {
			position: relative;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}

		:global(.orb-player::before) {
			content: "";
			position: absolute;
			inset: -0.125rem;
			background: linear-gradient(
				45deg,
				var(--primary),
				transparent,
				var(--primary)
			);
			border-radius: 50%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		:global(.orb-player:hover::before) {
			opacity: 0.3;
			animation: rotate 2s linear infinite;
		}

		:global(.orb-player .animate-pulse) {
			animation: musicWave 1.5s ease-in-out infinite;
		}

		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes musicWave {
			0%,
			100% {
				transform: scaleY(0.5);
			}
			50% {
				transform: scaleY(1);
			}
		}

		:global(.animate-pulse) {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		@keyframes pulse {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5;
			}
		}

		:global(.progress-section div:hover),
		:global(.bottom-controls > div:hover) {
			transform: scaleY(1.2);
			transition: transform 0.2s ease;
		}

		@media (max-width: 768px) {
			.music-player {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				bottom: 0.5rem !important;
				right: 0.5rem !important;
			}
			:global(.mini-player) {
				width: 280px !important;
			}
			:global(.expanded-player) {
				width: 280px !important;
				max-width: 280px !important;
			}
			.music-player.expanded {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				right: 0.5rem !important;
			}
			:global(.playlist-panel) {
				width: 280px !important;
				right: 0.5rem !important;
				max-width: 280px !important;
			}
			:global(.controls) {
				gap: 8px;
			}
			:global(.controls button) {
				width: 36px;
				height: 36px;
			}
			:global(.controls button:nth-child(3)) {
				width: 44px;
				height: 44px;
			}
		}

		@media (max-width: 480px) {
			.music-player {
				width: 260px !important;
				min-width: 260px !important;
				max-width: 260px !important;
			}
			:global(.expanded-player) {
				width: 260px !important;
				max-width: 260px !important;
			}
			:global(.playlist-panel) {
				width: 260px !important;
				max-width: 260px !important;
				right: 0.5rem !important;
			}
			:global(.song-title) {
				font-size: 14px;
			}
			:global(.song-artist) {
				font-size: 12px;
			}
			:global(.controls) {
				gap: 6px;
				margin-bottom: 12px;
			}
			:global(.controls button) {
				width: 32px;
				height: 32px;
			}
			:global(.controls button:nth-child(3)) {
				width: 40px;
				height: 40px;
			}
			:global(.playlist-item) {
				padding: 8px 12px;
			}
			:global(.playlist-item .w-10) {
				width: 32px;
				height: 32px;
			}
		}

		@keyframes slide-up {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.animate-slide-up {
			animation: slide-up 0.3s ease-out;
		}

		@media (hover: none) and (pointer: coarse) {
			:global(.music-player button),
			:global(.playlist-item) {
				min-height: 44px;
			}
			:global(.progress-section > div),
			:global(.bottom-controls > div:nth-child(2)) {
				height: 12px;
			}
		}

		@keyframes spin-continuous {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		:global(.cover-container img) {
			animation: spin-continuous 3s linear infinite;
			animation-play-state: paused;
		}

		:global(.cover-container img.spinning) {
			animation-play-state: running;
		}

		:global(button.bg-\\\\[var\\\\(--primary\\\\)\\\\]) {
			box-shadow: 0 0 0 2px var(--primary);
			border: none;
		}</style>`,1);function $e(i,t){Q(t,!1);let e=Kt(S.getState());const r=ht.showFloatingPlayer;let o;function a(){S.toggle()}function f(){S.prev()}function m(){S.next()}function w(){S.toggleShuffle()}function n(){S.toggleRepeat()}function u(x){S.playIndex(x)}function g(x){const D=x.currentTarget;if(!D)return;const K=D.getBoundingClientRect(),F=(x.clientX-K.left)/K.width;S.setProgress(F)}function b(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),S.setProgress(.5))}function y(){S.toggleMute()}function _(){S.toggleMute()}function l(x){const D=x.currentTarget;if(!D)return;const K=R=>{const et=D.getBoundingClientRect();if(et.width<=0)return;const ct=Math.max(0,Math.min(1,(R-et.left)/et.width));S.setVolume(ct)};K(x.clientX);const F=x.pointerId;D.setPointerCapture(F);const tt=R=>{R.pointerId===F&&K(R.clientX)},it=()=>{D.removeEventListener("pointermove",tt),D.removeEventListener("pointerup",Y),D.removeEventListener("pointercancel",ot),D.hasPointerCapture(F)&&D.releasePointerCapture(F)},Y=R=>{R.pointerId===F&&(K(R.clientX),it())},ot=R=>{R.pointerId===F&&it()};D.addEventListener("pointermove",tt),D.addEventListener("pointerup",Y),D.addEventListener("pointercancel",ot)}function P(x){if(x.key==="ArrowLeft"||x.key==="ArrowDown"){x.preventDefault(),S.setVolume(v(e).volume-.05);return}if(x.key==="ArrowRight"||x.key==="ArrowUp"){x.preventDefault(),S.setVolume(v(e).volume+.05);return}(x.key==="Enter"||x.key===" "||x.key==="m"||x.key==="M")&&(x.preventDefault(),y())}function h(){S.togglePlaylist()}function E(){S.toggleExpanded()}function s(){S.toggleHidden()}function I(){S.hideError()}function A(x){}function B(){return S.canSkip()}Lt(()=>{o=S.subscribe(x=>{Xt(e,x)}),S.initialize()}),Dt(()=>{o&&o(),S.destroy()}),Mt();var O=st();jt("keydown",Wt,P);var at=J(O);{var $=x=>{var D=Fe(),K=J(D);{var F=U=>{var nt=Ae(),yt=d(nt),bt=d(yt);M(bt,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var dt=k(bt,2),St=d(dt,!0);c(dt);var gt=k(dt,2),Et=d(gt);M(Et,{icon:"material-symbols:close",class:"text-lg"}),c(gt),c(yt),c(nt),L(()=>N(St,v(e).errorMessage)),T("click",gt,I),p(U,nt)};V(K,U=>{v(e).showError&&U(F)})}var tt=k(K,2);let it;var Y=d(tt),ot=d(Y);mt(ot,{get cover(){return v(e).currentSong.cover},get isPlaying(){return v(e).isPlaying},get isLoading(){return v(e).isLoading},size:"orb",onclick:s}),c(Y);var R=k(Y,2);{let U=vt(()=>v(e).isExpanded||v(e).isHidden);ve(R,{get song(){return v(e).currentSong},get currentTime(){return v(e).currentTime},get duration(){return v(e).duration},get isPlaying(){return v(e).isPlaying},get isLoading(){return v(e).isLoading},get isHidden(){return v(U)},onCoverClick:a,onInfoClick:E,onHideClick:s,onExpandClick:E})}var et=k(R,2);{let U=vt(B),nt=vt(()=>!v(e).isExpanded);De(et,{get song(){return v(e).currentSong},get currentTime(){return v(e).currentTime},get duration(){return v(e).duration},get isPlaying(){return v(e).isPlaying},get isLoading(){return v(e).isLoading},get isShuffled(){return v(e).isShuffled},get isRepeating(){return v(e).isRepeating},get showPlaylist(){return v(e).showPlaylist},get canSkip(){return v(U)},get volume(){return v(e).volume},get isMuted(){return v(e).isMuted},isVolumeDragging:!1,get isHidden(){return v(nt)},volumeBarRef:A,onPlayClick:a,onPrevClick:f,onNextClick:()=>m(),onShuffleClick:w,onRepeatClick:n,onProgressClick:g,onProgressKeyDown:b,onVolumeButtonClick:_,onSliderPointerDown:l,onSliderKeyDown:P,onHideClick:s,onPlaylistClick:h,onCollapseClick:E})}var ct=k(et,2);Ve(ct,{get playlist(){return v(e).playlist},get currentIndex(){return v(e).currentIndex},get isPlaying(){return v(e).isPlaying},get show(){return v(e).showPlaylist},onClose:h,onPlaySong:u}),c(tt),qt(2),L(()=>{it=H(tt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,it,{expanded:v(e).isExpanded,"hidden-mode":v(e).isHidden}),H(Y,1,`orb-player-container ${v(e).isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),p(x,D)};V(at,x=>{r&&ht.enable&&x($)})}p(i,O),Z()}X(["click"]);export{$e as default};
