import * as PlatformModule from "platform";
import * as FileSystemModule from "file-system";

export default class Store {
    constructor() {
        this.state = {
            user: {},
            messageToShare: '',
            directoryRoot: ''
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
            /*
            var folder = undefined;
            var directory = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Mon_Contrat_Obseque");
            if (!directory.exists()) {
                console.dir(directory);
                const folder = directory.mkdirs();
                console.dir("Create folder DirectoryRoot => " + directory.mkdirs());
            }

            console.log(folder);
            */
            var path = FileSystemModule.path.join('/storage/emulated/0/', "Fabiyo");
            var folder = FileSystemModule.Folder.fromPath(path).toString();
            this.state.folder = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Mon_Contrat_Obseque";
        } else {

        }
    }

    getDirectoryRoot() {
        return this.state.directoryRoot;
    }

}