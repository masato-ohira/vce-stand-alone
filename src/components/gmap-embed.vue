<template lang='pug'>
.v-gmap-embed(ref="gmap")
  iframe(
    :src="iframe"
  )

  //- .v-gmap-embed__btn
  //-   a(href="{setLink()}", target="_blank")
  //-     i.ion-ios-location
  //-     span 大きい地図で見る

</template>

<script>
export default {
  props: {
    apikey: null,
    lat: null,
    lng: null,
  },
  data() {
    return {
      gmaps: {
        api: 'https://www.google.com/maps/embed/v1/place',
        opts: {
          key: this.apikey,
          center: `${this.lat}, ${this.lng}`,
          q: `${this.lat}, ${this.lng}`,
          zoom: 16,
        },
      }
    }
  },
  computed: {
    iframe() {
      return `${this.gmaps.api}?${this.params(this.gmaps.opts)}`
    },
    // height() {
    //   if (this.$refs.gmap) {
    //     let w = this.$refs.gmap.clientWidth
    //     console.log(w);
    //     return {
    //       height: `${w * 0.75}px`
    //     }
    //   }
    // }
  },
  methods: {
    params(source) {
      let array = []
      let keys = Object.keys(source)
      keys.map( (k) => {
        array.push(
          [encodeURIComponent(k), encodeURIComponent(source[k])].join('=')
        )
      })
      return array.join('&')
    },
    setLink() {
      return `https://www.google.com/maps/place/${this.lat},${this.lng}/@${this.lat},${this.lng},${this.gmaps.opts.zoom}z`
    },
  }
}
</script>

<style lang='sass'>
.v-gmap-embed
  iframe
    display: block
    width: 100%
    height: 400px

  &__btn
    padding-top: 12px
    text-align: right
    a
      font-size: 16px
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: flex-end

      i
        display: inline-block
        margin-right: 5px
        color: #118dd4
</style>
