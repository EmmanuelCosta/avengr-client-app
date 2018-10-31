import Adresses from "./../adresses";
import * as http from "http";
export default class AuthService {

    constructor() {
        this.adresses = new Adresses();
    }

    login(login, password) {
        return http.request({
            url: this.adresses.login,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                "email": login,
                "newPassword": "",
                "password": password
            })
        });
    }

    test(param) {
        console.log(param);
    }
}