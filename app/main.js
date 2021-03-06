import Vue from 'nativescript-vue';
import App from './pages/App';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement("RadSideDrawer", function() { return require('nativescript-ui-sidedrawer').RadSideDrawer; });
Vue.registerElement("CardView", () => require("nativescript-cardview").CardView);

import Pages from './shared/pages';
import Icons from './shared/icons';
import Store from './shared/store';
import * as SocialShare from "nativescript-social-share"

Vue.prototype.$pages = new Pages();
Vue.prototype.$icons = new Icons();
Vue.prototype.$store = new Store();
Vue.prototype.$socialShare = SocialShare;

Vue.prototype.$store.defineDirectoryRoot();

new Vue({
    render: h => h('frame', [h(Vue.prototype.$pages.login)])
}).$start();