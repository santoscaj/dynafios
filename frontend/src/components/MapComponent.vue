<template lang="pug">
  div
    h1 Google Maps
      .search-address-block
        p.pick-title Pick a new address
        .user-input
          Input.input-field
          Button( type="warning" shape="circle" icon="md-navigate" ).input-button
            p locate
      //- GmapMap#map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
      #map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue'; // @ is an alias to /src


@Component({
  components: {
    Modal,
  },
})
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

<style  lang="sass" >
.row
  cursor: pointer

#map
  height: 400px
  width: 80%
  background: lightgray
  margin: 20px auto
  border-radius: 5px
  max-width: 800px

.pick-title
  font-size: 13px
  padding: 2px
  text-align: left

.search-address-block
  padding: 8px
  border: 1px solid var(--dynafios-page-color-1)
  max-width: 400px
  margin: auto
  border-radius: 5px

.user-input
  display: flex
  justify-content: center
  align-items: center

.input-button
  background: var(--dynafios-page-color-2)
  border: 1px solid black

</style>
