import http from '../../api/http'
import {SMALLVIDEO } from '../../api/url'

export default{
    namespaced: true,
    state:{
        smallVideo:[]
    },
    mutations:{
        setSmall(state,payload){
            state.smallVideo=payload;
        }
    },
    actions:{
        async requestSmall(context, payload) {
            const { data:{data:{feeds}} } = await http.get(SMALLVIDEO);
            const newData=feeds.map((item)=>({
                imgUrl:item.video.imgUrl,
                title:item.title,
                avatarurl:item.user.avatarurl,
                nickName:item.user.nickName,
                upCount:item.upCount,
            }));
            console.log(feeds);
            context.commit('setSmall', newData)
        },
    }
}