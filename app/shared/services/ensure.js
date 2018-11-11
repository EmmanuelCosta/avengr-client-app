var Constante = require("./../constante");
import * as http from "http";

export default class EnsureService {

    constructor() {

    }

    get(token) {
        return http.request({
            url: Constante.baseUrl + "/api/mobile/user/ensure",
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            content: JSON.stringify()
        });
    }
}