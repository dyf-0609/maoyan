
// import VueLazyload from 'vue-lazyload'
import AppScroll from '../components/common/app-scroll'
// import InfiniteScroll from '../components/common/infinite-scroll'

export default{
    install(Vue){
        //事件图片懒加载 
        // Vue.use(VueLazyload, {
        //     preLoad: 1.3,
        //     error: '/img/music.png',
        //     loading: '/img/music.png',
        //     attempt: 1
        // })
        //滚动组件
        Vue.component('app-scroll',AppScroll);
        // Vue.component('infinite-scroll',InfiniteScroll);
    }
}
