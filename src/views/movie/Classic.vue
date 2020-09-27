<template>
    <div id="classic" class="page subpage">
       <app-scroll class="content">
      <ClassicsList :data="classics" />
      </app-scroll>
    </div>
</template>

<script>
import ClassicsList from "../../components/classics/classics-list";
import { mapState } from "vuex";
export default {
  components: {
    ClassicsList,
  },
  computed: {
    ...mapState({
      classics: (state) => state.movie.classics,
    }),
  },
  created() {
    this.$store.dispatch("movie/requestClassics");
  },
};
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none;
}
</style>>
