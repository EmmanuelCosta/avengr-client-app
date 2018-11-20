var Constante = require("../constante");
import * as http from "http";
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
        console.log("typeCode => " + code);
        console.log("code => " + typeCode);

        return http.request({
            url: Constante.baseUrl + "/api/download",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "typeCode": typeCode,
                "code": code
            },
            content: JSON.stringify()
        });
    }
}