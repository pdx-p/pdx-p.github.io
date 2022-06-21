// v 2.0 07.06.2022
var web_link_ios = web_link;
var web_link_android = web_link;
var web_link_web = web_link;
var af_pid = 'pid=' + af_media_source;
if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}

var android_af_dp = encodeURIComponent(android_dp);
var ios_af_dp = encodeURIComponent(ios_dp);
var af_web_url = '';
need_web == true ? af_web_url = web_link : need_web;
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', other_param_web_url='';
var getCookie = function(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) { return match[2] } else { return '' };
};
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
var utm_arr = [];
if (document.location.href.search(/=/) > 0) {
    var UTM = document.location.href.split('?').pop()
    var utm_arr = UTM.split('&');
    for (i = 0; i < utm_arr.length; i++) {
        if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_source') >= 0) { var utm_source_sm = utm_arr[i].split('=').pop(); utm_arr[i] = '' };
        if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_medium') >= 0) { var utm_medium_sm = utm_arr[i].split('=').pop(); utm_arr[i] = '' };
        if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_campaign') >= 0) { var utm_campaign_sm = utm_arr[i].split('=').pop(); utm_arr[i] = '' };
        if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_content') >= 0) { var utm_content_sm = utm_arr[i].split('=').pop(); utm_arr[i] = '' };
        if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_term') >= 0) { var utm_term_sm = '-_-' + utm_arr[i].split('=').pop(); utm_arr[i] = '' };
        if (utm_arr != '' && utm_arr[i].toLowerCase().search("^r=|reqid") >= 0) { var rrr = 'ReqId=' + utm_arr[i].split('=').pop(); utm_arr[i] = '' };
    }
    var other_param = encodeURIComponent(utm_arr.filter(v => v).join('&'));
    function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
    }
    if (other_param != '') {
        var other_param_app = other_param + '%26';
        var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26')
        var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26')
    };
    if (rrr != '') {
        var rrr_app = encodeURIComponent(rrr) + '%26';
        var rrr_web = '&' + rrr;
    }
    } else {
    var utm_source_sm_fc = getCookie('utm_source'), utm_medium_sm_fc = getCookie('utm_medium'), utm_campaign_sm_fc = getCookie('utm_campaign'), utm_content_sm_fc = getCookie('utm_content'), utm_term_sm_fc = getCookie('utm_term');
    if (utm_source_sm_fc && utm_source_sm_fc != '') { utm_source_sm = utm_source_sm_fc };
    if (utm_medium_sm_fc && utm_medium_sm_fc != '') { utm_medium_sm = utm_medium_sm_fc };
    if (utm_campaign_sm_fc && utm_campaign_sm_fc != '') { utm_campaign_sm = utm_campaign_sm_fc };
    if (utm_content_sm_fc && utm_content_sm_fc != '') { utm_content_sm = utm_content_sm_fc };
    if (utm_term_sm_fc && utm_term_sm_fc != '') { utm_term_sm = utm_term_sm_fc };
    }

var ga_uid_fc = getCookie('_ga') || '0.0.0.0';
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ("_y_" + getCookie('_ym_uid') + "_d_" + getCookie('___dmpkit___') + "_g_" + ga_uid_arr[2] + '.' + ga_uid_arr[3]).slice(0, 90);
var utm_content_plus = utm_content_sm.slice(0, 100) + utm_term_sm.slice(0, 100);
var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
external_source = external_source.length > 165 ? external_source.slice(0,165)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
if (android_af_dp.search(/\?|%3F/) > 0){
var is_q_and = '%26';
} else { var is_q_and = '%3F'};
if (ios_af_dp.search(/\?|%3F/) > 0){
var is_q_ios = '%26';
} else { var is_q_ios = '%3F' };


var web_utm_source = utm_source_sm ? 'utm_source='+utm_source_sm : '';
var web_utm_medium = utm_medium_sm ? '&utm_medium='+utm_medium_sm : '';
var web_utm_campaign = utm_campaign_sm ? '&utm_campaign='+utm_campaign_sm : '';
var web_utm_content = utm_content_sm ? '&utm_content='+utm_content_sm : '';
var web_utm_term = utm_content_sm ? '&utm_term='+utm_term_sm : '';
var web_link_other_param_web = web_link+other_param_web
if (web_link_other_param_web.toLowerCase().search(/\?/)>0)
{ var separator_web = '&';}
if (web_link_other_param_web.toLowerCase().search(/\?/)<0)
{ var separator_web = '?';}
if (web_link.toLowerCase().search('sberbank.ru')<0){
var utm_all=separator_web+web_utm_source+web_utm_medium+web_utm_campaign+web_utm_content+web_utm_term;}
else {var utm_all = '';}


var nAgt = navigator.userAgent;
var nameOffset, verOffset, ix;
function check_platform(ua) { if (/android/gi.test(ua)) { return 'android'; } if (/iphone|ipod/gi.test(ua)) { return 'iPhone'; } return 'unknown'; }

var platform = check_platform(navigator.userAgent);
if (platform == "android") {

    if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        setTimeout(function () {
            window.location.href = decodeURIComponent(android_af_dp + is_q_and + rrr_app + external_source).replace(new RegExp("^android-app:\/\/", "gm"), "intent://")
        }, 2100);
    
        setTimeout(function () {
            window.location.href = web_link + rrr_web + utm_all;
        }, 2300);
    } else {
        setTimeout(function () {
            window.location.href = decodeURIComponent(android_af_dp + is_q_and + rrr_app + external_source).replace(new RegExp("^android-app:\/\/", "gm"), "intent://") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + web_link + rrr_web + utm_all + ";end"
        }, 2100);
    
        setTimeout(function () {
            window.location.href = web_link + rrr_web + utm_all;
        }, 2300);
    }
    
} else if (platform == "iPhone") {
if (need_web == false) {web_link_web = 'https://apps.apple.com/ru/app/minesweeper-go-classic-game/id1451053153?l=en'}  
setTimeout(function(){
window.location.href = decodeURIComponent(ios_af_dp + is_q_ios + rrr_app + external_source).replace(new RegExp("^sberbankonline:\/\/","gm"), "sbolonline://")
},2100);

setTimeout(function(){
//window.location.href = "https://www.sberbank.ru/sms/ios_new_pos_st_1?URL_1=" + encodeURIComponent(document.location.href) + "&DP=" + ios_af_dp + is_q_ios + rrr_app + external_source + "&WL=" + web_link + rrr_web + utm_all;
window.location.href = "https://pdx-p.github.io/update/pos_testic/new_test/ios_new_pos_st_1.html?URL_1=" + encodeURIComponent(document.location.href) + "&DP=" + ios_af_dp + is_q_ios + rrr_app + external_source + "&WL=" + web_link + rrr_web + utm_all;
},2150);

setTimeout(function(){
window.location.href = web_link + rrr_web + utm_all;
},2400);

} else {

setTimeout(function(){
window.location.href = web_link + rrr_web + utm_all;
}, 2100);

}