import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import db from './db'
import axios from 'axios'
import mixins from './mixins'
import filters from './filters'
import directives from './directives'
import components from './components'
import moment from 'moment'

Vue.config.productionTip = false

// register components
for (let key in components) Vue.component(key, components[key])

// filters
Object.keys(filters).forEach((name) => {
	Vue.filter(name, filters[name]);
})

// directive
Object.keys(directives).forEach((name) => {
	Vue.directive(name, directives[name]);
})

// mixins
Vue.mixin(mixins)

// vue + firebase
Vue.use(require('vuefire'))

// make db and http global
Vue.prototype.$db = db
Vue.prototype.$http = axios
Vue.prototype.$moment = moment

new Vue({
	store,
	router,
	...App
}).$mount('#app')
