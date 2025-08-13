<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/oso-content-performance/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Oso Content Performance 
          li Rob Spectre
          li rob.spectre@osohq.com
    Slide(class='green')
      .slide-headline Traffic
    TableSlide(
      title='14 May - 11 Aug',
      :headers="['Source', '2024', '2025', '% Change']"
      :data='totalUsers'
      :isLastColumnPercentChanged='true'
    )
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ChartSlide from '@/components/charts/ChartSlide.vue'
import TableSlide from '@/components/data/TableSlide.vue'

import totalUsers from '@/assets/data/oso-content-performance/total_users.json'

export default {
  name: 'OsoContentPerformance',
  components: {
    Title,
    Slide,
    Reveal,
    ImageSlide,
    VideoSlide,
    ChartSlide,
    TableSlide
  },
  data () {
    return {
      totalUsers: totalUsers
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
