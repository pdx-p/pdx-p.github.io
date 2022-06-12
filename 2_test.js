var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/portalserver/static/features/%5BBBHOST%5D/Gtm/sv152.js';
document.head.appendChild(script);
var getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) { return match[2] } else { return '' };
};
var hitPageHostName = window.location.href, eventPageName = document.title, referrer = document.referrer, session_id = new Date().getTime() + '.' + Math.random().toString(36).substring(5), _ym_uid = getCookie('_ym_uid'), segmento = getCookie('Segmento_UID'), rcuid = getCookie('rcuid'), sbrf_segment = decodeURIComponent(getCookie('sbrf.segment')), sbrf_exp = getCookie('sbrf.exp-0yD84f5MSqO994AG06wJ0A'), PersType = getCookie('X-PersType'), PersType_NY = getCookie('X-PersType-NY'), anonymousUserId = getCookie('anonymousUserId'), gaexp = getCookie('_gaexp'), iap_uid = getCookie('iap.uid'), andata_ubtcuid = window.ubtcuid || "", uho_counter = getCookie('sbrf.asap-uho.counter'), Region_TB = getCookie('window.SBT.REGION_DATA.terrBank.code') || "", window_navigator_userAgent = window.navigator.userAgent, cookie_sa = getCookie('_sa'), cookie_sv = getCookie('_sv'), screen_color = window.colorSchemePref || "";
var ga_uid_fc = getCookie('_ga') || '';
if (ga_uid_fc.length > 5) {
    var ga_uid_arr = ga_uid_fc.split(/\./);
    var ga_uid_sm = ga_uid_arr[2] + '.' + ga_uid_arr[3];
    } else { var ga_uid_sm = '' }
var mass = new Object({
    hitPageHostName: hitPageHostName,
    eventPageName: eventPageName,
    referrer: referrer,
    sessionID: session_id,
    ymUID: _ym_uid,
    SegmentoUID: segmento,
    retailRocket: rcuid,
    sbrfSegment: sbrf_segment,
    sbrfExp: sbrf_exp,
    XPersType: PersType,
    XPersTypeNY: PersType_NY,
    BBanonymousUserId: anonymousUserId,
    GAcookieexp: gaexp,
    iapUID: iap_uid,
    andata_ubtcuid: andata_ubtcuid,
    sbrfAsapUHOCounter: uho_counter,
    Region_TB: Region_TB,
    window_navigator_userAgent: window_navigator_userAgent,
    Cookie_sa: cookie_sa,
    Cookie_sv: cookie_sv,
    screen_color: screen_color,
    ga_cid: ga_uid_sm
    })
//Top100 (Kraken) Counter
setTimeout(function(){
    (function (w, d, c) {
        (w[c] = w[c] || []).push(function () {
            var options = {
                project: 7625476,
            };
            try {
                w.top100Counter = new top100(options);
            } catch (e) { }
        });
        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () {
                n.parentNode.insertBefore(s, n);
            };
        s.type = "text/javascript";
        s.async = true;
        s.src =
            (d.location.protocol == "https:" ? "https:" : "http:") +
            "//st.top100.ru/top100/top100.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(window, document, "_top100q");
}, 100);
//END Top100 (Kraken) Counter
//ClickStream Counter
setTimeout(function(){
window.RetailRtdm = new SberVisor({
    url: 'https://svi.online.sberbank.ru/metrics/400c6d7e0a',
    buffer: 1,
    apiKey: '400c6d7e0acb128da4b10d1579c034f9f92e48f43b4973374e86feb025d9408a',
})
window.CorpRtdm = new SberVisor({
    url: 'https://svi.online.sberbank.ru/metrics/141f772ec0',
    buffer: 1,
    apiKey: '400c6d7e0acb128da4b10d1579c034f9f92e48f43b4973374e86feb025d9408a',
})
}, 100);
//END ClickStream Counter
//DMPKit Counter
setTimeout(function(){
    (function (w, d, s, l, h, m) {
        w[l] = w[l] || []
        w[l].push({ 'tm.start': new Date().getTime(), event: 'tm.js' })
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dmpkitdl' ? '&l=' + l : ''
        j.async = true
        //j.src = 'https://8kwky1agm3.a.trbcdn.net/gtm/sberbank_tm.js'
        j.src = '/portalserver/static/features/%5BBBHOST%5D/Gtm/tm.js'
        f.parentNode.insertBefore(j, f)
    })(
        window,
        document,
        'script',
        'dmpkitdl',
        'f940199e-3e2e-4fac-a636-01f1f5bf88e9',
        'dmp.sbermarketing.ru'
    )
}, 100);
//END DMPKit Counter
//YM Counter
setTimeout(function(){
var yaParams = {};
yaParams.sessions_params = mass
var ym_sberbank = function () {
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
            try {
                w.yaCounter1175048 = new Ya.Metrika({
                    id: 1175048,
                    triggerEvent: true,
                    clickmap: false,
                    trackLinks: false,
                    trackHash: true,
                    params: window.yaParams,
                    accurateTrackBounce: true
                });
                w.yaCounter31643078 = new Ya.Metrika({
                    id: 31643078,
                    params: window.yaParams
                });
                w.yaCounter34972370 = new Ya.Metrika({
                    id: 34972370,
                    clickmap: false,
                    trackLinks: false,
                    accurateTrackBounce: true,
                    trackHash: true,
                    ut: "noindex",
                    params: window.yaParams
                });
            } catch (e) { }
        });
        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () {
                n.parentNode.insertBefore(s, n);
            };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, "yandex_metrika_callbacks");
}
ym_sberbank();
}, 100);
//END YM Counter
setTimeout(function(){
RetailRtdm.push({
    eventCategory: '{{channelNameGTM}}{{categoryNameGTM}}{{productNameGTM}}',
    eventAction: 'event',
    eventType: 'pageview',
    properties: mass,
})
CorpRtdm.push({
    eventCategory: '{{channelNameGTM}}{{categoryNameGTM}}{{productNameGTM}}',
    eventAction: 'event',
    eventType: 'pageview',
    properties: mass,
})
var eventData = {
    'event': "sber_event",
    'category': 'pageview',
    'action': 'pageview',
    'label': 'pageview',
    'container_id': 'GTM-NRDX7Z',
}
dmpkitdl.push(Object.assign(eventData, mass))
}, 100);