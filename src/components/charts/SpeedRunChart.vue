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
  name: 'SpeedRunChart',
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
    duration: {
      type: Number,
      default: 5
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
      resizeHandlerAdded: false,
      animationFrameId: null,
      isAnimating: false
    }
  },
  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startAnimation()
      } else {
        this.stopAnimation()
      }
    }, {
      threshold: 0.1
    })
    
    this.observer.observe(document.getElementById(this.uuid))
  },
  beforeUnmount () {
    this.clearSourceTimeout()
    this.stopAnimation()
    if (this.observer) {
      this.observer.disconnect()
    }
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
    async renderChart () {
      this.isLoading = true

      try {
        const response = await fetch(this.currentSource.src)

        if (!response.ok) {
          this.isLoading = false
          this.errorMessage = `Error fetching chart data: ${response.status}`
        } else {
          this.options = await response.json()

          // --- Custom Logic for Speed Run Animation ---
          if (this.options.series && this.options.series[0] && this.options.series[0].data) {
            const series = this.options.series[0]
            const seriesData = series.data
            
            // Store original values for localized calculation
            const originalValues = seriesData.map(item => {
              return typeof item === 'object' ? item.value : item
            })
            const maxValue = Math.max(...originalValues)

            // Disable ECharts native animation to use our manual loop
            this.options.animation = false
            
            // Fix X-axis range
            if (!this.options.xAxis) this.options.xAxis = {}
            this.options.xAxis.max = 300
            this.options.xAxis.min = 0
            this.options.xAxis.type = 'value'
            
            // Prepare the display items (preserve labels/styles)
            const displayItems = seriesData.map(item => {
              if (typeof item === 'object') {
                return { ...item, value: 0 }
              }
              return { value: 0 }
            })

            // Initialize chart if needed
            if (!this.chart) {
              this.chart = echarts.init(document.getElementById(this.uuid), theme)
            }

            // Apply base options first
            this.chart.setOption(this.options)

            // Start time for the loop
            const startTime = performance.now()
            const totalTargetTime = this.duration * 1000

            const animateFrame = (currentTime) => {
              if (!this.isAnimating) return

              const elapsed = currentTime - startTime
              let allFinished = true

              const currentData = displayItems.map((obj, idx) => {
                const val = originalValues[idx]
                // Each bar has its own target duration relative to the total duration
                const targetDuration = (val / maxValue) * totalTargetTime
                const progress = Math.min(1, elapsed / targetDuration)
                
                if (progress < 1) allFinished = false
                
                // Calculate "current" time label
                const currentSeconds = Math.floor(progress * val)
                const hours = Math.floor(currentSeconds / 3600)
                const minutes = Math.floor((currentSeconds % 3600) / 60)
                const seconds = currentSeconds % 60
                const timeString = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

                return {
                  ...obj,
                  value: progress * 300,
                  itemStyle: {
                    color: progress >= 1 ? '#00bc70' : (obj.itemStyle?.color || '#5470c6')
                  },
                  label: {
                    ...obj.label,
                    show: true,
                    formatter: timeString
                  }
                }
              })

              this.chart.setOption({
                series: [{
                  data: currentData
                }]
              })

              if (!allFinished) {
                this.animationFrameId = requestAnimationFrame(animateFrame)
              } else {
                this.isAnimating = false
              }
            }

            // Kick off the manual animation
            this.isAnimating = true
            this.animationFrameId = requestAnimationFrame(animateFrame)
          } else {
            // Standard chart logic if no series data
            if (!this.chart) {
              this.chart = echarts.init(document.getElementById(this.uuid), theme)
            }
            this.chart.setOption(this.options)
          }
          // --------------------------------------------

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

          if (!this.resizeHandlerAdded) {
            window.addEventListener('resize', () => {
              this.chart.resize()
              this.chart.setOption({ textStyle: { fontSize: this.currentBreakpoint.fontSize } })
              if (this.chart.getOption().yAxis) {
                this.chart.setOption({ xAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
                this.chart.setOption({ yAxis: { axisLabel: { fontSize: this.currentBreakpoint.fontSize } } })
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
      this.clearSourceTimeout()
      if (this.srcs && this.srcs.length > 0) {
        let timeout = this.currentSource.timeout
        if (!timeout && this.loop) timeout = this.defaultTimeout
        if (timeout) {
          this.timeoutId = setTimeout(() => {
            this.loadNextSource()
          }, timeout * 1000)
        }
      }
    },
    async loadNextSource () {
      if (!this.srcs || this.srcs.length === 0) return
      this.currentSourceIndex = (this.currentSourceIndex + 1) % this.srcs.length
      await this.renderChart()
    },
    clearSourceTimeout () {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
    },
    startAnimation () {
      this.stopAnimation()
      this.renderChart()
    },
    stopAnimation () {
      this.isAnimating = false
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
        this.animationFrameId = null
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
