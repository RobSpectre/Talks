<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/video/launchdarkly-quickstart/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Growth Quickstart Analysis
          li Rob Spectre
          li rob@brooklynhacker.com
    Slide(class='darkgray')
      .slide-headline.text-white
        span.text-green 5x
        |  traffic to quickstart
      .slide-headline.text-white
        span.text-green 2x
        |  signups
      .slide-headline.text-white
        span.text-green 52%
        |  more flags created
      .slide-headline.text-white
        span.text-green 47%
        |  more flags toggled
      .slide-headline.text-white
        span.text-green -60%
        |  elapsed time to create flag
      .slide-headline.text-white
        span.text-green -27%
        |  elapsed time to flag toggle
      h1 Summary
    Slide(class='darkgray')
      .slide-headline.text-white Results
    Slide
      .slide-headline-black New quickstart
      .slide-subheadline-black launched 20 Dec 2024
      .slide-headline-black Comparison
      .slide-subheadline-black 40 days before, 40 days after
      .slide-headline-black Old Quickstart
      .slide-subheadline-black 09 Nov - 19 Dec 2024
      .slide-headline-black New Quickstart
      .slide-subheadline-black 21 Dec 2024 - 29 Jan 2025
      h1 Tale of the Tape
    Slide
      .slide-headline-black All Users
      .text-xl.uppercase Overall site performance
      .slide-headline-black FTU Users (No Quickstart)
      .text-xl.uppercase All users that used the console first time use experience but did not view the quickstart
      .slide-headline-black Quickstart Users
      .text-xl.uppercase All users that viewed the quickstart
      .slide-headline-black Quickstart Users (No FTU)
      .text-xl.uppercase All users that view the quickstart and opted out of the console first time use experience
      h1 Segments
    FunnelSlide(id='funnel' :data='funnel')
      h1 Funnel
    TableSlide(
      title='Session Started',
      :headers="['Segment', 'Old Quickstart', 'New Quickstart', '% Change']"
      :data='sessionStarted'
      :isLastColumnPercentChanged='true'
    )
    TableSlide(
      title='Signup Completed',
      :headers="['Segment', 'Old Quickstart', 'New Quickstart', '% Change']"
      :data='signupCompleted'
      :isLastColumnPercentChanged='true'
    )
    TableSlide(
      title='Create New Flag Clicked',
      :headers="['Segment', 'Old Quickstart', 'New Quickstart', '% Change']"
      :data='newFlagClicked'
      :isLastColumnPercentChanged='true'
    )
    TableSlide(
      title='Create New Flag Submitted',
      :headers="['Segment', 'Old Quickstart', 'New Quickstart', '% Change']"
      :data='newFlagSubmitted'
      :isLastColumnPercentChanged='true'
    )
    TableSlide(
      title='Feature Flag Toggled',
      :headers="['Segment', 'Old Quickstart', 'New Quickstart', '% Change']"
      :data='featureFlagToggled'
      :isLastColumnPercentChanged='true'
    )
    Slide(class='darkgray')
      .slide-headline.text-white Raw Data
    Slide
      img(src='/images/launchdarkly-quickstart-analysis/old_quickstart.png')
      h1 Old Quickstart: 09 Nov - 19 Dec
    Slide
      img(src='/images/launchdarkly-quickstart-analysis/new_quickstart.png')
      h1 New Quickstart: 21 Nov - 29 Jan
    Slide
      img(src='/images/launchdarkly-quickstart-analysis/quickstart_pct_change.png')
      h1 % Change From Old To New
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
import TableSlide from '@/components/data/TableSlide.vue'
import FunnelSlide from '@/components/charts/FunnelSlide.vue'

import sessionStarted from '@/assets/data/launchdarkly-quickstart-analysis/users_session_started.json'
import signupCompleted from '@/assets/data/launchdarkly-quickstart-analysis/users_signup_completed.json'
import newFlagClicked from '@/assets/data/launchdarkly-quickstart-analysis/users_new_flag_clicked.json'
import newFlagSubmitted from '@/assets/data/launchdarkly-quickstart-analysis/users_create_new_flag_submitted.json'
import featureFlagToggled from '@/assets/data/launchdarkly-quickstart-analysis/users_feature_flag_toggled.json'

export default {
  name: 'LaunchDarklyQuickstartAnalysis',
  components: {
    Title,
    Slide,
    Reveal,
    ImageSlide,
    VideoSlide,
    TableSlide,
    FunnelSlide
  },
  data () {
    return {
      sessionStarted: sessionStarted,
      signupCompleted: signupCompleted,
      newFlagClicked: newFlagClicked,
      newFlagSubmitted: newFlagSubmitted,
      featureFlagToggled: featureFlagToggled,
      funnel: [
        ['Session Started: 3699', 500],
        ['Signup Completed: 284', 284],
        ['Create New Flag Clicked: 121', 121],
        ['Create New Flag Submitted: 93', 93],
        ['Flag Toggled: 72', 72]
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
