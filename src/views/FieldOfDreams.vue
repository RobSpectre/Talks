<template lang="pug">
Reveal
  .slides
    VideoSlide(src="/video/finding-your-audience-in-2024/corn.mp4")
      .nintendo The Field Of Dreams Got Clear Cut
    VideoSlide(src="/video/finding-your-audience-in-2024/funnel.mp4")
    VideoSlide(src="/video/finding-your-audience-in-2024/corn.mp4")
      .nintendo The Field Of Dreams Got Clear Cut
    VideoSlide(src="/video/finding-your-audience-in-2024/shutup.mp4")
      h1 This is over
    Slide(class='green')
      p.text-white.text-7xl.uppercase.font-semibold "We haven't spent a dollar in marketing yet."
    Slide(class='darkgray')
      p.text-white.text-7xl.uppercase.font-semibold Inferior products with better Name ID
      p.text-white.text-7xl.uppercase.font-semibold will win in this market
    VideoSlide(src="/video/finding-your-audience-in-2024/domino.mp4")
    VideoSlide(src="/video/finding-your-audience-in-2024/parrot.mp4")
      h1 Social Media
    VideoSlide(src="/video/finding-your-audience-in-2024/life_support.mp4")
      h1 SEO / SEM
    ImageSlide(src="/images/finding-your-audience-in-2024/search_graph.png")
    VideoSlide(src="/video/finding-your-audience-in-2024/newsroom.mp4")
      h1 Every newsroom is half the size
    VideoSlide(src="/video/finding-your-audience-in-2024/circus.mp4")
      h1 No tent pole events any more
    VideoSlide(src="/video/finding-your-audience-in-2024/watchtime.mp4")
      h1 Distribution is governed by consumption time
    Slide(class='darkgray')
      .bullet.fragment Social
      .bullet.fragment Search
      .bullet.fragment Comms
      .bullet.fragment Events
      .bullet.fragment Content
      h2.text-white.fragment ???
    VideoSlide(src="/video/finding-your-audience-in-2024/well.mp4")
      h1 Dig the Well
    Slide(class='darkgray')
      p.text-white.text-7xl.uppercase.font-semibold Successful Go-To-Market in 2024
      p.text-white.text-7xl.uppercase.font-semibold.fragment Will Spend More
      p.text-white.text-7xl.uppercase.font-semibold.fragment Reach Fewer People
      p.text-white.text-7xl.uppercase.font-semibold.fragment with more programs
      p.text-white.text-7xl.uppercase.font-semibold.fragment than ever in our careers
    Slide(class='green')
      p.text-white.text-7xl.uppercase.font-semibold IT IS LATER THAN YOU THINK
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'

export default {
  name: 'FieldOfDreams',
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
  @apply mt-72 text-7xl text-white tracking-tight text-shadow shadow-black #{!important};
}

.bullet {
  @apply text-7xl uppercase line-through text-white font-semibold #{!important};
}

html {
  font-size: 36px;
}
</style>
