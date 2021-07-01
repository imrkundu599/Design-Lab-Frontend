import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import UserHome from './components/UserHome.vue';
import SB from './components/SB.vue';
import FD from './components/FD.vue';
import RD from './components/RD.vue';
import dropdown from './components/dropdown.vue';




export default[
    {path: '/',component: Home},
    {path: '/dropdown',component: dropdown},

    {path: '/register',component: Register},
    {path: '/login',component: Login},
    {path: '/userhome',component: UserHome},
    {path: '/sb',component: SB},
    {path: '/fd',component: FD},
    {path: '/rd',component: RD},
]
