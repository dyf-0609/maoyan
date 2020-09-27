
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
        // 过滤器
        Vue.filter("formatter", (count, limit) => {
            if (count < 10000) {
            //低于一万
            return count;
            } else if (count < 10000 * 10000) {
            //低于一亿
            if (typeof limit === "number") {
                const tmp = Math.floor(count / (10000 / Math.pow(10, limit)));
                return tmp / Math.pow(10, limit) + "万";
            } else {
                return Math.floor(count / 10000) + "万";
            }
            } else {
            //大于一亿
            if (typeof limit === "number") {
                const tmp = Math.floor(
                count / ((10000 * 10000) / Math.pow(10, limit))
                );
                return tmp / Math.pow(10, limit) + "亿";
            } else {
                return Math.floor(count / 10000 / 10000) + "亿";
            }
            }
        });
    }, 
}
