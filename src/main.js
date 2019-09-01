import Vue from 'vue';
import App from './App.vue';

import store from './store';

import './assets/css/reset.css';

Vue.config.productionTip = false;
// 阻止微信上下滑动
document.body.addEventListener(
	'touchmove',
	function(e) {
		e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
	},
	{ passive: false }
);

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
