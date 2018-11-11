export default class Store {
    constructor() {
        this.state = {
            user: {}
        }
    }

    setUser(user) {
        this.state.user = user;
    }

    getUser() {
        return this.state.user;
    }

}