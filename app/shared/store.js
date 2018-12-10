import * as PlatformModule from "platform";
import { Folder as FolderModule, path as PathModule } from "file-system";
import * as AndroidPermissionModule from "nativescript-permissions"

export default class Store {
    constructor() {
        this.state = {
            user: {},
            messageToShare: '',
            directoryRoot: undefined
        }
    }

    setUser(user) {
        this.state.user = user;
    }

    getUser() {
        return this.state.user;
    }

    setMessageToShare(message) {
        this.state.messageToShare = message;
    }

    getMessageToShare() {
        return this.state.messageToShare;
    }

    defineDirectoryRoot() {

        if (PlatformModule.isAndroid) {
            const rootPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString();

            if (!AndroidPermissionModule.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE)) {
                AndroidPermissionModule.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE).then(() => {
                    console.log("has permission");
                }).catch(() => {
                    console.log("no permission");
                })
            }

            if (!AndroidPermissionModule.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                AndroidPermissionModule.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE).then(() => {
                    this.state.directoryRoot = FolderModule.fromPath(PathModule.join(rootPath, "Mon_Contrat_Obseque"));
                }).catch(() => {
                    console.log("no permission");
                })
            } else {
                this.state.directoryRoot = FolderModule.fromPath(PathModule.join(rootPath, "Mon_Contrat_Obseque"));
            }

        }
    }

    getDirectoryRoot() {
        return this.state.directoryRoot;
    }

}