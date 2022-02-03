<template lang="pug">
  .main-div
    h1 Google Maps
      GmapMap#map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
</template>

<script lang="ts">
import { Component, Prop, Vue , PropSync} from 'vue-property-decorator';
import Modal from '@/components/Modal.vue'; // @ is an alias to /src


@Component
export default class MapComponent extends Vue {
  // @Prop() private msg!: string;
  @PropSync('link', { type: String }) syncedName!: string
  @PropSync('content', { type: String }) syncedName!: string

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
