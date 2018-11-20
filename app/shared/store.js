export default class Store {
    constructor() {
        this.state = {
            user: {},
            messageToShare: ''
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

}