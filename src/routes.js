import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import UserHome from './components/UserHome.vue';
import SB from './components/SB.vue';
import FD from './components/FD.vue';
import RD from './components/RD.vue';
import dropdown from './components/dropdown.vue';

/*import Services from './components/Services.vue';
import About from './components/About.vue';

import Request from './components/Request.vue';
import Pricing from './components/Pricing.vue';
import Testimonial from './components/Testimonial.vue';
import Contact from './components/Contact.vue';*/

//import Video from './components/Video.vue';


export default[
    {path: '/',component: Home},
   // {path: '/services',component: Services},
  //  {path: '/about',component: About},
    {path: '/dropdown',component: dropdown},
  //  {path: '/request',component: Request},
  //  {path: '/pricing',component: Pricing},
  //  {path: '/testimonial',component: Testimonial},
  //  {path: '/contact',component: Contact},
  //  {path: '/video',component: Video},
    {path: '/register',component: Register},
    {path: '/login',component: Login},
    {path: '/userhome',component: UserHome},
    {path: '/sb',component: SB},
    {path: '/fd',component: FD},
    {path: '/rd',component: RD},
]
