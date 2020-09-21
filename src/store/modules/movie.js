import http from '../../api/http'
import { RATED_API, MOVIE_LIST_API, COMING_API, UNSHOW_API,CLASSICS_API ,CINEMASINFO_API} from '../../api/url'


export default {
    namespaced: true,
    state: {
        rated: '',
        movieList: [],
        coming: [] ,
        unshow:[],
        classics:[],
        cinema:[]
    },
    mutations: {
        //热映
        setRated(state, payload) {
            state.rated = payload;
        },
        setMovieList(state, payload) {
            state.movieList = payload;
        },
        //影院
        setCinema(state, payload) {
            state.cinema = payload;
        },
        //待映
        setComing(state, payload) {
            state.coming = payload;
        },
        setUnshowList(state, payload) {
            state.unshow = payload;
        },
        //经典电影
        setClassics(state, payload){
            state.classics = payload;
        }
    },
    actions: {
        //热映
        async requestRated(context, payload) {
            const { data } = await http.get(RATED_API);
            context.commit('setRated', data)
        },
        async requestMovieList(context, payload) {
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
        //影院
        async requsetCinema(context, payload) {
            const { data } = await http.get(CINEMASINFO_API);
            console.log(data);
            context.commit('setCinema', data)
        },
        //待映
        async requestComing(context, payload) {
            const { data: { coming } } = await http.get(COMING_API);
            const newData = coming.map((item) => ({
                id: item.id,
                img: item.img.replace('/w.h', '') + '@1l_1e_1c_128w_180h',
                name: item.nm,
                wish: item.wish,
                data: item.comingTitle.slice(0,6)

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
        async requestClassics(context, payload) {
            const { data } = await http.get(CLASSICS_API);
            console.log(data);
            context.commit('setClassics', data)
        },
    }
}