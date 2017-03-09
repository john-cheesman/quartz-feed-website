import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import AddFeed from './components/AddFeed.vue'
import config from './config'

const routes = [
    { path: '/', component: Home },
    { path: '/add-feed', component: AddFeed, meta: { title: 'Add a feed' } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${config.siteName} | ${to.meta.title}` : config.siteName
    next()
})

export default router
