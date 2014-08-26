// 

$( document ).ready();


/*--------------------------------
	Swap video with autoplay video
---------------------------------*/

function autoPlayVideo(vcode, width, height){
	"use strict";
	$("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent&controls=2" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
	console.log('autoplay swapped');	
}

jQuery('a.heroVid').click(function(){
	console.log('click');
	autoPlayVideo('vtj2NB6GDDY', '1280', '720');
	$('#cinema').toggleClass('lightsDown');
});
