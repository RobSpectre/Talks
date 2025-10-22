<template lang="pug">
Reveal(:loop="true")
  .slides
    VideoSlide(
      src="/clarifai/video/clarifai_artificial_analysis_performance_graph.mp4"
      :timeout="30.01"
    )
    VideoSlide(
      src="/clarifai/video/clarifai_animation_loop_dark_2k.mp4"
      :timeout="210.30"
    )
    VideoSlide(
      src="/clarifai/video/clarifai_flappy_bird_race.mp4"
      :timeout="89.35"
    )
    VideoSlide(
      src="/clarifai/video/clarifai_animation_loop_light.mp4"
      :timeout="83.717"
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
  name: 'Backgrounds',
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
