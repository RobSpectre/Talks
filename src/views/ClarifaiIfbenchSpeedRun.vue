<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/clarifai/ifbench/video/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li IFBench Speed Run Data
          li Rob Spectre
          li rob.spectre@clarifai.com
    ChartSlide(
      class='darkgray'
      src='/clarifai/ifbench/data/total_time.json'
    )
    ChartSlide(
      class='darkgray'
      src='/clarifai/ifbench/data/tokens.json'
    )
    ChartSlide(
      class='darkgray'
      src='/clarifai/ifbench/data/accuracy.json'
    )
    ChartSlide(
      class='darkgray'
      src='/clarifai/ifbench/data/latency.json'
    )
    ChartSlide(
      class='darkgray'
      src='/clarifai/ifbench/data/cost.json'
    )
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ChartSlide from '@/components/charts/ChartSlide.vue'

export default {
  name: 'ClarifaiDiscovery',
  components: {
    Title,
    Slide,
    Reveal,
    ImageSlide,
    VideoSlide,
    ChartSlide
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
