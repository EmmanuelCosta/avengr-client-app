import Home from './../pages/Home';
import Contrat from './../pages/Contrat.vue';
import Documents from './../pages/Documents.vue';
import About from './../pages/About';

export default class Pages {
    constructor() {
        this.home = Home;
        this.contrat = Contrat;
        this.documents = Documents;
        this.about = About;
    }
}