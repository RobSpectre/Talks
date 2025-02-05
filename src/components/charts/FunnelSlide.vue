<template lang='pug'>
Slide
  div.chart(:id='id')
  slot
</template>

<script>
import { ref } from 'vue'

import bb, { funnel } from 'billboard.js'
import 'billboard.js/dist/billboard.css'

import Slide from '@/components/base/Slide.vue'

export default {
  name: 'FunnelChart',
  components: {
    Slide
  },
  props: {
    id: String,
    data: Array
  },
  data () {
    return {
      width: ref(window.innerWidth),
      height: ref(window.innerHeight),
      chart: null
    }
  },
  computed: {
    calculatedWindowWidth () {
      return this.width * 0.75
    },
    calculatedWindowHeight () {
      return this.height * 0.75
    }
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateWindowSize)
  },
  methods: {
    updateWindowSize () {
      this.width = window.innerWidth
      this.height = window.innerHeight

      if (this.chart) {
        this.chart.resize({
          width: this.calculatedWindowWidth,
          height: this.calculatedWindowHeight
        })
      }
    }
  },
  mounted () {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)

    this.chart = bb.generate({
      data: {
        columns: this.data,
        type: funnel(),
        order: 'desc',
        labels: {
          format: function (v, id, i, texts) {
            return id
          }
        }
      },
      bindto: '#' + this.id,
      size: {
        width: this.calculatedWindowWidth,
        height: this.calculatedWindowHeight
      },
      funnel: {
        neck: {
          width: {
            ratio: 0.7
          },
          height: {
            ratio: 0.6
          }
        }
      },
      legend: {
        show: false
      }
    })
  }
}
</script>

<style lang='sass'>
.bb text, .bb svg, .bb-text
  font-family: 'Inter Tight', serif
  @apply uppercase text-base sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-xl #{!important}
</style>
