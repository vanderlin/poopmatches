import Vue from 'vue'
import firebase from 'firebase'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	base: __dirname,
	linkActiveClass: 'is-active',
	routes: [
    	{
			path: '/',
			name: 'index',
			component: IndexPage
    	},
  	]
})
