// v 1.10
// Р   Р Р†Р вЂљРІР‚СњР   Р РЋРІР‚в„ўР   Р РЋРЎСџР   Р РЋРІР‚С”Р   Р Р†Р вЂљРЎвЂќР   Р РЋРЎС™Р   Р  РІР‚РЋР   Р Р†Р вЂљРЎС›Р   Р РЋРЎвЂєР   Р  Р вЂ№Р   Р  РІР‚РЋ Р   Р РЋРІР‚в„ўР   Р Р†Р вЂљРІвЂћСћР   Р РЋРЎвЂєР   Р РЋРІР‚С”Р   Р РЋРЎв„ўР   Р РЋРІР‚в„ўР   Р РЋРЎвЂєР   Р вЂ™Р’ВР   Р вЂ™Р’В§Р   Р Р†Р вЂљРЎС›Р   Р  Р вЂ№Р   Р РЋРІвЂћСћР   Р вЂ™Р’В
// Media Source Р   Р РЋРІР‚ВР   Р вЂ™Р’В· Appsflyer
var af_pid = 'pid=' + af_media_source;
// Campaign Р   Р РЋРІР‚ВР   Р вЂ™Р’В· AppsFlyer
if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
// Р   Р РЋРІР‚С”Р  Р Р‹Р Р†Р вЂљРЎв„ўР   Р вЂ™Р’В»Р   Р РЋРІР‚ВР  Р Р‹Р Р†Р вЂљР Р‹Р   Р  РІР‚В¦Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р   Р Р†РІР‚С›РІР‚вЂњ Campaign
//var af_c = '&c='+ 'XXX';
// Android Deeplink Р   Р СћРІР‚ВР   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏ AppsFlyer
var android_af_dp = encodeURIComponent(android_dp);
// iOS Deeplink Р   Р СћРІР‚ВР   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏ AppsFlyer
var ios_af_dp = encodeURIComponent(ios_dp);
// Р   Р Р†Р вЂљРЎС›Р  Р Р‹Р  РЎвЂњР   Р вЂ™Р’В»Р   Р РЋРІР‚В Р   Р  РІР‚В¦Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’В¶Р   Р вЂ™Р’ВµР   Р  РІР‚В¦ Р  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р СћРІР‚ВР   Р РЋРІР‚ВР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р РЋРІР‚СњР  Р Р‹Р Р†Р вЂљРЎв„ў Р   Р  РІР‚  WEB Р   Р РЋРІР‚вЂќР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚В Р   Р РЋРІР‚СћР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  РЎвЂњР  Р Р‹Р РЋРІР‚СљР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  РЎвЂњР  Р Р‹Р Р†Р вЂљРЎв„ўР   Р  РІР‚ Р   Р РЋРІР‚ВР   Р РЋРІР‚В Р  Р Р‹Р РЋРІР‚СљР  Р Р‹Р  РЎвЂњР  Р Р‹Р Р†Р вЂљРЎв„ўР   Р вЂ™Р’В°Р   Р  РІР‚В¦Р   Р РЋРІР‚СћР   Р  РІР‚ Р   Р вЂ™Р’В»Р   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р  РІР‚В¦Р   Р РЋРІР‚СћР   Р РЋРІР‚вЂњР   Р РЋРІР‚Сћ Р   Р РЋРІР‚вЂќР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚ВР   Р вЂ™Р’В»Р   Р РЋРІР‚СћР   Р вЂ™Р’В¶Р   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р РЋРІР‚ВР  Р Р‹Р  Р РЏ
var af_web_url = '';
need_web == true ? af_web_url = web_link : need_web;
// Р   Р Р†Р вЂљРЎвЂќР   Р РЋРІР‚СћР   Р РЋРІР‚вЂњР   Р РЋРІР‚ВР   Р РЋРІР‚СњР   Р вЂ™Р’В° Р   Р РЋРІР‚вЂќР   Р РЋРІР‚СћР   Р вЂ™Р’В»Р  Р Р‹Р РЋРІР‚СљР  Р Р‹Р Р†Р вЂљР Р‹Р   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р РЋРІР‚ВР  Р Р‹Р  Р РЏ Р   Р РЋРІР‚В Р   Р РЋРІР‚вЂќР   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р СћРІР‚ВР   Р вЂ™Р’В°Р  Р Р‹Р Р†Р вЂљР Р‹Р   Р РЋРІР‚В Р   Р РЋР’ВР   Р вЂ™Р’ВµР  Р Р‹Р Р†Р вЂљРЎв„ўР   Р РЋРІР‚СћР   Р РЋРІР‚Сњ Р   Р РЋРІР‚В Р   Р РЋРІР‚вЂќР   Р вЂ™Р’В°Р  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’В°Р   Р РЋР’ВР   Р вЂ™Р’ВµР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚СћР   Р  РІР‚ 
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', other_param_web_url='';
var getCookie = function(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) { return match[2] } else { return ''}; };
// Р   Р  Р вЂ№Р   Р РЋР’ВР   Р РЋРІР‚СћР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚ВР   Р РЋР’В Р   Р РЋР’ВР   Р вЂ™Р’ВµР  Р Р‹Р Р†Р вЂљРЎв„ўР   Р РЋРІР‚СњР  Р Р‹Р РЋРІР‚Сљ Р   Р  РІР‚  URL Р   Р РЋРІР‚ВР   Р вЂ™Р’В»Р   Р РЋРІР‚В Р   Р РЋРІР‚вЂќР   Р РЋРІР‚СћР   Р вЂ™Р’В»Р  Р Р‹Р РЋРІР‚СљР  Р Р‹Р Р†Р вЂљР Р‹Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’В Р   Р вЂ™Р’ВµР  Р Р‹Р Р†Р вЂљР’В Р   Р РЋРІР‚ВР   Р вЂ™Р’В· Cookie
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
var utm_arr = [];
if (document.location.href.search(/=/) > 0) {
var UTM = decodeURIComponent(document.location.href.split('?').pop());
var utm_arr = UTM.split('&');
var count_utm_arr = -1;
// Р   Р  РІвЂљВ¬Р   Р СћРІР‚ВР   Р вЂ™Р’В°Р   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏР   Р вЂ™Р’ВµР   Р РЋР’В Р   Р  РІР‚ Р  Р Р‹Р  РЎвЂњР   Р вЂ™Р’Вµ Р   Р РЋРІР‚вЂќР   Р вЂ™Р’В°Р  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’В°Р   Р РЋР’ВР   Р вЂ™Р’ВµР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  РІР‚С™Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“ Р   Р РЋРІР‚вЂќР   Р РЋРІР‚СћР  Р Р‹Р  РЎвЂњР   Р вЂ™Р’В»Р   Р вЂ™Р’Вµ utm_
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
var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р   Р  РІР‚В¦Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’В¶Р   Р  РІР‚В¦Р   Р РЋРІР‚Сћ Р   Р СћРІР‚ВР   Р РЋРІР‚СћР   Р вЂ™Р’В±Р   Р вЂ™Р’В°Р   Р  РІР‚ Р   Р РЋРІР‚ВР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  Р вЂ° separator
var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р   Р  РІР‚В¦Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’В¶Р   Р  РІР‚В¦Р   Р РЋРІР‚Сћ Р   Р СћРІР‚ВР   Р РЋРІР‚СћР   Р вЂ™Р’В±Р   Р вЂ™Р’В°Р   Р  РІР‚ Р   Р РЋРІР‚ВР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р  Р вЂ° separator
};
// Р   Р РЋРЎСџР   Р РЋРІР‚СћР   Р вЂ™Р’В»Р  Р Р‹Р РЋРІР‚СљР  Р Р‹Р Р†Р вЂљР Р‹Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’В Р   Р РЋРІР‚СњР  Р Р‹Р РЋРІР‚СљР   Р РЋРІР‚СњР  Р Р‹Р РЋРІР‚Сљ GA
var ga_uid_fc = getCookie('_ga');
if (ga_uid_fc && ga_uid_fc != '') {
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ga_uid_arr[2]+'.'+ga_uid_arr[3];
};
// Р   Р  Р вЂ№Р   Р РЋРІР‚СћР   Р вЂ™Р’В±Р   Р РЋРІР‚ВР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’В utm_content_plus - content + term
var utm_content_plus = utm_content_sm.slice(0,100)+utm_term_sm.slice(0,100);
// Р   Р вЂ™Р’В¤Р   Р РЋРІР‚СћР  Р Р‹Р  РІР‚С™Р   Р РЋР’ВР   Р РЋРІР‚ВР  Р Р‹Р  РІР‚С™Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’ВµР   Р РЋР’В Р   Р РЋРІР‚вЂќР   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р РЋР’ВР   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р  РІР‚В¦Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р   Р вЂ™Р’Вµ Р   Р СћРІР‚ВР   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏ AppMetrica
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
// Р   Р вЂ™Р’В¤Р   Р РЋРІР‚СћР  Р Р‹Р  РІР‚С™Р   Р РЋР’ВР   Р РЋРІР‚ВР  Р Р‹Р  РІР‚С™Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’ВµР   Р РЋР’В Р   Р РЋРІР‚вЂќР   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р РЋР’ВР   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р  РІР‚В¦Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р   Р вЂ™Р’Вµ Р   Р СћРІР‚ВР   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏ AppsFlyer
var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : '';
var af_utm_content_plus = utm_content_plus ? '&af_sub4='+utm_content_plus : ''; 
var af_ga_uid_sm = ga_uid_sm ? '&af_sub5='+ga_uid_sm : '';
// Р   Р вЂ™Р’В¤Р   Р РЋРІР‚СћР  Р Р‹Р  РІР‚С™Р   Р РЋР’ВР   Р РЋРІР‚ВР  Р Р‹Р  РІР‚С™Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’ВµР   Р РЋР’В Р   Р РЋРІР‚вЂќР   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р РЋР’ВР   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р  РІР‚В¦Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р   Р вЂ™Р’Вµ Р   Р СћРІР‚ВР   Р вЂ™Р’В»Р  Р Р‹Р  Р РЏ WEB
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



// Android 
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;
// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;
// WEB
var redirect_unknown = web_link+other_param_web+utm_all;



// Р   Р РЋРІР‚вЂќР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚СћР   Р  РІР‚ Р   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р РЋРІР‚СњР   Р вЂ™Р’В° Р   Р РЋРІР‚вЂќР   Р вЂ™Р’В»Р   Р вЂ™Р’В°Р  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р Р†Р вЂљРЎвЂєР   Р РЋРІР‚СћР  Р Р‹Р  РІР‚С™Р   Р РЋР’ВР  Р Р‹Р Р†Р вЂљРІвЂћвЂ“
function check_platform(ua) {if(/android/gi.test(ua)){return 'android';}if(/iphone|ipod/gi.test(ua)){return 'iPhone';}return  'unknown';}
// Р   Р РЋРІР‚вЂќР   Р вЂ™Р’ВµР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР   Р вЂ™Р’В°Р   Р СћРІР‚ВР  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’ВµР  Р Р‹Р  РЎвЂњР   Р вЂ™Р’В°Р  Р Р‹Р Р†Р вЂљ Р   Р РЋРІР‚ВР  Р Р‹Р  Р РЏ
function redirect_user (address) {setTimeout(function(){window.location.href=address}, 2100);return true;}
// Р  Р Р‹Р  РЎвЂњР   Р РЋРІР‚СћР   Р РЋРІР‚СћР   Р вЂ™Р’В±Р  Р Р‹Р Р†Р вЂљР’В°Р   Р вЂ™Р’ВµР   Р  РІР‚В¦Р   Р РЋРІР‚ВР   Р вЂ™Р’Вµ Р   Р РЋРІР‚вЂќР   Р РЋРІР‚СћР   Р вЂ™Р’В»Р  Р Р‹Р  Р вЂ°Р   Р вЂ™Р’В·Р   Р РЋРІР‚СћР   Р  РІР‚ Р   Р вЂ™Р’В°Р  Р Р‹Р Р†Р вЂљРЎв„ўР   Р вЂ™Р’ВµР   Р вЂ™Р’В»Р  Р Р‹Р  РІР‚в„–
function inform_user (msg) {document.write(msg);return true;}
// Р   Р  РІР‚В¦Р   Р вЂ™Р’В°Р  Р Р‹Р Р†Р вЂљР Р‹Р   Р вЂ™Р’В°Р   Р вЂ™Р’В»Р   Р РЋРІР‚Сћ
var platform=check_platform(navigator.userAgent);
if (platform=="android") {redirect_user(redirect_android);}
else if (platform=="iPhone") {redirect_user (redirect_iphone);}
else { redirect_user(redirect_unknown);}


ym_sberbank = function() {
 (function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter1175048 = new Ya.Metrika({id:1175048, 
                  	// params:{'ip': userip},
                   // webvisor:true,
                    triggerEvent:true,                             
                    clickmap:false,
                    trackLinks:true,
                    trackHash:true,
                    params:window.yaParams,                             
                    accurateTrackBounce:true
                                                });
            // Счетчик на кросдомен по всем доменам
          	w.yaCounter31643078 = new Ya.Metrika({id: 31643078, params:window.yaParams});
           // Счетчик на кросдомен по Сбербанку и СБОЛ  
          w.yaCounter34972370 = new Ya.Metrika({ id:34972370, clickmap:true, trackLinks:true, accurateTrackBounce:true, trackHash:true, ut:"noindex", params:window.yaParams});
          
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }

})(document, window, "yandex_metrika_callbacks");
  
}
  



function yaCounter_F() {
 yaCounter_ID = [yaCounter1175048, yaCounter31643078, yaCounter34972370]
for (i = 0; i < yaCounter_ID.length; i++) {
if (typeof (yaCounter_ID[i]) != 'undefined') {
yaCounter_ID[i].userParams({
 clientId: yaCounter_ID[i].getClientID(),
})
}}}

setTimeout(ym_sberbank, 0);
setTimeout(yaCounter_F, 1000);
