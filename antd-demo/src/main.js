// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from '../src/views/footer'
import LoginPanel from '../src/views/LoginPanel'
import Sider from '../src/views/sider'
import Tabs from '../src/views/tabs.vue'
import axios from 'axios'
// 引入antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


// 全局默认样式
import '../src/assets/style.css'

// // 样式引入
// import { Button } from 'ant-design-vue';
// import { Layout } from 'ant-design-vue';

// // 引用
// Vue.use(Button);
// Vue.use(Layout);     
Vue.prototype.$axios = axios;

Vue.component('Footer', Footer);
Vue.component('LoginPanel', LoginPanel);
Vue.component('Sider', Sider);
Vue.component('Tabs', Tabs);

Vue.config.productionTip = false
Vue.prototype.$getViewportSize = function() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, // 获取宽度
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 获取高度
    }
}



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})