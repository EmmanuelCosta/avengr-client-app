var Constante = require("./../constante");
import * as http from "http";
export default class ContratService {

    constructor() {

    }

    get(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/contract",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }

    get_contact(token) {
        return http.request({
            url: Constante.baseUrl + "/api/funeralHome/",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }


}