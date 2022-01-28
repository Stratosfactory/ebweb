import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import store from "../store/store.js"
import router from "../router/router.js"

import VueGoogleMaps from '@fawmi/vue-google-maps'

import 'primeicons/primeicons.css';

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBoWxdI2c0Riul1S6xp7rQ-nIALmA670bU',
    },
})

app.use(store)
app.use(router)




app.mount('#app')