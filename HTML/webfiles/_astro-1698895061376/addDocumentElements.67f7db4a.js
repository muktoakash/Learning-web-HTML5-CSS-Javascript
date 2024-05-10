import{aS as a,aT as m}from"./index.16942308.js";const p=e=>e.startsWith("www."),$=e=>p(e)?e.substring(4):e,k=e=>{const t=`${e}=`,r=decodeURIComponent(document.cookie).split(";");for(let s=0;s<r.length;s+=1){let o=r[s];for(;o.charAt(0)===" ";)o=o.substring(1);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return""},I=(e,t,n,{cdomain:r=null}={})=>{const s=new Date;s.setTime(s.getTime()+n*24*60*60*1e3);const o=n?`expires=${s.toUTCString()};`:"",c=r?`domain=${r};`:"";document.cookie=`${e}=${t};${o}path=/;${c}`},L=!1,i=({type:e,tagName:t,properties:n={},children:r=[]})=>{if(e!=="element")return console.error("Failed to injected HTML element - missing node type");const s=document.createElement(t);if(Object.entries(n).forEach(([o,c])=>{s.setAttribute(o,c)}),r.length){const o=r.find(c=>c.type==="text").value;o&&(s.innerHTML=o)}return s},g=e=>{const t=`[${a}="${e}"]`;return document.querySelector(t)},f=e=>{const t=i(e),n=g(t.getAttribute(a));return t.outerHTML===n?.outerHTML?n:(n?.remove(),document.head.append(t),t)},u=e=>{const t=i(e),n=g(t.getAttribute(a));return t.outerHTML===n?.outerHTML?n:(n?.remove(),document.body.append(t),t)},h="16.0",B=[".zyrosite.space",".zyrosite.com"],j=({version:e,locale:t})=>`window.fbAsyncInit = function() {
			FB.init({
				xfbml            : true,
				version          : 'v${e}'
			});
		};
	
		(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = 'https://connect.facebook.net/${t}/sdk/xfbml.customerchat.js';
		fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));`,y=e=>`!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '${e}');
	fbq('track', 'PageView');`,b=e=>`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1"/>`,E=({containerId:e,gtmQuery:t=""}={})=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl${t};f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','${e}');`,w=({containerId:e,gtmQuery:t=""}={})=>`<iframe src="https://www.googletagmanager.com/ns.html?id=${e}${t}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>`,T=({containerId:e})=>`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${e}');`,v=e=>`https://www.googletagmanager.com/gtag/js?id=${e}`,N=e=>`(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:${e},hjsv:6};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,S=e=>`https://code-eu1.jivosite.com/widget/${e}`,l=({siteMeta:e,areCookiesAllowed:t})=>{const n={};return t&&e.facebookPixel&&(n["noscript-fb-pixel"]={tagName:"noscript",children:[{type:"text",value:b(e.facebookPixel)}]}),t&&e.googleTagManager&&(n["noscript-gtm"]={tagName:"noscript",children:[{type:"text",value:w(e.googleTagManager)}]}),t&&e.facebookPixel&&(n["script-fb-pixel"]={tagName:"script",children:[{type:"text",value:y(e.facebookPixel)}]}),t&&e.googleTagManager&&(n["script-gtm"]={tagName:"script",children:[{type:"text",value:E({containerId:e.googleTagManager})}]}),t&&e.googleAnalytics&&(n["script-google-analytics"]={tagName:"script",children:[{type:"text",value:T({containerId:e.googleAnalytics})}]},n["script-google-analytics-async"]={tagName:"script",properties:{src:v(e.googleAnalytics)}}),t&&e.hotjar&&(n["script-hotjar"]={tagName:"script",children:[{type:"text",value:N(e.hotjar)}]}),e.jivoChat&&(n["script-jivochat"]={tagName:"script",properties:{src:S(e.jivoChat)}}),e.facebookMessenger&&(n["fb-messenger"]={tagName:"script",children:[{type:"text",value:j({version:h,locale:e.facebookMessengerLocale})}]},n["fb-messenger-async"]={tagName:"script",properties:{defer:!0,crossorigin:"anonymous",src:`https://connect.facebook.net/${e.facebookMessengerLocale}/sdk.js`}}),Object.entries(n).map(([r,{tagName:s,properties:o={},children:c=[]}])=>({type:"element",tagName:s,properties:{...o,[a]:r},children:c}))},_=()=>window.self!==window.top,d=e=>{e.forEach(t=>m.includes(t.properties[a])?u(t):f(t))},A=({siteMeta:e,areCookiesAllowed:t})=>{const n=l({siteMeta:e,areCookiesAllowed:t});d(n)},D=({siteMeta:e,areCookiesAllowed:t})=>{const n=l({siteMeta:e,areCookiesAllowed:t});d(n)};export{B as Z,k as a,A as b,_ as c,D as d,f as e,$ as g,L as i,I as s};
