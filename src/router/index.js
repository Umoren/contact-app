import {
    createRouter,
    createWebHistory
} from 'vue-router'
import ContactsView from '../views/ContactsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/contact/:id',
            name: 'contact',
            component: ContactView
        },
    ]
})

export default router