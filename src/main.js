import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue';

Vue.use(VueRouter)

new Vue({
	router: new VueRouter({
		mode: 'history',
		routes: [
			{
				path: "/",
				name: "Home",
				component: Home
			}
		]
	}),
	render: h => h(App)
}).$mount('#app')
