import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    beforeEach(to, from, next) {
        document.title += to.meta.title
        next()
    }
})

new Vue({ // eslint-disable-line no-new
    router,
    render: (h) => h(App)
}).$mount('#app')
