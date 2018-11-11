import Vue from 'nativescript-vue';
import App from './pages/App';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement("RadSideDrawer", function() { return require('nativescript-ui-sidedrawer').RadSideDrawer; });
Vue.registerElement("CardView", () => require("nativescript-cardview").CardView);

import Pages from './shared/pages';
import Icons from './shared/icons';
import Store from './shared/store';

Vue.prototype.$pages = new Pages();
Vue.prototype.$icons = new Icons();
Vue.prototype.$store = new Store();


new Vue({
    render: h => h('frame', [h(App)])
}).$start();