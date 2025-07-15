import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import '../style.css'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import DefaultLayout from '../views/DefaultLayout.vue';
import FormEmployee from '../views/FormEmployee.vue';
import FormPatient from '../views/FormPatient.vue';

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
            }
            ,
             {
                path: '/formPatient',
                name: 'FormPatient',
                component: FormPatient
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;