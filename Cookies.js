/*-- 
JPG Cookies Utilities
Author: Jose Pablo Granados
Email: jpgcodecr@gmail.com
--*/

var JPGCookies = {
	set: function(name, value, hours){
		var expires ="";
		if (hours) {
			if (hours > 0){
				var date = new Date();
				//date.setTime(date.getTime() + (days*24*60*60*1000));
				date.setTime(date.getTime() + (hours*60*60*1000));
				expires = "; expires=" + date.toGMTString();
			}
		}else {
			expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";
		return;
	},
	get: function(name){
		var value, cookies = document.cookie.split(";");
		
		$.each(cookies, function(i, j){
			if(j.match(name) && ($.trim(j.split("=")[0]) == name)) {
					value = j.split("=")[1];
			}
		});
		return value;
	},
	remove: function(name){
		this.set(name,"",-1);
		return;
	}
}