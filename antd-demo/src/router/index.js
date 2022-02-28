import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrintService from '../views/printService'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/printService',
            name: 'PrintService',
            component: PrintService
        },
        {
            path: '/',
            // redirect: '/login/passport',
            name: "HomePage",
            component: HomePage
        }
    ]
})