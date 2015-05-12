var util = util || {};

util.setCookie = function(name,value,expiredays,path){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = name + "=" + encodeURI(value) +
	((expiredays == null) ? "" : ";expires=" + exdate.toUTCString()) + ";path=" + path;
}

util.getCookie = function(name){
	if(document.cookie.length>0){
		var start = document.cookie.indexOf(name);
		start = start + 1;
		var end = document.cookie.indexOf(";",start);
		if(end == -1) end = document.cookie.length;
		return decondeURI(document.cookie.substring(start,end));
	}
	return "";
}

util.removeCookie = function(name){
	document.cookie = name + "=;expires=" + (new Date(0)).toUTCString();
}