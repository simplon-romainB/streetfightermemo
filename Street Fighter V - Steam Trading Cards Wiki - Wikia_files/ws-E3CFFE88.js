var tempwin = win = window; while (tempwin != tempwin.top) { try { if (tempwin.frameElement) { win = tempwin.parent; } } catch (e) { } tempwin = tempwin.parent; }
if (!win.__WS_BOOT) {
    function e(v) { var s = encodeURIComponent(v); return s.replace(/%(?![0-9a-fA-F]{2})/g, "%25"); } function h() { return e((window.location.href || '').split("?")[0].split("#")[0]); }
    win.__WS_BOOT = 1; var wsHost = "//wsc1.webspectator.com"; var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = wsHost + '/init?appId=E3CFFE88&h=' + h() + '&t=' + +new Date(); var x = win.document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}
var _comscore = _comscore || []; _comscore.push({ c1: "7", c2: "22153319" });(function () { var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);})();
var q = document.createElement('script');q.type = 'text/javascript';q.async = true;q.src = '//wfpscripts.webspectator.com/quantcast.js';document.getElementsByTagName('HEAD')[0].appendChild(q);
