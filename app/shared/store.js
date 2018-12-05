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
            this.state.directoryRoot = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/Mon_Contrat_Obseque";
        } else {

        }
    }

    getDirectoryRoot() {
        return this.state.directoryRoot;
    }

}