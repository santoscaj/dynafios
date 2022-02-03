<template lang="pug">
  h1 Hi there
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MapComponent extends Vue {

  mounted(){
    console.log(process.env.VUE_APP_API_KEY)
  }
}
</script>

<style  lang="sass">
.row
  cursor: pointer
</style>
