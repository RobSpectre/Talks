<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Discovery Wrap
          li Rob Spectre
          li rob.spectre@clarifai.com
    ImageSlide(src='/images/childsafeai-assets/rob_and_ada.gif')
      h1 Hi! I'm Ada's Dad
    Slide(class='darkgray')
      iframe(
        title="vimeo-player"
        src="https://player.vimeo.com/video/176045626?h=32ce94fb13"
        width="800"
        height="600"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowfullscreen
      )
    Slide(class='green')
      .slide-headline Accelerate developer adoption
      .slide-headline of compute orchestration
      h1 Objective
    Slide(class='green')
      .slide-headline Discovery
      .slide-headline Acceleration
      .slide-headline Measurement
      h1 Phases
    Slide(class='darkgray')
      .slide-headline Workstreams
      .slide-headline Assessment 
      .slide-headline Recommendations 
      h1 Discovery Wrap
    VideoSlide(src='/clarifai-discovery/dogfood_cut.webm')
      .slide-headline.outline-text Eat the Dog Food
    VideoSlide(src='/clarifai-discovery/ftu_cut.mp4')
      h1 CO / Local Runners
    VideoSlide(
      src='/clarifai-discovery/sadtrombone.mp4'
      :muted='false'
    )
      h1 Neither work
    VideoSlide(
      src='/clarifai-discovery/hoovie_cut.mp4'
      :muted='false'
    )
      h1 Definition of Done
    Slide(class='darkgray')
      .slide-headline
        | This developer experience is 
        span.text-green  not competitive yet
        |  in today's market
    Slide(class='darkgray')
      .slide-headline.text-black 7 min to first inference (API)
      .slide-headline.text-black OpenAI compatibility 
      .slide-headline.text-black Design is good
      h1 Worked
    Slide(class='darkgray')
      .slide-headline.text-black Does not work self-serve
      .slide-headline.text-black Order of operation
      .slide-headline.text-black Too much code and configuration
      .slide-headline.text-black Most of experience bugged
      .slide-headline.text-black What little that does work is not differentiated
      .slide-headline.text-black Model catalog feels outdated
      .slide-headline.text-black Fit and Finish
      h1 !Worked
    VideoSlide(src='/clarifai-discovery/mathlady.webm')
      .slide-headline.outline-text Get the Data
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/clarifai_funnel.json'
    )
      h1 Funnel Since 17 March
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/traffic_sources.json'
    )
      h1 Traffic by Source
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/traffic_by_source.json'
    )
      h1 Traffic by Source
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/signups.json'
    )
      h1 Signups Since 17 March
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/gmail_signups.json'
    )
      h1 Signups by Source
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/gibberish_email.json'
    )
      h1 Gibberish Signups 
    Slide(class='darkgray')
      img(src='/clarifai-discovery/maxmind.png')
      h1 Maxmind Risk Score Distro
    Slide(class='darkgray')
      .slide-headline We need to find out how many signups are fake
    Slide(class='darkgray')
      img(src='/clarifai-discovery/llm_jacking.png')
    Slide(class='darkgray')
      img(src='/clarifai-discovery/krebs.png')
    Slide(class='darkgray')
      .slide-headline Implement Turnstile
      .slide-headline Implement Maxmind
      .slide-headline Upgrade WAF
      .slide-headline Debit only for new accounts
      .slide-headline Playground only for freemail?
      h1 Recommendations
    Slide(class='darkgray')
      .slide-headline
        a(href="https://clarifai.atlassian.net/wiki/spaces/MKT/pages/4461559810/Analytics+Audit+and+Analysis")
          | Investigation workbook
      h1 Resources
    Slide(class='green')
      .slide-headline Assessment
    Slide(class='darkgray')
      .slide-headline Talent
      .slide-headline Product 
      .slide-headline Pain
      .slide-headline First Time Use
      .slide-headline Docs
      .slide-headline Support
      .slide-headline Brand
      h1 Where are we?
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar_matt.json'
    )
      h1 Assessment - Matt 
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar_sajai.json'
    )
      h1 Assessment - Sajai 
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar_doug.json'
    )
      h1 Assessment - Doug 
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar.json'
    )
      h1 Assessment - Rob
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar_combined.json'
    )
      h1 Assessment
    VideoSlide(src='/clarifai-discovery/mountain.mp4')
      h1 Pivots are tough
    VideoSlide(src='/clarifai-discovery/ship.mp4')
      .slide-headline.outline-text Charting a Course Forward
    Slide(class='darkgray')
      .slide-headline Improve the Developer Experience 
      .slide-headline Reposition the Product
      .slide-headline Fix the Fundamentals
      .slide-headline Find One Play That Works
      h1 Workstreams
    Slide(class='darkgray')
      img(src='/clarifai-discovery/fix_plan.png')
      h1 Plan Underway
    VideoSlide(src='/clarifai-discovery/dogfood_cut.webm')
      h1 Dog Food Fridays
    VideoSlide(src='/clarifai-discovery/spy_photographer.mp4')
      h1 Scope the Competition
    Slide(class='darkgray')
      .grid.grid-responsive.gap-4.text-responsive
        a.text-white.uppercase(href="https://www.together.ai" target="_blank") together.ai
        a.text-white.uppercase(href="https://fireworks.ai" target="_blank") fireworks.ai
        a.text-white.uppercase(href="https://www.baseten.co" target="_blank") baseten
        a.text-white.uppercase(href="https://deepinfra.com" target="_blank") deepinfra
        a.text-white.uppercase(href="https://replicate.com" target="_blank") replicate
        a.text-white.uppercase(href="https://modal.com" target="_blank") modal
        a.text-white.uppercase(href="https://www.cerebrium.ai" target="_blank") cerebrium ai
        a.text-white.uppercase(href="https://www.runpod.io" target="_blank") runpod
        a.text-white.uppercase(href="https://parasail.io" target="_blank") parasail
        a.text-white.uppercase(href="https://www.hyperbolic.ai" target="_blank") hyperbolic
        a.text-white.uppercase(href="https://www.digitalocean.com" target="_blank") digitalocean
        a.text-white.uppercase(href="https://www.anyscale.com" target="_blank") anyscale
        a.text-white.uppercase(href="https://www.bentoml.com" target="_blank") BentoML
        a.text-white.uppercase(href="https://novita.ai" target="_blank") Novita AI
        a.text-white.uppercase(href="https://lambdalabs.com" target="_blank") lambda.ai
        a.text-white.uppercase(href="https://www.chutes.ai" target="_blank") Chutes AI
        a.text-white.uppercase(href="https://www.iguazio.com/" target="_blank") Iguazio
        a.text-white.uppercase(href="https://mlfoundry.com/" target="_blank") ML Foundry 
        a.text-white.uppercase(href="https://flyte.org/" target="_blank") Flyte
        a.text-white.uppercase(href="https://www.covalent.xyz/" target="_blank") Covalent
        a.text-white.uppercase(href="https://www.exostellar.ai" target="_blank") Exostellar
        a.text-white.uppercase(href="https://www.siliconflow.com/" target="_blank") SiliconFlow
        a.text-white.uppercase(href="https://sambanova.ai/" target="_blank") SambaNova
        a.text-white.uppercase(href="https://featherless.ai/" target="_blank") Featherless AI
        a.text-white.uppercase(href="https://nebius.com/" target="_blank") Nebius
        a.text-white.uppercase(href="https://lightning.ai/" target="_blank") Lightning AI
        a.text-white.uppercase(href="https://www.coreweave.com" target="_blank") Coreweave
        a.text-white.uppercase(href="https://www.nvidia.com/en-us/software/run-ai/" target="_blank") NVIDIA Run:ai
        a.text-white.uppercase(href="https://www.cerebras.ai" target="_blank") cerebras
        a.text-white.uppercase(href="https://groq.com" target="_blank") groq
      h1 Crowded Space
    ChartSlide(class='darkgray' src='/clarifai-discovery/data/funding_revenue.json')
      h1 With A Lot Of $$$
    ChartSlide(class='darkgray' src='/clarifai-discovery/data/funding_revenue_non_hardware.json')
      h1 $806M (minus hardware)
    VideoSlide(src='/clarifai-discovery/user_film.mp4')
      h1 Film Review
    Slide(class='darkgray')
      .slide-headline
        Improving the developer experience is the
        span.text-green   most important
        |   initiative Clarifai can take right now
    VideoSlide(src='/clarifai-discovery/aspirin.mp4')
      .slide-headline.outline-text Vitamins -> Aspirin
    Slide(class='darkgray')
      img(src='/clarifai-discovery/clarifai_front_page.png')
      h1 Vitamin Messaging
    VideoSlide(src='/oso_discovery/stool.mp4')
      h1 Aspirin Messaging
    Slide(class='darkgray')
      img(src='/clarifai-discovery/clarifai_front_page_cost.png')
      h1 Cost
    Slide(class='darkgray')
      img(src='/clarifai-discovery/hyperbolic.png')
      h1 Hyperbolic
    Slide(class='darkgray')
      img(src='/clarifai-discovery/clarifai_front_page_performance.png')
      h1 Performance
    Slide(class='darkgray')
      img(src='/clarifai-discovery/cerebrium.png')
      h1 Cerebrium
    Slide(class='darkgray')
      img(src='/clarifai-discovery/clarifai_front_page_privacy.png')
      h1 Privacy
    Slide(class='darkgray')
      img(src='/clarifai-discovery/parasail.png')
      h1 Parasail
    Slide(class='darkgray')
      img(src='/clarifai-discovery/ad_ideation.png')
      h1 Messaging Iteration
    VideoSlide(src='/clarifai-discovery/hoovie_cut.mp4')
      .slide-headline.outline-text Fix the Fundamentals
    Slide(class='darkgray')
      .slide-headline 🤖 Bot traffic
      .slide-headline 📧 Spam Signups
      .slide-headline 📼 Legacy marketing
      .slide-headline 📁 Migrate docs to /docs
      .slide-headline 💰 Pricing page
      .slide-headline 🧭 Navigation update
      .slide-headline 🎬 Explainer video
      .slide-headline 🎨 Blog design
      .slide-headline 📻 Intercom 
      h1 Fix the Fundamentals
    VideoSlide(src='/clarifai-discovery/play_cut.mp4')
      .slide-headline.outline-text Find One Play That Works
    Slide(class='darkgray')
      .slide-headline
        Inferior products with 
        span.text-green  better Name ID
      .slide-headline 
        span.text-green  will win
        |  in this market
    VideoSlide(src="/video/finding-your-audience-in-2024/domino.mp4")
    VideoSlide(src="/video/finding-your-audience-in-2024/parrot.mp4")
      h1 Social Media
    VideoSlide(src="/video/finding-your-audience-in-2024/life_support.mp4")
      h1 SEO / SEM
    ImageSlide(src="/images/finding-your-audience-in-2024/zero_click_searches.png")
    ImageSlide(src="/images/finding-your-audience-in-2024/search_graph.png")
    Slide(class='darkgray')
      img(src='/clarifai-discovery/pew_research.png')
      h1 22 July 2025
    Slide(class='darkgray')
      img(src='/clarifai-discovery/compute_orchestration.png')
      h1 "Compute orchestration for AI"
    VideoSlide(src="/video/finding-your-audience-in-2024/newsroom.mp4")
      h1 Every newsroom is half the size
    VideoSlide(src="/clarifai-discovery/bar_fight_cut.mp4")
      h1 Moderation is severe 
    Slide(class='darkgray')
      img(src='/clarifai-discovery/email_list.png')
      h1 Email list is toast
    VideoSlide(src='/clarifai-discovery/tumbleweed.webm')
      h1 Community has not formed
    Slide(class='darkgray')
      img(src='/clarifai-discovery/openrouter_discord.png')
      h1 OpenRouter Discord
    Slide(class='darkgray')
      img(src='/clarifai-discovery/mariokartworld.png')
      h1 Mario Kart World Discord
    Slide(class='darkgray')
      .bullet.fragment Social
      .bullet.fragment Search
      .bullet.fragment Comms
      .bullet.fragment Content
      .bullet.fragment Email 
      .bullet.fragment Community
      h2.text-white.fragment ???
    Slide(class='darkgray')
      video(
        src='/clarifai-discovery/short.mp4'
        type='video/mp4'
        autoplay
        muted
      )
      h1 Trendjacking with Shorts
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/estimated_spend.json'
    )
      h1 Demand generation 
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/traffic_sources.json'
    )
      h1 Traffic by Source
    Slide(class='darkgray')
      img(src='/clarifai-discovery/midbound.png')
      h1 Midbound
    VideoSlide(src='/clarifai-discovery/ground_game.mp4')
      h1 Events
    Slide(class='darkgray')
      .slide-headline
        a(href='https://pytorch.org/event/pytorch-conference-2025/') PyTorch
        |  22-23 Oct
      .slide-headline
        a(href='https://www.aiinfra.live/') AI Infra Summit 
        | 29 Oct
      .slide-headline
        a(href='https://reinvent.awsevents.com/') Re:Invent 
        | 1-5 Dec
      .slide-headline
        a(href='https://newyork.theaisummit.com/') The AI Summit New York
        |  10-11 Dec
      h1 Events
    VideoSlide(src='/clarifai-discovery/horizon.mp4')
      .slide-headline.outline-text Long Term Ideas
    Slide(class='darkgray')
      .slide-headline.fragment OSS SotA Vision Model 
      .slide-headline.fragment App Builder Partnership
    Slide(class='darkgray')
      img(src='/clarifai-discovery/supabase.png')
      h1 Bolt.new / Lovable Effect
    Slide(class='darkgray')
      .slide-headline OSS SotA Vision Model 
      .slide-headline App Builder Partnership
      .slide-headline.fragment Rebrand 
      .slide-headline.fragment AI Privacy Conference
      .slide-headline.fragment Expanded ground game
    Slide(class='green')
      .slide-headline Conclusions
    VideoSlide(src='/clarifai-discovery/mountain.mp4')
      h1 This is a pivotal moment 
    ChartSlide(
      class='darkgray'
      src='/clarifai-discovery/data/assessment_radar_combined.json'
    )
      h1 Lot of work ahead 
    Slide(class='darkgray')
      img(src='/clarifai-discovery/fix_plan.png')
      h1 Focus on DX 
    VideoSlide(src='/clarifai-discovery/aspirin.mp4')
      h1 Vitamins -> Aspirin
    VideoSlide(src='/clarifai-discovery/hoovie_cut.mp4')
      h1 Fix the Fundamentals
    VideoSlide(src='/clarifai-discovery/play_cut.mp4')
      h1 Find One Play That Works
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Questions? 
          li Rob Spectre
          li rob.spectre@clarifai.com
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
