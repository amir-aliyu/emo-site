//import { createApp } from 'vue'
//import { createPinia } from 'pinia'
//import { createVuetify } from 'vuetify'
//import App from './App.vue'

//import './assets/main.css'

//import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'
//import 'vuetify/styles'

//const app = createApp(App)
//app.use(createPinia()).use(createVuetify({
 //   components,
   // directives
//})).mount('#app')

import { createApp } from 'vue'; // Import createApp function from Vue
import App from './App.vue'; // Import the root component

// Create a new Vue application instance
const app = createApp(App);

// Mount the root component to the DOM
app.mount('#app');