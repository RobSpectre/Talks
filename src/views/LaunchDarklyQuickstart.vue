<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Growth Quickstart Engagement Wrap
          li Rob Spectre
          li rob@brooklynhacker.com
    ImageSlide(src='/images/childsafeai-assets/rob_and_ada.gif')
      h1 Hi! I'm Ada's Dad
    Slide(class='green')
      h2.text-white Accelerate product led growth with
      h2.text-white a new quickstart guide in the docs
    Slide(class='darkgray')
      h2.text-white Workstreams
      h2.text-white Worked / !Worked
      h2.text-white Recommendations
      h1 Agenda
    Slide
      h2 Questions warmly welcome!
    ImageSlide(src='/images/launchdarkly-quickstart/why.webp')
    Slide(class='green')
      h2.text-white Documentation is the point-of-sale machine
      h2.text-white for every developer tool
    ImageSlide(src='/images/launchdarkly-quickstart/z31.jpg')
    ImageSlide(src='/images/launchdarkly-quickstart/z31_steering_wheel.jpg')
    ImageSlide(src='/images/launchdarkly-quickstart/z31_shifter.jpg')
    ImageSlide(src='/images/launchdarkly-quickstart/z31_metrics.jpg')
    ImageSlide(src='/images/launchdarkly-quickstart/z31_manual.webp')
    VideoSlide(src='/video/launchdarkly-quickstart/z31_drive.mp4')
    ImageSlide(src='/images/launchdarkly-quickstart/z31_manual.webp')
      h1 This is not possible with developer tools
    Slide(class='darkgray')
      h2.text-white Documentation is the experience that turns
      h2.text-white a developer tool shopper into a customer
    VideoSlide(src='/video/launchdarkly-quickstart/red_carpet.mp4')
    VideoSlide(src='/video/launchdarkly-quickstart/obstacle_course.mp4')
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      h1 Why the quickstart?
    Slide(class='darkgray')
      h2.text-white Assessment
    VideoSlide(src='/video/launchdarkly-quickstart/quickstart_breakdown.mp4')
      h1 Eat the catfood
    VideoSlide(src='/video/launchdarkly-quickstart/quickstart_user_journey.mp4')
      h1 Breakdown User Journey
    Slide
      h2 47:22
      h2 5 blockers
      h2 18 bugs
      h2 Start Avg Sat: 8.53
      h2 End Avg Sat: 2.16
      h2 Happiest path 45 clicks minus code
      a(href="https://www.youtube.com/watch?v=zpSGOaQCjq4")
        h2 Full Video
      h1 Tale of the Tape
    Slide
      img(src='/images/launchdarkly-quickstart/java_broken_sdk_key.png')
      h1 Broken code - no copy/paste key
    Slide
      img(src='/images/launchdarkly-quickstart/java_missing_dependencies.png')
      h1 Broken code - missing dependencies
    Slide
      img(src='/images/launchdarkly-quickstart/python_email_method_does_not_exist.png')
      h1 Broken code - email method does not exist
    Slide
      img(src='/images/launchdarkly-quickstart/csharp_environment_ambiguous.png')
      h1 Broken code - env is ambiguous
    Slide
      img(src='/images/launchdarkly-quickstart/javascript_client_not_instantiated.png')
      h1 Broken code - client not instantiated
    Slide
      img(src='/images/launchdarkly-quickstart/node_missing_email_and_wrong_email.png')
      h1 Broken code - missing email and key mismatch
    Slide
      img(src='/images/launchdarkly-quickstart/react_not_in_react_app.png')
      h1 Broken code - not in component
    VideoSlide(src='/video/launchdarkly-quickstart/counting.mp4')
      h1 Crunch the Numbers
    Slide
      .max-w-7xl
        img.object-cover(src='/images/launchdarkly-quickstart/docs_vs_overall_traffic.png')
      h1 22% of traffic to docs
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/docs_conversion_twice.png')
      h1 Converts to signup at twice of non-docs
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/quickstart_conversion.png')
      h1 Quickstart primary driver - converting 14x
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/docs_flat_growth.png')
      h1 Flat growth
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/venn_docs_vs_ftu.png')
      h1 Docs vs. FTU users
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/ftu_vs_quickstart_flag_creation.png')
      h1 Quickstart converts to flag creation at 2x FTU
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/ftu_vs_quickstart_flag_toggled.png')
      h1 Quickstart converts to flag toggle at 2x FTU
    Slide(class='green')
      h2.text-white The quickstart page in the docs is the
      h2.text-white highest leverage content
      h2.text-white to accelerate product led growth
    Slide
      a(href='https://analytics.google.com/analytics/web/#/analysis/p273163596/edit/HAOChJyGR0urd_SPYy9ntA')
        h2 Docs Performance Dashboard
      a(herf='https://analytics.google.com/analytics/web/#/analysis/p273163596/edit/o8QXRrFVTSe9RkNb78-wug')
        h2 Docs User Behavior Dashboard
      h1 Google Analytics
    Slide(class='darkgray')
      h2.text-white Instrumentation
    VideoSlide(src='/video/launchdarkly-quickstart/fullstory_cut.mp4')
      h1 Fullstory
    VideoSlide(src='/video/launchdarkly-quickstart/no_quickstart.mp4')
      h1 Discoverability
    Slide
      img(src='/images/launchdarkly-quickstart/quickstart_nesting.png')
      h1 Nested nav + huge SPA = Roughage
    VideoSlide(src='/video/launchdarkly-quickstart/definition_of_terms.mp4')
      h1 "Scanability"
    VideoSlide(src='/video/launchdarkly-quickstart/authentication_keys.mp4')
      h1 Authorization
    Slide
      .max-w-7xl
        img(src='/images/launchdarkly-quickstart/fullstory_funnel.png')
      h1 Quickstart Funnel in Fullstory
    Slide
      a(href='https://app.fullstory.com/ui/27CV3/segments/EirZfoNUZXLr/people:search?completeSessions=false')
        h2 Docs Users in Fullstory
      a(href='https://app.fullstory.com/ui/27CV3/funnels/details/534w7gfTjmtl')
        h2 Quickstart Funnel in Fullstory
      h1 Fullstory Links
    VideoSlide(src='/video/launchdarkly-quickstart/nps.mp4')
      h1 Net Promoter Score
    Slide(class='green')
      h2.text-white Good News
    Slide(class='darkgray')
      h2.text-white +100!
    Slide(class='green')
      h2.text-white Bad News
    Slide(class='darkgray')
      h2.text-white 2 responses ☹️  out of 500 surveys shown
    ImageSlide(src='/images/launchdarkly-quickstart/sad_trombone.webp')
      h1 Quantifying enthusiasm will be a journey
    Slide
      img(src='/images/launchdarkly-quickstart/google_tag_manager.png')
      h1 Both implemented with GTM
    Slide
      a(href='https://app.getbeamer.com/nps#analytics')
        h2 NPS Analytics in Beamer
      h1 Beamer Links
    Slide(class='darkgray')
      h2.text-white Content Production
    Slide
      img(src='/images/launchdarkly-quickstart/new_quickstart.png')
      h1 Ta-da!
    Slide
      img(src='/images/launchdarkly-quickstart/tocs.png')
      h1 Sprayed with navigation
    Slide
      img(src='/images/launchdarkly-quickstart/dope_explainer_illustrations.png')
      h1 Thanks Rapha!
    Slide
      img(src='/images/launchdarkly-quickstart/quickstart-install-a-launchdarkly-sdk.png')
      h1 Thanks Rapha!
    Slide
      img(src='/images/launchdarkly-quickstart/quickstart-retrieve-the-value-of-your-first-feature-flag.png')
      h1 Thanks Rapha!
    Slide
      img(src='/images/launchdarkly-quickstart/quickstart-context.png')
      h1 Thanks Rapha!
    Slide
      img(src='/images/launchdarkly-quickstart/latest_versioning.png')
      h1 Thanks Molly!
    Slide
      img(src='/images/launchdarkly-quickstart/auth-key.png')
      h1 Thanks Ember!
    Slide
      img(src='/images/launchdarkly-quickstart/auth_keys_explainer.png')
      h1 Auth explainer
    Slide
      img(src='/images/launchdarkly-quickstart/working_code.png')
      h1 Working Code
    Slide
      img(src='/images/launchdarkly-quickstart/added_targeting.png')
      h1 Added targeting rule
    Slide
      img(src='/images/launchdarkly-quickstart/introduction_of_kind.png')
      h1 Introduction of Kind
    Slide
      img(src='/images/launchdarkly-quickstart/connection_to_remaining_educational_properties.png')
      h1 Connection to remaining EDU properties
    Slide
      a(href='https://docs-stg.launchdarkly.com/5188/home/getting-started')
        h2 Quickstart on Staging
      h1 Link
    Slide
      h3 Comprehensive docs
      h3 Selection of helper libraries
      h3 Style guide
      h3 GA 4 Rig
      h3 Slack culture
      h3 Molly and Ember
      h3 Quickstart as the deliverable
      h3 Illustrations
      h3 Analysis via Film
      h3 Identification of bugs
      h1 Worked
    Slide
      h3 Testing in prod
      h3 Access
      h3 GA 4
      h3 Docs is undertrafficked
      h3 NPS - nooooo
      h3 Timing was tough
      h3 Communication with the docs team
      h3 Migration with Fern imminent
      h3 Dev environment
      h1 !Worked
    Slide(class='darkgray')
      h2.text-white Recommendations
    Slide
      img(src='/images/launchdarkly-quickstart/sampled_date.png')
      h1 Upgrade Google Analytics
    Slide
      h2 217 pages
      h2 1795 code samples
      h2 2895 code snippets
      h2.fragment 48 person years
      h1 Code Audit
    VideoSlide(src='/video/launchdarkly-quickstart/darmok.mp4')
      h1 Missing languages
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Questions?
          li Rob Spectre
          li rob@brooklynhacker.com
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
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');

</style>
