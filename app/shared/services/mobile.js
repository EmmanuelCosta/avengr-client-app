var Constante = require("./../constante");
import * as http from "http";
export default class MobileService {

    constructor() {

    }

    getContrat(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/contract",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }

    getEnsure(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/ensure",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }

    getDoc(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/files",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }
}