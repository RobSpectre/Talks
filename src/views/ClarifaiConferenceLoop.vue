<template lang="pug">
Reveal(:loop="true")
  .slides
    VideoSlide(
      src="/clarifai/video/clarifai_animation_loop_dark_2k.mp4"
      :timeout="60"
    )
      .absolute.inset-0.grid.grid-rows-3.gap-4
        .self-start.flex.flex-row.items-center.justify-center.gap-4
          img.h-32(src='https://unpkg.com/@lobehub/icons-static-png@latest/dark/openai.png')
          .slide-headline gpt-oss 120B
        .row-start-3.self-end.flex.flex-col.items-center.justify-center
          .slide-headline
            span(style="color: #0EF0FF") 544
            |  tokens per second
          .slide-headline
            span(style="color: #0EF0FF") $0.16
            |  per M blended
    VideoSlide(
      src="/clarifai/video/clarifai_flappy_bird_race.mp4"
      :timeout="89.35"
    )
    VideoSlide(
      src="/clarifai/video/clarifai_animation_loop_light.mp4"
      :timeout="60"
    )
      .absolute.inset-0.grid.grid-rows-3.gap-4
        .self-start.flex.flex-row.items-center.justify-center.gap-4
          img.h-32(src='https://unpkg.com/@lobehub/icons-static-png@latest/dark/openai.png')
          .slide-headline gpt-oss 120B
        .row-start-3.self-end.flex.flex-col.items-center.justify-center
          .slide-headline
            span(style="color: #0EF0FF") 544
            |  tokens per second
          .slide-headline
            span(style="color: #0EF0FF") $0.16
            |  per M blended
    VideoSlide(
      src="/clarifai/video/clarifai_flappy_bird_race.mp4"
      :timeout="89.35"
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
