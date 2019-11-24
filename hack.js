setTimeout(function(){ 
  var iframe = document.getElementById('overlay');
var doc = iframe.contentWindow.document;
  doc.getElementById('WIX_ADS').style.display='none';
  doc.getElementById('SITE_HEADER').style.margin=0;
}, 500);
