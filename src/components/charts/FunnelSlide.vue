<template lang='pug'>
Slide(:class='classes')
  .h-full.w-full(class='flex flex-col items-center justify-center')
    div(class='w-11/12 h-5/6')
      .loading(v-if='isLoading')
      .error(v-else-if='errorMessage')
        .slide-headline {{ errorMessage }}
      div.w-full.h-full(:id='id')
  slot
</template>

<script>
import Slide from '@/components/base/Slide.vue'
import * as echarts from 'echarts'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'FunnelChart',
  components: {
    Slide
  },
  props: {
    id: {
      type: String,
      default: () => uuidv4()
    },
    data: {
      type: Array,
      required: true
    },
    classes: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      chart: null,
      isLoading: false,
      errorMessage: null
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

      return foundBreakpoint || breakpoints[breakpoints.length - 1]
    },
    chartData () {
      if (!this.data || this.data.length === 0) return []
      
      return this.data.map(item => ({
        value: item[1],
        name: item[0]
      }))
    },
    chartOptions () {
      return {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
          name: 'Funnel',
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: Math.max(...this.data.map(item => item[1])),
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
            fontSize: this.currentBreakpoint.fontSize,
            color: '#fff',
            fontWeight: 'bold'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: this.currentBreakpoint.fontSize + 2
            }
          },
          data: this.chartData
        }]
      }
    }
  },
  mounted () {
    this.waitToRenderChart()
  },
  beforeUnmount () {
    if (this.chart) {
      this.chart.dispose()
    }
  },
  methods: {
    waitToRenderChart() {
      if (!(document.getElementById(this.id).clientWidth > 0)) {
        setTimeout(window.requestAnimationFrame(this.waitToRenderChart), 500)
      } else {
        this.renderChart()
      }
    },
    renderChart () {
      this.isLoading = true

      try {
        this.chart = echarts.init(document.getElementById(this.id), 'dark')
        this.chart.setOption(this.chartOptions)

        const parent = document.getElementById(this.id).parentElement
        const parentStyle = window.getComputedStyle(parent)
        this.chart.setOption({ backgroundColor: parentStyle.backgroundColor })

        window.addEventListener('resize', () => {
          if (this.chart) {
            this.chart.resize()
            this.chart.setOption({
              series: [{
                label: {
                  fontSize: this.currentBreakpoint.fontSize
                },
                emphasis: {
                  label: {
                    fontSize: this.currentBreakpoint.fontSize + 2
                  }
                }
              }]
            })
          }
        })

        this.isLoading = false
      } catch (e) {
        this.errorMessage = `Error rendering funnel chart: ${e.message}`
        this.isLoading = false
      }
    }
  }
}
</script>
