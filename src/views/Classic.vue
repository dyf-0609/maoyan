<template>
<div id="classic" class="subpage">
    <ClassicsList :data="classics"/>
</div>
  
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
        this.$store.dispatch("movie/requsetClassics")
    }
}
</script>

<style>
