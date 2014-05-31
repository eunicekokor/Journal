//Facebook Authorization
window.fbAsyncInit = function() {
  FB.init({
    appId      : '{745088885541126}',
    status     : true,
    xfbml      : true
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
$.ajaxSetup({ cache: true });
$.getScript('//connect.facebook.net/en_UK/all.js', function(){
FB.init({
appId: '745088885541126',
});
$('#loginbutton,#feedbutton').removeAttr('disabled');
FB.getLoginStatus(updateStatusCallback);
});
});

$('div').mousedown(function(e){
e.preventDefault();
$(this).blur();
return false;
});

//SoundCloud Elements
soundcloud.addEventListener('onPlayerReady', function(player, data) {
  player.api_play();
});

SC.oEmbed("https://soundcloud.com/nprgenerationlisten/juans-teenage-diary-1996", {color: "ff0066"}, { auto_play: true }, document.getElementById("putTheWidgetHere"));
