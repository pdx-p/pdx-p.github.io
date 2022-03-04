if (document.location.href.search('need_web=true')>0) 
{var need_web = true}
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
