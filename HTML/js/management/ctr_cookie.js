function set_cookie(e, t, o, i) {
    var n = new Date;
    n.setTime(n.getTime() + 36e5 * o),
    document.cookie = e + "=" + escape(t) + "; path=/; domain=" + i + "; expires=" + n.toGMTString() + ";"
}
function set_cookie_tmp(e, t, o, i) {
    var n = new Date;
    n.setTime(n.getTime() + 36e5 * o),
    document.cookie = e + "=" + escape(t) + "; path=/; domain=" + i + "; expires=" + n.toGMTString() + ";"
}
function delete_cookie(e, t) {
    var o = new Date;
    o.setTime(o.getTime() - 1);
    var i = get_cookie(e);
    "" != i && (document.cookie = e + "=; path=/; domain=" + t + "; expires=" + o.toGMTString())
}
function get_cookie(e) {
    for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var n = o[i]; " " == n.charAt(0); )
            n = n.substring(1);
        if (0 == n.indexOf(t))
            return n.substring(t.length, n.length)
    }
    return ""
}
