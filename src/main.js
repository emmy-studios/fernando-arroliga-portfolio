import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vue Router
import router from './plugins/router';

// Create App
const app = createApp(App);

app.use(router);
app.mount('#app');
