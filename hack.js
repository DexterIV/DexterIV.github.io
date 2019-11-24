setTimeout(function(){ 
 
  var iframe = document.getElementById('overlay');
  iframe.contentWindow.eval('function foo(){ console.log("Im in a frame",window); }');
var doc = iframe.contentWindow.document;
  doc.getElementById('WIX_ADS').style.display='none';
  doc.getElementById('SITE_HEADER').style.margin=0;
}, 5000);
