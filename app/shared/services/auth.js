var Constante = require("./../constante");
import * as http from "http";
export default class AuthService {

    login(login, password) {
        return http.request({
            url: Constante.baseUrl + "/login",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                "email": login,
                "newPassword": "",
                "password": password
            })
        });
    }
}