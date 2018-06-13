// JavaScript Document
document.onmousedown=click;
document.onkeydown=click;
if (document.layers) window.captureEvents(Event.MOUSEDOWN); window.onmousedown=click;
if (document.layers) window.captureEvents(Event.KEYDOWN); window.onkeydown=click;
function click(e){
	if (navigator.appName == 'Netscape'){
		if (e.which != 1){alert("想看嗎? 聯絡我們一下吧");return false;}
	}
	if (navigator.appName == "Microsoft Internet Explorer"){
		if (event.button != 1){alert("想看嗎? 聯絡我們一下吧");return false;}
	}
}