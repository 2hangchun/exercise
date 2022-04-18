import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../components/A'
import B from '../components/B'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/a',
            component: A
        },
        {
            path: '/b/:id',
            component: B
        },
    ]
})