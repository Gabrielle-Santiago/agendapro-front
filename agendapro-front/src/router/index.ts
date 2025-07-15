import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import '../style.css'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import DefaultLayout from '../views/DefaultLayout.vue';
import FormEmployee from '../views/FormEmployee.vue';
import FormPatient from '../views/FormPatient.vue';
import HomePatient from '../views/HomePatient.vue';
import HomeEmployee from '../views/HomeEmployee.vue';
import ChatView from '../views/ChatView.vue';
import NewConsultation from '../views/NewConsultation.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [ 
            {
                path: '',
                name: 'Home',
                component: HomeView,
            },
            {
                path: '/login',
                name: 'Login',
                component: LoginView,
            },
            {
                path: '/formEmployee',
                name: 'FormEmployee',
                component: FormEmployee
            },
            {
                path: '/formPatient',
                name: 'FormPatient',
                component: FormPatient
            },
            {
                path: '/homePatient',
                name: 'HomePatient',
                component: HomePatient
            },
            {
                path: '/homeEmployee',
                name: 'HomeEmployee',
                component: HomeEmployee
            },
            {
                path: '/chatView',
                name: 'ChatView',
                component: ChatView
            },
            {
                path: '/newConsultation',
                name: 'NewConsultation',
                component: NewConsultation
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;