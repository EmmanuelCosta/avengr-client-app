var Constante = require("../constante");
import * as http from "http";
import * as PlatformModule from "platform";

export default class DocumentService {

    constructor() {

    }

    get(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/files",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }

    downloadFile(token, code, typeCode) {
        return http.request({
            url: Constante.baseUrl + "/api/download?code=" + code + "&typeCode=" + typeCode,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify(),
            timeout: 5000
        });
    }
}