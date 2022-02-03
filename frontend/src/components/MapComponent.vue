<template lang="pug">
  div
    h1 Google Maps
      GmapMap#map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MapComponent extends Vue {
  latitude = -25.344
  longitude = 131.036

   mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: this.latitude, lng: this.longitude})
    })
   }
}
</script>

<style  lang="sass">
.row
  cursor: pointer

#map
  height: 400px
  width: 80%
</style>
