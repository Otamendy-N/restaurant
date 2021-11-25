<template>
  <div ref="map" class="map" />
</template>

<script>
export default {
  props: {
    panToCurrentLocation: Boolean,
    value: {
      type: Object,
      default: null
    },
    locations: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    map: null,
    marker: null,
    allMarkers: []
  }),
  watch: {
    value (val) {
      this.markCoordinates()
      console.log(val)
    },
    locations () {
      this.markAllCoordinates()
    }
  },
  mounted () {
    if ('google' in window) {
      // Script was already loaded, go ahead and initialize the map
      this.initMap()
      return
    }
    // Dynamically load Google Maps JavaScript SDK
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCgh8hKG2ixaI_Pa_t-UrU0rHK4yT__XEk&callback=initMap'
    script.defer = true
    window.initMap = () => this.initMap()
    document.head.appendChild(script)
  },
  methods: {
    initMap () {
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: this.value,
        zoom: 13
      })
      this.map.addListener('click', (e) => {
        this.marker.setMap(null)
        this.marker = new window.google.maps.Marker({
          position: e.latLng,
          map: this.map
        })
        this.map.panTo(e.latLng)
        this.$emit('input', {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        })
      })
      if (!this.panToCurrentLocation || !navigator.geolocation) {
        this.markCoordinates()
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.$emit('input', {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          this.markCoordinates()
        },
        () => {
          // The user didn't allow us to get their location
          this.markCoordinates()
        }
      )
    },
    markCoordinates () {
      if (this.marker) {
        this.marker.setMap(null)
      }
      this.marker = new window.google.maps.Marker({
        position: this.value,
        map: this.map
      })
      this.map.setCenter(this.value)
    },
    markAllCoordinates () {
      for (let index = 0; index < this.locations.length; index++) {
        this.marker = new window.google.maps.Marker({
          position: {
            lat: this.locations[index].lat,
            lng: this.locations[index].lng
          },
          map: this.map
        })
      }
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 440px;
  border-radius: 10px;
}
</style>
