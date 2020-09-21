<template>
  <div id="preShow" >
     <PreShowList :data="preShow"/>
  </div>
</template>

<script>
import PreShowList from '../../components/video/preShow-list'
import {mapState} from 'vuex'
export default {
    components:{
        PreShowList
    },
   computed:{
       ...mapState({
           preShow:state=>state.video.preShow
       })
   },
   created(){
       this.$store.dispatch("video/requestPre")
   }
}
</script>

<style>

</style>