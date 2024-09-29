<template lang="pug">
Reveal
  .slides
    Slide(class="darkgray")
      .nintendo Rob's Talks
      ul
        li
          a(href="/finding-your-audience-2024")
            | The Field of Dreams Got Clear Cut
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'

export default {
  name: 'Home',
  components: {
    Title,
    Slide,
    Reveal,
    ImageSlide,
    VideoSlide
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nintendo {
  font-family: 'Press Start 2P', cursive !important;
  @apply mt-12 text-9xl text-white #{!important};
}

html {
  font-size: 36px;
}
</style>
