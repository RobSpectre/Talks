<template lang="pug">
section(:class='classes')
  .h-full.w-full(class='flex flex-col items-center justify-center')
    div(class='w-11/12 h-5/6')
      .loading(v-if='isLoading')
      .error(v-else-if='errorMessage')
        .slide-headline {{ errorMessage }}
      div.w-full.h-full(:id='uuid')
    slot
</template>

<script>
import Slide from '@/components/base/Slide.vue'

import * as echarts from 'echarts'

import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ChartSlide',
  components: {
    Slide
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      uuid: uuidv4(),
      options: null,
      errorMessage: null,
      isLoading: false,
      chart: null,
    }
  },
  mounted () {
    this.presentation = this.$refs.presentation
    
    this.waitToRenderChart()
  },
  computed: {
    currentBreakpoint () {
      const breakpoints = [
        { key: 'sm', breakpoint: 640, fontSize: 12},
        { key: 'md', breakpoint: 768, fontSize: 14},
        { key: 'lg', breakpoint: 1024, fontSize: 18},
        { key: 'xl', breakpoint: 1280, fontSize: 20},
        { key: '2xl', breakpoint: 1536, fontSize: 24},
        { key: 'hd', breakpoint: 1920, fontSize: 32},
        { key: '4k', breakpoint: 3840, fontSize: 72},
        { key: '8k', breakpoint: 7680, fontSize: 88}
      ] 

      const foundBreakpoint = breakpoints.find(breakpoint => {
        return window.innerWidth <= breakpoint.breakpoint
      })

      return foundBreakpoint

    }
  },
  methods: {
    waitToRenderChart() {
      if (!(document.getElementById(this.uuid).clientWidth > 0)) {
        setTimeout(window.requestAnimationFrame(this.waitToRenderChart),
          500)
      } else {
        this.renderChart()
      }
    },
    async renderChart () {
      this.isLoading = true

      try {
        const response = await fetch(this.src)

        if (!response.ok) {
          this.isLoading = false

          this.errorMessage = `Error fetching chart data: ${response.status}`
        } else {
          this.options = await response.json()

          this.chart = echarts.init(document.getElementById(this.uuid), 'dark')

          this.chart.setOption(this.options)

          const parent = document.getElementById(this.uuid).parentElement

          const parentStyle = window.getComputedStyle(parent)

          this.chart.setOption({ backgroundColor: parentStyle.backgroundColor })

          this.chart.setOption({ textStyle: { fontSize: this.currentBreakpoint.fontSize } })
          if (this.chart.getOption().yAxis) {
            this.chart.setOption({ xAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
            this.chart.setOption({ yAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
          }

          if (this.chart.getOption().calendar) {
            this.chart.setOption({ calendar: { cellSize:
              this.currentBreakpoint.fontSize * 1.3 } } )
            this.chart.setOption({ calendar: { monthLabel: { fontSize: this.currentBreakpoint.fontSize } } } )
          }

          window.addEventListener('resize', () => {
            this.chart.resize()

            this.chart.setOption({ textStyle: { fontSize: this.currentBreakpoint.fontSize } })
            if (this.chart.getOption().yAxis) {
              this.chart.setOption({ xAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
              this.chart.setOption({ yAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
            }

            if (this.chart.getOption().calendar) {
              this.chart.setOption({ calendar: { cellSize: this.currentBreakpoint.fontSize * 1.3 } } )
              this.chart.setOption({ calendar: { monthLabel: { fontSize: this.currentBreakpoint.fontSize } } } )
            }
          })
        }
      } catch (e) {
        this.errorMessage = `Error fetching chart data: ${e}`
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang='scss'>
.chart-background {
  background-color: rgba(51,51,51,1);
}
</style>
