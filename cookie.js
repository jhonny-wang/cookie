;(function(global){
	var util = util || {};

	function min(target,source){
		for(var prop in source){
			if(!source.hasOwnProperty(prop)) continue;
			target[prop] = source[prop];
		}
		return target;
	}

	util.setCookie = function(name,value,options){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + options.expires);
		document.cookie = name + "=" + encodeURI(value) +
		((options.expires) ? ";expires=" + exdate.toUTCString() : "") + ";path=" + options.path; +
		";domain=" + options.domain + (options.secure ? ";secure" : "");
	}

	util.getCookie = function(name){
		if(document.cookie.length>0){
			var start = document.cookie.indexOf(name + "=");
			start = start + name.length +1;
			var end = document.cookie.indexOf(";",start);
			if(end == -1) end = document.cookie.length;
			return decodeURI(document.cookie.substring(start,end));
		}
		return "";
	}

	util.removeCookie = function(name,options){
		options = min(options,{expires:-1});
		util.setCookie(name,'',options);
	}

	if(typeof define === 'function' && define.amd){
		define(function(){
			return util;
		})
	}else{
		global.util = util;
	}
})(window);
