define(["base_playlist","hammer","stapes","zeus_utils"],function(t,e,n){var i=window.ZeusConstants,a=window.client,l=(window.Playlist,window.View),s=ZeusUtils.dom,o=ZeusUtils.css,r=function(t,e,i){var a=this;a.data=e,console.log("PLAYLIST DATA:",a.data),a.index=t,a.el=document.createElement("div"),a.el.setAttribute("data-video-id",a.data.videoId),o.addClass(a.el,"playlist-item"),a.elTitle=document.createElement("div"),o.addClass(a.elTitle,"playlist-item-title"),a.elTitle.innerText=a.data.title.length>=46?a.data.title.substring(0,46)+"...":a.data.title,a.elImg=document.createElement("img"),a.elImg.src=a.data.thumb,o.addClass(a.elImg,"playlist-thumb"),a.el.appendChild(a.elImg),a.el.appendChild(a.elTitle),i.appendChild(a.el),a.el.addEventListener("click",function(){a.selected(!0),a.emit("selected",{target:a})}),n.mixinEvents(a)};r.prototype={invalidate:function(){},selected:function(t){t?o.addClass("selected"):o.removeClass("selected")}};var d={items:[],screenWidth:0,totalWidth:0,itemsPerScreen:4,itemContainer:null,itemWidth:0,buttons:{left:null,right:null},isOpen:!1,maxLeft:0,init:function(t,e){var i=this;i.itemContainer=e;for(var a=0;a<t.length;a++){var l=t[a],s=new r(a,l,e);s.on("selected",i._onItemClicked,i),i.items.push(s)}n.mixinEvents(i)},_onItemClicked:function(t){var e=t.target;this.emit("itemselected",{target:this,data:{element:e.el,config:e.data,index:e.index}})},scrollLeft:function(){var t=this.itemWidth*this.itemsPerScreen,e=parseFloat(getComputedStyle(this.itemContainer).left),n=e+t;n>0&&(n=0),this.itemContainer.style.left=n+"px",this.invalidateButtons()},scrollRight:function(){var t=this.itemWidth*this.itemsPerScreen,e=parseFloat(getComputedStyle(this.itemContainer).left),n=e-t;n<this.maxLeft&&(n=this.maxLeft),this.itemContainer.style.left=n+"px",this.invalidateButtons()},invalidate:function(t){var e=this;if(t){LOG.info("playlist invalidate renderer screen width",t),e.screenWidth=t,e.itemsPerScreen=t>=728?4:3,e.itemWidth=t/e.itemsPerScreen;for(var n=0;n<e.items.length;n++){var i=e.items[n];i.el.style.width=e.itemWidth+"px"}e.totalWidth=n*e.itemWidth,e.itemContainer.style.width=e.totalWidth+"px",e.maxLeft=-(e.totalWidth-e.itemWidth*e.itemsPerScreen),e.invalidateButtons()}},invalidateButtons:function(){var t=this;0===parseFloat(getComputedStyle(t.itemContainer).left)?o.removeClass(t.buttons.left,"showPlaylistBtn"):o.addClass(t.buttons.left,"showPlaylistBtn"),parseFloat(getComputedStyle(t.itemContainer).left)===t.maxLeft?o.removeClass(t.buttons.right,"showPlaylistBtn"):o.addClass(t.buttons.right,"showPlaylistBtn"),t.buttons.right.style.top=(t.itemContainer.clientHeight-t.buttons.right.clientHeight)/2+"px",t.buttons.left.style.top=(t.itemContainer.clientHeight-t.buttons.left.clientHeight)/2+"px"}},c=t.subclass({constructor:function(e){t.prototype.constructor.call(this,e);var n=this;n._data=null,n._rightBtn=document.getElementById("playlist-right-btn"),n._leftBtn=document.getElementById("playlist-left-btn"),n._listContainer=document.getElementById("playlist-content")},init:function(t){var n=this;if(n.playlistBtn)if(a.isMobile)if(a.system.android)n.playlistBtn.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault(),n.toggle()});else{var o=new e(n.playlistBtn);o.on("tap",function(t){n.toggle()})}else{n.playlistBtn.addEventListener("mouseenter",function(t){s.isEnabled(n.playlistBtn)&&("8"!==a.system.win&&"8.1"!==a.system.win||!a.browser.chrome&&!a.browser.ie?l.onMouseOver(n.playlistBtn):n._mouseEnterTimeout=setTimeout(function(){!l.mouseInput.isTouched},100))}),n.playlistBtn.addEventListener("mouseleave",function(t){s.isEnabled(n.playlistBtn)&&(t.stopPropagation(),!l.mouseInput.isTouched)});var o=new e(n.playlistBtn);"8"!==a.system.win&&"8.1"!==a.system.win||!a.browser.chrome&&!a.browser.ie?o.on("tap",function(t){s.isEnabled(n.playlistBtn)&&n.toggle()}):o.on("hammer.input",function(t){s.isEnabled(n.playlistBtn)&&"touch"===t.pointerType&&("touchstart"===t.srcEvent.type||"pointerdown"===t.srcEvent.type?(l.mouseInput.isTouched=!0,n._mouseEnterTimeout&&(clearTimeout(n._mouseEnterTimeout),n._mouseEnterTimeout=null)):"touchend"!==t.srcEvent.type&&"pointerup"!==t.srcEvent.type||t.isFinal&&n.toggle())})}n._data=t,LOG.info("init playlist data",t,"length",t.length),d.buttons.left=n._leftBtn,d.buttons.right=n._rightBtn,d.init(n._data,n._listContainer,n._container.clientWidth),d.on("itemselected",function(t){LOG.info("selected playlist item",t.data.config,t.data.index);var e=t.data.element;n._selectElement(e),n._dispatchEvent(i.UI.Event.PLAYLIST_ITEM_SELECTED,t.data.config)},n),n._rightBtn.addEventListener("click",function(){d.scrollRight()}),n._leftBtn.addEventListener("click",function(){d.scrollLeft()}),l.addEventListener(i.UI.Event.MOUSE_OVER,function(t){n.isOpen&&d.invalidateButtons()}),l.addEventListener(i.UI.Event.MOUSE_OUT,function(t){t.target===window.Skin&&n.close()}),PlayerState.on(PlayerState.STATE_CHANGED,function(){switch(PlayerState.state){case PlayerState.AGE_GATE:case PlayerState.WAITING:n.close()}}),l.addEventListener(i.Player.Event.CONFIG_CHANGED,function(t){}),l.addEventListener(i.UI.Event.PLAYER_CHANGED,function(){l.currentPlayer.isAd()?(LOG.info("hide pl button",n._playlistBtn),s.hideElement(n._playlistBtn)):s.showElement(n._playlistBtn)})},invalidate:function(){this.isOpen&&d.invalidate(this._container.clientWidth)},open:function(){var t=this;if(!t.isOpen){t.isOpen=!0,LOG.info("playlist open"),o.addClass(t._container,"playlist-animate"),o.removeClass(t._container,"out"),o.addClass(t._container,"in"),l._scrubber.open();var e=function(){d.isOpen=!0,o.addClass(t._container,"playlist-is-open"),o.addClass(t._rightBtn,"showPlaylistBtn"),t.invalidate(),t._removeAnimationCallback(t._container,e)};o.removeClass(t._rightBtn,"showPlaylistBtn"),o.removeClass(t._leftBtn,"showPlaylistBtn"),t._addAnimationCallback(t._container,e)}},close:function(){var t=this;if(t.isOpen){LOG.info("playlist close"),d.isOpen=t.isOpen=!1,o.removeClass(t._container,"playlist-is-open"),o.removeClass(t._rightBtn,"open"),o.addClass(t._container,"playlist-animate"),o.removeClass(t._container,"in"),o.addClass(t._container,"out"),o.removeClass(t._rightBtn,"showPlaylistBtn"),o.removeClass(t._leftBtn,"showPlaylistBtn");var e=function(){o.removeClass(t._rightBtn,"showPlaylistBtn"),o.removeClass(t._leftBtn,"showPlaylistBtn"),t._removeAnimationCallback(t._container,e)};t._addAnimationCallback(t._container,e)}},_addAnimationCallback:function(t,e){for(var n=["webkit","moz","MS","o",""],i="AnimationEnd",a=0;a<n.length;a++)n[a]||(i=i.toLowerCase()),t.addEventListener(n[a]+i,e,!1)},_removeAnimationCallback:function(t,e){for(var n=["webkit","moz","MS","o",""],i="AnimationEnd",a=0;a<n.length;a++)n[a]||(i=i.toLowerCase()),t.removeEventListener(n[a]+i,e,!1)}});return c});