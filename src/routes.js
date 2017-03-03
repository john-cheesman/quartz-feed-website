import Home from './components/Home.vue'
import AddFeed from './components/AddFeed.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/add-feed', component: AddFeed, meta: { title: 'Add a feed' } }
]

export default routes
