import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './views/Hello.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Hello }
    ]
})
export default router