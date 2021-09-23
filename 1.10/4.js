(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window, document, 'script', 'dataLayer', 'GTM-NRDX7Z');

// !!! ОКОНЧАНИЕ ЧАСТИ ДЛЯ ЗАПОЛНЕНИЯ !!!
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-21169438-11');
var productNameGTM = document.location.hostname.replace(/https:\/\/|http:\/\/|www./, '')+document.location.pathname.split('/').join('.').split('?')[0].split('#')[0];
gtag('event', 'event', {
'event_category': productNameGTM,
'event_action': 'show_details',
'event_label': af_media_source,
});

// v 1.10
// Р  РІР‚вЂќР  РЎвЂ™Р  РЎСџР  РЎвЂєР  РІР‚С”Р  РЎСљР  Р вЂЎР  РІР‚СћР  РЎС›Р  Р Р‹Р  Р вЂЎ Р  РЎвЂ™Р  РІР‚в„ўР  РЎС›Р  РЎвЂєР  РЎС™Р  РЎвЂ™Р  РЎС›Р  Р’ВР  Р’В§Р  РІР‚СћР  Р Р‹Р  РЎв„ўР  Р’В
// Media Source Р  РЎвЂР  Р’В· Appsflyer
var af_pid = 'pid=' + af_media_source;
// Campaign Р  РЎвЂР  Р’В· AppsFlyer
if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
// Р  РЎвЂєР РЋРІР‚С™Р  Р’В»Р  РЎвЂР РЋРІР‚РЋР  Р вЂ¦Р РЋРІР‚в„–Р  РІвЂћвЂ“ Campaign
//var af_c = '&c='+ 'XXX';
// Android Deeplink Р  РўвЂР  Р’В»Р РЋР РЏ AppsFlyer
var android_af_dp = encodeURIComponent(android_dp);
// iOS Deeplink Р  РўвЂР  Р’В»Р РЋР РЏ AppsFlyer
var ios_af_dp = encodeURIComponent(ios_dp);
// Р  РІР‚СћР РЋР С“Р  Р’В»Р  РЎвЂ Р  Р вЂ¦Р РЋРЎвЂњР  Р’В¶Р  Р’ВµР  Р вЂ¦ Р РЋР вЂљР  Р’ВµР  РўвЂР  РЎвЂР РЋР вЂљР  Р’ВµР  РЎвЂќР РЋРІР‚С™ Р  Р вЂ  WEB Р  РЎвЂ”Р РЋР вЂљР  РЎвЂ Р  РЎвЂўР РЋРІР‚С™Р РЋР С“Р РЋРЎвЂњР РЋРІР‚С™Р РЋР С“Р РЋРІР‚С™Р  Р вЂ Р  РЎвЂР  РЎвЂ Р РЋРЎвЂњР РЋР С“Р РЋРІР‚С™Р  Р’В°Р  Р вЂ¦Р  РЎвЂўР  Р вЂ Р  Р’В»Р  Р’ВµР  Р вЂ¦Р  Р вЂ¦Р  РЎвЂўР  РЎвЂ“Р  РЎвЂў Р  РЎвЂ”Р РЋР вЂљР  РЎвЂР  Р’В»Р  РЎвЂўР  Р’В¶Р  Р’ВµР  Р вЂ¦Р  РЎвЂР РЋР РЏ
var af_web_url = '';
need_web == true ? af_web_url = web_link : need_web;
// Р  РІР‚С”Р  РЎвЂўР  РЎвЂ“Р  РЎвЂР  РЎвЂќР  Р’В° Р  РЎвЂ”Р  РЎвЂўР  Р’В»Р РЋРЎвЂњР РЋРІР‚РЋР  Р’ВµР  Р вЂ¦Р  РЎвЂР РЋР РЏ Р  РЎвЂ Р  РЎвЂ”Р  Р’ВµР РЋР вЂљР  Р’ВµР  РўвЂР  Р’В°Р РЋРІР‚РЋР  РЎвЂ Р  РЎВР  Р’ВµР РЋРІР‚С™Р  РЎвЂўР  РЎвЂќ Р  РЎвЂ Р  РЎвЂ”Р  Р’В°Р РЋР вЂљР  Р’В°Р  РЎВР  Р’ВµР РЋРІР‚С™Р РЋР вЂљР  РЎвЂўР  Р вЂ 
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', other_param_web_url='';
var getCookie = function(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) { return match[2] } else { return ''}; };
// Р  Р Р‹Р  РЎВР  РЎвЂўР РЋРІР‚С™Р РЋР вЂљР  РЎвЂР  РЎВ Р  РЎВР  Р’ВµР РЋРІР‚С™Р  РЎвЂќР РЋРЎвЂњ Р  Р вЂ  URL Р  РЎвЂР  Р’В»Р  РЎвЂ Р  РЎвЂ”Р  РЎвЂўР  Р’В»Р РЋРЎвЂњР РЋРІР‚РЋР  Р’В°Р  Р’ВµР  РЎВ Р  Р’ВµР РЋРІР‚В Р  РЎвЂР  Р’В· Cookie
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
var utm_arr = [];
if (document.location.href.search(/=/) > 0) {
var UTM = decodeURIComponent(document.location.href.split('?').pop());
var utm_arr = UTM.split('&');
var count_utm_arr = -1;
// Р  Р в‚¬Р  РўвЂР  Р’В°Р  Р’В»Р РЋР РЏР  Р’ВµР  РЎВ Р  Р вЂ Р РЋР С“Р  Р’Вµ Р  РЎвЂ”Р  Р’В°Р РЋР вЂљР  Р’В°Р  РЎВР  Р’ВµР РЋРІР‚С™Р РЋР вЂљР РЋРІР‚в„– Р  РЎвЂ”Р  РЎвЂўР РЋР С“Р  Р’В»Р  Р’Вµ utm_
for (i = 0; i < utm_arr.length; i++) { if (utm_arr[i].search('utm_') >= 0) { var count_utm_arr = ++i } }
(count_utm_arr >= 0) ? utm_arr = utm_arr.slice(0, count_utm_arr) : count_utm_arr = 0;
for (i = 0; i < utm_arr.length; i++) {
//utm_arr[i] = utm_arr[i].replace(/[^a-zA-Z0-9_=-]/g, '');
if (utm_arr[i].toLowerCase().search('utm_source') >= 0) { var utm_source_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_medium') >= 0) { var utm_medium_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_campaign') >= 0) { var utm_campaign_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_content') >= 0) { var utm_content_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_term') >= 0) { var utm_term_sm = '-_-' + (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('need_web') >= 0) { utm_arr[i] = '' };
if (utm_arr[i].length > 200) { utm_arr[i] = utm_arr[i].slice(0, 200) }
}
}
if (utm_source_sm == '') { utm_source_sm = utm_cookie_arr[0].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
if (utm_medium_sm == '') { utm_medium_sm = utm_cookie_arr[1].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
if (utm_campaign_sm == '') { utm_campaign_sm = utm_cookie_arr[2].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
if (utm_content_sm == '') { utm_content_sm = utm_cookie_arr[3].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
if (utm_term_sm == '') { utm_term_sm = '-_-'+utm_cookie_arr[4].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
var other_param = encodeURIComponent(utm_arr.filter(v => v ).join('&'));
function replaceAll(string, search, replace) {
return string.split(search).join(replace);
}
if (other_param != '') {
var other_param_app = other_param + '%26';
var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р  Р вЂ¦Р РЋРЎвЂњР  Р’В¶Р  Р вЂ¦Р  РЎвЂў Р  РўвЂР  РЎвЂўР  Р’В±Р  Р’В°Р  Р вЂ Р  РЎвЂР РЋРІР‚С™Р РЋР Р‰ separator
var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р  Р вЂ¦Р РЋРЎвЂњР  Р’В¶Р  Р вЂ¦Р  РЎвЂў Р  РўвЂР  РЎвЂўР  Р’В±Р  Р’В°Р  Р вЂ Р  РЎвЂР РЋРІР‚С™Р РЋР Р‰ separator
};
// Р  РЎСџР  РЎвЂўР  Р’В»Р РЋРЎвЂњР РЋРІР‚РЋР  Р’В°Р  Р’ВµР  РЎВ Р  РЎвЂќР РЋРЎвЂњР  РЎвЂќР РЋРЎвЂњ GA
var ga_uid_fc = getCookie('_ga');
if (ga_uid_fc && ga_uid_fc != '') {
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ga_uid_arr[2]+'.'+ga_uid_arr[3];
};
// Р  Р Р‹Р  РЎвЂўР  Р’В±Р  РЎвЂР РЋР вЂљР  Р’В°Р  Р’ВµР  РЎВ utm_content_plus - content + term
var utm_content_plus = utm_content_sm.slice(0,100)+utm_term_sm.slice(0,100);
// Р  Р’В¤Р  РЎвЂўР РЋР вЂљР  РЎВР  РЎвЂР РЋР вЂљР РЋРЎвЂњР  Р’ВµР  РЎВ Р  РЎвЂ”Р  Р’ВµР РЋР вЂљР  Р’ВµР  РЎВР  Р’ВµР  Р вЂ¦Р  Р вЂ¦Р РЋРІР‚в„–Р  Р’Вµ Р  РўвЂР  Р’В»Р РЋР РЏ AppMetrica
var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
external_source = external_source.length > 221 ? external_source.slice(0,221)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
if (android_af_dp.search(/\?|%3F/) > 0){
var is_q_and = '%26';
} else
{ var is_q_and = '%3F'};
if (ios_af_dp.search(/\?|%3F/) > 0){
var is_q_ios = '%26';
} else
{ var is_q_ios = '%3F'};
// Р  Р’В¤Р  РЎвЂўР РЋР вЂљР  РЎВР  РЎвЂР РЋР вЂљР РЋРЎвЂњР  Р’ВµР  РЎВ Р  РЎвЂ”Р  Р’ВµР РЋР вЂљР  Р’ВµР  РЎВР  Р’ВµР  Р вЂ¦Р  Р вЂ¦Р РЋРІР‚в„–Р  Р’Вµ Р  РўвЂР  Р’В»Р РЋР РЏ AppsFlyer
var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : '';
var af_utm_content_plus = utm_content_plus ? '&af_sub4='+utm_content_plus : ''; 
var af_ga_uid_sm = ga_uid_sm ? '&af_sub5='+ga_uid_sm : '';
// Р  Р’В¤Р  РЎвЂўР РЋР вЂљР  РЎВР  РЎвЂР РЋР вЂљР РЋРЎвЂњР  Р’ВµР  РЎВ Р  РЎвЂ”Р  Р’ВµР РЋР вЂљР  Р’ВµР  РЎВР  Р’ВµР  Р вЂ¦Р  Р вЂ¦Р РЋРІР‚в„–Р  Р’Вµ Р  РўвЂР  Р’В»Р РЋР РЏ WEB
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
if (af_web_url !=''){
var af_android_url = '&af_android_url=' + encodeURIComponent(af_web_url+other_param_web_url+utm_all)+'&af_param_forwarding=false';
var af_ios_url = '&af_ios_url=' + encodeURIComponent(af_web_url+other_param_web_url+utm_all)+'&af_param_forwarding=false';
} else {
var af_android_url = '';
var af_ios_url = '';
}




if ((af_utm_medium.search("organic")>=0) || (af_utm_medium.search("referral")>=0) || (af_utm_medium.search("free")>=0) || (af_utm_medium.search("email")>=0) || (af_utm_medium.search("none")>=0)){

// Android 
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;
// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;
// WEB
var redirect_unknown=web_link+other_param_web+utm_all;

} else {

// Android 
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;
// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;
// WEB
var redirect_unknown = web_link+other_param_web+utm_all;

}




// Р  РЎвЂ”Р РЋР вЂљР  РЎвЂўР  Р вЂ Р  Р’ВµР РЋР вЂљР  РЎвЂќР  Р’В° Р  РЎвЂ”Р  Р’В»Р  Р’В°Р РЋРІР‚С™Р РЋРІР‚С›Р  РЎвЂўР РЋР вЂљР  РЎВР РЋРІР‚в„–
function check_platform(ua) {if(/android/gi.test(ua)){return 'android';}if(/iphone|ipod/gi.test(ua)){return 'iPhone';}return  'unknown';}
// Р  РЎвЂ”Р  Р’ВµР РЋР вЂљР  Р’ВµР  Р’В°Р  РўвЂР РЋР вЂљР  Р’ВµР РЋР С“Р  Р’В°Р РЋРІР‚ Р  РЎвЂР РЋР РЏ
function redirect_user (address) {setTimeout(function(){window.location.href=address}, 2100);return true;}
// Р РЋР С“Р  РЎвЂўР  РЎвЂўР  Р’В±Р РЋРІР‚В°Р  Р’ВµР  Р вЂ¦Р  РЎвЂР  Р’Вµ Р  РЎвЂ”Р  РЎвЂўР  Р’В»Р РЋР Р‰Р  Р’В·Р  РЎвЂўР  Р вЂ Р  Р’В°Р РЋРІР‚С™Р  Р’ВµР  Р’В»Р РЋР вЂ№
function inform_user (msg) {document.write(msg);return true;}
// Р  Р вЂ¦Р  Р’В°Р РЋРІР‚РЋР  Р’В°Р  Р’В»Р  РЎвЂў
var platform=check_platform(navigator.userAgent);
if (platform=="android") {redirect_user(redirect_android);}
else if (platform=="iPhone") {redirect_user (redirect_iphone);}
else { redirect_user(redirect_unknown);}