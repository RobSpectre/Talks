<template lang='pug'>
Slide(class='darkgray')
  apexchart(
    type='bar',
    :options='chartOptions',
    :series='data',
    width='600'
    height='800'
  )
  slot
</template>

<script>
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
      chartOptions: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
          },
          dropShadow: {
            enabled: true
          }
        },
        title: {
          text: this.title,
          align: 'middle'
        }
      }
    }
  }
}
</script>
