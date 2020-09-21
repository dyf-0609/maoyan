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
                children: [{
                        path: 'hot',
                        name: 'hot',

                        component: () =>
                            import ( /* webpackChunkName:"hot" */ '../views/Hot'),
                    },
                    {
                        path: 'camera',
                        name: 'camera',
                        component: () =>
                            import ( /* webpackChunkName:"camera" */ '../views/Camera'),
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
        redirect: '/movie'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router