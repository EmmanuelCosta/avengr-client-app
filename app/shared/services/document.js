var Constante = require("../constante");
import * as http from "http";
import * as PlatformModule from "platform";
import { File } from "file-system";
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
        return http.getFile({
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

    saveFile(fileContent, name, path) {
        if (PlatformModule.isAndroid) {
            console.dir(fileContent);
            /*
            var filePath = path + "/" + name + ".pdf";
            console.dir("Save in android ! => " + path);
            const file = new java.io.File(filePath);
            console.dir(file);
            console.dir(file.getAbsolutePath());
            console.dir("file exists => " + file.exists());
            console.dir(file.createNewFile());
            */
        }
    }
}