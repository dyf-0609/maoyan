import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName:"home" */ '../views/Home'),
        redirect: '/movie/hot',
        children: [{
                path: 'movie',
                name: 'movie',
                component: () =>
                    import ( /* webpackChunkName:"movie" */ '../views/Movie'),
                    redirect: '/movie/hot',
                children: [{
                        path: 'hot',
                        name: 'hot',

                        component: () =>
                            import ( /* webpackChunkName:"hot" */ '../views/Hot'),
                    },
                    {
                        path: 'cinema',
                        name: 'cinema',
                        component: () =>
                            import ( /* webpackChunkName:"cinema" */ '../views/Cinema'),
                    },
                    {
                        path: 'unshow',
                        name: 'unshow',
                        component: () =>
                            import ( /* webpackChunkName:"unshow" */ '../views/Unshow'),
                    },
                    {
                        path: 'classic',
                        name: 'classic',
                        component: () =>
                            import ( /* webpackChunkName:"classic" */ '../views/Classic'),
                    },
                ]
            },
            {
                path: 'video',
                name: 'video',
                component: () =>
                    import ( /* webpackChunkName:"video" */ '../views/Video'),
                    redirect: '/video/preShow',
                children: [
                    {
                        path: 'preShow',
                        name: 'preShow',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/preShow'),
                    },
                    {
                        path: 'news',
                        name: 'news',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/news'),
                    },
                    {
                        path: 'weekly',
                        name: 'weekly',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/weekly'),
                    },
                    {
                        path: 'sayMovie',
                        name: 'sayMovie',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/sayMovie'),
                    },
                    {
                        path: 'goodVideo',
                        name: 'goodVideo',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/goodVideo'),
                    },
                    {
                        path: 'crime',
                        name: 'crime',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/crime'),
                    },
                    {
                        path: 'fantasy',
                        name: 'fantasy',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/fantasy'),
                    },
                    {
                        path: 'science',
                        name: 'science',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/science'),
                    },
                ]
            },
            {
                path: 'small-video',
                name: 'small-video',
                component: () =>
                    import ( /* webpackChunkName:"small-video" */ '../views/SmallVideo'),
            },
            {
                path: 'my',
                name: 'my',
                component: () =>
                    import ( /* webpackChunkName:"my" */ '../views/My'),
            }
        ]
    },
    {
        path: '**',
        redirect: '/movie/hot'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router