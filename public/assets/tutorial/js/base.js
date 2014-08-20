$(document).ready(function()
{
	windowWidth = document.documentElement.clientWidth;
	windowHeight = document.documentElement.clientHeight;
	var ajaxHeight = 45;
	var ajaxWidth = 154;console.log(windowHeight);

	$("#app-loader").css({
		"top": windowHeight/2-ajaxHeight/2,
		"left": windowWidth/2-ajaxWidth/2
	});
});
