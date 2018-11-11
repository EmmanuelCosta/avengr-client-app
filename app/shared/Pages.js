import Login from './../pages/App.vue';
import Home from './../pages/Home';
import ContratObseque from './../pages/ContratObseque.vue';
import Contrat from './../pages/Contrat.vue';
import Documents from './../pages/Documents.vue';
import About from './../pages/About';

export default class Pages {
    constructor() {
        this.login = Login;
        this.home = Home;
        this.contratObseque = ContratObseque;
        this.contrat = Contrat;
        this.documents = Documents;
        this.about = About;
    }
}