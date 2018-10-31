/*
 * algo = "HS256" | "HS383" | "HS512"
 */

var CryptoJS = require("crypto-js");

export default class JWT {

    /**
     * options = {
     *  algo: string,
     *  key: string,
     *  data: {}
     * }
     */
    encode(options) {
        var header = {
            type: "jwt",
            alg: undefined
        };

        var payload = this.toBase64(JSON.stringify(options.data));
        var signature = undefined;

        if (/^HS256$/i.test(options.algo)) {
            header.alg = "HS256";
            header = this.toBase64(JSON.stringify(header));
            signature = CryptoJS.HmacSHA256(header + "." + payload, options.key);
        }

        if (/^HS384$/i.test(options.algo)) {
            header.alg = "HS512";
            header = this.toBase64(JSON.stringify(header));
            signature = CryptoJS.HmacSHA384(header + "." + payload, options.key);
        }

        if (/^HS512$/i.test(options.algo)) {
            header.alg = "HS512";
            header = this.toBase64(JSON.stringify(header));
            signature = CryptoJS.HmacSHA512(header + "." + payload, options.key);
        }

        if (signature === undefined) {
            return null;
        }

        return header + "." + payload + "." + signature;;

    };

    /**
     * options = {
     *  algo: string,
     *  key: string,
     *  token: string
     * }
     */
    decode(options) {
        var info = options.split(".");

        return {
            header: this.fromBase64(info[0]),
            payload: this.fromBase64(info[1]),
            //signature: this.fromBase64(info[2])
        }
    };

    toBase64(data) {
        const encryptedWord = CryptoJS.enc.Utf8.parse(data);
        const encrypted = CryptoJS.enc.Base64.stringify(encryptedWord);
        return encrypted;
    };

    fromBase64(data) {
        const encryptedWord = CryptoJS.enc.Base64.parse(data);
        return encryptedWord.toString(CryptoJS.enc.Utf8);
    }

    test() {
        console.log("test OK !");
    }
}