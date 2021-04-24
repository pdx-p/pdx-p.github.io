// v 1.10
// ЗАПОЛНЯЕТСЯ АВТОМАТИЧЕСКИ
// Media Source из Appsflyer
//var af_pid = 'pid=' + af_media_source;
// Campaign из AppsFlyer
if (typeof af_c == "undefined") { var af_c = 'c=' + af_media_source;}

// Отличный Campaign
//var af_c = '&c='+ 'XXX';
// Android Deeplink для AppsFlyer
var android_af_dp = encodeURIComponent(android_dp);
// iOS Deeplink для AppsFlyer
var ios_af_dp = encodeURIComponent(ios_dp);

// Если нужен редирект в WEB при отсутствии установленного приложения
var af_web_url = '';
need_web == true ? af_web_url = web_link : need_web;

// Логика получения и передачи меток и параметров
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', af_channel = '',  af_adset = '', af_ad = '', other_param_web_url='';
var getCookie = function(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) { return match[2] } else { return ''}; };

// Смотрим метку в URL или получаем её из Cookie
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
var utm_arr = [];
if (document.location.href.search(/=/) > 0) {
var UTM = decodeURIComponent(document.location.href.split('?').pop());
var utm_arr = UTM.split('&');
var count_utm_arr = -1;

// Удаляем все параметры после utm_
for (i = 0; i < utm_arr.length; i++) { if (utm_arr[i].search('utm_') >= 0) { var count_utm_arr = ++i } }
(count_utm_arr >= 0) ? utm_arr = utm_arr.slice(0, count_utm_arr) : count_utm_arr = 0;
for (i = 0; i < utm_arr.length; i++) {
//utm_arr[i] = utm_arr[i].replace(/[^a-zA-Z0-9_=-]/g, '');
        

if (utm_arr[i].toLowerCase().search('utm_source') >= 0) { var utm_source_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_medium') >= 0) { var utm_medium_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_campaign') >= 0) { var utm_campaign_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_content') >= 0) { var utm_content_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
if (utm_arr[i].toLowerCase().search('utm_term') >= 0) { var utm_term_sm = '-_-' + (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
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
var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // нужно добавить separator
var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // нужно добавить separator
};

// Получаем куку GA
var ga_uid_fc = getCookie('_ga');
if (ga_uid_fc && ga_uid_fc != '') {
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ga_uid_arr[2]+'.'+ga_uid_arr[3];
};

// Собираем utm_content_plus - content + term
var utm_content_plus = utm_content_sm.slice(0,100)+utm_term_sm.slice(0,100);

// Формируем переменные для AppMetrica
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

// Формируем переменные для AppsFlyer
var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : ''; var af_utm_af_adset = utm_source_sm ? '&af_adset='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : ''; var af_utm_af_channel = utm_medium_sm ? '&af_channel='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : ''; var af_utm_af_ad = utm_campaign_sm ? '&af_ad='+utm_campaign_sm : '';
var af_utm_content_plus = utm_content_plus ? '&af_sub4='+utm_content_plus : ''; 
var af_ga_uid_sm = ga_uid_sm ? '&af_sub5='+ga_uid_sm : '';

// Формируем переменные для WEB
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
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+af_utm_af_adset+af_utm_af_channel+af_utm_af_ad+'&'+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url+'&shortlink=smartlink';

// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ/smartlink'+'?'+'af_force_deeplink=true&'+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+af_utm_af_adset+af_utm_af_channel+af_utm_af_ad+'&'+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;

// WEB
var redirect_unknown=web_link+other_param_web+utm_all;

// проверка платформы
function check_platform(ua) {if(/android/gi.test(ua)){return 'android';}if(/iphone|ipod/gi.test(ua)){return 'iPhone';}return  'unknown';}

// переадресация
function redirect_user (address) {setTimeout(function(){window.location.href=address}, 2100);return true;}

// сообщение пользователю
function inform_user (msg) {document.write(msg);return true;}

// начало
var platform=check_platform(navigator.userAgent);
if (platform=="android") {redirect_user(redirect_android);}
else if (platform=="iPhone") {redirect_user (redirect_iphone);}
else { redirect_user(redirect_unknown);}
