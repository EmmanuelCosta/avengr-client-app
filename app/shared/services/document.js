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

    downloadFile(token, params) {
        return http.request({
            url: Constante.baseUrl + "/api/download",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify(params)
        });
    }
}