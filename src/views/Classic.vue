<template>
<app-scroll class="content">
<div id="classic" class="subpage">
    <ClassicsList :data="classics"/>
</div>
</app-scroll>
</template>

<script>
import ClassicsList from '../components/classics/classics-list'
import {mapState} from 'vuex'
export default {
    components:{
          ClassicsList
    },
    computed:{
        ...mapState({
            classics:state=>state.movie.classics
        })
    },
    created(){
        this.$store.dispatch("movie/requestClassics")
    }
}
</script>

<style lang="scss">
.content{
     width: 100%;
     height: 91%;
     overflow: hidden;  
     touch-action: none; 
}
</style>>
