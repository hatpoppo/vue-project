import { createApp } from 'vue'
import App from './App.vue'
import makeServer from "./server";

createApp(App).mount('#app')

if (process.env.NODE_ENV === "development") {
  makeServer();
}