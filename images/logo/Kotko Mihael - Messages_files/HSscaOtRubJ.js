/*!CK:3797761253!*//*1384764032,178146347*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ADVp0"]); }

__d("Button.react",["AbstractButton.react","ReactPropTypes","React","cx"],function(a,b,c,d,e,f){var g=b('AbstractButton.react'),h=b('ReactPropTypes'),i=b('React'),j=b('cx'),k=i.createClass({displayName:'Button',propTypes:{use:h.oneOf(['special','confirm','default']),size:h.oneOf(['medium','large']),suppressed:h.bool},render:function(){var l=this.props.use||'default',m=this.props.size||'medium',n=(("_42fu")+(l==='special'?' '+"_42gz":'')+(l==='confirm'?' '+"_42g-":'')+(m==='large'?' '+"_42gy":'')+(this.props.suppressed?' '+"_42gx":'')+(l!=='default'?' '+"selected":''));return this.transferPropsTo(g({className:n}));}});e.exports=k;});
__d("Autosize",["CSS","cx","DOM","Style"],function(a,b,c,d,e,f){var g=b("CSS"),h=b('cx'),i=b("DOM"),j=b("Style"),k=['fontFamily','fontStyle','fontVariant','fontWeight','letterSpacing','textDecoration','textIndent','textTransform','whiteSpace','wordSpacing','wordWrap'],l=/^[0-9]+$/;function m(r){var s=r.cloneNode(true);g.addClass(s,"_4g");var t=r.clientWidth-j.getFloat(r,'paddingLeft')-j.getFloat(r,'paddingRight');j.set(s,'width',t+'px');var u=r.clientHeight-j.getFloat(r,'paddingTop')-j.getFloat(r,'paddingBottom');j.set(s,'height',u+'px');i.insertAfter(r,s);return s;}function n(r,s,t,u,v){var w=r.style.fontSize,x=r.style.height;j.set(r,"height","auto");if(s!==null){var y=r.style.width;j.set(r,"width","auto");}var z=0,aa=v.length-1;while(z<aa){var ba=Math.ceil((z+aa)/2);j.set(r,"font-size",v[ba]+u);if((t!==null&&r.scrollHeight>t)||(s!==null&&r.scrollWidth>s)){aa=ba-1;}else z=ba;}r.style.fontSize=w;r.style.height=x;if(s!==null)r.style.width=y;return v[z]+u;}function o(r,s,t,u,v,w){var x=r.style.fontSize,y=r.style.height;j.set(r,"height","auto");if(s!==null){var z=r.style.width;j.set(r,"width","auto");}j.set(r,"font-size",w+u);if((t===null||r.scrollHeight<=t)&&(s===null||r.scrollWidth<=s)){r.style.fontSize=x;r.style.height=y;if(s!==null)r.style.width=z;return w+u;}j.set(r,"font-size",v+u);if((t!==null&&r.scrollHeight>t)||(s!==null&&r.scrollWidth>s)){r.style.fontSize=x;r.style.height=y;if(s!==null)r.style.width=z;return v+u;}while(v+1<w){var aa=Math.ceil((v+w)/2);j.set(r,"font-size",aa+u);if((t!==null&&r.scrollHeight>t)||(s!==null&&r.scrollWidth>s)){w=aa;}else v=aa;}r.style.fontSize=x;r.style.height=y;if(s!==null)r.style.width=z;return v+u;}function p(r,s){this._wrap=r;this._attr=s;if(this._attr.sizes){var t=this._attr.sizes;for(var u=1,v=t.length;u<v;u++){if(t[u-1]<=t[u])continue;t.sort(function(x,y){return x-y;});break;}}else if(s.min>s.max){var w=s.min;s.min=s.max;s.max=w;}this.fit();}p.prototype.fit=function(r,s){var t=this._wrap;if(!t.clientWidth){q.push(this);return;}var u=m(t);if(typeof r==="undefined")r=this._attr.width;if(l.test(r)){u.style.width=r+"px";}else if(r!==null&&r!=="auto")u.style.width=r;if(typeof s==="undefined")s=this._attr.height;if(l.test(s)){u.style.height=s+"px";}else if(s!==null&&s!=="auto")u.style.height=s;var v=null;if(!this._attr.wrap)v=u.clientWidth;var w=null;if(this._attr.wrap||s!==null)w=u.clientHeight;var x;if(this._attr.sizes){x=n(u,v,w,"px",this._attr.sizes);}else x=o(u,v,w,"px",this._attr.min,this._attr.max);i.remove(u);j.set(t,"font-size",x);g.removeClass(t,"invisible_elem");};var q=[];p.onNodeInserted=function(){var r=q;q=[];r.forEach(function(s){s.fit();});};e.exports=p;});
__d("WebMessengerOldToNewPermalink",["WebMessengerPermalinkConstants","WebMessengerStateConstants"],function(a,b,c,d,e,f){var g=b('WebMessengerPermalinkConstants'),h=b('WebMessengerStateConstants');function i(n){if(!j(n))return n;k(n);m(n);l(n);return n;}function j(n){var o=n.getQueryData();if(o.sk)switch(o.sk){case 'inbox':n.setPath(g.BASE_PATH);n.removeQueryData('sk');break;case 'other':n.setPath(g.OTHER_PATH);n.removeQueryData('sk');break;default:return false;}return true;}function k(n){var o=n.getQueryData();switch(o.action){case 'read':if(!o.tid){n.addQueryData({action:h.DETAIL.RECENT_MESSAGES});}else n.removeQueryData('action');break;}}function l(n){var o=n.getQueryData();if(o.tid){n.setPath(g.getURIPathForThreadID(o.tid,n.getPath()));n.removeQueryData('tid');}}function m(n){var o=n.getQueryData();if(!n.getPath().match(g.SEARCH_POSTFIX_PATH)&&o.action!=h.DETAIL.SEARCH_SNIPPET&&!o.mid){var p=o.query;if(o.query){var q=/\bis:(archived|spam)\b(.*)/,r=q.exec(o.query);if(r){switch(r[1]){case 'archived':n.setPath(g.ARCHIVED_PATH);break;case 'spam':n.setPath(g.SPAM_PATH);break;}var s=o.query.substr(0,o.query.length-r[0].length),t=r[2];p=(s.trim()+' '+t.trim()).trim();}}if(o.thread_query){n.setPath(n.getPath()+g.SEARCH_POSTFIX_PATH);n.setQueryData({query:o.thread_query});}else if(p){n.setPath(n.getPath()+g.SEARCH_POSTFIX_PATH);n.addQueryData({query:p});}else n.removeQueryData('query');}}e.exports=i;});
__d("WebMessengerDeleteThreadDialog",["Dialog","tx","MercuryThreads"],function(a,b,c,d,e,f){var g=b('Dialog'),h=b('tx'),i=b('MercuryThreads').get(),j={show:function(k){var l=[];l.push({name:'delete_conversation',label:"Delete Conversation",handler:i.deleteThread.bind(i,k)});l.push(g.CANCEL);new g().setTitle("Delete This Entire Conversation?").setBody("Once you delete your copy of this conversation, it cannot be undone.").setButtons(l).show();}};e.exports=j;});
__d("WebMessengerActionsMenuItem",["Event","CSS","WebMessengerStateManager","WebMessengerTemplates"],function(a,b,c,d,e,f){var g=b('Event'),h=b('CSS'),i=b('WebMessengerStateManager'),j=b('WebMessengerTemplates');function k(l,m,n){"use strict";var o=j[':fb:web-messenger:actions-menu-item'].build();o.setNodeContent('title',l);this.node=o.getRoot();this.showFn=n;g.listen(this.node,'click',function(){var p=i.getCurrentStateData().thread_id;p&&m(p);});}k.prototype.getNode=function(){"use strict";return this.node;};k.prototype.updateShown=function(l){"use strict";var m=this.showFn?this.showFn(l):true;h.conditionShow(this.node,m);return m;};e.exports=k;});
__d("FreeformTokenizerBehavior",["Input","Keys","Event","function-extensions"],function(a,b,c,d,e,f){var g=b('Input'),h=b('Keys'),i=b('Event');b('function-extensions');function j(k,l){var m=l.tokenize_on_blur!==false,n=l.tokenize_on_paste!==false,o=l.matcher&&new RegExp(l.matcher,'i'),p=l.paste_split&&new RegExp(l.paste_split),q=l.select_on_comma!==false,r=l.never_submit===true;function s(event){var t=g.getValue(k.getInput()).trim();if(p&&event&&event.type=='paste'){t=t.split(p);}else t=[t];var u=false;for(var v=0;v<t.length;v++){var w=t[v].trim();if(w&&(!o||o.test(w))){var x={uid:w,text:w,freeform:true};k.addToken(k.createToken(x));u=true;}}if(event&&u){k.getTypeahead().getCore().afterSelect();event.kill();}}k.subscribe('keydown',function(t,u){var event=u.event,v=i.getKeyCode(event);if((q&&v==h.COMMA)||v==h.RETURN){var w=k.getTypeahead().getView();if(w.getSelection()){w.select();event.kill();}else s(event);}if(v==h.RETURN&&r)event.kill();});k.subscribe('paste',function(t,u){if(n)s.bind(null,u.event).defer(20);});k.subscribe('blur',function(t,u){if(m)s();k.getTypeahead().getCore().reset();});}e.exports=j;});
__d("MercuryDataSourceHelper",["MercuryPayloadSource","MercuryServerRequests","MercuryThreadMetadataRawRenderer","MercuryThreadMetadataRenderer","WebMessengerConstants"],function(a,b,c,d,e,f){var g=b('MercuryPayloadSource'),h=b('MercuryServerRequests').get(),i=b('MercuryThreadMetadataRawRenderer'),j=b('MercuryThreadMetadataRenderer').get(),k=b('WebMessengerConstants'),l={updateMercuryOnFetchComplete:function(m){m.subscribe('fetchComplete',function(n,o){var p={participants:[],threads:[],payload_source:g.SERVER_SEARCH};o.response.getPayload().entries.forEach(function(q){if(q.type==k.THREAD_TYPE){p.threads=p.threads.concat(q.mercury_thread);p.participants=p.participants.concat(q.participants_to_render);}});if(p.threads.length){h.handleUpdate(p);o.response.getPayload().entries.forEach(function(q){if(q.mercury_thread)q.text=j.renderThreadNameAndParticipantList(q.mercury_thread.thread_id,q.participants_to_render,q.mercury_thread.participants.length,{last_separator_uses_and:false,names_renderer:i.renderShortNames});});}});}};e.exports=l;});
__d("WebMessengerTypeaheadRenderer",["MercuryConstants","DOM","MercuryAPIArgsSource","MercuryTypeaheadRenderer","React","MercuryServerRequests","SplitImage.react","WebMessengerTemplates","MercuryThreadMetadataRawRenderer","MercuryThreadMetadataRenderer","MercuryThreads"],function(a,b,c,d,e,f){var g=b('MercuryConstants'),h=b('DOM'),i=b('MercuryAPIArgsSource'),j=b('MercuryTypeaheadRenderer'),k=b('React'),l=b('MercuryServerRequests').get(),m=b('SplitImage.react'),n=b('WebMessengerTemplates'),o=b('MercuryThreadMetadataRawRenderer'),p=b('MercuryThreadMetadataRenderer').get(),q=b('MercuryThreads').get();function r(t,u){var v;switch(t.type){case g.MercuryTypeaheadConstants.HEADER_TYPE:v=n[':fb:web-messenger:typeahead-header'].build();j.renderHeader(v,t);if(this.setNewHeader)this.setNewHeader(v.getRoot(),t);break;case g.MercuryTypeaheadConstants.USER_TYPE:v=n[':fb:web-messenger:threadlist-row'].build();j.renderPersonWithBigPhoto(v,t);break;case g.MercuryTypeaheadConstants.THREAD_TYPE:v=n[':fb:web-messenger:threadlist-row'].build();s(v,t);break;default:return h.create('div');}return v.getRoot();}function s(t,u){var v=l.getClientThreadIDNow(u.uid),w=u.participants_to_render.map(function(z){return z.big_image_src||z.image_src;}),x=m({srcs:w,border:true,size:50});k.renderComponent(x,t.getNode('image'));var y=p.renderThreadNameAndParticipantList(v,u.participants_to_render,u.mercury_thread.participants.length,{last_separator_uses_and:false,names_renderer:o.renderShortNames});h.setContent(t.getNode('name'),y);t.getRoot().setAttribute('aria-label',y);q.getThreadMeta(v,function(z){p.renderSnippet(z,t.getNode('snippet'));p.renderTimestamp(t.getNode('timestamp'),z.timestamp_absolute,z.timestamp_relative,z.timestamp);},i.WEBMESSENGER);}e.exports=r;});
__d("MessagingConst",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties'),h={APP_ID:313785040330,XD_MESSAGE:{SANDBOX_READY:'sandbox_ready',SET_CONTENT:'set_content',HTML_SIZE:'html_size',REFRESH_SIZE:'refresh_size'},SHINGLE_SCROLL_TRIGGER:5,EVENTS:{MESSAGE_SENT:'messaging/message_sent'},initConstants:function(i){g(h,i);}};e.exports=h;});
__d("MessagingXD",["Event","DOM","MercuryConstants","MessagingConst","URI","copyProperties"],function(a,b,c,d,e,f){var g=b('Event'),h=b('DOM'),i=b('MercuryConstants'),j=b('MessagingConst'),k=b('URI'),l=b('copyProperties');function m(n){this._listeners=[g.listen(window,'message',this._onPostMessage.bind(this))];this._iframes={};this._contentWindows={};this._messageHandler=n;}l(m.prototype,{unload:function(){this._listeners.forEach(function(n){n.remove();});},createIframe:function(n,o,p){var q=new k(p);this._iframes[o]=h.create('iframe',{name:o,frameBorder:0,src:q.toString()});h.appendContent(n,this._iframes[o]);this._contentWindows[o]=this._iframes[o].contentWindow;return this._iframes[o];},sendMessage:function(n,o){var p=Array.prototype.slice.apply(arguments);p[0]=j.APP_ID;var q=this._iframes[n].contentWindow||this._contentWindows[n];q.postMessage(p.join(','),i.Sandbox.ORIGIN);},_onPostMessage:function(event){if(event.origin!==i.Sandbox.ORIGIN||!event.data.split)return;var n=event.data.split(','),o=unescape(n[1]);this._contentWindows[o]=event.source;this._messageHandler(o,n);}});e.exports=m;});
__d("HTMLEmailRenderer",["CSS","MessagingConst","MessagingXD","copyProperties","emptyFunction","tx","MercuryConstants"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('MessagingConst'),i=b('MessagingXD'),j=b('copyProperties'),k=b('emptyFunction'),l=b('tx'),m=b('MercuryConstants');function n(o,p){this._resizeContent=o.resizeContent||k;this._richMap={};this._useFBStyle=p;this._xdc=new i(this.onXDMessage.bind(this));this._maxWidth=0;}j(n.prototype,{onXDMessage:function(o,p){if(p[0]!=h.APP_ID.toString())return;if(this._richMap&&this._richMap[o])if(p[2]==h.XD_MESSAGE.SANDBOX_READY){return this.setIframeContent(o);}else if(p[2]==h.XD_MESSAGE.HTML_SIZE)return this._resizeContent(o,parseInt(p[3],10),parseInt(p[4],10),p[5]=='true',p[6]=='true');},setIframeContent:function(o,p){this._xdc.sendMessage(o,h.XD_MESSAGE.SET_CONTENT,escape(this._richMap[o]),this._useFBStyle?'useFBStyle':'',p?'forceDialogOnWide':'',escape("Show Hidden Text"),escape("Hide"),this._maxWidth);},makeRich:function(o,p,q,r){var s=this._xdc.createIframe(p,o,m.Sandbox.PAGE_URL);g.addClass(s,'xdIframe');this._richMap[o]=q;this._maxWidth=r||0;},updateRichMap:function(o,p){this._richMap[o]=p;},unload:function(){this._xdc.unload();}});e.exports=n;});
__d("glyph",["ix"],function(a,b,c,d,e,f){e.exports=b('ix');});
__d("WebMessengerApp",["Arbiter","WebMessengerDetailViewControlManager","DOM","WebMessengerMasterViewControlManager","WebMessengerPageTitleControl","PageTransitions","WebMessengerPermalinks","MercuryServerRequests","WebMessengerShortcuts","WebMessengerStateConstants","WebMessengerStateManager","WebMessengerStateStore","MercuryThreadInformer","WebMessengerThreadMessagesAgent","URI","VaultBoxURI","WebMessengerAdsControl","emptyFunction","WebMessengerSubscriptionsHandler","WebMessengerWidthControl","clickRefAction","userAction","MercuryStateCheck","WebMessengerTemplates"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('WebMessengerDetailViewControlManager'),i=b('DOM'),j=b('WebMessengerMasterViewControlManager'),k=b('WebMessengerPageTitleControl'),l=b('PageTransitions'),m=b('WebMessengerPermalinks'),n=b('MercuryServerRequests').get(),o=b('WebMessengerShortcuts'),p=b('WebMessengerStateConstants'),q=b('WebMessengerStateManager'),r=b('WebMessengerStateStore'),s=b('MercuryThreadInformer').get(),t=b('WebMessengerThreadMessagesAgent'),u=b('URI'),v=b('VaultBoxURI'),w=b('WebMessengerAdsControl'),x=b('emptyFunction'),y=b('WebMessengerSubscriptionsHandler'),z=b('WebMessengerWidthControl'),aa=b('clickRefAction'),ba=b('userAction');b('MercuryStateCheck');var ca=b('WebMessengerTemplates');d(['VideoCallCore'],x);var da,ea;d(['VaultBox'],function(la){ea=la.getInstance();});function fa(la,ma){var na=ma&&ma.getQueryData().hasOwnProperty('theater'),oa=ma&&v.isVaultBoxURI(ma);if(na){da=g.subscribe('PhotoSnowlift.CLOSE',ga.curry(la),g.SUBSCRIBE_NEW);return false;}else if(oa){if(ea)da=ea.subscribe('close',ga.curry(la),g.SUBSCRIBE_NEW);return false;}var pa=m.processURI(ma);if(pa){var qa=q.getCurrentStateData();if(pa.redirect){m.goNextURI(pa.master_state,pa.detail_state,pa.data,pa.replace);}else q.updateStateOnURI(pa.master_state,pa.detail_state,pa.data);l.transitionComplete();la._adsControl.stateChanged(qa,q.getCurrentStateData());return true;}ka(la);return false;}function ga(la){l.registerHandler(fa.curry(la),6);if(da){da.unsubscribe();da=null;}}function ha(){var la=q.getCurrentStateData();r.setLastSeen(la.folder,la.thread_id);}function ia(la,ma,na,oa,pa){y.engage();ga(this);g.inform('chat/set_does_page_occlude_tabs',true,g.BEHAVIOR_PERSISTENT);g.inform('chat/set_show_tab_unread_ui',false,g.BEHAVIOR_PERSISTENT);new t();n.handleUpdate(ma);i.empty(la);var qa=ca[':fb:web-messenger:page-skeleton'].build();i.setContent(la,qa.getRoot());o.registerGeneralShortcuts();this._masterViewManager=new j(qa.getNode('masterView'));this._detailViewManager=new h(qa.getNode('detailView'));this._pageTitleControl=new k();oa&&i.prependContent(qa.getRoot(),oa);this._widthControl=new z(this._masterViewManager.resizeTo.bind(this._masterViewManager),this._detailViewManager.resizeTo.bind(this._detailViewManager),pa);this._adsControl=w.init();var ra=na?new u(na):m.getDefaultURI();fa(this,ra);aa('web_messenger').set_namespace('web_messenger');ba('web_messenger').uai('load').add_event('tti',0,window._cstart);y.addSubscriptions(s.subscribe('threads-deleted',function(sa,ta){var ua=q.getCurrentStateData().thread_id,va=q.getCurrentDetailState();if(va==p.DETAIL.RECENT_MESSAGES&&ta[ua]){q.updateDetailState(p.DETAIL.RECENT_MESSAGES,{thread_id:null});}else ha();}),q.subscribe(p.STATE_CHANGE_EVENT,ha));d(['MercuryBrowserAlerts'],function(sa){y.addSubscriptions(s.subscribe('messages-received',function(ta,ua){for(var va in ua){var wa=ua[va];for(var xa=0;xa<wa.length;xa++)sa.messageReceived(wa[xa]);}}));sa.subscribe('before-alert',function(ta,event){if(event.threadID==ja())event.cancelAlert();});});}function ja(){var la=q.getCurrentDetailState(),ma=q.getCurrentStateData();if(la==p.DETAIL.RECENT_MESSAGES||la==p.DETAIL.SEARCH_CONTEXT)return ma.thread_id;return null;}function ka(la){var ma=true;d(['ChatTabModel'],function(na){ma&&na.persistLocalRaised();});y.release();g.inform('chat/set_does_page_occlude_tabs',false,g.BEHAVIOR_PERSISTENT);g.inform('chat/set_show_tab_unread_ui',true,g.BEHAVIOR_PERSISTENT);la._masterViewManager.destroy();la._detailViewManager.destroy();ma=false;}e.exports=ia;});