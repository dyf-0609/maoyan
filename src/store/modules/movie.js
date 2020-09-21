import http from '../../api/http'
import { RATED_API, MOVIE_LIST_API, COMING_API, UNSHOW_API,CLASSICS_API } from '../../api/url'


export default {
    namespaced: true,
    state: {
        rated: '',
        movieList: [],
        coming: [] ,
        unshow:[],
        classics:[]
    },
    mutations: {
        setRated(state, payload) {
            state.rated = payload;
        },
        setMovieList(state, payload) {
            state.movieList = payload;
        },
        setComing(state, payload) {
            state.coming = payload;
        },
        setUnshowList(state, payload) {
            state.unshow = payload;
        },
        setClassics(state, payload){
            state.classics = payload;
        }
    },
    actions: {
        //热映
        async requsetRated(context, payload) {
            const { data } = await http.get(RATED_API);
            context.commit('setRated', data)
        },
        async requsetMovieList(context, payload) {
            const { data: { movieList } } = await http.get(MOVIE_LIST_API);
            const newData = movieList.map((item) => ({
                id: item.id,
                img: item.img.replace('/w.h', '') + '@1l_1e_1c_128w_180h',
                name: item.nm,
                rate: item.sc,
                show: item.showInfo,
                star: item.star,
                version: item.version,
                globalReleased: item.globalReleased,
                wish: item.wish

            }));
            context.commit('setMovieList', newData)
        },
        //待映
        async requestComing(context, payload) {
            const { data: { coming } } = await http.get(COMING_API);
            const newData = coming.map((item) => ({
                id: item.id,
                img: item.img.replace('/w.h', '') + '@1l_1e_1c_128w_180h',
                name: item.nm,
                wish: item.wish,
                data: item.comingTitle

            }));
            context.commit('setComing', newData)

        },
        async requestUnshowList(context, payload) {
            const { data: { coming } } = await http.get(UNSHOW_API);
            const newData = coming.map((item) => ({
                id: item.id,
                img: item.img.replace('/w.h', '') + '@1l_1e_1c_128w_180h',
                name: item.nm,
                rate: item.sc,
                show: item.showst,
                star: item.star,
                version: item.version,
                wish: item.wish,
                title:item.comingTitle,
                date:item.rt

            }));
            context.commit('setUnshowList', newData)
        },
        //经典电影
        async requsetClassics(context, payload) {
            const { data } = await http.get(CLASSICS_API);
            console.log(data);
            context.commit('setClassics', data)
        },
    }
}