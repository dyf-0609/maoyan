import http from '../../api/http'
import {PRESHOW_API,NEWS_API,WEEKLY_API,SAYMOVIE_API,GOODVIDEO_API,CRIME_API,FANTASY_API,SCIENCE_API} from '../../api/url'


export default{
    namespaced:true,
    state:{
    preShow:[],
    news:[],
    weekly:[],
    sayMovie:[],
    goodVideo:[],
    crime:[],
    fantasy:[],
    science:[]
    },
    mutations:{
        setPre(state,payload){
            state.preShow=payload;
        },
        setNews(state,payload){
            state.news=payload;
        },
        setWeekly(state,payload){
            state.weekly=payload;
        },
        setSayMovie(state,payload){
            state.sayMovie=payload;
        },
        setGoodVideo(state,payload){
            state.goodVideo=payload;
        },
        setCrime(state,payload){
            state.crime=payload;
        },
        setFantasy(state,payload){
            state.fantasy=payload;
        },
        setScience(state,payload){
            state.science=payload;
        }
    },
    actions:{
        //预告片
        async requestPre(context, payload){
            const {data:{data:{feeds}}}=await http.get(PRESHOW_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            // console.log(feeds);
            context.commit('setPre',newData)
        },
        //新片看点
        async requestNews(context, payload){
            const {data:{data:{feeds}}}=await http.get(NEWS_API); 
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            // console.log(feeds);
            context.commit('setNews',newData)
        },
        //每周必看
        async requestWeekly(context, payload){
            const {data:{data:{feeds}}}=await http.get(WEEKLY_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setWeekly',newData)
        },
        //说电影
        async requestSayMovie(context, payload){
            const {data:{data:{feeds}}}=await http.get(SAYMOVIE_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setSayMovie',newData)
        },
        //好片推荐
        async requestGoodVideo(context, payload){
            const {data:{data:{feeds}}}=await http.get(GOODVIDEO_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setGoodVideo',newData)
        },
        //犯罪
        async requestCrime(context, payload){
            const {data:{data:{feeds}}}=await http.get(CRIME_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setCrime',newData)
        },
        //奇幻
        async requestFantasy(context, payload){
            const {data:{data:{feeds}}}=await http.get(FANTASY_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setFantasy',newData)
        },
        //科幻
        async requestScience(context, payload){
            const {data:{data:{feeds}}}=await http.get(SCIENCE_API);
            const newData=feeds.map((item)=>({
                id:item.id,
                imgUrl:item.video.imgUrl,
                title:item.title,
                viewCount:item.video.viewCount,
                onlineTime:item.onlineTime,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
                commentCount:item.commentCount,
                video:item.video.url
            }));
            context.commit('setScience',newData)
        },
    }
}