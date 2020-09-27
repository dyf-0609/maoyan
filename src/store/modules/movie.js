import http from '../../api/http'
import { RATED_API, MOVIE_LIST_API, COMING_API, HOTDETAIL_API, DAYSCINEMAS_API,SEATINGPLAN_API, CINEMASDETAIL, UNSHOW_API, CLASSICS_API, CINEMASINFO_API } from '../../api/url'


export default {
    namespaced: true,
    state: {
        rated: '',
        movieList: [],
        coming: [],
        unshow: [],
        classics: [],
        cinema: [],
        hotDetail: [],
        cinemas: [],
        dates: [],
        cinemasDetail: {},
        cinemaData: {},
        movies: [],
        seatingPlan:{}
    },
    mutations: {
        //热映
        setRated(state, payload) {
            state.rated = payload;
        },
        setMovieList(state, payload) {
            state.movieList = payload;
        },
        setHotDetail(state, payload) {
            state.hotDetail = payload;
        },
        setHotDetailBottom(state, payload) {
            state.hotDetailBottom = payload;
        },
        setCinemas(state, payload) {
            state.cinemas = payload;
        },
        setShowDays(state, payload) {
            state.dates = payload;
        },
        setCinemasDetail(state, payload) {
            state.cinemasDetail = payload;
        },
        setCinemaData(state, payload) {
            state.cinemaData = payload;
        },
        setMovies(state, payload) {
            state.movies = payload;
        },
        setSeatingPlan(state,payload){
            state.seatingPlan=payload;
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
        setClassics(state, payload) {
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
            // console.log(movieList);
            context.commit('setMovieList', newData)
        },
        //电影详情
        async requestHotDetail(context, payload) {
            const { data } = await http.get(HOTDETAIL_API);
            // console.log(data);
            context.commit('setHotDetail', data)
        },
        async requestHotDetailBottom(context, payload) {
            const { data } = await http.get(DAYSCINEMAS_API);
            // console.log(data);
            const { data: { cinemas } } = await http.get(DAYSCINEMAS_API);
            // console.log(cinemas);
            const { data: { showDays: { dates } } } = await http.get(DAYSCINEMAS_API);
            // console.log(dates);
            context.commit('setHotDetailBottom', data);
            context.commit('setCinemas', cinemas);
            context.commit('setShowDays', dates);
        },
        //进入影院
        async requestCinemasDetail(context, payload) {
            const { data } = await http.get(CINEMASDETAIL);
            const { data: { cinemaData } } = await http.get(CINEMASDETAIL);
            const { data: { showData: { movies } } } = await http.get(CINEMASDETAIL);
            const newData = movies.map((item) => ({
                id: item.id,
                img: item.img.replace('w.h', '148.208'),
                nm: item.nm,
                desc: item.desc,
                sc: item.sc,
                wish:item.wish,
                globalReleased:item.globalReleased,
                shows:item.shows
            }));
            // console.log(data);
            // console.log(cinemaData);
            // console.log(movies);
            context.commit('setCinemasDetail', data);
            context.commit('setCinemaData', cinemaData);
            context.commit('setMovies', newData);
        },
        //选座
        async requestSeatingPlan(context,payload){
            const {data}=await http.get(SEATINGPLAN_API);
            const {data:{seatData}}=await http.get(SEATINGPLAN_API);
            // console.log(data);
            console.log(seatData);
            context.commit('setSeatingPlan',seatData)
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
                data: item.comingTitle.slice(0, 6)
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
                title: item.comingTitle,
                date: item.rt

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