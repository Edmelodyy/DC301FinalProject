import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Animals from './views/Animals.vue'
import Staff from './views/Staff.vue'
import CareRecords from './views/Records.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/animals', component: Animals },
    { path: '/staff', component: Staff },
    { path: '/care-records', component: CareRecords }
  ],
  scrollBehavior() { return { top: 0 } }
})
createApp(App).use(router).mount('#app')
