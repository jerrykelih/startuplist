/*!CK:2262133446!*//*1383535549,178179105*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pxThQ"]); }

__d("CanvasAppRequestUpdater",["Arbiter","CSS","ChannelConstants","DOM","copyProperties","csx"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('ChannelConstants'),j=b('DOM'),k=b('copyProperties'),l=b('csx');function m(n){this._root=n;g.subscribe(i.getArbiterType('app_request_create'),function(o,p){var q=j.scry(this._root,".item_"+p.obj.appid)[0],r=q&&j.scry(q,"._1k71")[0];r&&j.appendContent(r,p.obj.request);q&&this._updateBookmark(q,1);}.bind(this));g.subscribe(i.getArbiterType('app_request_delete'),function(o,p){var q=j.scry(this._root,".item_"+p.obj.appid)[0],r=q&&j.scry(q,"[data-requestid='"+p.obj.requestid+"']")[0];r&&j.remove(r.parentNode);q&&this._updateBookmark(q,-1);}.bind(this));}k(m.prototype,{_updateBookmark:function(n,o){var p=j.find(n,'.countValue'),q=parseInt(j.getText(p),10),r=Math.max(0,q+o);j.setContent(p,r);if(r<1){h.hide(p.parentNode);}else h.show(p.parentNode);}});e.exports=m;});
__d("RecommendationSliderLogger",["AsyncSignal"],function(a,b,c,d,e,f){var g=b('AsyncSignal');function h(j,k){if(k<j.length&&j[k]){var l='/ajax/canvas/recommendation/slider_logger';new g(l,{data:j[k]}).send();j[k]=null;}}function i(j,k){this._logData=k;j.subscribe('page_start',function(l,m){if(m<0)m+=this._logData.length;h(this._logData,m);}.bind(this));h(this._logData,0);}e.exports=i;});
__d("BuddyListNub",["Arbiter","AvailableList","BlackbirdUpsell","ChannelConnection","ChannelConstants","ChatConfig","ChatSidebar","ChatVisibility","CSS","Dock","DOM","Event","HTML","JSXDOM","KeyEventController","Keys","NubController","OrderedFriendsList","Parent","PresencePrivacy","Toggler","csx","cx","setTimeoutAcrossTransitions","tx"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AvailableList'),i=b('BlackbirdUpsell'),j=b('ChannelConnection'),k=b('ChannelConstants'),l=b('ChatConfig'),m=b('ChatSidebar'),n=b('ChatVisibility'),o=b('CSS'),p=b('Dock'),q=b('DOM'),r=b('Event'),s=b('HTML'),t=b('JSXDOM'),u=b('KeyEventController'),v=b('Keys'),w=b('NubController'),x=b('OrderedFriendsList'),y=b('Parent'),z=b('PresencePrivacy'),aa=b('Toggler'),ba=b('csx'),ca=b('cx'),da=b('setTimeoutAcrossTransitions'),ea=b('tx'),fa=32,ga=10;for(var ha in w)if(w.hasOwnProperty(ha))ja[ha]=w[ha];var ia=w===null?null:w.prototype;ja.prototype=Object.create(ia);ja.prototype.constructor=ja;ja.__superConstructor__=w;function ja(ka,la,ma){"use strict";w.call(this);ia.init.call(this,ka);this.root=ka;this.orderedList=la;this.typeahead=ma;this.button=q.find(ka,'a.fbNubButton');this.unreadCount=q.find(ka,"span._5ayx");this.label=q.find(ka,'span.label');this.body=q.scry(ka,'div.fbNubFlyoutBody')[0];this.container=y.byClass(ka,"_56ox");var na=q.find(ka,'div.fbNubFlyoutTitlebar');aa.createInstance(na).setSticky(false);la.subscribe('render',this.flyoutContentChanged.bind(this));la.setScrollContainer(this.body);h.subscribe('buddylist/availability-changed',this._updateCount.bind(this));g.subscribe('chat/connect',this._handleConnect.bind(this));z.subscribe('privacy-user-presence-changed',this._handleVisibilityChange.bind(this));this.message=q.find(ka,"div._4mq1");this.warningMsgText=null;this.warningMsgEventListener=null;this.showWarningTimeout=null;j.subscribe(j.CONNECTED,this._handleChannelConnected.bind(this));j.subscribe(j.SHUTDOWN,this._handleChannelShutdown.bind(this));j.subscribe(j.RECONNECTING,this._handleChannelReconnecting.bind(this));j.subscribe([j.MUTE_WARNING,j.UNMUTE_WARNING],this._updateView.bind(this));this.subscribe('show',this.onShow.bind(this));this.subscribe('hide',this.onHide.bind(this));this.subscribe('resize',this.onResize.bind(this));r.listen(ka,'keydown',this._onKeyDown.bind(this));r.listen(this.button,'click',this.onButtonClick.bind(this));u.registerKey('q',function(event){if(this._isOpen){ma.getCore().getElement().focus();}else{this.onButtonClick();this.show();}event.prevent();}.bind(this));ma.getCore().subscribe('escape',this.hide.bind(this));ma.subscribe(['respond','reset'],function(oa,pa){if(this._isOpen){var qa=this.orderedList.isVisible();if(pa&&pa.value&&pa.value===ma.getCore().getValue()&&ma.getView().isVisible()){p.setUseMaxHeight(this.root,false);this.orderedList.hide();}else this._showBuddyList();if(qa!==this.orderedList.isVisible())this.flyoutContentChanged();}}.bind(this));g.subscribe('sidebar/show',this.hide.bind(this));g.subscribe('sidebar/hide',this._onSidebarHide.bind(this));if(l.get('litestand_buddylist_count')){this._unreadMessageCount=0;g.subscribe('buddylist-nub/updateCount',function(oa,pa){if(this._unreadMessageCount!==pa.count){this._unreadMessageCount=pa.count;this._updateView();}}.bind(this));}this._orderedListCount=x.getList().length;g.inform('buddylist-nub/initialized',this,g.BEHAVIOR_PERSISTENT);this._handleVisibilityChange();}ja.prototype.getButton=function(){"use strict";return this.button;};ja.prototype.getRoot=function(){"use strict";return this.root;};ja.prototype._handleConnect=function(ka){"use strict";this._updateView(true);};ja.prototype._getShutdownReason=function(ka){"use strict";switch(ka){case k.HINT_AUTH:return "Your session has timed out. Please log in.";case k.HINT_CONN:return ea._("Facebook {Chat} is currently unavailable.",{Chat:"Chat"});case k.HINT_MAINT:return ea._("Facebook {Chat} is currently down for maintenance.",{Chat:"Chat"});default:return ea._("Facebook {Chat} is currently unavailable.",{Chat:"Chat"});}};ja.prototype._getReconnectMsg=function(ka){"use strict";var la;if(ka===null){la="Unable to connect to chat. Check your Internet connection.";}else if(ka>l.get('warning_countdown_threshold_msec')){var ma=q.create('a',{href:'#',className:'fbChatReconnectLink'},"Try again"),na=q.create('div',null,ma),oa=na.innerHTML;la=s(ea._("Unable to connect to chat. {try-again-link}",{'try-again-link':oa}));}else if(ka>1000){la=ea._("Unable to connect to chat. Reconnecting in {seconds}...",{seconds:Math.floor(ka/1000)});}else la="Unable to connect to chat. Reconnecting...";return la;};ja.prototype._resetShowWarningTimeout=function(){"use strict";if(this.showWarningTimeout){clearTimeout(this.showWarningTimeout);this.showWarningTimeout=null;}};ja.prototype._handleChannelConnected=function(ka){"use strict";this._resetShowWarningTimeout();if(this.orderedList.isVisible())n.goOnline();this.warningMsgText=null;this._updateView();};ja.prototype._handleChannelShutdown=function(ka,la){"use strict";this._resetShowWarningTimeout();this.warningMsgText=this._getShutdownReason(la);this._updateView();};ja.prototype._handleChannelReconnecting=function(ka,la){"use strict";this._resetShowWarningTimeout();this.warningMsgText=this._getReconnectMsg(la);if(la>1000){if(la>l.get('warning_countdown_threshold_msec')){if(this.warningMsgEventListener){this.warningMsgEventListener.remove();this.warningMsgEventListener=null;}this.warningMsgEventListener=r.listen(this.message,'click',function(event){if(o.hasClass(event.getTarget(),'fbChatReconnectLink')){this._tryReconnect();event.kill();}}.bind(this));}this.showWarningTimeout=da(this._handleChannelReconnecting.bind(this,ka,la-1000),1000);}this._updateView();};ja.prototype._tryReconnect=function(){"use strict";if(j.disconnected())j.reconnect();};ja.prototype._handleVisibilityChange=function(){"use strict";this._updateView();if(i.shouldShow()){if(n.hasBlackbirdEnabled()){i.showBlackbirdDialog(this.getButton(),z.getVisibility());}else if(!n.isOnline())i.showOfflineDialog(this.getButton());}else i.hide();if(!n.isOnline())this.hide();};ja.prototype._updateView=function(ka){"use strict";var la=this.container;if(la){o.conditionClass(la,'offline',!n.isOnline());o.conditionClass(la,'error',j.disconnected());}if(j.disconnected())q.setContent(this.message,this.warningMsgText);var ma,na;if(!n.isOnline()){ma=ea._("{Chat} (Off)",{Chat:"Chat"});}else if(j.disconnected()){ma=ea._("{Chat} (Disconnected)",{Chat:"Chat"});}else{var oa=h.getOnlineCount();if(oa){ma=ea._("{Chat} {number-available}",{Chat:"Chat",'number-available':t.span({className:"count"}," (",oa,") ")});}else{ma="Chat";na=true;}}this._setUnread(this._unreadMessageCount);this._setLabel(ma,na);this.buttonContentChanged();};ja.prototype.onButtonClick=function(){"use strict";this._conditionallyShowTypeahead();if(o.shown(this.typeahead.getElement())){var ka=this.subscribe('show',function(){this.typeahead.getCore().getElement().focus();i.dismiss();}.bind(this));this.unsubscribe.bind(this,ka).defer();}};ja.prototype.onHide=function(){"use strict";this._isOpen=false;if(this._buddyListRenderSubscription){this.orderedList.unsubscribe(this._buddyListRenderSubscription);this._buddyListRenderSubscription=null;}this.orderedList.hide();this.typeahead.getCore().reset();};ja.prototype._onKeyDown=function(event){"use strict";var ka=r.getKeyCode(event);if(ka===v.ESC&&!o.hasClass(this.root,'menuOpened')){this.hide();return false;}else if(ka==v.RETURN)m.enable();};ja.prototype._onSidebarHide=function(event){"use strict";this.getButton().focus();};ja.prototype.onResize=function(){"use strict";var ka=p.getMaxFlyoutHeight(this.root)-60,la=Math.max(250,ka);this.orderedList.setNumTopFriends(Math.floor(la/fa));};ja.prototype._showBuddyList=function(){"use strict";if(!this._buddyListRenderSubscription)this._buddyListRenderSubscription=this.orderedList.subscribe('render',p.setUseMaxHeight.bind(p,this.root,false));this.orderedList.show();};ja.prototype.onShow=function(){"use strict";this._isOpen=true;if(j.disconnected()){this._tryReconnect();this._showBuddyList();}else n.goOnline(this._showBuddyList.bind(this));};ja.prototype._setLabel=function(ka,la){"use strict";var ma=this.label.cloneNode(true);q.setContent(ma,ka);q.replace(this.label,ma);this.label=ma;this.throbber&&o.conditionShow(this.throbber,!!la);};ja.prototype._setUnread=function(ka){"use strict";o.conditionShow(this.unreadCount,!!ka);if(ka){ka=t.span({className:"_51jx _5ayw"},ka);q.setContent(this.unreadCount,ka);}};ja.prototype._conditionallyShowTypeahead=function(){"use strict";o.conditionShow(this.typeahead.getElement(),this._orderedListCount>=ga);};ja.prototype._updateCount=function(){"use strict";this._updateView();this._conditionallyShowTypeahead();};e.exports=ja;});
__d("ChatSidebarDropdown",["Arbiter","AsyncRequest","Chat","ChatOptions","ChatVisibility","CSS","DOM","Event","JSLogger","PresenceState","SelectorDeprecated"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AsyncRequest'),i=b('Chat'),j=b('ChatOptions'),k=b('ChatVisibility'),l=b('CSS'),m=b('DOM'),n=b('Event'),o=b('JSLogger'),p=b('PresenceState'),q=b('SelectorDeprecated');function r(s,t){"use strict";this._root=s;this._logger=o.create('blackbird');this._displayBrowserNotificationsIfNeeded();q.listen(s,'select',this._onSelect.bind(this));q.listen(s,'toggle',this._onToggle.bind(this));if(t){q.listen(s,'close',t.allowCollapse.curry(true,'SidebarMenu'));q.listen(s,'open',t.allowCollapse.curry(false,'SidebarMenu'));}g.subscribe('chat/option-changed',this._onOptionChanged.bind(this));}r.prototype.changeSetting=function(s,t){"use strict";if(this._pendingChange)return false;this._pendingChange=true;var u={};u[s]=t;j.setSetting(s,t,'sidebar_menu');new h('/ajax/chat/settings.php').setHandler(this._onChangeSettingResponse.bind(this,s,t)).setErrorHandler(this._onChangeSettingError.bind(this,s,t)).setFinallyHandler(this._onChangeFinally.bind(this)).setData(u).setAllowCrossPageTransition(true).send();};r.prototype._displayBrowserNotificationsIfNeeded=function(){"use strict";if(window.webkitNotifications){m.scry(document,'li.sidebar-browser-notif').forEach(l.show);if(window.webkitNotifications.checkPermission()!==0)m.scry(document,'li.sidebar-browser-notif').forEach(function(s){l.removeClass(s,'checked');});}};r.prototype._conditionEnabled=function(s,t){"use strict";var u=q.getOption(this._root,s);u&&q.setOptionEnabled(u,t);};r.prototype._onChangeSettingResponse=function(s,t,u){"use strict";p.doSync();};r.prototype._onChangeSettingError=function(s,t,u){"use strict";j.setSetting(s,!t,'sidebar_menu_error');};r.prototype._onChangeFinally=function(){"use strict";this._pendingChange=false;};r.prototype._onOptionChanged=function(s,t){"use strict";var u=t.name,v=t.value;if(u==='sound'||u==='browser_notif'){var w=q.getOption(this._root,u);if(v!==q.isOptionSelected(w))q.setSelected(this._root,u,v);}};r.prototype._onSelect=function(s){"use strict";if(this._pendingChange)return false;var t=false,u=false,v=q.getOptionValue(s.option);switch(v){case 'sidebar':return this.toggleSidebar();case 'online':if(!k.isOnline()){k.goOnline();}else u=true;t=true;break;case 'offline':if(k.isOnline()){k.goOffline();}else u=true;t=true;break;case 'advanced_settings':case 'turn_off_dialog':g.inform('chat/advanced-settings-dialog-opened');t=true;break;}if(u){this._logger.error('sidebar_dropdown_visibility_error',{action:v});}else this._logger.log('sidebar_dropdown_set_visibility',{action:v});if(t){q.toggle(this._root);return false;}};r.prototype._onToggle=function(s){"use strict";if(this._pendingChange)return false;var t=q.getOptionValue(s.option),u=q.isOptionSelected(s.option);switch(t){case 'visibility':if(!k){this._jslogger.error('on_toggle_visibility_undefined');return;}k.toggleVisibility();this._logger.log('sidebar_dropdown_toggle_visibility',{available:u});break;case 'browser_notif':if(u&&window.webkitNotifications&&window.webkitNotifications.checkPermission()!==0){window.webkitNotifications.requestPermission(function(){this.changeSetting(t,u);}.bind(this));}else this.changeSetting(t,u);break;case 'sound':this.changeSetting(t,u);break;}q.toggle(this._root);};r.prototype._onVisibilityChanged=function(){"use strict";var s=k.isOnline(),t=q.getOption(this._root,'visibility');if(s!==q.isOptionSelected(t))q.setSelected(this._root,'visibility',s);};r.prototype.toggleSidebar=function(){"use strict";i.toggleSidebar();q.toggle(this._root);return false;};r.registerEditFavorites=function(s,t,u,v){"use strict";function w(x){l.conditionShow(s,!x);l.conditionShow(t,x);}n.listen(s,'click',function(){u.toggleEditMode();w(true);q.toggle(v);});n.listen(t,'click',function(){u.toggleEditMode();w(false);q.toggle(v);});u.subscribe('editStart',w.curry(true));u.subscribe('editEnd',w.curry(false));};e.exports=r;});
__d("NotificationImpressions",["AsyncSignal","NotificationTokens","URI"],function(a,b,c,d,e,f){var g=b('AsyncSignal'),h=b('NotificationTokens'),i=b('URI'),j='/ajax/notifications/impression.php';function k(l,m){var n={ref:m};h.untokenizeIDs(l).forEach(function(o,p){n['alert_ids['+p+']']=o;});new g(i(j).getQualifiedURI().toString(),n).send();}e.exports={log:k};});
__d("NotificationBeeperItemContents.react",["Animation","CloseButton.react","ImageBlock.react","NotificationURI","NotificationUserActions","React","TextWithEntities.react","Timestamp.react","cx"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('CloseButton.react'),i=b('ImageBlock.react'),j=b('NotificationURI'),k=b('NotificationUserActions'),l=b('React'),m=b('TextWithEntities.react'),n=b('Timestamp.react'),o=b('cx');function p(r,s){return l.DOM.span({className:"fwb"},r);}var q=l.createClass({displayName:'NotificationBeeperItemContents',_markAsRead:function(){k.markNotificationsAsRead([this.props.beep.notificationID]);this.props.onHide();},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new g(this.refs.inner.getDOMNode()).from('opacity','0').to('opacity','1').duration(200).go();},componentDidUpdate:function(r){if(r.beep.beepID!==this.props.beep.beepID)this._doFlash();},render:function(){var r=this.props.beep,s=r.icon.uri,t=r.link?j.localize(r.link):'#',u=r.photo&&j.snowliftable(t),v=u?t:r.ajaxifyLink,w=u?'theater':(v?'dialog':null);return (l.DOM.div({ref:"inner"},h({className:"_3soc",onClick:this._onClose,size:"medium"}),l.DOM.a({href:t,ajaxify:v,onClick:this._markAsRead,rel:w,className:"_3soi"},i({className:"_3soj"},l.DOM.img({src:r.actors[0].profile_picture.uri,className:"_3sok"}),l.DOM.div({className:"_3sol"},m({renderEmoticons:true,renderEmoji:true,interpolator:p,ranges:r.text.ranges,aggregatedranges:r.text.aggregated_ranges,text:r.text.text}),i({className:"_3som"},l.DOM.img({src:s}),n({time:r.timestamp.time,text:r.timestamp.text,verbose:r.timestamp.verbose})))))));}});e.exports=q;});
__d("NotificationBeeperItem.react",["Animation","BrowserSupport","NotificationBeeperItemContents.react","React","cx","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('BrowserSupport'),i=b('NotificationBeeperItemContents.react'),j=b('React'),k=b('cx'),l=b('setTimeoutAcrossTransitions'),m=j.createClass({displayName:'NotificationBeeperItem',getInitialState:function(){return {fadedIn:false,hidden:false};},componentDidMount:function(){var n;if(h.hasCSSAnimations()){n=this.setState.bind(this,{fadedIn:true},null);}else n=function(){new g(this.refs.item.getDOMNode()).from('top','-30px').from('opacity','0').to('top','0px').to('opacity','1').duration(200).ondone(this.setState.bind(this,{fadedIn:true},null)).go();}.bind(this);l(n,50);this.props.onInserted(this.props.beep);},_onHide:function(){this.setState({hidden:true});},render:function(){var n=this.props.beep,o=(("_3sod")+(this.state.fadedIn?' '+"_3soe":'')+(this.state.hidden?' '+"_3sof":'')),p=n.beepRenderer||i;return (j.DOM.li({className:o,ref:"item",'data-gt':n.tracking},p({beep:n,onHide:this._onHide})));}});e.exports=m;});
__d("NotificationSound",["Sound","copyProperties"],function(a,b,c,d,e,f){var g=b('Sound'),h=b('copyProperties'),i=5000;g.init(['audio/mpeg']);function j(k){this._soundPath=k;this._lastPlayed=0;}h(j.prototype,{play:function(k){if(!this._soundPath)return;var l=Date.now();if((l-this._lastPlayed)<i)return;this._lastPlayed=l;g.play(this._soundPath,k);}});e.exports=j;});
__d("NotificationBeeper.react",["Animation","Arbiter","ChannelConstants","NotificationBeeperItem.react","NotificationConstants","NotificationImpressions","NotificationPhotoThumbnail","NotificationSound","NotificationUpdates","NotificationUserActions","React","Style","cx","isEmpty","merge","setTimeoutAcrossTransitions","shield"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('Arbiter'),i=b('ChannelConstants'),j=b('NotificationBeeperItem.react'),k=b('NotificationConstants'),l=b('NotificationImpressions'),m=b('NotificationPhotoThumbnail'),n=b('NotificationSound'),o=b('NotificationUpdates'),p=b('NotificationUserActions'),q=b('React'),r=b('Style'),s=b('cx'),t=b('isEmpty'),u=b('merge'),v=b('setTimeoutAcrossTransitions'),w=b('shield'),x=10000,y=4000,z='beeper',aa=k.PayloadSourceType.LIVE_SEND,ba=k.PayloadSourceType.OTHER_APPLICATION,ca=q.createClass({displayName:'NotificationBeeper',getInitialState:function(){return {soundEnabled:this.props.soundEnabled,hovering:false,fading:false,paused:false,pendingBeeps:{},renderedBeeps:{}};},componentWillMount:function(){var ea=i.getArbiterType('notif_sound_pref_changed'),fa='update-notifications';this.subscriptions=[o.subscribe(fa,function(ga,ha){if(ha.payloadsource===aa||ha.payloadsource===ba){var ia=ha.nodes;if(ia&&ia.length)this._handleBeepChanges(da(ia));}}.bind(this)),h.subscribe(ea,function(ga,ha){this.setState({soundEnabled:ha.obj.enabled});}.bind(this))];h.inform('NotificationBeeper/mounted',null,h.BEHAVIOR_PERSISTENT);},componentWillUnmount:function(){this.subscriptions.forEach(function(ea){ea.unsubscribe();});this.subscriptions=null;},_onMouseEnter:function(){if(this.state.paused)return;this._hideWait&&clearTimeout(this._hideWait);if(this.state.fading){this._animation.stop();this._animation=null;r.set(this.refs.container.getDOMNode(),'opacity','0.96');}var ea=Object.keys(this.state.renderedBeeps);if(this.props.unseenVsUnread){p.markNotificationsAsSeen(ea);}else p.markNotificationsAsRead(ea);this.setState({hovering:true,fading:false,pendingBeeps:{},renderedBeeps:u(this.state.renderedBeeps,this.state.pendingBeeps)});},_onMouseLeave:function(){if(this.state.paused)return;this._waitToHide(y);this.setState({hovering:false});},_onInsertedItem:function(ea){if(!this.state.hovering)this._waitToHide();if(this.state.soundEnabled&&ea.sound){if(!this._notifSound)this._notifSound=new n(this.props.soundPath);this._notifSound.play(ea.beepID);}if(this.props.shouldLogImpressions)l.log([ea.notificationID],z);},_waitToHide:function(ea){this._hideWait&&clearTimeout(this._hideWait);this._hideWait=v(w(this._hide,this),(ea||x)*(this.props.slowFade?2:1));},_hide:function(){this._animation&&this._animation.stop();this._animation=new g(this.refs.container.getDOMNode()).from('opacity','0.96').to('opacity','0').duration(1500).ondone(this._finishHide).go();this.setState({fading:true});},_finishHide:function(){var ea=this.state.pendingBeeps;this.setState({fading:false,pendingBeeps:{},renderedBeeps:{}});v(this.setState.bind(this,{renderedBeeps:ea},null));r.set(this.refs.container.getDOMNode(),'opacity','0.96');},_handleBeepChanges:function(ea){var fa=this.state.fading?this.state.pendingBeeps:this.state.renderedBeeps;Object.keys(ea).reverse().forEach(function(ga){var ha=ea[ga],ia=ha.beepID,ja=this.state.renderedBeeps[ga]||{};if(ja.beepID!=ia){delete fa[ga];fa[ga]=ha;}}.bind(this));if(!this.state.paused)this._waitToHide();this.forceUpdate();},_togglePause:function(){if(!this.state.paused){this._animation&&this._animation.stop();this._hideWait&&clearTimeout(this._hideWait);}else this._waitToHide();this.setState({paused:!this.state.paused});},render:function(){var ea=this.state.renderedBeeps,fa={};Object.keys(ea).reverse().forEach(function(ja){var ka=ea[ja];fa[ja]=j({beep:ka,onInserted:this._onInsertedItem});},this);var ga=!t(fa),ha=null;if(ga&&this.props.canPause)ha=q.DOM.li({className:"_a_g",onClick:this._togglePause},this.state.paused?'Continue':'Pause [fb]');var ia=((!ga?"hidden_elem":'')+(' '+"_50d1"));return (q.DOM.ul({ref:"container",className:ia,'data-gt':this.props.tracking,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},fa,ha));}});function da(ea){var fa={};ea.forEach(function(ga){if(!ga.showBeep)return;var ha=ga.alert_id,ia=ha+'-'+ga.receivedTime,ja=m.getThumbnail(ga.attachments,ga.attached_story);fa[ha]={notificationID:ha,beepID:ia,beepRenderer:ga.beepRenderer,actors:ga.actors,icon:ga.icon,link:ga.url,ajaxifyLink:ga.ajaxify_url,photo:ja,text:ga.unaggregatedTitle||ga.title,timestamp:ga.timestamp,receivedTime:ga.receivedTime,sound:!!ga.sound,tracking:ga.tracking};});return fa;}e.exports=ca;});
__d("LiveMessageReceiver",["Arbiter","ChannelConstants","copyProperties","emptyFunction","shield"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ChannelConstants'),i=b('copyProperties'),j=b('emptyFunction'),k=b('shield');function l(m){this.eventName=m;this.subs=null;this.handler=j;this.shutdownHandler=null;this.registered=false;this.appId=1;}i(l,{getAppMessageType:function(m,n){return 'live_message/'+m+':'+n;},route:function(m){var n=function(o){var p=l.getAppMessageType(m.app_id,m.event_name);g.inform(p,o,g.BEHAVIOR_PERSISTENT);};n(m.response);}});i(l.prototype,{setAppId:function(m){this.appId=m;return this;},setHandler:function(m){this.handler=m;this._dirty();return this;},setRestartHandler:j,setShutdownHandler:function(m){this.shutdownHandler=k(m);this._dirty();return this;},_dirty:function(){if(this.registered){this.unregister();this.register();}},register:function(){var m=function(o,p){return this.handler(p);}.bind(this),n=l.getAppMessageType(this.appId,this.eventName);this.subs={};this.subs.main=g.subscribe(n,m);if(this.shutdownHandler)this.subs.shut=g.subscribe(h.ON_SHUTDOWN,this.shutdownHandler);this.registered=true;return this;},unregister:function(){if(!this.subs)return this;for(var m in this.subs)if(this.subs[m])this.subs[m].unsubscribe();this.subs=null;this.registered=false;return this;}});e.exports=l;});
__d("initLiveMessageReceiver",["Arbiter","ChannelConstants","LiveMessageReceiver"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ChannelConstants'),i=b('LiveMessageReceiver');g.subscribe(h.getArbiterType('app_msg'),function(j,k){i.route(k.obj);});});
__d("Slideshow",["ArbiterMixin","CSS","DOM","Event","Locale","Parent","csx","cx","mixin","shield"],function(a,b,c,d,e,f){var g=b('ArbiterMixin'),h=b('CSS'),i=b('DOM'),j=b('Event'),k=b('Locale'),l=b('Parent'),m=b('csx'),n=b('cx'),o=b('mixin'),p=b('shield'),q=o(g);for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(u,v){"use strict";this._root=u;this._config=v;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._init();}t.prototype.getIndex=function(){"use strict";return this._currentIndex;};t.prototype.getNumItems=function(){"use strict";return this._items.length;};t.prototype.page=function(u){"use strict";if(typeof u==='undefined')u='next';if(u==='next'){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo(this._currentIndex+1);}else if(u==='prev')if(this._config.wrap||this.getIndex()>0)this._animateTo(this._currentIndex-1);};t.prototype.pageTo=function(u){"use strict";this._animateTo(u,p(this._setCurrent,this,u));};t.prototype.insert=function(u,v){"use strict";if(u>this._currentIndex){i.insertAfter(this._items[u-1],v);}else{i.insertBefore(this._items[u],v);this._currentIndex++;}this._items.splice(u,0,v);this._updateArrowState(this._currentIndex);this.inform('items_updated');};t.prototype.push=function(u){"use strict";this.insert(this._items.length,u);};t.prototype._init=function(){"use strict";this._container=i.find(this._root,"ul._2xq");this._items=i.scry(this._container,"li._2xr");if(this._config.arrows){j.listen(this._root,'click',this._clickListener.bind(this));var u=i.find(this._root,"a._2xw"),v=i.find(this._root,"a._2xx");this._arrowLeft=k.isRTL()?u:v;this._arrowRight=k.isRTL()?v:u;}if(this._config.autoplay){j.listen(this._root,'mouseenter',this.stopAutoplay.bind(this));j.listen(this._root,'mouseleave',this.resetAutoplay.bind(this));this.resetAutoplay();}this.subscribe(['page_start','page_end'],function(w,x){h.conditionClass(this._root,"_2xm",w==='page_start');}.bind(this));};t.prototype._clickListener=function(event){"use strict";var u=event.getTarget(),v=l.byTag(u,'a');if(v&&!h.hasClass(v,"_2xo"))if(h.hasClass(v,"_2xw")){this.page('next');}else if(h.hasClass(v,"_2xx"))this.page('prev');};t.prototype._updateArrowState=function(u){"use strict";if(!this._config.arrows)return;h.conditionClass(this._arrowRight,"_2xo",this._items.length===1);h.conditionClass(this._arrowLeft,"_2xo",this._items.length===1);};t.prototype._animateTo=function(u){"use strict";};t.prototype._setCurrent=function(u){"use strict";h.removeClass(this._items[this._currentIndex],"_2xn");h.addClass(this._items[u],"_2xn");h.removeClass(this._root,"_2xm");this._currentIndex=u;this._animating=false;this.inform('page_end',u);};t.prototype.resetAutoplay=function(){"use strict";if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._config.autoplayTimeout);}};t.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer);this._autoplayTimer=null;};t.prototype._autoplay=function(){"use strict";this.resetAutoplay();if(this._items.length>1)this.page();};e.exports=t;});
__d("Carousel",["Animation","CSS","Ease","Locale","Slideshow","Style","cx","shield"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('CSS'),i=b('Ease'),j=b('Locale'),k=b('Slideshow'),l=b('Style'),m=b('cx'),n=b('shield'),o=j.isRTL()?'right':'left',p=i.sineInOut;for(var q in k)if(k.hasOwnProperty(q))s[q]=k[q];var r=k===null?null:k.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=k;function s(t,u){"use strict";k.call(this,t,u);this.subscribe('items_updated',this._updateItemState.bind(this));}s.prototype._updateItemState=function(t,u){"use strict";this._setContainerPos(t);l.set(this._container,'width',(this._items.length*this._config.width)+'px');};s.prototype._updateArrowState=function(t){"use strict";if(!this._config.arrows)return;var u=this._config.wrap,v=this._items.length,w=Math.floor(v/this._config.photosperframe);h.conditionClass(this._arrowRight,"_2xo",w===1||(!u&&t===w-1));h.conditionClass(this._arrowLeft,"_2xo",w===1||(!u&&t===0));};s.prototype._animate=function(t,u){"use strict";this._animating=true;this.inform('page_start',t);new g(this._container).to(o,-t*this._config.width).duration(this._config.animationDuration).ease(p).ondone(u).go();};s.prototype._setContainerPos=function(t){"use strict";l.set(this._container,o,-t*this._config.width+'px');};s.prototype._animateTo=function(t){"use strict";if(this._animating)return;var u=this._items.length;if((0<=t&&t<u)||!this._config.wrap){var v=(t+u)%u;this._updateArrowState(v);return this._animate(v,n(this._setCurrent,this,v));}var w=t%u,x=w?u-1:0,y=this._items[u-1];l.set(y,'position','absolute');l.set(y,o,-this._config.width+'px');if(x===0)this._setContainerPos(-1);this._animate(w,function(){l.set(y,'position','static');l.set(y,o,'auto');this._setContainerPos(x);this._setCurrent(x);}.bind(this));};e.exports=s;});