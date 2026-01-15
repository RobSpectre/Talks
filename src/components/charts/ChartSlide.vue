<template lang="pug">
section(:class='classes')
  .h-full.w-full.flex.flex-col.items-center.justify-center
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
import theme from '@/lib/echarts-theme-dark'
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
    srcs: {
      type: Array,
      default: null
    },
    loop: {
      type: Boolean,
      default: false
    },
    defaultTimeout: {
      type: Number,
      default: 3
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
      currentSourceIndex: 0,
      timeoutId: null,
      resizeHandlerAdded: false
    }
  },
  mounted () {
    this.presentation = this.$refs.presentation

    this.waitToRenderChart()
  },
  beforeUnmount () {
    this.clearSourceTimeout()
  },
  computed: {
    currentBreakpoint () {
      const breakpoints = [
        { key: 'sm', breakpoint: 640, fontSize: 12},
        { key: 'md', breakpoint: 768, fontSize: 14},
        { key: 'lg', breakpoint: 1024, fontSize: 18},
        { key: 'xl', breakpoint: 1280, fontSize: 20},
        { key: '2xl', breakpoint: 1536, fontSize: 24},
        { key: 'hd', breakpoint: 1920, fontSize: 28},
        { key: '4k', breakpoint: 3840, fontSize: 48},
        { key: '8k', breakpoint: 7680, fontSize: 72}
      ]

      const foundBreakpoint = breakpoints.find(breakpoint => {
        return window.innerWidth <= breakpoint.breakpoint
      })

      return foundBreakpoint
    },
    currentSource () {
      if (this.srcs && this.srcs.length > 0) {
        return this.srcs[this.currentSourceIndex]
      }
      return { src: this.src, timeout: null }
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
        const response = await fetch(this.currentSource.src)

        if (!response.ok) {
          this.isLoading = false

          this.errorMessage = `Error fetching chart data: ${response.status}`
        } else {
          this.options = await response.json()

          if (!this.chart) {
            this.chart = echarts.init(document.getElementById(this.uuid), theme)
          }

          // Force white labels with no border on all series
          if (this.options.series) {
            this.options.series.forEach(series => {
              if (series.label) {
                series.label.color = '#FFFFFF'
                series.label.textBorderWidth = 0
                series.label.textBorderColor = 'transparent'
                series.label.fontFamily = 'Figtree'
                series.label.fontWeight = 600
              }
              if (series.data) {
                series.data.forEach(item => {
                  if (item.label) {
                    item.label.color = '#FFFFFF'
                    item.label.textBorderWidth = 0
                    item.label.textBorderColor = 'transparent'
                    item.label.fontFamily = 'Figtree'
                    item.label.fontWeight = 600
                  }
                })
              }
            })
          }

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
              this.currentBreakpoint.fontSize * 1.2 } } )
            this.chart.setOption({ calendar: { monthLabel: { fontSize: this.currentBreakpoint.fontSize } } } )
          }

          if (!this.resizeHandlerAdded) {
            window.addEventListener('resize', () => {
              this.chart.resize()

              this.chart.setOption({ textStyle: { fontSize: this.currentBreakpoint.fontSize } })
              if (this.chart.getOption().yAxis) {
                this.chart.setOption({ xAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
                this.chart.setOption({ yAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
              }

              if (this.chart.getOption().calendar) {
                this.chart.setOption({ calendar: { cellSize:
                  this.currentBreakpoint.fontSize * 1.2 } } )
                this.chart.setOption({ calendar: { monthLabel: { fontSize: this.currentBreakpoint.fontSize } } } )
              }
            })
            this.resizeHandlerAdded = true
          }

          // Schedule next source if timeout is specified
          this.scheduleNextSource()
        }
      } catch (e) {
        this.errorMessage = `Error fetching chart data: ${e}`
      } finally {
        this.isLoading = false
      }
    },
    scheduleNextSource () {
      // Clear any existing timeout
      this.clearSourceTimeout()

      // Only schedule if using srcs array
      if (this.srcs && this.srcs.length > 0) {
        let timeout = this.currentSource.timeout

        // If no timeout specified but loop is enabled, use defaultTimeout
        if (!timeout && this.loop) {
          timeout = this.defaultTimeout
        }

        // Schedule if we have a timeout
        if (timeout) {
          const ms = timeout * 1000
          this.timeoutId = setTimeout(() => {
            this.loadNextSource()
          }, ms)
        }
      }
    },
    async loadNextSource () {
      if (!this.srcs || this.srcs.length === 0) {
        return
      }

      // Move to next source (loop back to start if at end)
      this.currentSourceIndex = (this.currentSourceIndex + 1) % this.srcs.length

      // Render the new source
      await this.renderChart()
    },
    clearSourceTimeout () {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
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
