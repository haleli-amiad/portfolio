import {Homepage} from './cmps/homepage/homepage';
import {About} from './cmps/about/about';
import {Portfolio} from './cmps/portfolio/portfolio';
const Routes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/portfolio',
        component: Portfolio,
    },
]

export default Routes
