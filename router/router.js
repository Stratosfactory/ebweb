import { createRouter, createWebHistory } from 'vue-router'

import home from "../src/components/main/home.vue"
import leistungen from "../src/components/main/leistungen.vue"
import kontakt from "../src/components/main/kontakt.vue"
import profil from "../src/components/main/profil.vue"
import projekte from "../src/components/main/projekte.vue"
import impressum from "../src/components/footer/imp.vue"
import datenschutz from "../src/components/footer/dpp.vue"


const routes = [{
        path: "/",
        name: "home",
        component: home,

    },
    {
        path: "/leistungen",
        name: "leistungen",
        component: leistungen,

    },
    {
        path: "/kontakt",
        name: "kontakt",
        component: kontakt,

    },
    {
        path: "/profil",
        name: "profil",
        component: profil,

    },
    {
        path: "/projekte",
        name: "projekte",
        component: projekte,

    },
    {
        path: "/impressum",
        name: "impressum",
        component: impressum,

    },
    {
        path: "/datenschutz",
        name: "datenschutz",
        component: datenschutz,

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router