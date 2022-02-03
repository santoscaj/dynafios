<template lang="pug">
  div
    h1 Google Maps
      .search-address-block
        p.pick-title Pick a new address
        .user-input
          Input.input-field( placeholder="longitude" type="number" number v-model="longitude" )
          Input.input-field( placeholder="latitude" type="number" number v-model="latitude" )
          Button( type="warning" shape="circle" icon="md-navigate" @click="locateInMap" ).input-button
            p locate
          Button(  shape="circle" icon="md-refresh" @click="generateRandomLocation").input-button
            p random
      //- GmapMap#map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
      #map( ref="mapRef" :center="{lat:latitude, lng: longitude}" )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue'; // @ is an alias to /src
import { Loader } from '@googlemaps/js-api-loader';
import {Message} from 'view-design'

@Component({
  components: {
    Modal,
  },
})
export default class MapComponent extends Vue {
  latitude = -25.344
  longitude = 131.036
  zoom = 8
  google = null
  map = null

  returnRandomNumber(min, max){
    let range = max - min
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateRandomLocation(){
    this.latitude = this.returnRandomNumber(-90,90)
    this.longitude = this.returnRandomNumber(-180,180)
  }

  locateInMap(){
    if(this.latitude > 90 || this.latitude < -90) return Message.error('ERROR Cannot locate. Latitude is out of bounds')
    if(this.longitude > 180 || this.longitude < -180) return Message.error('ERROR Cannot locate. Longitude is out of bounds')
    this.load()
  }

  loader = new Loader({
    // apiKey: 'asd',
    apiKey: process.env.VUE_APP_API_KEY,
    // version: "weekly",
    libraries: ["places"]
  });
  
  get mapOptions(){
  return {
    center: {
        lat: this.latitude,
        lng: this.longitude
      },
      zoom: this.zoom
    }
  }

  load(){
      this.loader
        .load()
        .then((google) => {
          new google.maps.Map(document.getElementById("map"), this.mapOptions);
        })
        .catch(e => console.error(e));
  }
  
  mounted () {
      this.load()
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
