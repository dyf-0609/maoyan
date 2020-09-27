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
                            import ( /* webpackChunkName:"movie" */ '../views/movie/Hot'),
                        children: [{
                                path: 'hotDetail',
                                name: 'hotDetail',
                                component: () =>
                                    import ( /* webpackChunkName:"movie" */ '../views/movie/hotDetail'),
                            },
                            {
                                path: 'cinemasDetail',
                                name: 'cinemasDetail',
                                component: () =>
                                    import ( /* webpackChunkName:"movie" */ '../views/movie/cinemasDetail'),
                            },
                            {
                                path: 'seatBlock',
                                name: 'seatBlock',
                                component: () =>
                                    import ( /* webpackChunkName:"movie" */ '../views/movie/seatBlock'),
                            },
                            {
                                path: 'order',
                                name: 'order',
                                component: () =>
                                    import ( /* webpackChunkName:"movie" */ '../views/movie/order'),
                            },
                        ]
                    },
                    {
                        path: 'cinema',
                        name: 'cinema',
                        component: () =>
                            import ( /* webpackChunkName:"movie" */ '../views/movie/Cinema'),
                    },
                    {
                        path: 'unshow',
                        name: 'unshow',
                        component: () =>
                            import ( /* webpackChunkName:"movie" */ '../views/movie/Unshow'),
                    },
                    {
                        path: 'classic',
                        name: 'classic',
                        component: () =>
                            import ( /* webpackChunkName:"movie" */ '../views/movie/Classic'),
                    },
                ]
            },
            {
                path: 'video',
                name: 'video',
                component: () =>
                    import ( /* webpackChunkName:"video" */ '../views/Video'),
                redirect: '/video/preShow',
                children: [{
                        path: 'preShow',
                        name: 'preShow',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/preShow'),
                        children: [{
                            path: ':id',
                            name: 'videoPlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/videoPlayer'),
                        }]
                    },
                    {
                        path: 'news',
                        name: 'news',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/news'),
                        children: [{
                            path: ':id',
                            name: 'newsPlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/newsPlayer'),
                        }]
                    },
                    {
                        path: 'weekly',
                        name: 'weekly',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/weekly'),
                        children: [{
                            path: ':id',
                            name: 'weeklyPlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/weeklyPlayer'),
                        }]
                    },
                    {
                        path: 'sayMovie',
                        name: 'sayMovie',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/sayMovie'),
                        children: [{
                            path: ':id',
                            name: 'sayMoviePlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/sayMoviePlayer'),
                        }]
                    },
                    {
                        path: 'goodVideo',
                        name: 'goodVideo',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/goodVideo'),
                        children: [{
                            path: ':id',
                            name: 'w/goodVideoPlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video//goodVideoPlayer'),
                        }]
                    },
                    {
                        path: 'crime',
                        name: 'crime',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/crime'),
                        children: [{
                            path: ':id',
                            name: 'crimePlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/crimePlayer'),
                        }]
                    },
                    {
                        path: 'fantasy',
                        name: 'fantasy',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/fantasy'),
                        children: [{
                            path: ':id',
                            name: 'fantasyPlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/fantasyPlayer'),
                        }]
                    },
                    {
                        path: 'science',
                        name: 'science',
                        component: () =>
                            import ( /* webpackChunkName:"video" */ '../views/video/science'),
                        children: [{
                            path: ':id',
                            name: 'sciencePlayer',
                            component: () =>
                                import ( /* webpackChunkName:"video" */ '../views/video/sciencePlayer'),
                        }]
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
                redirect: '/my/meituan',
                children: [{
                        path: 'meituan',
                        name: 'meituan',
                        component: () =>
                            import ( /* webpackChunkName:"my" */ '../views/my/meituan'),
                    },
                    {
                        path: 'phone',
                        name: 'phone',
                        component: () =>
                            import ( /* webpackChunkName:"my" */ '../views/my/phone'),
                    },
                    {
                        path: 'reset',
                        name: 'reset',
                        component: () =>
                            import ( /* webpackChunkName:"my" */ '../views/my/reset'),
                    },
                    {
                        path: 'pwd',
                        name: 'pwd',
                        component: () =>
                            import ( /* webpackChunkName:"my" */ '../views/my/pwd'),
                    },
                ]
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