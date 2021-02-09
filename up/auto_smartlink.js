// ЗАПОЛНЯЕТСЯ АВТОМАТИЧЕСКИ

// Media Source из Appsflyer
var af_pid = 'pid=' + af_media_source;

// Campaign из AppsFlyer
var af_c = '&c=' + af_media_source;
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
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', other_param_web_url = '';

var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	if (match) return match[2] || ''; };
	
// Если есть метка в URL
if (document.location.href.search(/=/)>0){
	var UTM = document.location.href.split('?').pop()
	var utm_arr = UTM.split('&');
	for (i=0; i<utm_arr.length; i++){

  if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_source')>=0) {var utm_source_sm = utm_arr[i].split('=').pop(); utm_arr[i] = ''};
  if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_medium')>=0) {var utm_medium_sm = utm_arr[i].split('=').pop(); utm_arr[i] = ''};
  if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_campaign')>=0) {var utm_campaign_sm = utm_arr[i].split('=').pop(); utm_arr[i] = ''};
  if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_content')>=0) {var utm_content_sm = utm_arr[i].split('=').pop(); utm_arr[i] = ''};
  if (utm_arr != '' && utm_arr[i].toLowerCase().search('utm_term')>=0) {var utm_term_sm = '-_-'+utm_arr[i].split('=').pop(); utm_arr[i] = ''};

	}
	
	var other_param = encodeURIComponent(utm_arr.filter(v => v ).join('&'));

    function replaceAll(string, search, replace) {
            return string.split(search).join(replace);
        }
    if (other_param != '') {
		var other_param_app = other_param + '%26';
			var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // нужно проверить separator
		var other_param_web_url = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // нужно проверить separator
	};
} else {

	// Проверяем UTM из куки	
var utm_source_sm_fc = getCookie('utm_source'), utm_medium_sm_fc = getCookie('utm_medium'), utm_campaign_sm_fc = getCookie('utm_campaign'), utm_content_sm_fc = getCookie('utm_content'), utm_term_sm_fc = getCookie('utm_term');

		if(utm_source_sm_fc && utm_source_sm_fc != '') {utm_source_sm = utm_source_sm_fc};
		if(utm_medium_sm_fc && utm_medium_sm_fc != '') {utm_medium_sm = utm_medium_sm_fc};
		if(utm_campaign_sm_fc && utm_campaign_sm_fc != '') {utm_campaign_sm = utm_campaign_sm_fc};
		if(utm_content_sm_fc && utm_content_sm_fc != '') {utm_content_sm = utm_content_sm_fc};
		if(utm_term_sm_fc && utm_term_sm_fc != '') {utm_term_sm = utm_term_sm_fc};
	}


	// Получаем куку GA
	var ga_uid_fc = getCookie('_ga');
	if (ga_uid_fc && ga_uid_fc != '') {
	var ga_uid_arr = ga_uid_fc.split(/\./);
	var ga_uid_sm = ga_uid_arr[2]+'.'+ga_uid_arr[3];
		};

	// Собираем utm_content_plus - content + term
	var utm_content_plus = utm_content_sm+utm_term_sm;
	
	

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
var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : '';
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
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;

// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;

// WEB
var redirect_unknown=web_link+other_param_web+utm_all;



	// проверка платформы

	function check_platform(ua) {



        if(/android/gi.test(ua)){

			return 'android';

        }



        if(/iphone|ipod/gi.test(ua)){

            return 'iPhone';

        }



		return  'unknown';



	}



	// переадресация

	function redirect_user (address) {

		setTimeout(function(){window.location.href=address}, 2100);

		return true;

	}



	// сообщение пользователю

	function inform_user (msg) {

		document.write(msg);

		return true;

	}



	// начало

	var platform=check_platform(navigator.userAgent);




	if (platform=="android") {

		redirect_user(redirect_android);

	}



	else if (platform=="iPhone") {

		redirect_user (redirect_iphone);

	}



	else {
		redirect_user(redirect_unknown);

	}

