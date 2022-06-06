// v 2.0 06.06.2022

var web_link_ios = web_link;
var web_link_android = web_link;
var web_link_web = web_link;
var af_pid = 'pid=' + af_media_source;

if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
//var af_c = '&c='+ 'XXX';
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
var UTM = decodeURIComponent(document.location.href.split('?').pop());
var utm_arr = UTM.split('&');
    var count_utm_arr = -1;
    
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
    var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') 
    
    var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26')
    
};

var ga_uid_fc = getCookie('_ga') || '0.0.0.0';
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ("_y_" + getCookie('_ym_uid') + "_d_" + getCookie('___dmpkit___') + "_g_" + ga_uid_arr[2] + '.' + ga_uid_arr[3]).slice(0, 90);

var utm_content_plus = utm_content_sm.slice(0, 100) + utm_term_sm.slice(0, 100);

var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
external_source = external_source.length > 165 ? external_source.slice(0,165)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
if (android_af_dp.search(/\?|%3F/) > 0){
var is_q_and = '%26';
} else
{ var is_q_and = '%3F'};
if (ios_af_dp.search(/\?|%3F/) > 0){
var is_q_ios = '%26';
} else
{ var is_q_ios = '%3F' };

var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : '';
var af_utm_content_plus = utm_content_plus ? '&af_sub4='+utm_content_plus : ''; 
var af_ga_uid_sm = ga_uid_sm ? '&af_sub5=' + ga_uid_sm : '';

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

if (web_link.search("person/dist_services/inner_apps")>=0) { var web_link_ios = 'https://online.sberbank.ru/CSAFront/index.do#/'}
if (web_link.search("person/dist_services/inner_apps")>=0) { var web_link_android = 'https://www.sberbank.ru/ru/person/dist_services/inner_apps?cache=no'}
if (web_link.search("person/dist_services/inner_apps")>=0) { var web_link_web = 'https://online.sberbank.ru/CSAFront/index.do#/'}

var af_ios_url_xx = '&af_ios_url=' + encodeURIComponent(web_link_ios+other_param_web_url+utm_all)+'&af_param_forwarding=false';
var af_android_url_xx = '&af_android_url=' + encodeURIComponent(web_link_android+other_param_web_url+utm_all)+'&af_param_forwarding=false';

// Android 
//var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url_xx;
// iOS
//var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url_xx;
// WEB
//var redirect_unknown = web_link_web+other_param_web+utm_all;

function check_platform(ua) {if(/android/gi.test(ua)){return 'android';}if(/iphone|ipod/gi.test(ua)){return 'iPhone';}return  'unknown';}
function inform_user (msg) {document.write(msg);return true;}
var platform=check_platform(navigator.userAgent);

if (platform=="android") {

setTimeout(function(){
window.location.href = decodeURIComponent(android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm)
},2100);

setTimeout(function(){
window.location.href = web_link_web+other_param_web+utm_all;
},2175);

} else if (platform=="iPhone") {

setTimeout(function(){
window.location.href = decodeURIComponent(ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm)
},2100);

setTimeout(function(){
window.location.href = web_link_web+other_param_web+utm_all;
},2175);


} else {

setTimeout(function(){
window.location.href = web_link_web+other_param_web+utm_all;
},2100);

}