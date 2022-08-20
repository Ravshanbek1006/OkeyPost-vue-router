import Vue from "vue"
import Router from "vue-router"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Home from "@/components/PageFirst.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Router)

const routes = [
    {
        path:"/",
        component: Home,
        name: "Home"
    }
]

const router = new Router({
    routes : routes,
    mode : "history"
})

export default router