import Router from "vue-router";
import Index from '@/views/Index'
import control from '@/views/Control'
import Main from '@/views/Main/Main'
import slogen from '@/views/Slogen/Slogen'
import Team from '@/views/Team/Team'
import Banner from '@/views/Banner/Banner'
import News from '@/views/News/News'
import Info from '@/views/Info/Info'
import Link from '@/views/Link/Link'
import User from '@/views/User/User'



export default new Router({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/control',
            component: control,
            redirect: '/control/Main',
            children: [
                {
                    path: '/control/Main',
                    component: Main
                },
                {
                    path: '/control/slogen',
                    component: slogen
                },
                {
                    path: '/control/Team',
                    component: Team
                },
                {
                    path: '/control/Banner',
                    component: Banner
                },
                {
                    path: '/control/News',
                    component: News
                },
                {
                    path: '/control/Info',
                    component: Info
                },
                {
                    path: '/control/Link',
                    component: Link
                },
                {
                    path: '/control/User',
                    component: User
                }
            ]
        }
    ]
})