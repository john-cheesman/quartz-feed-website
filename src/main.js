import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import routes from './routes'
import config from './config'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${config.siteName} | ${to.meta.title}` : config.siteName
    next()
})

new Vue({ // eslint-disable-line no-new
    router,
    render: (h) => h(App)
}).$mount('#app')
