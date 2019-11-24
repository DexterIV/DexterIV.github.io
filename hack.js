var iframe = document.getElementById('overlay');
var doc = iframe.contentWindow.document;



setTimeout(function(){ 
  doc.getElementById('WIX_ADS').style.display='none';
  doc.getElementById('SITE_HEADER').style.margin=0;
}, 500);
