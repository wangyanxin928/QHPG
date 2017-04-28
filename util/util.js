/**
 * Created by bainiu on 2017-03-28 16:58:00.
 */
module.exports = {
    extend: function (target, source, flag) {
        for (var key in source) {
            if (source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    resConfig: {
        ok: 0000,
        fail: 1111
    },
    resJSON: {
        resultnum: "0000",
        resultdata: [],
        result: "",
        ragecount: 0
    },
    GUID: function () {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                guid += "-";
        }
        return guid;
    },
    wxConfig: {
        token: "ansenun",
        appId: "wx9903a3c0df7671e0",
        appsecret: "2d66baf4d4d91cd8ad4c6ff482dbf182",
        accessToken: ""
    }

}