import Vue from "vue"
import Router from "vue-router"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Home from "@/components/PageFirst.vue"
import PageTwo from "@/components/PageTwo.vue"
import PageRaspradaje from "@/components/PageRaspradaje.vue"
import PageCost from "@/components/PageCost.vue"
import PageHelp from "@/components/PageHelp.vue"
import PageBonus from "@/components/PageBonus.vue"
import PageMagazin from "@/components/PageMagazin.vue"
import PageBlog from "@/components/PageBlog.vue"

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
    },
    {
        path:"/buy",
        component:PageTwo,
        name:"Buy"
    },
    {
        path:"/raspradaja",
        component:PageRaspradaje,
        name: "PageRaspradaga"
    },
    {
        path:"/cost",
        component:PageCost,
        name:"PageCost"
    },
    {
        path:"/help",
        component:PageHelp,
        name:"help"
    },
    {
        path:"/bonus",
        component:PageBonus,
        name:"Pagebonus"
    },
    {
        path:"/magazin",
        component:PageMagazin,
        name:"Magazin  "
    },
    {
        path:"/blog",
        component:PageBlog,
        name:"Blog"
    }

]

const router = new Router({
    routes : routes,
    mode : "history"
})

export default router