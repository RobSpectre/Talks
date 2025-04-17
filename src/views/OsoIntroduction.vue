<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Hello, Oso! 
          li Rob Spectre
          li rob@brooklynhacker.com
    ImageSlide(src='/images/childsafeai-assets/rob_and_ada.gif')
      h1 Hi! I'm Ada's Dad
    Slide
      img(src='/images/twilio_logo.png')
      img(src='/images/bz_logo.webp')
      h1 Ws
    Slide
      img(src='/images/boxee_logo.webp')
      img(src='/images/ebaum_logo.jpg')
      img(src='/images/zvue_logo.webp')
      img(src='/images/perpetual_logo.png')
      img(src='/images/sugarcrm_logo.jpg')
      h1 Ls
    VideoSlide(src='/images/childsafeai-assets/congressional_briefing_cut.mp4')
      h1 childsafe.ai 
    Slide(class='green')
      .slide-headline Accelerate developer go-to-market
      .slide-headline with technical content and messaging
      h1 Objective
    Slide(class='darkgray')
      img(src='/oso_introduction/hello-oso.png')
      h1 tinyurl.com/hello-oso
    Slide(class='green')
      .slide-headline Discovery
      .slide-headline Acceleration
      .slide-headline Measurement
      h1 Phases
    Slide(class='darkgray')
      .slide-headline Eat the Dog Food 
      .slide-headline Get the Data
      .slide-headline Ship Content 
      h1 Discovery Wrap
    VideoSlide(src='/oso_discovery/dog_food.mp4') 
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Eat The Dog Food 
    VideoSlide(src='/oso_discovery/ftu_cut.mp4')
      h1 First Time Use
    VideoSlide(src='/oso_discovery/user_film_cut.webm')
      h1 User Film
    Slide(class='darkgray')
      .slide-headline.text-black Product is strong 
      .slide-headline.text-black Workbench rules
      .slide-headline.text-black Academy is golden
      .slide-headline.text-black SDK coverage is good 
      .slide-headline.text-black Docs are comprehensive for Polar
      h1 Worked
    Slide(class='darkgray')
      .slide-headline.text-black Broken code
      .slide-headline.text-black 17 minutes
      .slide-headline.text-black Onboarding confusing and long
      .slide-headline.text-black Inconsistent state
      .slide-headline.text-black Underillustrated
      .slide-headline.text-black Undertrafficked
      .slide-headline.text-black Info hierarchy
      h1 !Worked
    Slide
      .slide-headline.text-black
        a(href='https://www.youtube.com/watch?v=vv_DTkPL9WM')
          | First Time Use Video
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Rob-s-First-Time-Use-Experience-1bb9f1471f2b80f2bffdeba343876bb5?pvs=4')
          | First Time Use Analysis
      .slide-headline.text-black
        a(href='https://www.youtube.com/watch?v=am6jr4OPD7k')
          | User Film Video
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Documentation-User-Film-Review-1ce9f1471f2b80b9870fd5e0f1728fc9?pvs=4')
          | User Film Analysis
      h1 Resources
    VideoSlide(src='/oso_discovery/magnifying_glass_cut.webm') 
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Get the Data
    VideoSlide(src='/oso_discovery/dog_pool.mp4')
      h1 This is frustrating
    Slide(class='green')
      .slide-headline We have the data
    Slide(class='darkgray')
      .slide-headline 
        span.text-green 4 
        | tools
      .slide-headline
        span.text-green 128 
        | events
      .slide-headline
        span.text-green ~30-50%
        |  delta 
      .slide-headline
        span.text-green Low
        |  visibility 
      .slide-headline
        span.text-green Slow
        |  progress
      h1 Tale of the Tape
    Slide(class='darkgray')
      .slide-headline 2x web traffic (526k)
      .slide-headline 185 meetings with ideal customers
      h1 2025 Fiscal Goals
    VideoSlide(src='/oso_discovery/gymkhana_cut.mp4')
      h1 Big gap
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/oso_funnel.json'
    )
      h1 Developer Funnel
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/funnel_length.json'
    )
      h1 Average Duration
    ChartSlide(
      class='darkgray',
      src='/oso_discovery/data/traffic_sources.json'
    )
      h1 Traffic by Source
    Slide(class='darkgray')
      img(src='/oso_discovery/organic_decline.png')
      h1 13% Search Decline
    Slide(class='darkgray')
      img(src='/oso_discovery/organic_social.png')
      h1 12% Social Decline 
    Slide
      img(src='/oso_discovery/google_ctr.webp')
      h1 Current reality
    Slide(class='green')
      .slide-headline Stephie to the rescue!
    Slide(class='black')
      .slide-headline You have to buy audiences in 2025
      h1 The new normal
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/signups_12_month.json'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/oso_funnel_last_30.json'
    )
      h1 Funnel Last 30 Days
    Slide(class='green')
      .slide-headline Ege to the rescue!
    Slide
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Analytics-Implementation-Audit-1bb9f1471f2b802c9e5ad66a5dbe3507?pvs=4')
          | Analytics Audit
      .slide-headline.text-black
        a(href='https://mixpanel.com/s/3gnCaw')
          | Temp Mixpanel Funnel
      h1 Resources
    VideoSlide(src='/oso_discovery/polar_ship.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Ship Something 
    Slide(class='darkgray')
      img(src='/oso_discovery/original_quickstart.png')
      h1 Before
    Slide(class='darkgray')
      img(src='/oso_discovery/new_quickstart.png')
      h1 After
    Slide
      img(src='/oso_discovery/working_code.png')
      h1 Working Code! 
    Slide
      img(src='/oso_discovery/click_path.webp')
      h1 Guided Path!
    Slide
      img(src='/oso_discovery/get_a_key.webp')
      h1 API Key!
    Slide
      img(src='/oso_discovery/java.png')
      h1 Java!
    Slide(class='green')
      .slide-headline Hazal to the rescue!
    Slide
      img(src='/oso_discovery/diagram.webp')
      h1 Illustration!
    Slide
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Draft-Quickstart-Outline-1bb9f1471f2b80828130f6318b3a5229?pvs=4')
          | Quickstart Outline
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Draft-Quickstart-1bc9f1471f2b80aaa915c9ae6389ad16')
          | Quickstart Draft with Analysis 
      .slide-headline.text-black
        a(href='https://github.com/osohq/oso-service/pull/3867')
          | Pull Request
      h1 Resources
    Slide(class='green')
      .slide-headline Conclusions
    VideoSlide(src='/oso_discovery/dog_food.mp4') 
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Eat The Dog Food 
    VideoSlide(src='/oso_discovery/magnifying_glass_cut.webm') 
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Get the Data
    VideoSlide(src='/oso_discovery/polar_ship.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Ship Something 
    Slide
      img(src='/oso_discovery/uptime.png')
      h1 Some 
    Slide
      img(src='/oso_discovery/performance.png')
      h1 Bits 
    Slide
      img(src='/oso_discovery/oso_academy.png')
      h1 Are Strong
    Slide(class='darkgray')
      img(src='/oso_discovery/organic_decline.png')
      h1 Some 
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/oso_funnel.json'
    )
      h1 Bits 
    Slide
      img(src="/oso_discovery/oso_home_page.png")
      h1 Need Help 
    Slide(class='darkgray')
      img(src='/oso_discovery/original_quickstart.png')
      h1 Acceleration
    Slide(class='darkgray')
      img(src='/oso_discovery/new_quickstart.png')
      h1 can happen
    Slide(class='darkgray')
      .slide-headline 2x web traffic (526k)
      .slide-headline 185 meetings with ideal customers
      h1 2025 Fiscal Goals
    Slide
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Discovery-Wrap-1cf9f1471f2b806eb2c7e7fe57aae25a?pvs=4')
          | Discovery Wrap 
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Rob-s-Discovery-Notebook-1bb9f1471f2b804abfe6d14179a75d61?pvs=4')
          | Discovery Phase Notebook
      .slide-headline.text-black
        a(href='https://www.notion.so/osohq/Acceleration-Phase-1c29f1471f2b8064863bccbede16c6ab?pvs=4')
          | Acceleration Kanban
      h1 Resources
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ChartSlide from '@/components/charts/ChartSlide.vue'

export default {
  name: 'OsoIntroduction',
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
