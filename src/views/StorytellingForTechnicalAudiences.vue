<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/storytelling-for-technical-audiences/princess_bride.webm')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Storytelling for Technical Audiences 
          li Rob Spectre
          li rob@brooklynhacker.com
    VideoSlide(src='/storytelling-for-technical-audiences/video/thriller.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/dickens.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/the_force.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/the_odyssey.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/serial.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/clue.webm')
    Slide(class='darkgray')
      .slide-headline They are stories
    VideoSlide(src='/storytelling-for-technical-audiences/video/magnets.webm')
      h1 Magnets for human minds 
    Slide(class='darkgray')
      img(src='/storytelling-for-technical-audiences/images/pokemon-super.gif')
    Slide(class='green')
      .slide-headline
        | The 
        span.text-darkgray  story 
        | is 
      .slide-headline
        | the 
        span.text-darkgray  universal adapter
      .slide-headline for ideas
    Slide(class='darkgray')
      .slide-headline if you only tell a story
      .slide-headline.fragment 
        | you are already the 
      .slide-headline.fragment 
        span.text-green  80th percentile
    VideoSlide(src='/storytelling-for-technical-audiences/video/noah.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/violet.webm')
    VideoSlide(src='/storytelling-for-technical-audiences/video/sagan.webm')
    Slide(class='darkgray')
      .slide-headline.fragment Beginning
      .slide-headline.fragment Middle 
      .slide-headline.fragment End 
      h1 The story
    Slide(class='darkgray')
      .slide-headline if you only tell a story
      .slide-headline
        | you are already the 
      .slide-headline
        span.text-green  80th percentile
    Slide(class='darkgray')
      .slide-headline.text-black Classes
      .slide-headline.text-black Attributes
      .slide-headline.text-black Objects
      .slide-headline.text-black Anti-patterns
      h1 Agenda
    Slide(class='green')
      .slide-headline Classes
    Slide
      img(src='/storytelling-for-technical-audiences/images/seven_plots.jpeg')
      h1 seven basic plots
    Slide(class='green')
      .slide-headline Attributes
    Slide(class='darkgray')
      .slide-headline Accurate
      .slide-headline Authentic 
      .slide-headline Applicable 
      h1 The Three As
    Slide
      img(src='/storytelling-for-technical-audiences/images/code_example.png')
      h1 Accurate
    VideoSlide(
      src='/storytelling-for-technical-audiences/video/ibm.mkv'
      :muted='false'
    )
      h1 Authentic
    VideoSlide(
      src='/storytelling-for-technical-audiences/images/token_growth.png')
      h1 Applicability
    Slide(class='green')
      .slide-headline Objects 
</template>


<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ChartSlide from '@/components/charts/ChartSlide.vue'

export default {
  name: 'StorytellingForTechnicalAudiences',
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
