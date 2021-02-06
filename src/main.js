import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
import 'aasaam-vuetify-datetime';
import VueCodeHighlight from 'vue-code-highlight';

Vue.config.productionTip = false;
Vue.use(VueCodeHighlight);

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app');
