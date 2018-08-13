import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue' 
import Login from '../components/Login.vue' 

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        }
        ,
        {
            path: '/dashboard',
            component: Dashboard
        }
      ]
})
