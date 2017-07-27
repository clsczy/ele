window.onload = function(){
	//window.getComputedStyle(document.documentElement)['fontSize'] ;//获取当前元素所有最终使用的CSS属性值
	
	document.documentElement.style.fontSize = document.documentElement.offsetWidth*75/750 + 'px';
	
}


/*$(function(){
	$('html').css('fontSize', document.documentElement.offsetWidth*75/750);
})*/
