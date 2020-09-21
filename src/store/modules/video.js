import http from '../../api/http'
import {PRESHOW_API} from '../../api/url'


export default{
    namespaced:true,
    state:{
    preShow:{}
    },
    mutations:{
        setPre(state,payload){
            state.preShow=payload;
        }
    },
    actions:{
        //预告片
        async requestPre(context, payload){
            const {data:{data:{feeds}}}=await http.get(PRESHOW_API);
            console.log(feeds);
            context.commit('setPre',feeds)
        }
    }
}