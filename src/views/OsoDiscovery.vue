<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Discovery Wrap
          li Rob Spectre
          li rob@brooklynhacker.com
    ImageSlide(src='/images/childsafeai-assets/rob_and_ada.gif')
      h1 Hi! I'm Ada's Dad
    Slide(class='green')
      .slide-headline Accelerate developer go-to-market
      .slide-headline with technical content and messaging
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
        span.text-green Low
        |  literacy
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
    Slide
      img(src='/oso_discovery/google_ctr.webp')
      h1 Current reality
    Slide(class='black')
      .slide-headline You have to buy audiences in 2025
      h1 The new normal
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/signups_12_month.json'
    )
      h1 Signups Last Year 
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/dog_pool.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Get events in Posthog and GA4 
            li.slide-headline Get content performance
            li.slide-headline Dashboarding
            li.slide-headline Reduce reporting load
            li.slide-headline Training
      h1 Data TODO
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
      img(src='/oso_discovery/diagram.webp')
      h1 Illustration!
    Slide
      img(src='/oso_discovery/click_path.webp')
      h1 Guided Path!
    Slide
      img(src='/oso_discovery/get_a_key.webp')
      h1 API Key!
    Slide
      img(src='/oso_discovery/java.png')
      h1 Java!
    Slide(class='darkgray')
      .slide-headline Shipped in 8 working days 
      .slide-headline Hazal editing
      .slide-headline Completes an authz...
      .slide-headline ...on the user's machine
      .slide-headline Encourages Security 
      .slide-headline Infrastructure 
      h1 Worked
    Slide(class='darkgray')
      .slide-headline
        | Way Too 
        span.text-green slow
      .slide-headline Hazal had a poor experience 
      .slide-headline Authoring snippets is too difficult 
      .slide-headline Abusing the notion of "quick"
      .slide-headline 61 clicks
      .slide-headline Not fun
      h1 !Worked
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
      src='/oso_discovery/data/assessment_radar.json'
    )
      h1 Rob's Assessment
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/assessment_radar_graham.json'
    )
      h1 Graham's Assessment
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/assessment_radar_combined.json'
    )
    Slide(class='green')
      .slide-headline Recommendations
    Slide(class='darkgray')
      .slide-headline GTM Transformation
      .slide-headline Grow the Audience
      .slide-headline Upgrade DevX
      .slide-headline Docs Transformation
    VideoSlide(src='/oso_discovery/transformer_cut.mp4')
      .h-full.flex.items-center.justify-center
        .grid
          .slide-headline.outline-text Go-To-Market 
          .slide-headline.outline-text Transformation 
    Slide(class='darkgray')
      .slide-headline 
    VideoSlide(src='/oso_discovery/jaguar.mp4')
      .h-full.flex.items-center.justify-center
        .grid
          .slide-headline.outline-text.line-through.fragment Rebrand
          .slide-headline.outline-text.fragment Rebear
    Slide(class='darkgray')
      img(src='/oso_discovery/bear.png')
      h1 Before
    Slide(transition='convex')
      img(src='/oso_discovery/rebear.png')
      h1 After
    Slide
      img(src='/oso_discovery/authzed.png')
      h1 AuthZed
    Slide
      img(src='/oso_discovery/auht0.png')
      h1 Auth0 
    Slide
      img(src='/oso_discovery/cerbos.png')
      h1 Cerbos 
    Slide
      img(src='/oso_discovery/stych.png')
      h1 Stych 
    Slide
      img(src='/oso_discovery/permit.png')
      h1 Permit 
    Slide
      img(src='/oso_discovery/permit_blog.png')
      h1 Now #1 SERP
    VideoSlide(src='/oso_discovery/permit_cut.webm')
      h1 Permit
    Slide
      img(src='/oso_discovery/oso_home_page.png')
      h1 Oso
    Slide
      img(src='/oso_discovery/oso_academy.png')
      h1 Oso
    Slide
      img(src='/oso_discovery/oso_ad.png')
      h1 Oso
    VideoSlide(src='/oso_discovery/oso_demo_cut.webm')
      h1 Oso
    Slide(class='black')
      .slide-headline Our visual vocabulary is not competitive today
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/jaguar.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left.text-xl
            li.slide-headline Source Talent
            li.slide-headline Brand Guide
            li.slide-headline Creative Building Blocks
            li.slide-headline Explainer Video
            li.slide-headline Hero animation
            li.slide-headline Diagram framework
            li.slide-headline Self serve tool
            li.slide-headline Product heroes
            li.slide-headline Motion branding 
      h1 Rebear
    VideoSlide(src='/oso_discovery/polar-bear.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Reposition the Product
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='basis-1/3')
          img(src="/oso_discovery/oso_home_page.png")
        div(class='basis-2/3')
          ul.list-inside
            li.slide-headline Market Limiting 
            li.slide-headline Out of Vogue
            li.slide-headline Discounts product strength
            li.slide-headline Enterprise DSQ
            li.slide-headline Raises objections
            li.slide-headline Not aspirin
      h1 Main Problems 
    VideoSlide(src='/oso_discovery/stool.mp4')
      h1 Framework
    Slide(class='darkgray')
      .slide-headline.fragment Reliability
      .slide-headline.fragment Speed
      .slide-headline.fragment Flexibility
      h1 3 Legs
    Slide
      img(src='/oso_discovery/uptime.png')
      h1 Reliability
    Slide(class='black')
      .slide-headline Even Mag 7 companies don't have four nines on authorization
    Slide
      img(src='/oso_discovery/never_page.png')
      h1 Reliability
    Slide
      img(src='/oso_discovery/always_up.png')
      h1 Reliability
    Slide
      img(src='/oso_discovery/rock_solid.png')
      h1 Reliability
    Slide
      img(src='/oso_discovery/performance.png')
      h1 Speed
    Slide(class='black')
      .slide-headline <20ms for 99th percentile reads is insane
    Slide
      img(src='/oso_discovery/handshakes.png')
      h1 Speed
    Slide
      img(src='/oso_discovery/ever_write.png')
      h1 Speed
    Slide
      img(src='/oso_discovery/jealous.png')
      h1 Speed
    VideoSlide(src='/oso_discovery/abac_cut.webm')
      h1 Flexibility 
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/policy_type.json'
    )
      h1 Policy Types 
    Slide(class='black')
      .slide-headline The messaging opportunity here is elevating above the acronyms 
    Slide
      img(src='/oso_discovery/defined_by_you.png')
      h1 Flexibility 
    Slide
      img(src='/oso_discovery/the_best_model.png')
      h1 Flexibility
    Slide
      img(src='/oso_discovery/glove.png')
      h1 Flexibility
    Slide
      img(src='/oso_discovery/youbac.png')
      h1 Flexibility
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/stool.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Define positioning
            li.slide-headline Messaging revamp
            li.slide-headline Messaging audit 
            li.slide-headline 3 leg landing pages
            li.slide-headline 3 leg campaigns
            li.slide-headline Parallelize website
            li.slide-headline New demo
            li.slide-headline Sales enablement
      h1 Reposition the Product
    VideoSlide(src='/oso_discovery/polar_bear_internet.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Get the Ideal Customer 
    Slide(class='green')
      .slide-headline 30M developers
    Slide(class='black')
      .slide-headline There are ~1500 that need Oso at any given time.
    VideoSlide(src='/oso_discovery/bounty_hunters_cut.mp4')
      h1 Koala in Reverse
    VideoSlide(src='/oso_discovery/rick_glasses_cut.webm')
      h1 Targeting 
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/polar_bear_internet.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Agentic prospect finder
            li.slide-headline Sales outreach diagnosis
            li.slide-headline TCO Calculator
            li.slide-headline Use Cases -> Solutions
            li.slide-headline Solutions campaigns
      h1 GTM Transformation
    VideoSlide(src='/oso_discovery/homers_cut.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Grow The Audience 
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/all_time_traffic.json'
    )
      h1 All Time Traffic
    Slide
      img(src='/oso_discovery/content_miss.png')
      h1 Misalignment
    Slide(class='black')
      .slide-headline We need more plate appearances
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/homers_cut.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Authz Falsehoods
            li.slide-headline Syncing Authz Data 
            li.slide-headline Authz Nightmares 
            li.slide-headline Middleware Guide 
            li.slide-headline Authz for FastAPI 
            li.slide-headline Oso MCP Server 
            li.slide-headline Tool for PydanticAI
            li.slide-headline Recipes
      h1 Grow the Audience
    VideoSlide(src='/oso_discovery/polar_bear_waiter.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Upgrade Developer Experience 
    VideoSlide(src='/oso_discovery/tools_cut.webm')
      h1 Basic Tooling
    Slide
      img(src='/oso_discovery/php_frameworks.png')
      h1 PHP support
    VideoSlide(src='/oso_discovery/huracan_cut.mp4')
      h1 Velocity Upgrade
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/polar_bear_waiter.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Code Picker
            li.slide-headline PHP SDK
            li.slide-headline Lightbox
            li.slide-headline Diagramming
            li.slide-headline CI for code
            li.slide-headline CI for style
            li.slide-headline Login / signup
            li.slide-headline Open source docs
      h1 Upgrade DevX 
    VideoSlide(src='/oso_discovery/superhero.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Docs Transformation 
    Slide(class='darkgray')
      .slide-headline
        span.text-green 171 
        | pages
      .slide-headline
        span.text-green 854 
        | code snippets
      .slide-headline
        span.text-green 241 
        | polar snippets
      .slide-headline
        span.text-green 3.5k 
        | uniques (!)
      h1 Docs
    Slide(class='black')
      .slide-headline More traffic
      .slide-headline More illustration
      .slide-headline Easier discovery
    Slide(class='darkgray')
      img(src='/oso_discovery/docs.png')
      h1 Unoptimized
    Slide
      img(src='/oso_discovery/docs_journey.png')
      h1 Developer Orientation
    Slide
      img(src='/oso_discovery/broken_code.png')
      h1 Broken Code
    Slide(class='darkgray')
      .flex.flex-row(class='w-11/12')
        div(class='w-1/3')
          video.w-full.h-full(autoplay muted loop)
            source(src='/oso_discovery/superhero.mp4')
        div(class='w-2/3')
          ul.list-inside.fragment.fade-left
            li.slide-headline Code Audit 
            li.slide-headline Top Navigation
            li.slide-headline Landing pages
            li.slide-headline Refresh Style
            li.slide-headline Info Hierarchy 
            li.slide-headline Prune
            li.slide-headline Reference
            li.slide-headline Survey
      h1 Docs Transformation 
    Slide(class='green')
      .slide-headline Conclusions
    ChartSlide(
      class='darkgray'
      src='/oso_discovery/data/assessment_radar_combined.json'
    )
      h1 Combined 
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
      h1 Are Weak
    VideoSlide(src='/oso_discovery/transformer_cut.mp4')
      .h-full.flex.items-center.justify-center
        .grid
          .slide-headline.outline-text Go-To-Market 
          .slide-headline.outline-text Transformation 
    VideoSlide(src='/oso_discovery/homers_cut.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Grow The Audience 
    VideoSlide(src='/oso_discovery/polar_bear_waiter.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Upgrade Developer Experience 
    VideoSlide(src='/oso_discovery/superhero.mp4')
      .h-full.flex.items-center.justify-center
        .slide-headline.outline-text Docs Transformation 
    Slide(class='green')
      .slide-headline GTM Transformation
      .slide-headline Grow the Audience
      .slide-headline Upgrade DevX
      .slide-headline Docs Transformation
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
  name: 'OsoDiscovery',
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
