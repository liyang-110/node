//设置cookie
//cname:cookie名,ccalue:cookie值, exdays:过期天数
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
//cname,要获取的cookie值
function getCookie(cname) {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=');
        if (c[0] == cname && c[1] != null) {
            return c[1];
        }
    }
    return "";
}

//删除cookie
//cname,要获取的cookie值
function dropCookie(cname) {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=');
        if (c[0] === cname) {
            c[1] = "";
            return true;
        }
    }
    return false;
}