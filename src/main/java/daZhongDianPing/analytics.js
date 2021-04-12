!function () {
    "use strict";
    var u = !0
        , n = "_MeiTuanALogObject"
        , l = 1
        , r = "dianping_nova"
        , h = "waimai"
        , g = "group"
        , c = "demo"
        , _ = "4.18.12"
        , m = "lxcuid"
        , y = "uuid"
        , b = "msid"
        , v = "cityid"
        , j = "utm"
        , t = "utm_source"
        , e = "utm_medium"
        , i = "utm_content"
        , o = "utm_term"
        , a = "utm_campaign"
        , w = "uid"
        , s = "scene"
        , p = "userid"
        , x = "dpid"
        , S = "appnm"
        , f = "union_id"
        , k = "web_env"
        , O = "wxmp_env"
        , d = "wxid"
        , I = "_lx_validcode"
        , q = "pd_data"
        , A = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/
        , D = setTimeout
        , E = clearTimeout
        , C = 1
        , N = 2
        , T = 3
        , M = 4
        , F = 5
        , R = 6
        , P = 20
        , L = 7;

    function B(t) {
        var n = t;
        return t && t.code && (n = t.code),
            n === C ? "E_TIME_OUT" : n === N ? "E_NO_JSBRIDGE" : n === T ? "E_KNB_FAIL" : n === M ? "E_KNB_CB_FAIL" : n === F ? "E_KNB_NOT_EXIST" : n === P ? "ERR_PARAMS" : n === R ? "E_KNB_METHOD_NOT_SUPPORT" : "unknown error: " + n
    }

    var V = 200
        , J = 500
        , W = -1
        , U = "PV"
        , K = "PD"
        , Q = "MC"
        , X = "SC"
        , $ = "MV"
        , z = "MVL"
        , H = "ME"
        , G = "BO"
        , Z = "BP"
        , Y = "event_type"
        , tt = "val_act"
        , nt = "val_cid"
        , et = "index"
        , rt = "element_id"
        , it = "lx_inner_data"
        , ot = "pageView"
        , at = "systemCheck"
        , ut = "moduleClick"
        , ct = "order"
        , st = "order_id"
        , ft = 1e3
        , dt = 2
        , lt = 0
        , vt = -1
        , pt = 0
        , ht = 1
        , gt = 10080
        , mt = 1576800
        , _t = 30
        , yt = "_lx_utm"
        , bt = "_lxsdk"
        , wt = "_lxsdk_cuid"
        , xt = "_lxsdk_dpid"
        , St = "_lxsdk_s"
        , kt = "latlng"
        , Ot = "_lxsdk_rr"
        , It = "_lxsdk_rc"
        , qt = "msid"
        , At = "ms"
        , jt = "category"
        , Dt = "c"
        , Et = "login_type"
        , Ct = "lt"
        , Nt = "locate_city_id"
        , Tt = "lci"
        , Mt = "sdk_ver"
        , Ft = "sv"
        , Rt = "lxcuid"
        , Pt = "lxid"
        , Lt = "val_lab"
        , Bt = "val_bid"
        , Vt = "val_val"
        , Jt = "sf"
        , Wt = "sdk_env"
        , Ut = "online"
        , Kt = "offline"
        , Qt = "__$lx_beacon_"
        , Xt = "_lx_urltag"
        , $t = {
        category: u,
        union_id: u,
        lxcuid: u,
        app: u,
        sdk_ver: u,
        appnm: u,
        ch: u,
        lch: u,
        ct: u,
        did: u,
        dm: u,
        ua: u,
        msid: u,
        uuid: u,
        lat: u,
        log: u,
        net: u,
        os: u,
        idfa: u,
        pushid: u,
        subcid: u,
        mac: u,
        imsi: u,
        uid: u,
        logintype: u,
        cityid: u,
        apn: u,
        mno: u,
        pushSetting: u,
        wifi: u,
        bht: u,
        ip: u,
        vendorid: u,
        geohash: u,
        dtk: u,
        sns: u,
        android_id: u,
        version_code: u,
        brand: u,
        utm: u
    }
        , zt = "post"
        , Ht = "__lxvalidation"
        , Gt = "postreport.meituan.com"
        , Zt = "wreport1.meituan.net"
        , Yt = "hreport.meituan.com"
        , tn = -3
        , nn = function () {
    }
        , en = "pageLeave";

    function rn() {
        return window
    }

    function on() {
        return rn().XMLHttpRequest
    }

    var an, un, cn = (an = on(),
            un = an && "withCredentials" in new an,
            function () {
                return un
            }
    ), sn = /__lxvalidation=([\w.]+)/i, fn = 10, dn = !1, ln = void 0, vn = void 0, pn = {};

    function hn(t) {
        var n, e = 0 === Re().indexOf("http:") ? "http:" : "https:", r = e + "//" + t + "/",
            i = Hn.search.match(sn) || [], o = function () {
                var t = Se.get(Ht);
                if (t) {
                    var n = t.split("|");
                    return {
                        mis: n[0],
                        env: n[1] || ""
                    }
                }
                return t || {}
            }();
        return (n = i && i[1] || o.mis || "") && (Se.top(Ht, n + "|", fn),
            r = e + "//" + t + "/?mis=" + n,
            gn.debug = n),
            r
    }

    var gn = {
        noHeadless: !0,
        nt: lt,
        inWXMP: !1,
        pageValLab: null,
        pageEnv: null,
        use_post: !1,
        cid: null,
        appnm: null,
        quit: null,
        useQR: !1,
        onWebviewAppearAutoPV: !0,
        nativeAutoPD: !0,
        positiveLab: !0,
        nativeSDKVer: null,
        cacheRetryMinutes: 5,
        debug: !1,
        autoPD: !0,
        sessionScope: "top",
        isDev: !1,
        reportDelay: 500
    }
        , mn = [];
    gn.on = function (t, n) {
        mn.push({
            name: t,
            fn: n
        })
    }
    ;
    var _n = {
        MVL: !(gn.emit = function (r, i, o, a, u) {
                ye.each(mn, function (t) {
                    var n = t.name
                        , e = t.fn;
                    n === r && e(i, o, a, u)
                })
            }
        ),
        QR: !1,
        getReqId: !1
    };

    function yn(t) {
        return !!_n[t]
    }

    var bn = void 0;

    function wn() {
        return bn
    }

    var xn = {
        isHeadless: function () {
            if (0 <= Ze)
                return Ze;
            var t = navigator.userAgent;
            Ze = 0,
            /HeadlessChrome/.test(t) && (Ze += 1);
            navigator.webdriver && (Ze += 10);
            window.chrome || (Ze += 100);
            navigator.plugins && 0 === navigator.plugins.length && (Ze += 1e3);
            /mtdp-searchspider/.test(t) && (Ze += 1e4);
            /spider/.test(t) && (Ze += 1e5);
            return Ze
        }(),
        labv: 10006,
        cv: "prod",
        web: 1,
        proxy: "function" == typeof window.Proxy && /native code/.test(window.Proxy.toString()) ? 1 : 0
    };

    function Sn(t, n) {
        t && !n ? delete xn[t] : xn[t] = n
    }

    function kn(t) {
        return t ? xn[t] : xn
    }

    function On(t, n) {
        he.isStr(t) && (pn[t] = n)
    }

    function In(t) {
        dn = t
    }

    function qn() {
        return dn === l
    }

    function An(t) {
        return ln && !t || (ln = hn(Gt)),
            ln
    }

    var jn = [Zt, "wreport2.meituan.net"]
        , Dn = 0;

    function En(t) {
        if (!vn || t) {
            var n = jn[parseInt(Dn++ % 12 / 6)];
            vn = hn(n)
        }
        return vn
    }

    var Cn = void 0;

    function Nn() {
        if (ne !== Cn)
            return Cn;
        var t = Gn.getElementsByTagName("meta");
        return Cn = "off" === je(t, "lx:native-report")
    }

    var Tn = lt;

    function Mn() {
        return Tn
    }

    function Fn(t) {
        Nn() || (Tn = t)
    }

    var Rn = !1;

    function Pn(t) {
        Rn = !!t
    }

    var Ln = 5e3
        , Bn = 50
        , Vn = {
        MVL: {}
    }
        , Jn = void 0
        , Wn = void 0;

    function Un(t, n, e, r) {
        r = r || {};
        var i = n.category
            , o = e.req_id
            , a = e.val_cid
            , u = e.val_bid
            , c = r.tag;
        if (Vn[t] && he.isStr(t) && he.isStr(i) && he.isStr(o) && he.isStr(a) && he.isStr(u)) {
            var s = i + "_" + o + "_" + a + "_" + u
                , f = Vn[t];
            he.isObj(f[s]) || (f[s] = {
                env: he.extend(!0, {}, n),
                evs: e,
                lab: []
            }),
            he.isObj(c) && (f[s].evs.tag = c);
            var d = he.extend(!0, e.val_lab, {
                _seq: e.seq,
                _tm: e.tm
            });
            f[s].lab.push(d),
                function () {
                    var t = 0;
                    for (var n in Vn) {
                        var e = Vn[n];
                        for (var r in e) {
                            var i = e[r].lab;
                            t += i.length || 0
                        }
                    }
                    Bn < t && Xn()
                }()
        }
    }

    function Kn(t, n) {
        var e = (n || {}).withUnload
            , r = Vn[t];
        if (he.isObj(r)) {
            var i = [];
            for (var o in r) {
                var a = r[o]
                    , u = !1;
                if (a.lab && a.lab.length) {
                    var c = a.env
                        , s = a.evs
                        , f = {
                        mv_list: a.lab,
                        custom: {
                            _withUnload: !!e
                        }
                    };
                    s.val_lab = f;
                    for (var d = 0, l = i.length; d < l; d++) {
                        var v = i[d];
                        if (!Qn(v, c)) {
                            v.evs.push(s),
                                u = !0;
                            break
                        }
                    }
                    u || (c.evs = [s],
                        i.push(c))
                }
            }
            i.length && Wn.send(i),
                Vn[t] = {}
        }
    }

    function Qn(t, n) {
        var e = 0
            , r = 0;
        for (var i in t)
            t.hasOwnProperty(i) && e++;
        for (var o in n)
            n.hasOwnProperty(o) && r++;
        var a = r < e ? t : n
            , u = e <= r ? t : n;
        for (var c in a) {
            if (!(-1 < "evs|".indexOf(c + "|")))
                if (he.isObj(a[c]) && he.isObj(u[c])) {
                    if (Qn(a[c], u[c]))
                        return !0
                } else if (a[c] !== u[c])
                    return !0
        }
        return !1
    }

    function Xn(t) {
        var n = (t || {}).withUnload;
        for (var e in Vn)
            Kn(e, {
                withUnload: n
            })
    }

    D(function t() {
        clearTimeout(Jn);
        try {
            Xn()
        } catch (t) {
        } finally {
            Mn() === lt ? Jn = D(t, Ln) : clearTimeout(Jn)
        }
    }, 100);
    var $n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , zn = rn()
        , Hn = location
        , Gn = document
        , Zn = Gn.domain
        , Yn = navigator
        , te = Yn.userAgent.toString()
        , ne = void 0
        , ee = Array.prototype
        , re = Object.prototype
        , ie = decodeURIComponent
        , oe = encodeURIComponent
        , ae = le()
        , ue = re.toString
        , ce = re.hasOwnProperty;

    function se() {
    }

    function fe(t) {
        return void 0 === t ? "undefined" : $n(t)
    }

    function de(t, n) {
        return fe(t) === n
    }

    function le() {
        return +new Date
    }

    function ve() {
        return Math.random()
    }

    function pe(t) {
        return de(t, "number")
    }

    var he = {};

    function ge(t, e, r) {
        var i = void 0
            , o = !0 === t;
        return o || (r = e,
            e = t),
        e && he.isObj(e) || (e = {}),
        r && he.isObj(r) || (r = {}),
            ye.each(r, function (t, n) {
                o && he.isObj(r[n]) ? (i = e[n],
                    e[n] = he.isObj(i) ? i : {},
                    ge(o, e[n], r[n])) : e[n] = r[n]
            }),
            e
    }

    he.trim = function (t) {
        return t.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    }
        ,
        he.now = le,
        he.rnd = ve,
        he.hasOwn = function (t, n) {
            return ce.call(t, n)
        }
        ,
        he.extend = ge;
    var me = function (t) {
        return t && "[object Object]" === ue.call(t)
    };
    he.isObj = me;
    var _e = function (t) {
        return de(t, "string")
    };
    he.isStr = _e,
        he.isFunc = function (t) {
            return de(t, "function")
        }
        ,
        he.attr = function (t, n) {
            return t.getAttribute(n)
        }
        ,
        he.parseQuery = function (t) {
            var i = {};
            if (t) {
                var n = t.replace(A, function (t, n, e, r) {
                    return r || ""
                }).split("&");
                return ye.each(n, function (t) {
                    var n = t.split("=")
                        , e = n[0]
                        , r = n.slice(1).join("") || "";
                    e && !ce.call(i, e) && (i[e] = ie(r))
                }),
                    i
            }
        }
        ,
        he.stringifyQuery = function (t) {
            var r = [];
            return he.isObj(t) && ye.each(t, function (t, n) {
                var e;
                he.isFunc(t) || (ne !== t && ((e = t) || !de(e, "object")) || (t = t || ""),
                    r.push(oe(n) + "=" + oe(t)))
            }),
                r.join("&")
        }
        ,
        he.genReqId = function () {
            return "" + 1e3 * le() + parseInt(1e3 * ve())
        }
        ,
        he.run = function (t, n) {
            be(t) ? ye.each(t, n) : n(t)
        }
        ,
        he.on = function (t, n, e) {
            t.addEventListener ? t.addEventListener(n, e, !1) : t.attachEvent && t.attachEvent("on" + n, e)
        }
        ,
        he.off = function (t, n, e) {
            t.removeEventListener ? t.removeEventListener(n, e, !1) : t.detachEvent && t.detachEvent("on" + n, e)
        }
    ;
    var ye = {
        isArray: function (t) {
            return "[object Array]" === ue.call(t)
        }
    }
        , be = function (t) {
        if (!t)
            return !1;
        var n = t.length;
        return !!ye.isArray(t) || !!(t && pe(n) && 0 <= n) && (!he.isObj(t) || (!(1 < n) || n - 1 in t))
    };
    ye.isArrayLike = be,
        ye.find = function (e, r, i) {
            var o = void 0;
            return be(e) && ye.each(e, function (t, n) {
                if (!0 === r.call(i, t, n, e))
                    return o = t,
                        !1
            }),
                o
        }
        ,
        ye.filter = function (e, r, i) {
            var o = [];
            return be(e) && ye.each(e, function (t, n) {
                r.call(i, t, n, e) && o.push(t)
            }),
                o
        }
        ,
        ye.toArray = function (t, n, e) {
            var r = [];
            return be(t) && ye.each(t, function (t) {
                r.push(n ? n.call(e, t) : t)
            }, e),
                r
        }
    ;
    var we = function (t, n, e) {
        if (t) {
            var r = void 0
                , i = void 0
                , o = void 0;
            if (be(t))
                for (i = 0,
                         o = t.length; i < o && !1 !== n.call(e, t[i], i, t); i++)
                    ;
            else
                for (r in t)
                    if (he.hasOwn(t, r) && !1 === n.call(e, t[r], r, t))
                        break
        }
    };
    ye.each = we;
    var xe = function (t, n, e) {
        if (t) {
            for (var r = [], i = 0, o = t.length; i < o; i++) {
                var a = n.call(e, t[i], i, t);
                r.push(a)
            }
            return r
        }
    };
    ye.slice = function (t, n, e) {
        return ee.slice.call(ye.toArray(t), n, e)
    }
        ,
        ye.reduce = function (t, n) {
            if (be(t) && he.isFunc(n)) {
                var e = t
                    , r = e.length >>> 0
                    , i = 0
                    , o = void 0
                    , a = arguments;
                if (3 === a.length)
                    o = a[2];
                else {
                    for (; i < r && !(i in e);)
                        i++;
                    if (r <= i)
                        return;
                    o = e[i++]
                }
                for (; i < r;)
                    i in e && (o = n(o, e[i], i, e)),
                        i++;
                return o
            }
        }
    ;
    var Se = {};

    function ke(t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            , e = void 0
            , r = void 0
            , i = void 0
            , o = void 0
            , a = void 0
            , u = 0
            , c = 0
            , s = ""
            , f = [];
        if (!t)
            return t;
        for (t = Oe(t); e = (a = t.charCodeAt(u++) << 16 | t.charCodeAt(u++) << 8 | t.charCodeAt(u++)) >> 18 & 63,
            r = a >> 12 & 63,
            i = a >> 6 & 63,
            o = 63 & a,
            f[c++] = n.charAt(e) + n.charAt(r) + n.charAt(i) + n.charAt(o),
        u < t.length;)
            ;
        switch (s = f.join(""),
        t.length % 3) {
            case 1:
                s = s.slice(0, -2) + "==";
                break;
            case 2:
                s = s.slice(0, -1) + "="
        }
        return s
    }

    function Oe(t) {
        var n, e = "", r = void 0, i = void 0, o = void 0;
        for (r = i = 0,
                 n = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
                 o = 0; o < n; o++) {
            var a = t.charCodeAt(o)
                , u = null;
            a < 128 ? i++ : u = 127 < a && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128),
            null !== u && (r < i && (e += t.substring(r, i)),
                e += u,
                r = i = o + 1)
        }
        return r < i && (e += t.substring(r, t.length)),
            e
    }

    Se.del = function (t, n) {
        var e = t + "=;path=/;domain=" + n
            , r = new Date;
        return r.setFullYear(1970),
            e += ";expires=" + r.toUTCString(),
            Gn.cookie = e,
            !0
    }
        ,
        Se.get = function (t) {
            var n = Gn.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
            return ie(n ? n[1] : "")
        }
        ,
        Se.set = function (t, n, e, r) {
            r = r || Gn.domain;
            var i = void 0
                , o = void 0
                , a = void 0
                , u = t + "=" + oe(n) + ";path=/;domain=" + r;
            ne === e || isNaN(e) || (i = new Date,
                o = 60 * parseInt(e, 10) * 1e3,
                a = i.getTime() + o,
                i.setTime(a),
                u += ";expires=" + i.toUTCString());
            try {
                return Gn.cookie = u,
                    !0
            } catch (t) {
                return !1
            }
        }
        ,
        Se.top = function (t, n, e) {
            var r = Gn.domain
                , i = r.split(".")
                , o = i.length
                , a = o - 1
                , u = void 0
                , c = !1;
            for (n = "" + n; !c && 0 <= a && (r = i.slice(a, o).join("."),
                Se.set(t, n, e, r),
                u = Se.get(t),
            ne !== u && (c = u === n),
                a--,
                !c);)
                ;
        }
        ,
        Se.del = function (t) {
            return Se.top(t, "", -100)
        }
    ;
    var Ie = window.btoa
        , qe = ke;
    Sn("btoa", !!window.btoa),
        Sn("atob", !!window.atob);
    try {
        he.isFunc(Ie) && Ie(Oe(te)) === ke(te) && (qe = function (t) {
                return Ie(Oe(t))
            }
        )
    } catch (t) {
    }
    var Ae = qe;

    function je(t, n) {
        var e = void 0
            , r = ye.find(t, function (t) {
            return he.attr(t, "name") === n
        });
        return r && (e = he.attr(r, "content")),
            e
    }

    function De() {
        var t = zn[n];
        return zn[t]
    }

    var Ee, Ce = (Ee = void 0,
        {
            update: function (t) {
                Ee = t
            },
            get: function () {
                return Ee
            }
        });

    function Ne(t) {
        var n = t || le()
            , e = De();
        Ce.update(n),
            ae = n,
        e && (e.l = n)
    }

    function Te() {
        var t = {
            duration: function () {
                var t = void 0
                    , n = Ce.get()
                    , e = le();
                if (n)
                    t = n,
                        Ce.update(e);
                else {
                    var r = De()
                        , i = zn.performance && zn.performance.timing;
                    (t = i && i.requestStart) || (t = r ? r.l : ae),
                        Ce.update(e)
                }
                return e - t
            }()
        }
            , n = void 0
            , e = gn.quit;
        return he.isFunc(e) && (n = e() || {}),
            t = he.extend(t, n || {})
    }

    function Me(t, n) {
        n[st]
    }

    var Fe = 2032;

    function Re() {
        return Hn.protocol
    }

    /trident/i.test(te) || /msie/i.test(te) || !/mozilla.+webkit.+chrome.+/i.test(te) || (Fe = 6e3);
    var Pe = 0;

    function Le(t, n) {
        var e = /^((\d+\.)+\d+).*$/;
        if ("string" !== fe(t) || "string" !== fe(n))
            return NaN;
        if (!e.test(t) || !e.test(n))
            return NaN;
        for (var r = t.replace(e, "$1").split("."), i = n.replace(e, "$1").split("."), o = 0, a = Math.max(r.length, i.length); o < a; o++) {
            if (!r[o] || !i[o])
                (!r[o] && r || !i[o] && i).push("0");
            var u = r[o].toString().length
                , c = i[o].toString().length;
            if (u !== c) {
                var s = c < u ? i : r;
                s[o] = Array(Math.abs(u - c) + 1).join("0") + s[o].toString()
            }
        }
        var f = parseInt(r.join(""))
            , d = parseInt(i.join(""));
        return f == d ? 0 : d < f ? 1 : -1
    }

    function Be(e, r, i, o, a, u, c) {
        return function (t) {
            if (Ge(en),
            gn.autoPD && !e) {
                e = !0;
                try {
                    if (r && new Date - i < 50)
                        return;
                    if (o)
                        return;
                    if (o = !1,
                        !c()) {
                        var n = Te();
                        a("pageDisappear", n, {
                            isAuto: 6,
                            shouldStore: !0
                        })
                    }
                    Xn({
                        withUnload: !0
                    })
                } catch (t) {
                }
                u && u(t)
            }
        }
    }

    var Ve = 4
        , Je = ""
        , We = function (t) {
        Ve = t
    }
        , Ue = function () {
        return Je && 3 === Ve
    }
        , Ke = function (t) {
        Je = t
    }
        , Qe = function () {
        return Je
    }
        , Xe = void 0;
    try {
        Xe = zn.sessionStorage
    } catch (t) {
        Xe = null
    }
    var $e = void 0;
    $e = he.isFunc(zn.atob) ? zn.atob : function (t) {
        return t
    }
    ;
    var ze = {}
        , He = function (t, n) {
        var e = n || "fn_" + parseInt(1e6 * ve());
        return ze[e] = t,
            e
    }
        , Ge = function (t, n) {
        if (ze[t])
            try {
                ze[t](n),
                    D(function () {
                        delete ze[t]
                    }, 0)
            } catch (t) {
            }
    }
        , Ze = -1;
    var Ye = te
        , tr = [{
        n: c,
        r: /lingxi\/demo\/\d+/i,
        v: Ye
    }, {
        n: r,
        r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
        v: Ye
    }, {
        n: h,
        r: /\bmeituanwaimai-c\/\d+\./i,
        v: Ye
    }, {
        n: "moviepro",
        r: /\bmoviepro/i,
        v: Ye
    }, {
        n: "movie",
        r: /\bmaoyan\b/i,
        v: Ye
    }, {
        n: g,
        r: /\bmeituan \d+|meituangroup\/\d+\./i,
        v: Ye
    }]
        , nr = /android/i.test(Ye)
        , er = ""
        , rr = nr
        , ir = !1
        , or = !1
        , ar = "www"
        , ur = !1;
    if (/\bandroid|mobile\b|\bhtc\b/i.test(Ye)) {
        ar = "i",
            rr = !0,
            ye.each(tr, function (t) {
                if (t.r.test(t.v))
                    return er = t.n,
                        !1
            }),
        /\btitans(no){0,1}x\b/i.test(Ye) && (ir = !0);
        var cr = /iphone/i.test(Ye)
            , sr = /ipad/i.test(Ye);
        (cr || sr) && (or = !0),
        er && (cr ? ar = "iphone" : /android/i.test(Ye) ? ar = "android" : sr && (ar = "ipad"))
    } else {
        var fr = Ye.match(/(msie) (\d+)|Trident\/(d+)/i);
        fr && (ur = !0,
        fr && parseInt(fr[2], 10))
    }
    var dr, lr, vr, pr, hr = zn.screen.width + "*" + zn.screen.height,
        gr = !/Chrome/.test(Ye) && !ur && /Mozilla.+AppleWebKit.+Version.+Safari.+/.test(Ye), mr = /firefox/i.test(Ye),
        _r = te.replace(/^.*TitansX\/([\d.]+)\s.*$/i, "$1"), yr = !(!rr || !/\sMMP\//.test(Ye)),
        br = !(!rr || !/\sMicroMessenger/.test(Ye) || yr), wr = ir || / knb\/\d+/i.test(te), xr = function () {
            return rr && wr && !br && !yr
        }, Sr = zn.JSON;
    Sr || (Sr = {
        parse: function (t) {
            return new Function("return (" + t + ")")()
        },
        stringify: (dr = ye.isArray,
                lr = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t"
                },
                vr = function (t) {
                    return lr[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
                }
                ,
                pr = /[\\"\u0000-\u001F\u2028\u2029]/g,
                function t(n) {
                    if (null == n)
                        return "null";
                    if (de(n, "number"))
                        return isFinite(n) ? n.toString() : "null";
                    if (de(n, "boolean"))
                        return n.toString();
                    if (de(n, "object")) {
                        if ("function" === fe(n.toJSON))
                            return t(n.toJSON());
                        if (dr(n)) {
                            for (var e = "[", r = 0; r < n.length; r++)
                                e += (r ? ", " : "") + t(n[r]);
                            return e + "]"
                        }
                        if (he.isObj(n)) {
                            var i = [];
                            for (var o in n)
                                n.hasOwnProperty(o) && i.push(t(o) + ": " + t(n[o]));
                            return "{" + i.join(", ") + "}"
                        }
                    }
                    return '"' + n.toString().replace(pr, vr) + '"'
                }
        )
    });
    var kr = Sr;

    function Or(t) {
        return t
    }

    function Ir(t) {
        try {
            t(Cr(this, Ar), Cr(this, qr))
        } catch (t) {
            if (this._state === jr)
                return Tr(new Ir(Or), qr, t)
        }
    }

    Ir.prototype.then = function (t, n) {
        return function (t, n, e, r) {
            fe(e) === Dr && (n._onFulfilled = e);
            fe(r) === Dr && (n._onRejected = r);
            t._state === jr ? t[t._pCount++] = n : Nr(t, n);
            return n
        }(this, new Ir(Or), t, n)
    }
        ,
        Ir.all = function (l) {
            return new Ir(function (r, e) {
                    for (var t, n, i, o = 0, a = l.length, u = [], c = 0, s = void 0, f = function (e) {
                        return function (t) {
                            if (e.value = t,
                                e.state = Ar,
                            ++c === e.len && !s) {
                                var n = function (t) {
                                    var n = [];
                                    for (o = 0; o < a; o++)
                                        n.push(t[o] ? t[o].value : void 0);
                                    return n
                                }(u);
                                r(n)
                            }
                        }
                    }, d = function (n) {
                        return function (t) {
                            n.value = t,
                                n.state = qr,
                                c++,
                            s || (s = !0,
                                e(t))
                        }
                    }; o < a; o++)
                        n = t = void 0,
                            n = l[o],
                            i = {
                                value: null,
                                index: o,
                                state: null,
                                len: a
                            },
                            u.push(i),
                            t = i,
                            n.then ? n.then(f(t), d(t)) : Ir.resolve(n).then(f(t), d(t))
                }
            )
        }
        ,
        Ir.resolve = function (n) {
            if (n instanceof Ir)
                return n;
            if (he.isFunc(n.then)) {
                var e = n.then.bind(n);
                return new Ir(function (t, n) {
                        e(t, n)
                    }
                )
            }
            return new Ir(function (t) {
                    t(n)
                }
            )
        }
        ,
        Ir.reject = function (e) {
            return new Ir(function (t, n) {
                    n(e)
                }
            )
        }
    ;
    var qr = 0
        , Ar = 1
        , jr = 2
        , Dr = "function"
        , Er = "object";

    function Cr(n, e) {
        return function (t) {
            return Tr(n, e, t)
        }
    }

    function Nr(e, r) {
        return setTimeout(function () {
            var t = void 0
                , n = e._state ? r._onFulfilled : r._onRejected;
            if (void 0 !== n) {
                try {
                    t = n(e._value)
                } catch (t) {
                    return void Tr(r, qr, t)
                }
                Mr(r, t)
            } else
                Tr(r, e._state, e._value)
        })
    }

    function Tr(t, n, e) {
        if (t._state === jr) {
            t._state = n,
                t._value = e;
            for (var r = 0, i = t._pCount; r < i;)
                Nr(t, t[r++]);
            return t
        }
    }

    function Mr(n, t) {
        if (t !== n || !t) {
            var e = void 0
                , r = fe(t);
            if (null === t || r !== Dr && r !== Er)
                Tr(n, Ar, t);
            else {
                try {
                    e = t.then
                } catch (t) {
                    return void Tr(n, qr, t)
                }
                fe(e) === Dr ? function (n, e, t) {
                    try {
                        t.call(e, function (t) {
                            e && (e = null,
                                Mr(n, t))
                        }, function (t) {
                            e && (e = null,
                                Tr(n, qr, t))
                        })
                    } catch (t) {
                        e && (Tr(n, qr, t),
                            e = null)
                    }
                }(n, t, e) : Tr(n, Ar, t)
            }
            return n
        }
        Tr(n, qr, new Error("promise_circular_chain"))
    }

    Ir.prototype._state = jr,
        Ir.prototype._pCount = 0;
    var Fr, Rr = !gr && !ur && zn.indexedDB, Pr = zn.IDBFactory, Lr = Rr && he.isFunc(Rr.open) && Rr.constructor === Pr,
        Br = !1, Vr = void 0, Jr = void 0, Wr = void 0, Ur = 60 * (parseInt(gn.cacheRetryMinutes) || 5), Kr = !1,
        Qr = 0;

    function Xr() {
        return new Ir(function (n, e) {
                if (ir || mr)
                    return e();
                if (!Lr)
                    return e();
                if (Br)
                    return n();
                try {
                    (Vr = Rr.open("_lxsdk_db", 1e3)).onsuccess = function (t) {
                        Br = !0,
                            Jr = t.target.result,
                            n()
                    }
                        ,
                        Vr.onupgradeneeded = function (t) {
                            Jr = t.target.result,
                                (Wr = Jr.createObjectStore("cache", {
                                    keyPath: "id",
                                    autoIncrement: !0
                                })).createIndex("evs", "evs", {
                                    unique: !1
                                }),
                                Wr.createIndex("type", "type", {
                                    unique: !1
                                })
                        }
                } catch (t) {
                    Br = !1,
                        e()
                }
            }
        )
    }

    function $r() {
        Xr().then(function () {
            var e = Jr.transaction(["cache"], "readwrite").objectStore("cache")
                , t = e.openCursor()
                , r = [];
            t.onsuccess = function (t) {
                var n = t.target.result;
                n ? (r.push(n.value),
                    n.continue()) : (Qr = r.length,
                    r.forEach(function (t) {
                        !function (t) {
                            if ("get" === t.type) {
                                var n = document.createElement("img")
                                    , e = Math.random();
                                n.src = "//" + Zt + "/?d=" + Ae("[" + t.evs + "]") + "&t=1&r=" + e + "&_lxsdk_rnd=" + e,
                                    n.id = e,
                                    window["img_" + e] = n
                            } else
                                try {
                                    window.navigator.sendBeacon("//" + Gt, JSON.stringify(t))
                                } catch (t) {
                                }
                        }(t),
                            e.delete(t.id)
                    }))
            }
        })
    }

    Xr();
    var zr = {
        add: function (t, e) {
            Xr().then(function () {
                var n = Jr.transaction(["cache"], "readwrite").objectStore("cache");
                100 < Qr && n.clear(),
                    t.forEach(function (t) {
                        t.evs.forEach(function (t) {
                            t[it] = t[it] || {},
                                t[it].fc = 1
                        }),
                            n.add({
                                type: e,
                                evs: JSON.stringify(t)
                            })
                    })
            })
        },
        check: $r,
        startPoll: function () {
            !Kr && Lr && (Kr = !0,
                Fr = +new Date,
                Xr().then(function () {
                    setTimeout(function t() {
                        var n = "_lxsdk_rc_img"
                            , e = zn[n] = new Image;
                        e.onload = function () {
                            $r(),
                                Kr = !1,
                                zn[n] = null
                        }
                            ,
                            e.onabort = e.onerror = function () {
                                +new Date - Fr > 1e3 * Ur || (setTimeout(t, 6e3),
                                    zn[n] = null)
                            }
                            ,
                            e.src = "//" + Zt + "/?r=" + Math.random()
                    }, 6e3)
                }))
        }
    }
        , Hr = 3
        , Gr = 150
        , Zr = 5e3
        , Yr = 3500
        , ti = !1
        , ni = []
        , ei = []
        , ri = 0
        , ii = []
        , oi = []
        , ai = void 0
        , ui = !1
        , ci = 0
        , si = !gn.use_post
        , fi = nr && /baiduboxapp\//.test(Ye) || /Mozilla.+AppleWebKit.+Chrome.+Safari.+/i.test(Ye) && !rr
        , di = !ur && he.isFunc(Yn.sendBeacon);

    function li(t, n, e, r, i) {
        if (!(0 <= te.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0"))) {
            var o = [{
                project: "web-lx-sdk",
                pageUrl: Hn.href,
                resourceUrl: t,
                category: i ? "jsError" : "ajaxError",
                sec_category: "prod_" + n,
                level: "error",
                unionId: e,
                timestamp: he.now(),
                content: "" + r || ""
            }]
                , a = yi("//catfront.dianping.com/api/log?v=1", zt, "application/x-www-form-urlencoded");
            a && (a.onerror = a.onreadystatechange = function () {
            }
                ,
                a.send("c=" + encodeURIComponent(kr.stringify(o))))
        }
    }

    function vi() {
        if (ai) {
            var t = oi.concat([]);
            clearTimeout(ai),
            ii.length && pi(function (n) {
                try {
                    var i = []
                        , o = void 0;
                    return we(n, function (t) {
                        var n = t.evs;
                        delete t.evs;
                        var e = kr.stringify(t);
                        if (e === o) {
                            var r = i.length - 1;
                            i[r].evs = (i[r].evs || []).concat(n)
                        } else
                            t.evs = n,
                                i.push(t),
                                o = e
                    }),
                        i
                } catch (t) {
                    return li(Hn.href, "", "", t.stack || t.message, !0),
                        n
                }
            }(ii), {
                cb: function () {
                    var n = arguments;
                    ye.each(t, function (t) {
                        t.apply(ne, n)
                    })
                }
            }),
                ai = null,
                ii = [],
                oi = []
        }
    }

    function pi(t, n) {
        if (Hr <= ci)
            return !1;
        n = he.extend({
            cb: se
        }, n || {});
        var e = An();
        si = !gr && !gn.use_post;
        try {
            n.useBeacon && di ? hi(e, t) : si ? function (e, t) {
                var r = (t = t || {}).cb
                    , n = le().toString(16) + ri++
                    , i = An()
                    , o = !1
                    , a = !1
                    , u = void 0
                    , c = void 0
                    , s = (f = e,
                    d = [],
                    l = [{
                        l: Mt,
                        s: Ft
                    }, {
                        l: qt,
                        s: At
                    }, {
                        l: jt,
                        s: Dt
                    }, {
                        l: Et,
                        s: Ct
                    }, {
                        l: Rt,
                        s: Pt
                    }, {
                        l: Nt,
                        s: Tt
                    }],
                    ye.each(f, function (t) {
                        var n = he.extend(!0, {}, t);
                        ye.each(l, function (t) {
                            bi(n, t.l, t.s)
                        });
                        var r = [];
                        ye.each(t.evs, function (e) {
                            e = he.extend(!0, {}, e),
                                ye.each(e, function (t, n) {
                                    -1 < n.indexOf("val_") && (e[n.replace("val_", "")] = e[n],
                                        delete e[n]),
                                        bi(e, "refer_url", "urlr")
                                }),
                                r.push(e)
                        }),
                            n.evs = r,
                        n[Pt] === n.uuid && delete n.uuid;
                        var e = n[Dt];
                        e && (n[Dt] = e.replace("data_sdk_", "")),
                            delete n.ua,
                            d.push(n)
                    }),
                    d);
                var f, d, l;
                if (ye.each(s, function (t) {
                    c = t.uuid || t.lxid,
                        delete t.ua
                }),
                    !function (t) {
                        for (var n = t.length, e = n, r = 0; r < n; r++)
                            127 < t.charCodeAt(r) && e++;
                        return 1.5 * e < Fe
                    }(u = kr.stringify(s)))
                    return ye.each(e, function (t) {
                        ye.each(t.evs, function (t) {
                            var n = t.val_lab;
                            t.val_lab = he.extend(!0, {
                                custom: {
                                    _s: 1
                                }
                            }, n || {})
                        })
                    }),
                        mi(i, e, {
                            cb: function (t, n) {
                                try {
                                    r(t, n, "ajax-post")
                                } catch (t) {
                                }
                                t !== V && (!o && di && (o = !0,
                                    hi(i, e)),
                                a || (a = !0,
                                    li(location.host + location.pathname, "ajax-post-" + t + "-" + n, c, u)))
                            }
                        });
                var v = Ae(u)
                    , p = oe(v)
                    , h = En(!0);
                h += -1 < h.indexOf("?") ? "&d=" + p : "?d=" + p,
                    p.length,
                    h = h + "&t=1&r=" + n,
                    fi ? mi(h, null, {
                        method: "get",
                        cb: function (t, n) {
                            try {
                                r(t, n, "ajax-get")
                            } catch (t) {
                            }
                            t !== V && (!o && di && (o = !0,
                                hi(i, e),
                                zr.add(s, "get"),
                                zr.startPoll()),
                            a || (a = !0,
                                li(location.host + location.pathname, "ajax-get-" + t + "-" + n, c, u)))
                        }
                    }) : function t(n, e, r) {
                        var i = void 0
                            , o = Qt + Pe++;
                        if (e = e || {},
                            !(2 < (r = r || 0)))
                            return zn[o] = i = new Image,
                                i.onload = function () {
                                    he.isFunc(e.cb) && e.cb(!0),
                                        zn[o] = null
                                }
                                ,
                                i.onabort = i.onerror = function () {
                                    zn[o] = null,
                                        D(function () {
                                            t(n, e, ++r)
                                        }, 100)
                                }
                                ,
                                i.src = n,
                                i;
                        he.isFunc(e.cb) && e.cb(!1)
                    }(h, {
                        cb: function (t) {
                            if (t)
                                try {
                                    r(V, 200, "image-get")
                                } catch (t) {
                                }
                            else {
                                try {
                                    r(tn, 0, "ajax-get-to-image-get")
                                } catch (t) {
                                }
                                !o && di && (o = !0,
                                    hi(i, e),
                                    zr.add(s, "get"),
                                    zr.startPoll()),
                                a || (a = !0,
                                    li(location.host + location.pathname, "image-get-500-0", c, u))
                            }
                        }
                    })
            }(t, n) : mi(e, t, n) || ur && gi(e, t, n) || hi(e, t) && n.cb(V)
        } catch (t) {
            return li(Hn.path, "report-ajax", 0, t.message, !0),
                !1
        }
        return !0
    }

    function hi(t, n) {
        var e = Yn.sendBeacon;
        return !!e && (ye.each(n, function (t) {
            ye.each(t.evs, function (t) {
                t[it] = he.extend(!0, {}, t[it]),
                    t[it].beacon = "1"
            })
        }),
            t = _i(t),
        e && e.call(Yn, t, kr.stringify(n)))
    }

    function gi(t, n, e, r) {
        if (!zn.XDomainRequest)
            return !1;
        try {
            var i = new XDomainRequest;
            return i.open(zt, _i(t), !0),
                i.onload = function () {
                    ci = 0,
                    e && e.cb(V, 200, "IEXDR-post"),
                        ni = []
                }
                ,
                i.onerror = function () {
                    ci++,
                    e && e.cb(J, 0, "IEXDR-post")
                }
                ,
                i.ontimeout = function () {
                    ci++,
                    r || (!function (t, n, e, r) {
                        ni = ni.concat(n);
                        var i = void 0
                            , o = ye.reduce(ni, function (t, n) {
                            return n.evs = t.evs.concat(n.evs),
                                i = n.evs.length,
                            Gr < i && ye.slice(n.evs, i - Gr, i),
                                n
                        });
                        if (ni = [o],
                            ei.push(r),
                            !ti)
                            var a = setInterval(function () {
                                if (Hr <= ci)
                                    return clearInterval(a),
                                        !1;
                                e(t, ni, function (n) {
                                    clearInterval(a),
                                        ti = !1,
                                        ye.each(ei, function (t) {
                                            t && t(n)
                                        })
                                }, !0)
                            }, Yr)
                    }(t, n, gi, e),
                        ti = !0)
                }
                ,
                i.timeout = Zr,
                i.send(kr.stringify(n)),
                !0
        } catch (t) {
            return !1
        }
    }

    function mi(n, e, r, i) {
        if (!cn())
            return !1;
        try {
            var o = r && r.method || zt
                , a = he.isFunc(r.cb) && r.cb || nn
                , u = yi(n, o, "text/plain");
            return u.onreadystatechange = function () {
                if (4 === u.readyState) {
                    var t = u.status;
                    200 <= t && t < 400 ? (ci = 0,
                        a(V, u.status, "ajax-" + o),
                        ni = []) : i ? a(W, u.status, "ajax-" + o) : mi(n, e, r, !0),
                        u.onreadystatechange = null
                }
            }
                ,
                u.onerror = function () {
                    a(J, u.status, "ajax-" + o)
                }
                ,
                u.send(o === zt && kr.stringify(e) || null),
                !0
        } catch (t) {
            return li(n, "runtime", 0, t.stack || t.message),
                !1
        }
    }

    function _i(t) {
        var n = "_lxsdk_rnd=" + (le().toString(16) + ri);
        return -1 === t.indexOf("?") ? t + "?" + n : t + "&" + n
    }

    function yi(t, n, e) {
        var r = new (on());
        return r.open(n || zt, _i(t), !0),
            r.timeout = Zr,
            r.setRequestHeader("Content-Type", e),
            r
    }

    function bi(t, n, e) {
        return ce.call(t, n) && t[n] && (t[e] = t[n],
            delete t[n]),
            t
    }

    He(vi, "pageDisappear"),
        He(function () {
            ui = !0,
                vi()
        }, en);
    var wi = "performance"
        , xi = "getEntries"
        , Si = "pvid-" + parseInt(1e7 * he.rnd()) + "-" + parseInt(1e7 * he.rnd());
    if (zn && zn[wi] && zn[wi][xi] && he.isFunc(zn[wi][xi]) && /\[native code\]/.test(zn[wi][xi].toString())) {
        var ki = zn[wi][xi]();
        we(ki, function (t) {
            try {
                t && "script" === t.initiatorType && /(lx|analytics)\.meituan\.net/.test(t.name) && (Sn("stime", t.duration || t.responseEnd - t.startTime),
                    Sn("pvid", Si))
            } catch (t) {
                li(Hn.href, "", Si, t.stack || t.message, !0)
            }
        })
    }
    var Oi = j + "_source"
        , Ii = j + "_medium"
        , qi = j + "_term"
        , Ai = j + "_campaign"
        , ji = j + "_content"
        , Di = void 0
        , Ei = !1;

    function Ci(t) {
        if (!t)
            return ne;
        var e = ne
            , r = /^utm_(source|medium|term|content|campaign)$/;
        return ye.each(t, function (t, n) {
            r.test(n) && (!e && (e = {}),
                e[n] = t)
        }),
            e
    }

    function Ni(t) {
        if (t) {
            Di = t;
            var n = he.stringifyQuery(t);
            return Se.del(yt, Zn),
                Se.top(yt, n, gt, Zn),
                !0
        }
        return !1
    }

    function Ti(t, n) {
        var o, e, r, i, a;
        return (!Di && !Ei || t) && (t = t || Hn.href,
            n = n || Gn.referrer,
            a = t,
            (Di = Ci(he.parseQuery(a)) || function (t) {
                var n = ne
                    , e = t.match(/^[\w-]+:\/\/([^/]+)(?:\/([^?]+)?)?/)
                    , a = e && e[1];
                if (a) {
                    var u = he.parseQuery(t)
                        ,
                        r = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" ")
                        , c = ""
                        , s = "";
                    ye.each(r, function (t) {
                        var n = t.split(":")
                            , e = n[0]
                            , r = n[1]
                            , i = u[r]
                            , o = -1 < e.indexOf(".") ? e : "." + e + ".";
                        if (-1 < a.indexOf(o.toLowerCase()) && (s = e,
                            c = i))
                            return !1
                    }),
                    s && ((n = {})[Oi] = s,
                        n[Ii] = "organic",
                    c && (n[qi] = c))
                }
                return n
            }(n)) ? Ni(Di) : (i = Se.get(yt),
                Di = A.test(i) ? Ci(he.isStr(i) ? he.parseQuery(i) : null) : Di),
        Di || (o = void 0,
            e = Se.get("__utmz"),
        (r = e && e.match(/(utmc(tr|sr|cn|md|ct))=([^|()]+)/g)) && ye.each(r, function (t) {
            var n = t.split("=")
                , e = n[0]
                , r = void 0
                , i = n[1] || "";
            "utmcsr" === e ? r = Oi : "utmccn" === e ? r = Ai : "utmcmd" === e ? r = Ii : "utmcct" === e ? r = ji : "utmctr" === e && (r = qi),
            r && ((o = o || {})[r] = i)
        }),
            Ni(Di = o)),
            Ei = u),
            Di
    }

    var Mi = "__lxsdk_"
        , Fi = void 0;
    try {
        Fi = zn.localStorage
    } catch (t) {
        Fi = null
    }

    function Ri(t) {
        return Mi + t
    }

    function Pi() {
        return {
            length: 0,
            _data: {},
            setItem: function (t, n) {
                return this.length++,
                    this._data[t] = String(n)
            },
            getItem: function (t) {
                return this._data.hasOwnProperty(t) ? this._data[t] : ne
            },
            removeItem: function (t) {
                return this.length--,
                    delete this._data[t]
            },
            clear: function () {
                return this.length = 0,
                    this._data = {}
            },
            key: function (t) {
                var n = []
                    , e = this._data;
                return ye.each(e, function (t) {
                    he.hasOwn(e, t) && n.push(t)
                }),
                    n[t]
            }
        }
    }

    var Li = {
        get: function (t) {
            t = Ri(t);
            var n = Fi.getItem(t);
            return n = ne !== n ? kr.parse(n) : n
        },
        set: function (t, n) {
            Li.del(t);
            try {
                return Fi.setItem(Ri(t), kr.stringify(n))
            } catch (t) {
            }
        },
        keys: function () {
            for (var t = [], n = void 0, e = 0; e < Fi.length; e++)
                0 === (n = Fi.key(e)).indexOf(Mi) && t.push(n.replace(Mi, ""));
            return t
        },
        del: function (t) {
            try {
                return Fi.removeItem(Ri(t))
            } catch (t) {
            }
        },
        clear: function () {
            for (var t = this.keys(), n = 0; n < t.length; n++)
                this.del(t[n])
        }
    };
    if (Fi) {
        if (Fi) {
            var Bi = "___lxtest";
            Li.nt = !0;
            try {
                Li.set(Bi, 1),
                    1 !== Li.get(Bi) ? Li.clear() : Li.del(Bi)
            } catch (t) {
                try {
                    Li.clear(),
                        Fi.setItem(Bi, 1),
                        Fi.removeItem(Bi)
                } catch (t) {
                    Fi = Pi(),
                        Li.nt = !1
                }
            }
        }
    } else
        Fi = Pi(),
            Li.nt = !1;
    var Vi = "tag"
        , Ji = 18e5;

    function Wi(t, n, e, r, i, o) {
        var a = {};
        a.c = t,
            a.k = n,
            a.v = e,
            a.t = r || +new Date,
            a.u = i || "",
            a.r = o || "",
            this.toJSON = function () {
                return he.extend(!0, {}, a)
            }
    }

    var Ui = {
        set: function (t, n, e) {
            var r = void 0
                , i = []
                , o = Li.get(Vi) || [];
            if (!he.isStr(n) || "" === n)
                return !1;
            for (var a = 0, u = o.length; a < u; a++)
                Ki(r = o[a]) || (t === r.c ? n !== r.k && i.push(r) : i.push(r));
            return r = new Wi(t, n, e, +new Date),
                i.push(r.toJSON()),
                Li.set(Vi, i),
                !0
        },
        get: function (t, n) {
            var e = void 0
                , r = Li.get(Vi);
            if (r && r.length)
                return e = {},
                    ye.each(r, function (t) {
                        var n = {};
                        n[t.k] = t.v,
                        Ki(t) || (e[t.c] = he.extend(!0, e[t.c] || {}, n))
                    }),
                    t && n ? e[t] && e[t][n] : t ? e[t] : e
        },
        getAll: function (t) {
            var n = Li.get(Vi)
                , e = wn() || Li.get(Xt)
                , r = {}
                , i = void 0;
            return !t && e && (i = !0,
                r = he.extend(!0, r, e)),
                ye.each(n, function (t) {
                    var n = void 0;
                    !Ki(t) && t.v && (i = !0,
                        (n = {})[t.k] = t.v,
                        r[t.c] = he.extend(!0, r[t.c], n))
                }),
            i && r
        },
        clear: function (n, e) {
            if (Li.set(Xt, []),
                bn = {},
                !n)
                return Li.set(Vi, []);
            if (he.isStr(n)) {
                var t = Li.get(Vi)
                    , r = [];
                ye.each(t, function (t) {
                    (e !== ne && t.k !== e || n !== t.c) && r.push(t)
                }),
                    Li.set(Vi, r)
            }
        }
    };

    function Ki(t) {
        var n = he.now();
        return Ji < n - t.t
    }

    var Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , Xi = function () {
        var t = !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent);

        function e() {
            return t ? navigator.userAgent.toLowerCase() : ""
        }

        function r(t) {
            for (var n = {}, e = t.replace(/\([^)]+\)/g, "").split(/\s+/), r = "", i = 0; i < e.length; i += 1) {
                var o = e[i]
                    , a = o.lastIndexOf("/");
                if (a < 0)
                    r = o;
                else {
                    var u = o.slice(0, a);
                    r && (u = r + " " + u,
                        r = ""),
                        n[u] = o.slice(a - o.length + 1)
                }
            }
            return n
        }

        function c(t) {
            var n = t || "0"
                , e = n.match(/^(\d*)/);
            return e ? Number(e[1]) : 0
        }

        function o(t, n) {
            for (var e = "string" == typeof t ? t.split(".") : ["0"], r = "string" == typeof n ? n.split(".") : ["0"], i = Math.max(e.length, r.length), o = 0; o < i; o += 1) {
                var a = c(e[o])
                    , u = c(r[o]);
                if (u < a)
                    return 1;
                if (a < u)
                    return -1
            }
            return 0
        }

        function a(t) {
            var n = -1
                , e = document.createElement("iframe");

            function r() {
                if (clearTimeout(n),
                    e) {
                    var t = e.parentNode;
                    t && t.removeChild(e),
                        e.onload = null,
                        e.onerror = null,
                        e = null
                }
            }

            e.style.display = "none",
                e.onload = r,
                e.onerror = r,
                e.src = t,
                document.documentElement.appendChild(e),
                n = setTimeout(r, 3e3)
        }

        function u(t) {
            window.KNBTitansX && window.KNBTitansX.sendMessage ? window.KNBTitansX.sendMessage(t) : window.prompt(t)
        }

        function s(t) {
            window.prompt(t)
        }

        var n, i = {
                getDefaultSender: function () {
                    var i = Function.prototype
                        , t = e();
                    if (/ios|iphone|ipod|ipad/.test(t))
                        i = a;
                    else if (/android/.test(t)) {
                        var n = r(t);
                        i = 0 < o(n.android, "4.2.0") ? u : s
                    }
                    return function (t, n, e) {
                        var r = "js://_?method=" + t + "&callbackId=" + e + "&args=" + encodeURIComponent(n);
                        i(r)
                    }
                },
                compareVersion: o,
                parseUserAgent: r,
                canUseSlot: (n = r(e()),
                0 <= o(n.titansx || n.titansnox, "11.13"))
            }, f = i.getDefaultSender, d = i.compareVersion, l = i.parseUserAgent, v = i.canUseSlot,
            p = "function" == typeof Symbol && "symbol" === Qi(Symbol.iterator) ? function (t) {
                    return void 0 === t ? "undefined" : Qi(t)
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : Qi(t)
                }
            , h = {
                sender: null
            };

        function g(t) {
            return "DPApp_callback_" + t
        }

        function m(t, n) {
            var e = g(t)
                , r = window[e];
            r && (r(n),
            r.isSafeDelete && (window[e] = void 0))
        }

        function _(t) {
            var n = t || "DPApp";
            if (!window[n] || !window[n].KNBCore) {
                var e = {
                    dequeue: window[n] && window[n].dequeue || Function.prototype,
                    KNBCore: !0,
                    callback: m
                };
                window[n] = function (t, n) {
                    if (t && "object" === (void 0 === t ? "undefined" : p(t))) {
                        var e = t;
                        return Object.keys(n).forEach(function (t) {
                            e[t] = n[t]
                        }),
                            e
                    }
                    return n
                }(window[n], e)
            }
        }

        var y, b = {
            bindSender: function (t) {
                "function" == typeof t && (h.sender = t)
            },
            sendMessage: function (t, n, e, r) {
                var i = v && r ? "KNBSlot" + r : void 0;
                _(i);
                var o = function (t) {
                    if (!/^[a-zA-Z0-9]*$/.test(t))
                        throw new Error("illegal slot name");
                    var n = Math.floor(1e3 * Math.random());
                    return +(Date.now().toString().slice(-5) + "" + n) + (t ? "_" + t : "")
                }(i)
                    , a = g(o)
                    , u = e || {};
                window[a] = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                        , n = t.status
                        , e = "action" === n ? "handle" : n;
                    "0" === String(e) && (e = "success"),
                    "handle" !== e && "success" !== e && (e = "fail");
                    var r = u[e] || Function.prototype;
                    if ("function" == typeof r)
                        return r(t)
                }
                    ,
                u.handle || (window[a].isSafeDelete = !0),
                h.sender && h.sender(t || "", JSON.stringify(n || {}), o)
            },
            fireCallback: m,
            compareVersion: d,
            parseUserAgent: l
        };
        return y = b,
        "undefined" != typeof window && (h.sender = f(),
        window.KNBCore || (window.KNBCore = y)),
            b
    }()
        , $i = !1
        , zi = []
        , Hi = void 0
        , Gi = void 0;

    function Zi(t) {
        xr() ? c === er ? t(ne, Gi) : $i ? t(Hi, Gi) : (zi.push(t),
            $i ? t(ne, Gi) : new Promise(function (t) {
                    t({
                        ready: function (t) {
                            return t()
                        },
                        use: function (t, n) {
                            n = n || {},
                                Xi.sendMessage(t, {
                                    data: n.data || {}
                                }, n, "LXAnalyticsSDK")
                        }
                    }),
                        $i = !0
                }
            ).then(function (t) {
                var n, e, r = Gi = t;
                n = Hi,
                    e = r,
                    ye.each(zi, function (t) {
                        t(n, e)
                    }),
                    zi = []
            })) : t(F, Gi)
    }

    var Yi = 500
        , to = "getUserInfo";

    function no() {
        return new Ir(function (o, r) {
                Zi(function (t, n) {
                    var e = zn.DPApp
                        , i = D(function () {
                        o({})
                    }, Yi);
                    n ? n.ready(function () {
                        n.use(to, {
                            success: function (t) {
                                var n, e, r;
                                E(i),
                                    o((e = {},
                                        (r = (n = t)[x]) && "0" !== r || "dp" !== n.type ? n[x] && (e[x] = n[x]) : e[x] = n[y],
                                    "dp" !== n.type && n[y] && (e[y] = n[y]),
                                    n.unionId && (e.unionId = n.unionId),
                                    n.userId && (e.userId = n.userId),
                                        e))
                            },
                            fail: function (t) {
                                E(i),
                                    r({
                                        code: T
                                    })
                            }
                        })
                    }) : e && e[to] ? e.ready(function () {
                        e[to]({
                            success: function (t) {
                                E(i);
                                var n = {};
                                (t.dpid || t.userId) && (n.dpid = t.dpid,
                                    n.userId = t.userId,
                                    n.unionId = t.unionId),
                                    o(n)
                            },
                            fail: function (t) {
                                E(i),
                                    r({
                                        code: N,
                                        res: t
                                    })
                            }
                        })
                    }) : r({
                        code: N
                    })
                })
            }
        )
    }

    var eo, ro = void 0, io = (eo = function () {
            for (var t = 1 * new Date, n = 0; t === 1 * new Date && n < 200;)
                n++;
            return t.toString(16) + n.toString(16)
        }
            ,
            function () {
                var t = (screen.height * screen.width).toString(16);
                return eo() + "-" + Math.random().toString(16).replace(".", "") + "-" + function () {
                    var t = Ye
                        , n = void 0
                        , e = void 0
                        , i = []
                        , r = 0;

                    function o(t, n) {
                        var e = void 0
                            , r = 0;
                        for (e = 0; e < n.length; e++)
                            r |= i[e] << 8 * e;
                        return t ^ r
                    }

                    for (n = 0; n < t.length; n++)
                        e = t.charCodeAt(n),
                            i.unshift(255 & e),
                        4 <= i.length && (r = o(r, i),
                            i = []);
                    return 0 < i.length && (r = o(r, i)),
                        r.toString(16)
                }() + "-" + t + "-" + eo()
            }
    );

    function oo() {
        var t = {
            mem: ro,
            cookie: Se.get(wt),
            ls: Li.get(wt),
            ss: Xe && Xe.getItem(wt)
        }
            , n = void 0;
        for (var e in t)
            t[e] && (n = t[e]);
        for (var r in n || (n = io()),
            t)
            if (!t[r])
                switch (r) {
                    case "mem":
                        ro = n;
                        break;
                    case "cookie":
                        Se.top(wt, n, mt);
                        break;
                    case "ls":
                        try {
                            Li.set(wt, n)
                        } catch (t) {
                            li(location.href, "", n, t.stack || t.message, !0)
                        }
                        break;
                    case "ss":
                        try {
                            Xe && Xe.setItem(wt, n)
                        } catch (t) {
                            li(location.href, "", n, t.stack || t.message, !0)
                        }
                }
        return n
    }

    function ao() {
        return Math.floor(1 + 65535 * he.rnd()).toString(16).substring(1)
    }

    function uo() {
        var t = []
            , n = +new Date;
        return t.push(n.toString(16)),
            t.push(ao()),
            t.push(ao()),
            t.push(ao()),
            t.join("-")
    }

    function co(t) {
        var n = t.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/)
            , e = [];
        if (n)
            for (var r = 1; r < n.length; r++)
                e.push(parseInt(n[r] || 0));
        return e
    }

    function so(t, n) {
        var e = co(t)
            , r = co(n);
        return !(e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
    }

    var fo = 100
        , lo = !1
        , vo = void 0
        , po = !1
        , ho = !1
        , go = !1
        , mo = []
        , _o = 0
        , yo = void 0
        , bo = he.now();

    function wo(t) {
        var n = (t._opts || {}).nativeOptions || {};
        return {
            cb: "_lx" + (100 * he.now() + _o++),
            mn: t._mn,
            cn: t._cn,
            data: t._d || {},
            options: n,
            ver: 4
        }
    }

    function xo(t, n, e, r, i) {
        i = i || {};
        var o = this;
        o._cn = t,
            o._mn = n,
            o._d = e,
            o._cb = r,
            o._opts = i
    }

    function So() {
        return po
    }

    xo.prototype.send = function (e) {
        var r = this
            , i = wo(r)
            , t = "statistics://_lx/?data=" + oe(kr.stringify(i))
            , n = he.now();
        yo && 5e3 < n - bo && "getEnv" === r._mn && fo === V ? (r._mn,
            e(0, yo)) : (r._mn,
            i.cb,
            function (i, o, a) {
                if (er !== c || !window.JavaScriptBridge)
                    return Zi(function (t, n) {
                        if (t)
                            return a(t);
                        var e = !1
                            , r = D(function () {
                            e = !0,
                                a(C)
                        }, 5e3);
                        n.use(i, {
                            data: o,
                            success: function (t) {
                                if (E(r),
                                    !e)
                                    if ("success" === t.status) {
                                        var n = t.data || {};
                                        try {
                                            he.isStr(n) && (n = kr.parse(n)),
                                                a(ne, n.data ? n.data : t)
                                        } catch (t) {
                                            a(t)
                                        }
                                    } else
                                        a(M)
                            },
                            fail: function () {
                                E(r),
                                e || a(M)
                            }
                        })
                    });
                window.JavaScriptBridge.log(o, function (t) {
                    var n = t.data;
                    try {
                        he.isStr(n) && (n = kr.parse(n)),
                            a(ne, n.data ? n.data : n)
                    } catch (t) {
                        a(t)
                    }
                })
            }("lxlog", t, function (t, n) {
                t ? (r._mn,
                    i.cb,
                    new Date,
                    B(t)) : (r._mn,
                    i.cb,
                    new Date),
                    e(t, n)
            }))
    }
        ,
        vo = function (t, n, e, r, i) {
            if ("setEvs" !== n || function (t, n) {
                var e = !0;
                _e(t) || (e = !1);
                var r = n.web_cid
                    , i = n.val_bid
                    , o = n.val_lab;
                (r && !_e(r) || i && !_e(i) || o && !me(o)) && (e = !1);
                if (!e) {
                    var a = he.extend(!0, {}, Oo || {})
                        , u = "toNative-paramError-" + a[S];
                    li(Hn.href, u, a[y] || a[m], kr.stringify({
                        cn: t,
                        evs: n
                    }), !0)
                }
                return e
            }(t, e[0])) {
                if (J === fo || 600 === fo)
                    return r(fo);
                var o = new xo(t, n, e, nn, i);
                if (V === fo)
                    o.send(function (t, n) {
                        r(t, n)
                    });
                else if (100 === fo) {
                    if (mo.push([o, r]),
                        !lo) {
                        lo = !0;
                        new Date;
                        new xo(t, "getEnv", {}).send(function (r, t) {
                            if (new Date,
                            r && B(r),
                                r)
                                fo = J;
                            else {
                                if (fo = V,
                                    Fn(dt),
                                    he.isStr(t))
                                    try {
                                        t = kr.parse(t)
                                    } catch (t) {
                                    }
                                var n = (yo = t).sdk_ver || "";
                                po = so(n, "4.0.0"),
                                    ho = so(n, "4.3.0"),
                                    go = !so(n, "4.8.0")
                            }
                            ye.each(mo, function (t) {
                                var n = t[0]
                                    , e = t[1];
                                r ? (B(r),
                                    e(r)) : n.send(function (t, n) {
                                    e(t, n)
                                })
                            })
                        })
                    }
                } else
                    r(W)
            }
        }
    ;
    var ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , Oo = {}
        , Io = vt
        , qo = []
        , Ao = null
        , jo = !1
        , Do = {
        tag: "tag",
        s: b,
        l: m,
        a: S,
        w: d,
        lch: "lch",
        u: {
            us: t,
            um: e,
            uc: i,
            ucp: a,
            ut: o
        },
        se: Wt,
        sc: s,
        v: I,
        uni: f,
        di: x,
        ui: y,
        wxi: "wxunionid"
    }
        , Eo = ["tag", b, m, S, d, "lch", Wt, s, I, f, x, y, "wxunionid", "v"]
        , Co = [t, e, i, a, o]
        , No = "_lxsdk_wxenv_"
        , To = ["sdk_ver", "ua"];

    function Mo(t) {
        var n = /(^\w+-\w+-\w+-\w+-\w+)/;
        if (n.test(t)) {
            var e = t.match(n);
            Se.top(bt, e[1], mt)
        } else
            t && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(t) && t.length < 100 ? Se.top(bt, t, mt) : Se.top(bt, "", -1)
    }

    var Fo = 0
        , Ro = 1
        , Po = 2
        , Lo = "|";

    function Bo() {
        var t = Gn.domain;
        return "sub" === gn.sessionScope ? St + "_" + t : St
    }

    function Vo(t) {
        var n = Bo()
            , e = Se.get(n);
        return e ? e.split(Lo)[t] : ""
    }

    function Jo(t, n, e) {
        var r, i, o, a = Bo();
        Se.top(a, (r = n,
            i = e,
            (o = []).push(t || Wo()),
            o.push(r || Uo()),
            o.push(i || Ko()),
            o.join(Lo)), _t)
    }

    function Wo() {
        return Vo(Fo)
    }

    function Uo() {
        return Vo(Ro)
    }

    function Ko() {
        var t = 0
            , n = Vo(Po);
        return isNaN(n) || (t = parseInt(n)),
            t < 0 ? 0 : t
    }

    var Qo, Xo = void 0, $o = (Qo = "_lxsdk_test",
        Se.set(Qo, "1"),
        !(-1 < Gn.cookie.indexOf(Qo) && (Se.del(Qo),
            1)));

    function zo() {
        if ($o)
            return Xo = Xo || 0,
                ++Xo;
        var t = Ko();
        return t = t || 0,
            Jo(ne, ne, ++t),
            t
    }

    function Ho(t) {
        var n, e = {};
        if (A.test(t)) {
            var r = he.parseQuery(t);
            if (r._lx_tag)
                try {
                    var i = r._lx_tag.replace(/\*/g, "+").replace(/_/, "/").replace(/\./g, "=");
                    n = JSON.parse($e(i)),
                        bn = he.extend(!0, {}, n)
                } catch (t) {
                }
            if (r[y] && (e[y] = r[y]),
            r[v] && (e[v] = r[v]),
            r[p] && (e[w] = r[p]),
                r.__lxsdk_params) {
                var o = r._lx_ver
                    , a = {};
                try {
                    if (o) {
                        var u = decodeURIComponent(decodeURIComponent(r.__lxsdk_params))
                            , c = $e(u.replace(/\*/g, "+").replace(/_/, "/").replace(/\./g, "=")).split(";")
                            , s = void 0;
                        ye.each(c, function (t) {
                            var n = t.split(":")
                                , e = n.shift()
                                , r = n.join(":");
                            if (r)
                                if (0 <= Co.indexOf(e))
                                    (s = s || {})[e] = r;
                                else {
                                    if (Eo.indexOf(e) < 0)
                                        try {
                                            r = $e(r)
                                        } catch (t) {
                                        }
                                    else
                                        "v" === e && (e = I);
                                    a[e] = r
                                }
                        }),
                        s && (a[j] = s),
                        a[Wt] || (a[Wt] = Ut)
                    } else {
                        jo = !0;
                        var f = decodeURIComponent(decodeURIComponent(r.__lxsdk_params)).split(";")
                            , d = Do.u
                            , l = void 0;
                        ye.each(f, function (t) {
                            var n = t.split(":")
                                , e = n.shift()
                                , r = n.join(":");
                            if (r)
                                if (d[e])
                                    (l = l || {})[d[e]] = r;
                                else {
                                    if (!Do[e])
                                        try {
                                            r = $e(r)
                                        } catch (t) {
                                        }
                                    a[e] = r
                                }
                        }),
                        l && (a[j] = l),
                        a.se || (a.se = "online")
                    }
                } catch (t) {
                    li(Hn.href, "urlinfo-error", 0, t.stack || t.message, !0)
                }
                e[O] = a
            }
            return e
        }
        return e
    }

    function Go(t, c, s) {
        return s = s || {},
            new Ir(function (a, u) {
                    D(function () {
                        u({
                            code: C
                        })
                    }, 3e3),
                        vo(t, "getEnv", {}, function (t, n) {
                            if (t)
                                u(t);
                            else if (Ao = gn.nativeSDKVer = n.sdk_ver,
                                o = gn.nativeSDKVer,
                            he.isStr(o) && (_n.MVL = -1 < Le(o, "4.14.0"),
                                _n.QR = -1 < Le(o, "4.14.0"),
                                _n.getReqId = -1 < Le(o, "4.12.0")),
                                s.origin)
                                a(n);
                            else {
                                var e = {
                                    uuid: y,
                                    msid: b,
                                    uid: w,
                                    dpid: x,
                                    appnm: S,
                                    union_id: f
                                };
                                for (var r in c = c || {},
                                    e) {
                                    var i = e[r];
                                    n[r] && (c[i] = n[r])
                                }
                                a(c)
                            }
                            var o
                        })
                }
            )
    }

    function Zo() {
        var t = Se.get(kt);
        if (t) {
            var n = t.split(",")
                , e = /^\d+\.\d{5,}$/;
            return 3 !== n.length ? null : e.test(n[0]) && e.test(n[1]) ? {
                lat: n[0],
                lng: n[1],
                tm: n[2]
            } : null
        }
        return null
    }

    function Yo(t) {
        return he.extend(!0, {}, t)
    }

    function ta(t) {
        var n = Gn.getElementsByTagName("meta")
            , e = je(n, "lx:appnm")
            , r = je(n, "lx:defaultAppnm")
            , i = er
            , o = Gn.domain
            , a = Mn();
        return On("appnm", e),
            On("defaultAppnm", r),
        rr && Ke(er || e || r || o),
            ir ? e || (2 === a ? t : i || (r || o)) : e || (i || (r || o))
    }

    function na() {
        var t, n, e, r, i, o, a = er === g || er === h || br || yr, u = (t = Se.get(bt),
            n = Se.get("iuuid") || Se.get("uuid") || t,
            e = Wo(),
            r = Uo(),
            i = Se.get(xt) || Se.get(x),
            o = {},
        n && (o[y] = n),
        e && (o[b] = e),
        t && (o[m] = t),
        r && (o[w] = r),
        i && (o[x] = i),
            o), c = void 0, s = {};
        a && (s = Ho(Hn.href)),
        er === g && (s[y] ? (u[y] ? s[y] !== u[y] ? Sn("uuidState", "2") : Sn("uuidState", "3") : (u[y] = s[y],
            Sn("uuidState", "1")),
            delete s[y]) : Sn("uuidState", "0")),
            (c = he.extend(u, s)).ct = ar;
        var f = Ti();
        f && (c[j] = f);
        var d = oo();
        c[m] = d,
        c[y] || (c[y] = d),
        c[b] || (c[b] = uo(),
            Jo(c[b], c.uid || "")),
        c[y] && Mo(c[y]);
        var l = ta();
        he.isStr(l) && (c[S] = l);
        var v,
            p = (v = te.replace(/^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/, "$4"),
                /^\d+(\.\d+)+$/.test(v) ? v : null);
        return p && (c.app = p),
            c
    }

    function ea(n) {
        return function (t) {
            var e = t;
            return n !== t && (e = he.extend(n, t)),
                e.dpid && e.uid ? e : no().then(function (t) {
                    var n = {};
                    return t.dpid && (n.dpid = t.dpid,
                    t.userId && (n.uid = "" + t.userId),
                    t.unionId && (n.union_id = t.unionId)),
                        e = he.extend(e, n)
                }, function (t) {
                    return B(t),
                        e
                })
        }
    }

    var ra = function (t) {
        hn();
        var a = na();
        if (xr()) {
            var n = Go(t, a);
            return r === er && (n = n.then(ea(a), function (t) {
                return B(t),
                    ea(a)()
            })),
                n.then(function (t) {
                    var n = ta(t[S])
                        , e = t[x]
                        , r = t[y]
                        , i = t[f]
                        , o = t;
                    return t !== a && (o = he.extend(a, t)),
                    he.isStr(n) && (o[S] = n),
                    r && Mo(r),
                    e && Se.top(xt, e, mt),
                    i && Se.top("_lxsdk_unoinid", i, mt),
                        o
                }, function (t) {
                    return t && B(t),
                        a
                })
        }
        var e, u = Yo(a), c = u[O];
        return (e = he.now(),
            new Ir(function (t) {
                    if (br || yr)
                        if (/miniProgram/i.test(te))
                            t(!0);
                        else if (zn.WeixinJSBridge && zn.WeixinJSBridge.invoke)
                            t("miniprogram" === zn.__wxjs_environment);
                        else {
                            var n = setTimeout(function () {
                                gn.wx_t = he.now() - e,
                                    t(!1)
                            }, 5e3);
                            Gn.addEventListener("WeixinJSBridgeReady", function () {
                                clearTimeout(n),
                                    gn.wx_t = he.now() - e,
                                    t("miniprogram" === zn.__wxjs_environment)
                            })
                        }
                    else
                        t(!1)
                }
            )).then(function (t) {
            if (gn.inWXMP = t) {
                if (gn.nt = yr ? 7 : 6,
                "object" === (void 0 === Xe ? "undefined" : ko(Xe)) && !he.isObj(c))
                    for (var n in c = {},
                        Xe)
                        if (0 === n.indexOf(No)) {
                            var e = n.slice(No.length)
                                , r = Xe[n];
                            if (e === j)
                                try {
                                    c[j] = JSON.parse(r)
                                } catch (t) {
                                }
                            else
                                c[e] = r
                        }
                var i = function (t) {
                    var n = t;
                    jo && (n = Do[n] || n);
                    var e = c[t];
                    e && (u[k] = u[k] || {},
                    u[n] && (u[k][n] = u[n]),
                    ye.find(To, function (t) {
                        return t === n
                    }) || (u[n] = e));
                    try {
                        Xe.setItem(No + n, me(e) ? JSON.stringify(e) : e)
                    } catch (t) {
                    }
                };
                for (var o in c)
                    i(o)
            } else
                gn.nt = lt;
            return delete u[O],
                Ir.resolve(u)
        })
    };

    function ia(t) {
        return ht === Io ? Ir.resolve(Yo(Oo)) : pt === Io ? new Ir(function (n) {
                var t;
                t = function (t) {
                    n(t)
                }
                    ,
                    qo.push(t)
            }
        ) : (Io = pt,
            ra(t).then(function (e) {
                return Oo = he.extend(!0, {}, e || {}),
                (br || yr) && (gn._isWXDev = Oo[Wt] === Kt),
                    Io = ht,
                    ye.each(qo, function (t, n) {
                        he.isFunc(t) && qo[n](e)
                    }),
                    e
            }))
    }

    var oa = /([a-fA-F0-9-]+)(\.\d+)/
        , aa = "_hc.v"
        , ua = 525600
        , ca = ""
        , sa = /(dper|dianping|51ping)\.com/.test(Zn);

    function fa() {
        return function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }() + "." + Math.round(+new Date / 1e3)
    }

    function da() {
        return !ca && sa && (ca = function () {
            var t = Se.get(aa);
            if (t || (t = fa(),
                Se.top(aa, t, ua)),
                t) {
                var n = t.match(oa);
                return n ? n[1] : ""
            }
            return ""
        }()),
            ca
    }

    var la = function () {
        var t = void 0;
        try {
            var n = document;
            if (n.querySelectorAll) {
                var e = n.querySelectorAll("head script")
                    , r = n.querySelectorAll("body script")
                    , i = [];
                ye.each(e, function (t) {
                    i.push(t)
                }),
                    ye.each(r, function (t) {
                        i.push(t)
                    });
                for (var o = 0; o < i.length; o++) {
                    var a = i[o].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                    if (a) {
                        t = a[1];
                        break
                    }
                }
            }
        } catch (t) {
        }
        return function () {
            return t
        }
    }();

    function va(t) {
        var n = this;
        n.s = t;
        var e = void 0
            , r = Li.get(Jt) || {
            s: t,
            d: n.d
        };
        r.s !== t ? (Li.del(Jt),
            e = n.d = []) : e = n.d = r.d || [],
            n.l = e && e.length || 0
    }

    var pa = null;

    function ha() {
        return pa
    }

    function ga(t) {
        return Xe && he.isFunc(Xe.getItem) ? Xe.getItem(t) : Se.get(t)
    }

    function ma(t, n) {
        return Xe && he.isFunc(Xe.setItem) ? Xe.setItem(t, n) : Se.top(t, n, _t)
    }

    function _a(t) {
        ma(It, t)
    }

    function ya() {
        var t = ga(It);
        return t || ""
    }

    function ba(t) {
        ma(Ot, t)
    }

    function wa() {
        var t = ga(Ot);
        return t || ""
    }

    var xa = "QR"
        , Sa = 20480 / 30
        , ka = 2592e5
        , Oa = {}
        , Ia = void 0
        , qa = !(va.prototype = {
        constructor: va,
        set: function (t, n, e) {
            var r = this
                , i = r.l
                , o = r.d
                , a = r.indexOf(t)
                , u = {
                scid: 0 < i ? o[i - 1].scid + 1 : 0,
                cid: t,
                bid: n,
                sf: e
            };
            -1 < a ? o.splice(a, i - a, u) : o.push(u),
                r.l = o.length,
                Li.set(Jt, {
                    s: r.s,
                    d: o
                })
        },
        indexOf: function (t) {
            for (var n = this.d || [], e = 0, r = n.length; e < r; e++) {
                if (n[e].cid === t)
                    return e
            }
            return -1
        },
        toJSON: function () {
            var t = this.d;
            return t && t.length ? t : null
        }
    })
        , Aa = []
        , ja = !1
        , Da = ["ua"].join("|") + "|"
        , Ea = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"]
        , Ca = ["utm", "seq", "tm", "nm", "val_ref", "lng", "val_lab", "req_id", "lat", "s_from", "val_cid", "val_bid"];

    function Na() {
        if (!qa) {
            var t = le()
                , n = [Ia.opts.cid]
                , e = 0
                , r = function (t, n) {
                if (!t)
                    try {
                        var e = n;
                        if (he.isObj(n) || (e = JSON.parse(n)),
                        0 === e.code)
                            (function t(n) {
                                    var e = 0
                                        , r = 0;
                                    var i = [];
                                    var o = le() - ka;
                                    for (var a in n)
                                        e += n[a].bids.length,
                                            r += n[a].bids.length;
                                    if (!r)
                                        return;
                                    for (var u in Oa)
                                        e += Oa[u].bids.length,
                                        Oa[u].tm < o && i.push(u);
                                    Sa < e && (i.length ? (ye.each(i, function (t) {
                                        delete Oa[t]
                                    }),
                                        t(n)) : Oa = {});
                                    Oa = he.extend(Oa, n);
                                    setTimeout(function () {
                                        Li.set(xa, Oa)
                                    }, 10)
                                }
                            )(function (t) {
                                if (!he.isObj(t))
                                    return;
                                var i = {}
                                    , o = le();
                                return ye.each(t, function (n, r) {
                                    i[r] = i[r] || {
                                        cid: r,
                                        tm: o,
                                        bids: [],
                                        envInfo: (n.envInfo || {}).quickReport || [],
                                        evsInfo: (n.evsInfo || {}).quickReport || []
                                    },
                                        delete n.envInfo,
                                        delete n.evsInfo;
                                    var t = function (e) {
                                        var t = n[e].quickReport || [];
                                        ye.each(t, function (t) {
                                            var n = {
                                                tp: e,
                                                id: t
                                            };
                                            i[r].bids.push(n)
                                        })
                                    };
                                    for (var e in n)
                                        t(e)
                                }),
                                    i
                            }(e.data)),
                                qa = !0;
                        else {
                            if (304 !== e.code)
                                return void e.message;
                            qa = !0
                        }
                    } catch (t) {
                    }
            };
            for (var i in Oa)
                e++,
                    t = Math.min(Oa[i].tm, t);
            0 === e && (t = 0);
            var o = ("https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" + t + "\n                &cidList=" + n.join(",") + "\n                &rnd=" + Math.random()).replace(/\s/g, "");
            "https" === Re() && mi(o, {}, {
                cb: r
            }) || function (t, n, e, r) {
                var i = void 0
                    , o = (r = r || {}).outTime || 5e3
                    , a = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
                /^([^?]+)\?/.test(t) ? t = t.replace(/^([^?]+)\?/, "$1?" + n + "=" + a + "&") : /^([^#]+)#/.test(t) ? t = t.replace(/^([^#]+)#/, "$1?" + n + "=" + a + "#") : t += "?" + n + "=" + a;
                var u = Gn.createElement("script");
                u.src = t,
                    zn[a] = function (t) {
                        clearTimeout(i);
                        try {
                            e(ne, t)
                        } catch (t) {
                        }
                        delete window[a]
                    }
                    ,
                    u.type = "application/javascript",
                    u.charset = "utf-8",
                    u.setAttribute("async", "true"),
                    Gn.body.appendChild(u),
                    i = D(function () {
                        try {
                            e("timeout")
                        } catch (t) {
                        }
                        delete window[a]
                    }, o),
                    D(function () {
                        Gn.body.removeChild(u)
                    }, 0)
            }(o, "callback", r)
        }
    }

    function Ta(t, n, e) {
        if (!gn.useQR)
            return !1;
        if (!Oa[n])
            return !1;
        for (var r = Oa[n].bids, i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            if (a.tp == t) {
                if (t === U && a.id == n)
                    return !0;
                if (a.id == e)
                    return !0
            }
        }
        return !1
    }

    function Ma(t, n, e) {
        var r = {}
            , i = {};
        if (t && Oa[t]) {
            var o = Ea.concat(Oa[t].envInfo || [])
                , a = Ca.concat(Oa[t].evsInfo || []);
            ye.each(o, function (t) {
                n.hasOwnProperty(t) && n[t] && (i[t] = n[t])
            }),
                ye.each(a, function (t) {
                    e.hasOwnProperty(t) && Da.indexOf(t + "|") < 0 && (r["evs." + t] = e[t])
                });
            var u = he.extend(!0, i, r);
            Aa.push(u),
                E(ja),
                ja = setTimeout(function () {
                    mi("https://" + Yt + "/?rnd=" + Math.random(), Aa, {
                        nm: e.nm,
                        cb: nn
                    }),
                        Aa = []
                }, 0)
        }
    }

    !function () {
        var t = Li.get(xa);
        if (t)
            try {
                var n = void 0;
                n = he.isObj(t) ? t : JSON.parse(t),
                    Oa = he.extend(!0, Oa, n)
            } catch (t) {
            }
    }(),
        function n() {
            var e = Qu();
            return new Ir(function (t) {
                    e ? t(e) : setTimeout(function () {
                        n().then(t)
                    }, 100)
                }
            )
        }().then(function (t) {
            Ia = t,
            gn.useQR && (Re(),
                Na())
        });
    var Fa = "category"
        , Ra = "setEvs"
        , Pa = 5e3
        , La = {
        overlen_cutoff: 1
    }
        , Ba = {
        code: 200,
        status: 200,
        type: "native-report"
    }
        , Va = {
        code: tn,
        status: 200,
        type: "native-report"
    }
        , Ja = "val_bid"
        , Wa = "page"
        , Ua = "s_from"
        , Ka = "lat"
        , Qa = "lng"
        , Xa = .95 < he.rnd() && !ur
        , $a = []
        , za = Gn.referrer
        , Ha = []
        , Ga = void 0
        , Za = void 0
        , Ya = {}
        , tu = 0
        , nu = 0
        , eu = function (t, n, e) {
        if (e) {
            var r = {}
                , i = {
                custom: r
            };
            r[n] = e,
                t = he.extend(!0, t || {}, i)
        }
        return t
    }
        , ru = function (t, n) {
        var e = He(t);
        return D(function () {
            Ge(e, {
                code: -1,
                status: 408,
                type: "overtime"
            })
        }, pe(n) && n || 2500),
            e
    };

    function iu(t, n) {
        var e = this;
        e.env = n || {},
            e.currentEvs = {},
            e.opts = he.extend(!0, {}, t),
            $a.push(e),
            Wn = e
    }

    var ou = iu.prototype;

    function au(t) {
        return 6 === t._ptpvs
    }

    function uu() {
        return !tu
    }

    function cu(t) {
        return (t = t || {}) && !he.isObj(t) && (t = {
            cid: "" + t
        }),
            t
    }

    function su(e, r, i, o, a) {
        var u = this
            , c = ru((a = a || {}).callback, a.callbackTimeout)
            , t = a
            , n = t.isLeave
            , s = t.currentPageInfo
            , f = t.mvDelay
            , d = t.sf
            , l = he.isStr(a.category)
            , v = Ta(e, r, i);
        if (Mn() === lt) {
            var p = gu(u)
                , h = xu(Ui.getAll())
                , g = yu(e, r, i, o, null, a)
                , m = g.body
                , _ = g.ev
                , y = Su(p, m, h, a);
            if (v && Ma(r, p, _),
            e === $) {
                if (f && !l)
                    return he.run(m, function (t) {
                        t[it] && (t[it].md = f),
                            Ha.push(t)
                    }),
                        void D(function () {
                            if (Ha.length) {
                                var t = Su(p, Ha, h, a);
                                u.send(t, {
                                    cbkey: c,
                                    nodelay: !0
                                }),
                                    Ha = []
                            }
                        }, f * ft)
            } else {
                if (e === z)
                    return void Un.call(u, z, p, m[0], {
                        tag: h
                    });
                if (e === Q) {
                    if (s && function (t, n) {
                        he.isObj(t[Lt]) || (t[Lt] = {});
                        t[Lt][Wa] = n
                    }(_, u._cpi),
                        y = Su(p, m, h, a),
                        n) {
                        var b = Te()
                            , w = _u(K, r, ne, b);
                        y.evs.push(w),
                            _a(r),
                            ba(Ga)
                    }
                    rr && d && ha().set(r, i, d)
                }
            }
            u.send(y, {
                nm: e,
                cbkey: c
            })
        } else {
            var x = u.env
                , S = void 0
                , k = mu({
                isQuickReport: v
            })
                , O = [wu.call(u, e, r, i, o)];
            if (e === Q && (S = {
                sf: d
            },
            u._cpi && (S.cpi = u._cpi),
                O = [wu.call(u, e, r, i, o, null, S)],
                n)) {
                var I = Te()
                    , q = wu.call(u, K, r, null, I);
                O.push(q),
                    _a(r),
                    ba(Ga)
            }
            x[j] && (O = function (t, n) {
                if (!ye.isArray(t) || !t.length)
                    return t;
                if (!he.isObj(t[0][Lt]))
                    return t[0][Lt] = {
                        page: {
                            utm: n[j]
                        }
                    },
                        t;
                if (!he.isObj(t[0][Lt][Wa]))
                    return t[0][Lt][Wa] = {
                        utm: n[j]
                    },
                        t;
                return t[0][Lt][Wa] = he.extend(!0, t[0][Lt][Wa], {
                    utm: n[j]
                }),
                    t
            }(O, x));
            var A = he.isStr(a.category) && a.category || x[Fa];
            new Date;
            vo(hu(A), Ra, O, function (t, n) {
                t ? (Fn(lt),
                    B(t),
                    new Date,
                    Ge(c, Va),
                    su.call(u, e, r, i, o, a)) : (Ge(c, Ba),
                    new Date)
            }, {
                nativeOptions: k
            })
        }
    }

    function fu() {
        return Ga || (Ga = lu()),
            Ga
    }

    function du(t) {
        var n = Li.get(q);
        return n && t && Li.del(q),
            n
    }

    function lu() {
        return he.now().toString(16) + "-" + Math.floor(65535 * he.rnd()) + "-" + Math.floor(65535 * he.rnd())
    }

    function vu(t) {
        var n, e, r = t.nm;
        U === r ? (t.nm = "mpt",
            t.val_act = "pageview") : K === r ? (t.nm = "report",
            t.val_act = "quit") : (t.nm = "mge",
            t.event_type = (n = r,
                (e = {})[G] = "order",
                e[Z] = "pay",
                e[Q] = "click",
                e[H] = "return",
                e[$] = "view",
                e[X] = "click",
            e[n] || r)),
            t.nt = 0,
            t.isauto = 8
    }

    function pu(t) {
        var n = "data_sdk_";
        return 0 !== t.indexOf(n) && (t = n + t),
            t
    }

    function hu(t) {
        var n = "data_sdk_";
        return 0 === t.indexOf(n) && (t = t.replace(n, "")),
            t
    }

    function gu(t) {
        var n = he.extend(!0, {}, t.env);
        n[Fa] = pu(n[Fa]);
        var e = Wo();
        e || Jo(e = uo(), n.uid || ""),
            gn.inWXMP && he.isObj(n[k]) && he.isObj(t.env[k]) ? n[k][b] = t.env[k][b] = e : n[b] = t.env[b] = e;
        var r = n.utm
            , i = {
            ua: Ye,
            sdk_ver: _,
            ch: r && r.utm_source ? r.utm_source : "web",
            sc: hr
        };
        i[Mt] = _,
        gn.debug && (i._misid = gn.debug);
        var o = he.extend(!0, i, n);
        return gn.isDev || gn._isWXDev ? o[Wt] = Kt : o[Wt] = Ut,
        ir && !Nn() && delete o.ch,
            o
    }

    function mu(t) {
        return (t = t || {}).isQuickReport = yn("QR") && !!t.isQuickReport,
            t
    }

    function _u(t, n, e, r, i, o) {
        i = i || L,
            o = o || {};
        var a, u, c, s = zo(), f = Zo(), d = he.isObj(r) && r.custom || {}, l = void 0, v = U === t, p = G === t,
            h = Z === t, g = {
                nm: t,
                tm: he.now(),
                nt: gn.nt,
                isauto: i,
                val_cid: n,
                req_id: fu(),
                seq: s,
                lx_inner_data: he.extend(!0, {}, kn())
            };
        if (v) {
            var m = Hn.href;
            g.url = m,
            (l = za) && (g.refer_url = l),
            i === L && (za = m)
        }
        (p || v || h) && rr && (a = g,
        (u = ha().toJSON()) && (a[Ua] = u),
            g = a),
            r = eu(r, "_hguid", da()),
        (c = r) && c.custom && "v3" === c.custom._api && !n && (g.val_cid = Gn.title || Hn.pathname,
            r = eu(r, "_cid", 1)),
        he.isObj(d) && "v3" === d._api && (g[it]._api = "v3",
            delete d._api),
        rr && o.sf && (g[it].use_sfrom = 1);
        try {
            g[it].ht = Nn()
        } catch (t) {
        }
        if (v && (r = eu(r, "_hpid", la()),
            r = eu(r, "_lx_cv", "prod"),
        gn.wx_t && (r = eu(r, "_wx_t", gn.wx_t))),
        e && (g[Ja] = e),
            gn.geo ? (g[Ka] = gn.geo.lat,
                g[Qa] = gn.geo.lng) : f && (g[Ka] = f.lat,
                g[Qa] = f.lng),
            r) {
            var _ = JSON.stringify(r).length;
            Pa <= _ && ((r = La).overlen_length = _),
            (g[Lt] = r).lat && r.lng && (g[Ka] = r.lat,
                g[Qa] = r.lng)
        }
        return g
    }

    function yu(t, n, e, r, i, o) {
        var a = _u(t, n, e, r, i, o);
        return {
            body: function (t) {
                {
                    if (Ha && 0 < Ha.length) {
                        var n = Ha;
                        return Ha = [],
                            n.push(t),
                            n
                    }
                    return [t]
                }
            }(a),
            ev: a
        }
    }

    function bu(t) {
        return or ? t : nr && !go ? t : oe(t)
    }

    function wu(t, n, e, r, i, o) {
        i = i || L;
        var a = (o = o || {}).fromWA
            , u = this.env.appnm
            , c = Zo()
            , s = !Rn
            , f = void 0
            , d = {
            nm: t,
            tm: he.now(),
            nt: dt,
            isauto: i,
            val_cid: n,
            shouldCover: s,
            lx_inner_data: he.extend(!0, {}, kn())
        };
        d = he.extend(!0, d, Ya),
        Za && (d.req_id = Za),
        o.sf && (d[it].use_sfrom = 1,
            d._sf = o.sf);
        var l = void 0
            , v = he.extend(!0, {}, r || {})
            , p = U === t;
        if (p) {
            var h = bu(Hn.href);
            l = {
                ua: Ye,
                url: h,
                _fromWA: !!a
            };
            var g = Ti();
            g && g.utm_source && (l.utm = g),
            (f = za) && (l.refer_url = bu(f)),
            i === L && (za = h)
        } else
            l = {};
        if (d = he.extend(d, {
            web_cid: n,
            web_req_id: fu(),
            web_refer_cid: ya(),
            web_refer_req_id: wa(),
            web_first_pv: !!(nu <= 1 && zn.history && 1 === zn.history.length)
        }),
            ye.each({
                web_req_id: fu(),
                web_sdk_ver: _,
                lxcuid: oo(),
                web_appnm: u
            }, function (t, n) {
                he.isStr(t) && (l[n] = t)
            }),
        he.isObj(v.custom) && "v3" === v.custom._api && (l.web_appnm = function (t) {
            if (he.isStr(t))
                return t && pn[t] || pn
        }("appnm"),
            d[it]._api = "v3",
            delete v.custom._api),
        o.cpi && !v.page && (v.page = o.cpi),
            v.custom = he.extend(!0, v.custom, l),
            v = eu(v, "_hguid", da()),
        p && (v = eu(v, "_hpid", la())),
            t !== X || ho ? So() || vu(d) : So() ? d.nm = Q : vu(d),
        c && (d[Ka] = c.lat,
            d[Qa] = c.lng),
        e && (d[Ja] = e),
            v) {
            var m = JSON.stringify(v).length;
            Pa <= m && ((v = La).overlen_length = m)
        }
        return d[Lt] = v,
        p && !So() && (d.val_val = v,
            delete d[Lt]),
            d
    }

    function xu(t) {
        return t
    }

    function Su(t, n, e, r) {
        var i = (r = r || {}).category;
        return ye.isArrayLike(n) || (n = [n]),
            he.run(n, function (t) {
                t && e && (t.tag = e)
            }),
            t.evs = n,
        he.isStr(i) && (t[Fa] = pu(i)),
            t
    }

    function ku(t, n) {
        var e = {};
        return e[st] = n,
            he.extend(e, t)
    }

    function Ou(e, t, n, r) {
        var i, o, a, u, c = (i = t,
            o = n,
            a = r,
            u = null,
            !he.isStr(i) || o || a ? he.isObj(i) && he.isStr(o) && !a && (u = o,
                o = null) : (u = i,
                i = null),
        u && (a = he.extend({
            cid: u
        }, a || {})),
            {
                lab: i,
                env: o,
                opts: a
            }), s = c.lab, f = c.env;
        r = cu(c.opts);
        var d = e.opts.cid = r.cid || e.opts.cid;
        r = he.extend({
            cid: d
        }, r),
        f && he.isObj(f) && ye.each(f, function (t, n) {
            e._dt.set(n, t, ne, !0)
        }),
            e._dt.pageView(s, r)
    }

    function Iu(t, n) {
        this.env = t || {},
            this.opts = n || {},
            this._t = []
    }

    ou.set = function (t, n, e, r) {
        var i = this
            , o = i.env
            , a = gn.inWXMP && he.isObj(o[k]);
        if (he.isObj(t))
            we(t, function (t, n) {
                i.set(n, t)
            });
        else if ((t !== Fa || n) && t !== Wt)
            if (!r && a && o[k][t] ? o[k][t] = n : o[t] = n,
            t === Fa && (gn.c = n),
            "utm" === t && he.isObj(n) && !a && Ni(n),
                On(t, n),
            S === t && Ke(n),
            dt !== Mn() || $t[t])
                he.isFunc(e) && e(o, i);
            else {
                var u = {}
                    , c = hu(o[Fa]);
                u[t] = n,
                    vo(c, "setEnv", u, function () {
                        he.isFunc(e) && e(o, i)
                    })
            }
    }
        ,
        ou.get = function (t, n) {
            he.isFunc(n) && n(this.env[t], this)
        }
        ,
        ou.pageView = function (e, r) {
            r = cu(r) || {};
            var t = void 0
                , i = this
                , n = r.fromWA
                , o = r.withlab
                , a = ru(r.callback, r.callbackTimeout)
                , u = i.opts.cid
                , c = r.cid || u
                , s = r.isauto || L
                , f = r.isAutoInit
                , d = r.reportStatus
                , l = u && !(au(i) || f) && !uu()
                , v = d === lt || lt === Mn()
                , p = i.env;
            if (n && o ? (s = 6,
                e = this._cpi || {}) : this._cpi = e,
            l && !qn()) {
                var h = Te();
                t = v ? _u(K, u, null, h) : wu.call(i, K, u, null, h),
                    _a(c),
                    ba(Ga)
            }
            if (In(0),
            u && (au(i) || uu()) || (Ga = lu()),
            (i.opts.cid = c) || !n) {
                var g = Ta(U, c);
                if (v) {
                    var m = gu(i)
                        , _ = xu(Ui.getAll())
                        , y = yu(U, c, null, e, s)
                        , b = y.body;
                    l && t && b.unshift(t);
                    var w = Su(m, b, _, r);
                    g && Ma(c, m, y.ev),
                        this.send(w, {
                            nm: U,
                            cbkey: a
                        }),
                        nu++,
                    f || tu++
                } else {
                    var x = mu({
                        isQuickReport: g,
                        shouldCoverCid: !0,
                        needCachePD: gn.nativeAutoPD
                    })
                        , S = [wu.call(i, U, c, null, e, s, {
                        fromWA: n
                    })];
                    l && t && S.push(t);
                    var k = he.isStr(r.category) && r.category || p[Fa];
                    vo(hu(k), Ra, S, function (t, n) {
                        t ? (Fn(lt),
                            Ge(a, Va),
                            i.pageView(e, r),
                            li(Hn.href, "native-report-error", i.env.union_id, B(t))) : (nu++,
                        f || tu++,
                            Ge(a, Ba))
                    }, {
                        nativeOptions: x
                    })
                }
                i.currentEvs = {
                    cid: c,
                    req_id: fu(),
                    refer_cid: ya(),
                    refer_req_id: wa()
                },
                    i._ptpvs = f ? 6 : L,
                    Ne()
            }
        }
        ,
        ou.pageDisappear = function (e, r) {
            if (0 !== nu) {
                r = he.extend({}, r);
                var i = this
                    , t = r.cid || i.opts.cid
                    , n = r.shouldStore;
                In(l);
                var o = Te();
                if (e = he.extend(o, e),
                    _a(t),
                    ba(Ga),
                lt === Mn()) {
                    var a = Su(gu(i), _u(K, t, null, e, r.isAuto), xu(Ui.getAll()), r);
                    if (rr && n && Li.nt) {
                        Ue() && (gn.inWXMP && he.isObj(a[k]) && a[k][S] ? a[k][S] = Qe() : a[S] = Qe());
                        var u = du() || [];
                        ye.isArray(u) ? Li.set(q, u.concat(a)) : Li.set(q, [a])
                    } else
                        i.send(a)
                } else {
                    var c = this.env
                        , s = mu()
                        , f = [wu.call(i, K, t, null, e)]
                        , d = he.isStr(r.category) && r.category || c[Fa];
                    vo(hu(d), Ra, f, function (t, n) {
                        t && (Fn(lt),
                            i.pageDisappear(e, r))
                    }, {
                        nativeOptions: s
                    })
                }
                Xn(),
                    Ge(en)
            }
        }
        ,
        ou.systemCheck = function (e, r, i) {
            i = he.extend({}, i);
            var o = this
                , t = i.cid || o.opts.cid
                , n = !!i.isLXLog;
            if (lt === Mn()) {
                var a = gu(o)
                    , u = Su(a, yu(X, t, e, r).body, xu(Ui.getAll()), i);
                n && (a.category = "others"),
                    this.send(u, i)
            } else {
                var c = o.env
                    , s = mu()
                    , f = [wu.call(o, X, t, e, r)]
                    , d = he.isStr(i.category) && i.category || c[Fa];
                n && (d = "others"),
                    vo(hu(d), Ra, f, function (t, n) {
                        t && (Fn(lt),
                            o.systemCheck(e, r, i))
                    }, {
                        nativeOptions: s
                    })
            }
        }
        ,
        ou.moduleView = function (t, n, e) {
            var r = (e = he.extend({}, e)).cid || this.opts.cid;
            e.mvDelay = this.opts.mvDelay || e.delay,
                su.call(this, $, r, t, n, e)
        }
        ,
        ou.moduleViewList = function (t, n, e) {
            var r = (e = he.extend({}, e)).cid || this.opts.cid;
            e.mvDelay = this.opts.mvDelay || e.delay;
            var i = yn("MVL");
            Mn() !== dt || i ? su.call(this, z, r, t, n, e) : su.call(this, $, r, t, n, e)
        }
        ,
        ou.moduleClick = function (t, n, e) {
            var r = (e = he.extend({}, e)).cid || this.opts.cid;
            e && e.isLeave && In(l),
                e.currentPageInfo = e.withPageInfo && he.isObj(this._cpi) ? this._cpi : ne,
                su.call(this, Q, r, t, n, e)
        }
        ,
        ou.moduleEdit = function (t, n, e) {
            var r = (e = he.extend({}, e)).cid || this.opts.cid;
            su.call(this, H, r, t, n, e)
        }
        ,
        ou.order = function (e, r, i) {
            i = he.extend({}, i);
            var o = this
                , a = ru(i.callback, i.callbackTimeout)
                , t = i.cid || o.opts.cid;
            Me(0, r);
            var n = Ta(G, t, e);
            if (lt === Mn()) {
                var u = gu(this)
                    , c = yu(G, t, e, r)
                    , s = c.body
                    , f = xu(Ui.getAll())
                    , d = Su(u, s, f, i);
                n && Ma(t, u, c.ev),
                    this.send(d, {
                        cbkey: a,
                        nodelay: !0
                    })
            } else {
                var l = this.env
                    , v = mu({
                    isQuickReport: n
                })
                    , p = [wu.call(o, G, t, e, r)]
                    , h = he.isStr(i.category) && i.category || l[Fa];
                vo(hu(h), Ra, p, function (t, n) {
                    t ? (Fn(lt),
                        Ge(a, Va),
                        o.order(e, r, i)) : Ge(a, Ba)
                }, {
                    nativeOptions: v
                })
            }
        }
        ,
        ou.pay = function (e, r, i) {
            i = he.extend({}, i);
            var o = this
                , a = ru(i.callback, i.callbackTimeout)
                , t = i.cid || o.opts.cid;
            Me(0, r);
            var n = Ta(Z, t, e);
            if (lt === Mn()) {
                var u = gu(o)
                    , c = yu(Z, t, e, r)
                    , s = c.body
                    , f = xu(Ui.getAll())
                    , d = Su(u, s, f, i);
                n && Ma(t, u, c.ev),
                    this.send(d, {
                        nodelay: !0,
                        cb: function (t, n, e) {
                            Ui.clear(),
                                Ge(a, {
                                    code: t,
                                    status: n,
                                    type: e
                                })
                        }
                    }),
                    o.clearTag()
            } else {
                var l = this.env
                    , v = mu({
                    isQuickReport: n
                })
                    , p = [wu.call(o, Z, t, e, r)]
                    , h = he.isStr(i.category) && i.category || l[Fa];
                vo(hu(h), Ra, p, function (t, n) {
                    t ? (Fn(lt),
                        Ge(a, Va),
                        o.pay(e, r, i)) : Ge(a, Ba)
                }, {
                    nativeOptions: v
                })
            }
        }
        ,
        ou.tag = function (e, t, n, i) {
            var r = void 0
                , o = void 0
                , a = this.env
                , u = arguments
                , c = []
                , s = function (t) {
                if (!he.isObj(t))
                    return t;
                for (var n = t, e = 0, r = c.length; e < r; e++) {
                    if (!n)
                        return n;
                    n = n[c[e]]
                }
                return n
            }
                , f = function () {
                ye.each(u, function (t) {
                    if (!he.isStr(t))
                        return !1;
                    c.push(t)
                })
            }
                , d = function (t, n, e) {
                var r = {};
                r[t] = n,
                    o = hu(a[Fa]),
                    vo(o, "setTag", r, function (t, n) {
                        i && (e && f(),
                            i(t, s(n), !0))
                    })
            }
                , l = function (t) {
                var n = Ui.getAll();
                t || f(),
                i && i(0, s(n), !1)
            };
            if (ye.each(u, function (t) {
                he.isFunc(t) && (i = t)
            }),
                he.isObj(e)) {
                var v = this;
                ye.each(e, function (t, n) {
                    v.tag(n, t)
                })
            } else
                he.isStr(e) && he.isObj(t) ? lt !== Mn() ? d(e, r = t, !0) : (we(t, function (t, n) {
                    Ui.set(e, n, t)
                }),
                    l(!0)) : (he.isObj(n) || he.isStr(n)) && function (t) {
                    if (!he.isStr(t) && !t.length)
                        return !1;
                    return !0
                }(e) && he.isStr(t) ? lt !== Mn() ? ((r = {})[t] = n,
                    d(e, r, !0)) : (Ui.set(e, t, n),
                    l(!0)) : he.isFunc(e) || he.isFunc(t) || he.isStr(e) && he.isStr(t) && he.isFunc(n) ? lt !== Mn() ? (f(),
                    o = hu(a[Fa]),
                    vo(o, "getTag", {}, function (t, n) {
                        i && i(t, s(n), !0)
                    })) : l() : i && i(-1)
        }
        ,
        ou.clearTag = function (t, n, e) {
            var r = 0;
            lt === Mn() ? (he.isFunc(t) && (e = t,
                t = ne),
                Ui.clear(t, n),
            e && e(0)) : r = -1,
            e && e(r)
        }
        ,
        ou.sfrom = function (r) {
            var i = void 0
                , t = void 0
                , n = this.env;
            lt !== Mn() ? (t = hu(n[Fa]),
                vo(t, "getSFrom", {}, function (t, n) {
                    if (n) {
                        var e = n.data ? n.data : n;
                        i = he.isStr(e) ? JSON.parse(e) : e,
                            r(t, i)
                    }
                })) : r(1, [])
        }
        ,
        ou.send = function (t, r) {
            var n = [];
            r = he.extend({
                cb: function (t, n, e) {
                    r.cbkey && Ge(r.cbkey, {
                        code: t,
                        status: n,
                        type: e
                    })
                }
            }, r),
                he.run(t, function (t) {
                    Ue() && (gn.inWXMP && he.isObj(t[k]) && t[k][S] ? t[k][S] = Qe() : t[S] = Qe()),
                        n.push(t)
                });
            var e = du(!0);
            e && ye.isArray(e) && (n = e.concat(n)),
            ("data_sdk_saaspay" === (n[0] && n[0][Fa]) && "menuorder-new-rms-h5" === zn.__appName__ || Xa) && (r.useBeacon = !0),
                r.nodelay ? pi(n, r) : function (t, n) {
                    var e = Math.abs(parseInt(gn.reportDelay));
                    if (ui || !e)
                        return pi(t, n);
                    ii = ii.concat(t),
                    n.cb && oi.push(n.cb),
                    ai || (ai = setTimeout(vi, e || 200))
                }(n, r)
        }
        ,
        ou.getAll = function () {
            return $a
        }
    ;
    var qu = Iu.prototype;
    qu.create = function (t, n) {
        var e = he.extend({}, this.env);
        e = he.extend(e, {
            category: t
        });
        var r = he.extend({
            isDefault: !1
        }, this.opts)
            , i = new iu(r = he.extend(r, n || {}), e);
        return this._t.push(i),
        n.isDefault && (this._dt = i),
            i
    }
        ,
        qu.config = function (t, n) {
            if ("isDev" !== t || !gn._lockSDKENV)
                return ne !== t && (gn[t] = n),
                "cid" === t && _e(n) && (this.opts.cid = n),
                    gn[t]
        }
        ,
        qu._initPV = function (t, n) {
            Ou(this, this.config("pageValLab"), t = he.extend(t, this.config("pageEnv")), {
                isauto: 6,
                cid: n,
                isAutoInit: !0
            })
        }
        ,
        qu.pageView = function (t, n, e) {
            Ou(this, t, n, e)
        }
        ,
        qu.moduleView = function (t, n, e) {
            this._dt.moduleView(t, n, e)
        }
        ,
        qu.moduleViewList = function (t, n, e) {
            this._dt.moduleViewList(t, n, e)
        }
        ,
        qu.systemCheck = function (t, n, e) {
            this._dt.systemCheck(t, n, e)
        }
        ,
        qu.moduleClick = function (t, n, e) {
            this._dt.moduleClick(t, n, e)
        }
        ,
        qu.moduleEdit = function (t, n, e) {
            this._dt.moduleEdit(t, n, e)
        }
        ,
        qu.order = function (t, n, e, r) {
            this._dt.order(t, ku(e, n), r)
        }
        ,
        qu.pay = function (t, n, e, r) {
            this._dt.pay(t, ku(e, n), r)
        }
        ,
        qu.pageDisappear = function (t, n) {
            this._dt.pageDisappear(t, n)
        }
        ,
        qu.tag = function (t, n, e, r) {
            this._dt.tag(t, n, e, r)
        }
        ,
        qu.getBase64WebTag = function (t) {
            var n = he.extend(!0, {}, Ui.getAll(!0))
                , e = Ae(JSON.stringify(n));
            e = e.replace(/\+/g, "*").replace(/\//, "_").replace(/=/g, "."),
            he.isFunc(t) && t(e)
        }
        ,
        qu.sfrom = function (t) {
            this._dt.sfrom(t)
        }
        ,
        qu.clearTag = function (t, n, e) {
            this._dt.clearTag(t, n, e)
        }
        ,
        qu.setGeoLocation = function (t, n) {
            if (null !== t) {
                if (pe(t) && pe(n))
                    n = n.toString(),
                        t = t.toString();
                else if (!/^\d+\.\d+$/.test(t) || !/^\d+\.\d+$/.test(n))
                    return;
                gn.geo = {
                    lat: n,
                    lng: t
                }
            } else
                gn.geo = null
        }
        ,
        qu.getAll = function (t) {
            t && t(this._t)
        }
        ,
        qu.getTracker = function (n, t) {
            var e = ye.find(this._t, function (t) {
                return t.env.category === n
            });
            t && t(e)
        }
        ,
        qu.get = function (t, n) {
            this._dt.get(t, n)
        }
        ,
        qu.getNative = function (e, r) {
            var i = this;
            ir ? Go(gn.c, ne, {
                origin: !0
            }).then(function (t) {
                var n = _e(e) ? t[e] : t;
                r(n, i._dt)
            }, function () {
                r()
            }) : r()
        }
        ,
        qu.set = function (t, n, e) {
            this._dt.set(t, n, e)
        }
        ,
        qu._setRequestID = function (t) {
            Za = t
        }
        ,
        qu._setNativeEvsData = function (t, n) {
            var e;
            e = n,
                Ya[t] = e
        }
    ;
    var Au = void 0
        , ju = !0
        , Du = function () {
        var n;
        if (!!!gn.onWebviewAppearAutoPV)
            return n = gn.c,
                void Qu().getTracker(n, function (t) {
                    if (t && t.currentEvs) {
                        var e = he.extend({
                            refer_cid: ya(),
                            refer_req_id: wa()
                        }, t.currentEvs);
                        ye.each(e, function (t, n) {
                            e["web_" + n] = t,
                                delete e[n]
                        }),
                            vo(n, "setWebPageData", e, function (t, n) {
                            })
                    }
                });
        Ne(),
            Xu(),
            Au.pageView(ne, ne, {
                fromWA: !0,
                withlab: !!gn.positiveLab
            }),
            In(0)
    }
        , Eu = function () {
        !!gn.onWebviewAppearAutoPV && (qn() || (In(l),
            Au.pageDisappear({})))
    }
        , Cu = function () {
        ju = !0,
            Du()
    }
        , Nu = function () {
        ju = !1,
            Eu(),
            Xn()
    }
        , Tu = function () {
        ju && Du()
    }
        , Mu = function () {
        ju && (Eu(),
            Xn())
    }
        , Fu = void 0
        , Ru = !!/\d+\.\d+\.\d+/.test(_r) && 0 <= Le(_r, "11.3.0");

    function Pu(t, n) {
        he.isStr(t) && (n = he.isFunc(n) && n || function () {
        }
            ,
            "on" + t in zn || "KNB:" + t in zn ? he.on(window, t, function (t) {
                n(t)
            }) : (Fu = window.KNB) && he.isFunc(Fu.subscribe) && Fu.subscribe({
                action: t,
                handle: function () {
                    n()
                },
                success: function () {
                },
                fail: function (t) {
                }
            }))
    }

    var Lu = {
        hook: function () {
            try {
                Pu("appear", Cu),
                    Pu("disappear", Nu),
                Ru && (Pu("foreground", Tu),
                    Pu("background", Mu))
            } catch (t) {
                li("sdk", "api-error", "", t.stack, !0)
            }
            Au = Qu()
        }
    }
        , Bu = ["setGeoLocation"].join("|")
        , Vu = []
        , Ju = vt
        , Wu = void 0
        , Uu = void 0;

    function Ku(t, n) {
        return {
            cb: t,
            cmd: n
        }
    }

    function Qu() {
        return Wu
    }

    function Xu() {
        var n, r;
        Pn(!1),
            (n = Uu,
                r = {
                    none: !0
                },
                new Ir(function (e) {
                        try {
                            var t = Le(Ao, "4.12.0");
                            !Ao || !pe(t) || t < 0 ? e(r) : n && er || xr() ? vo(n, "getReqId", {}, function (t, n) {
                                e(t ? r : n)
                            }) : e(r)
                        } catch (t) {
                            e(r),
                                li("sdk", "api-error", "", t.stack, !0)
                        }
                    }
                )).then(function (t) {
                var n = t || {}
                    , e = n.val_ref
                    , r = n.req_id
                    , i = n.refer_req_id
                    , o = !!(r || e || i);
                r && Wu._setRequestID(r),
                e && Wu._setNativeEvsData("val_ref", e),
                i && Wu._setNativeEvsData("refer_req_id", i),
                    Pn(o)
            })
    }

    function $u(t, n) {
        if (ht === Ju)
            t && t(Wu);
        else if (pt === Ju)
            t && Vu.push(Ku(t, n));
        else {
            he.now();
            Vu = Vu.concat(Ku(t, n));
            var e = Gn.getElementsByTagName("meta")
                , a = je(e, "lx:cid") || gn.cid;
            if (!(Uu = gn.c = je(e, "lx:category")))
                return void (Ju = vt);
            Ju = pt;
            var u = je(e, "lx:mvDelay");
            u = isNaN(u) ? 0 : parseInt(u, 10);
            var c = "off" !== je(e, "lx:autopv");
            gn.autoPV = c,
                D(Xu, 1e3),
                Ir.all([ia(Uu)]).then(function (t) {
                    var n, r = t[0], e = r.appnm, i = wn();
                    !he.isStr(e) || Gn.domain,
                        Wu = new Iu(r, {
                            cid: a,
                            isDefault: !0,
                            mvDelay: u
                        }),
                    Uu && Wu.create(Uu, {
                        isDefault: !0
                    }),
                        r = he.extend(!0, Wu._dt.env, r),
                        Wu._dt.env = r,
                        he.now();
                    try {
                        var o = [];
                        ye.each(Vu, function (t) {
                            var n = t.cb
                                , e = t.cmd;
                            "config" === e || "set" === e || -1 < Bu.indexOf(e) ? n(Wu, r) : o.push(t)
                        }),
                        rr && (n = r.msid,
                        pa || (pa = new va(n))),
                        i && Li.set(Xt, i),
                        c && Uu && a && a && Wu._initPV(r, a),
                            Lu.hook(function () {
                            }),
                            ye.each(o, function (t) {
                                t && t.cb && t.cb(Wu, r)
                            })
                    } catch (t) {
                    }
                }).then(function () {
                    Ju = ht,
                        zr.check()
                }, function (t) {
                    throw Ju = ht,
                        t
                })
        }
    }

    var zu = [["click", ut], ["tap", ut], ["view", "moduleView"], ["return", "moduleEdit"], ["order", ct], ["pay", "pay"]]
        , Hu = ye.reduce(zu, function (t, n) {
        return t[n[0]] = n[1],
            t
    }, {})
        , Gu = [["mpt", ot], ["report", "pageDisappear"]]
        , Zu = ye.reduce(Gu, function (t, n) {
        return t[n[0]] = n[1],
            t
    }, {})
        , Yu = ye.reduce(["config", "event", "send", "use"], function (t, n) {
        return t[n] = !0,
            t
    }, {})
        , tc = function (t, n) {
        var e = Gn.getElementsByTagName("head")[0]
            , r = Gn.createElement("meta");
        r.setAttribute("name", t),
            r.setAttribute("from", "v3api"),
            r.setAttribute("content", n),
            e.appendChild(r)
    }
        , nc = function (e, t) {
        return e = e || {},
            we(t, function (t, n) {
                1 === {
                    act: 1,
                    cid: 1,
                    val: 1,
                    lab: 1,
                    bid: 1
                }[n] ? e["val_" + n] = t : e[n] = t
            }),
            e
    }
        , ec = function (t, n, e) {
        (t && !me(t) && (t = {
            custom: {
                _lab: t
            }
        }),
        !t && e && (t = {}),
            e) && ((t.custom = t.custom || {})[n] = e);
        return t
    }
        , rc = function (t, n, e) {
        return t && !me(t) && (t = {
            custom: {
                _lab: t
            }
        }),
        t && (t[n] = e),
            t
    }
        , ic = function (t, n) {
        var e = t[Lt]
            , r = t[Vt];
        if (e && e === r && (r = ge(!0, {}, r)),
        n && (r || e)) {
            var i = e;
            e = r || {},
            i && (e = ec(e || {}, "_lab", i))
        } else if (!n && (r || e)) {
            if (_e(r) && (r = {
                analyse_val: r
            }),
                _e(e))
                e = {
                    val_lab: e
                };
            r && (e = rc(e || {}, "page", r))
        }
        return ne !== t[tt] && (e = ec(e || {}, "_act", t[tt])),
        ne !== t[Y] && (e = ec(e || {}, "_et", t[Y])),
        ne !== t[et] && (e = rc(e || {}, et, t[et])),
        ne !== t[rt] && (e = ec(e || {}, "_el_id", t[rt])),
            e
    };

    function oc(t) {
        var n, e, r, i = (e = (n = t).split("."),
            r = void 0,
        2 === e.length && (n = e[1],
            r = e[0]),
            [n, r]), o = void 0;
        return i[1] && (o = i[1]),
            [t = i[0], o]
    }

    var ac = function n(e, t) {
        var r = oc(e);
        e = r[0];
        var i = r[1]
            , o = t[0]
            , a = t[1];
        if (ye.isArray(o))
            return xe(o, function (t) {
                return n(i ? i + "." + e : e, [t, a])
            });
        var u, c, s = (o.nm || "mge").toLowerCase();
        o.nm = s,
        (c = (u = o).val) && (nc(u, c),
            delete u.val),
            o = u;
        var f = "mge" === s;
        if ("mpt" === s)
            return function (t) {
                t = nc(t, t.val);
                var n = ic(t, !0);
                return [ot, n, null, t[nt]]
            }
                .apply(null, t);
        var d, l, v = ct === s, p = "pay" === s, h = o[Y], g = o[tt], m = ic(o, !1);
        v || p || h || !f || !g ? p || v ? e = s : (l = h,
            e = "mge" === (d = s) ? l ? Hu[l] || at : ut : "mpt" === d || "report" === d ? Zu[d] : at,
        f || (m = ec(m || {}, "_nm", s))) : e = ut;
        var _ = o[nt];
        return _ && ((a = a || {}).cid = _),
        i && ec(m, "_logchannel", i),
            ec(m = m || {}, "_api", "v3"),
            e === ct || "pay" === e ? [e, o[Bt], m.order_id, m, a] : [e, o[Bt], m, a]
    }
        , uc = function t() {
        if (!t.f) {
            tc("lx:autopv", "off"),
                t.f = !0
        }
    }
        , cc = function (t) {
        if (!t || !t.length)
            return t;
        try {
            var n = t[0];
            (function (t) {
                    if (he.isFunc(t))
                        return !1;
                    var n = t.indexOf(".");
                    return 0 < n && (t = t.substr(n + 1)),
                        !!Yu[t]
                }
            )(n) && (t = ye.slice(t, 1),
                sc(n) ? (We(3),
                    uc(),
                    t = ac(n, t)) : fc(n) ? (We(3),
                    uc(),
                    t = function (t, n) {
                        var e = oc(t)[1];
                        t = ot;
                        var r = n[1]
                            , i = n[2]
                            , o = e ? {
                            custom: {
                                _logchannel: e
                            }
                        } : ne
                            , a = {};
                        if (_e(r))
                            me(i) ? o = i : _e(i) && (o = ec({}, "analyse_val", i));
                        else if (me(r)) {
                            i = (a = nc(a, r))[Vt],
                            _e(i) && (i = ec({}, "analyse_val", i)),
                                o = i;
                            var u = a[Lt];
                            u && ec(o, "_lab", u),
                                r = a[nt]
                        }
                        var c = void 0;
                        return r && ((c = {}).cid = r),
                            [t, o = ec(o, "_api", "v3"), ne, c]
                    }(n, t)) : dc(n) ? (We(3),
                    uc(),
                    t = function (t, n) {
                        var e = n[0]
                            , r = n[1];
                        if (e && (e = e.replace(/^data_sdk_/i, ""),
                            tc("lx:category", e)),
                            me(r))
                            return ["set", r]
                    }(0, t)) : lc(n, t[0], t[1]) ? (uc(),
                    e = n,
                    r = t[0],
                    i = t[1],
                    t = "appnm" === r && _e(i) ? void tc("lx:appnm", i) : ("cid" === r && _e(i) && tc("lx:cid", i),
                        [e, r, i])) : t.unshift(n))
        } catch (t) {
        }
        var e, r, i;
        return t
    }
        , sc = function (t) {
        if (he.isFunc(t))
            return !1;
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)),
        "event" === t
    }
        , fc = function (t) {
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)),
        "send" === t
    }
        , dc = function (t) {
        return "use" === t
    }
        , lc = function (t, n) {
        var e = !1;
        return "cid" !== n && "appnm" !== n || (We(3),
            e = !0),
        "config" === t && e
    };
    if (!ir)
        try {
            1 != localStorage.getItem("__lxsdk_beacon_flag") && (he.isFunc(navigator.sendBeacon) ? (localStorage.setItem("__lxsdk_beacon_flag", 1),
                Sn("sbc", 1),
                setTimeout(function () {
                    mc("systemCheck", "b_techportal_1bpzttec_sc", null, {
                        category: "techportal",
                        cid: "c_techportal_1sg882yp",
                        useBeacon: !0
                    })
                }, 500)) : Sn("sbc", 2))
        } catch (t) {
        }
    var vc = void 0
        , pc = void 0;

    function hc(t, n, e, r, i) {
        if (he.isFunc(n))
            n.call(t, t, r, i);
        else if (!i && he.isStr(n)) {
            if (he.isFunc(t[n]))
                return t[n].apply(t, e);
            if ("onLoad" === n)
                try {
                    e[0](he.extend(!0, {}, r))
                } catch (t) {
                }
        }
    }

    function gc() {
        if (!pc) {
            pc = !0;
            var r = void 0;
            ur && he.on(Gn, "mouseup", function (t) {
                var n = t.target || t.srcElement
                    , e = n.tagName + n.href;
                e = e.toLocaleLowerCase(),
                1 === n.nodeType && /^ajavascript:/i.test(e) && (r = new Date)
            });
            var t = zn.onbeforeunload;
            rr && or ? zn.addEventListener("pagehide", Be(!1, ur, r, void 0, mc, ne, qn)) : zn.onbeforeunload = Be(!1, ur, r, void 0, mc, t, qn)
        }
    }

    function mc(r) {
        try {
            var t = document.getElementById("__lxsdk_devltool_message_node");
            if (t) {
                var n = new CustomEvent("lxsdk", {
                    detail: {
                        args: JSON.stringify(arguments)
                    }
                });
                t.dispatchEvent(n)
            }
        } catch (t) {
        }
        var e = arguments;
        if (e.length) {
            var i = ye.slice(e, 1, e.length);
            try {
                vc ? hc(vc, r, i, vc._dt ? vc._dt.env : null) : $u(function (t, n, e) {
                    hc(vc = t, r, i, n, e),
                        gc()
                }, r)
            } catch (t) {
                try {
                    li("sdk", "api-error", "", t.message + "\n" + t.stack, !0)
                } catch (t) {
                }
            }
        }
    }

    window._lxsdk_isDOMReady || (window._lxsdk_isDOMReady = !0,
        function () {
            var s = !0
                , f = !1
                , d = function () {
                var t = De();
                t && (t.q.push = function n(t) {
                        try {
                            var e, r = (e = cc(t)) ? e[0] : "";
                            if (ye.isArray(r))
                                return void we(e, function (t) {
                                    n(t)
                                });
                            "start" === r ? (s = !0,
                            f || l(d)) : !1 === s ? e && d.push(e) : mc.apply(ne, e)
                        } catch (t) {
                            try {
                                li("sdk", "api-error", "", t.stack, !0)
                            } catch (t) {
                            }
                        }
                    }
                );
                for (var n = void 0, e = void 0, r = [], i = [], o = [], a = t && ye.isArray(t.q) ? t.q : [], u = 0, c = a.length; u < c; u++)
                    "config" === (e = a[u][0]) ? i.push(a[u]) : n || "use" !== e ? o.push(a[u]) : (r.push(a[u]),
                        n = !0);
                return a = i.concat(r.concat(o))
            }();

            function l(t) {
                f || (t && ye.each(t, function (t) {
                    var n, e = (n = cc(t)) ? n[0] : "";
                    ye.isArray(e) ? we(n, function (t) {
                        mc.apply(ne, t)
                    }) : e ? mc.apply(ne, n) : t && t && t[0]
                }),
                    mc(function () {
                        gc()
                    }),
                    f = !0)
            }

            if (0 === d.length)
                $u(function (t) {
                    vc = t,
                        gc()
                });
            else
                try {
                    d = xe(d, function (t) {
                        var n;
                        if ("config" === ((n = cc(t)) ? n[0] : "")) {
                            var e = n[1]
                                , r = n[2];
                            "autoStart" === e && !1 === r && (s = !1)
                        }
                        return n
                    }),
                    s && l(d)
                } catch (t) {
                }
        }())
}();
