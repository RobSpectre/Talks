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
      h2.text-white
        span.text-green 5x
        |  traffic to quickstart
      h2.text-white
        span.text-green 2x
        |  signups
      h2.text-white
        span.text-green 52%
        |  more flags created
      h2.text-white
        span.text-green 47%
        |  more flags toggled
      h2.text-white
        span.text-green -60%
        |  elapsed time to create flag
      h2.text-white
        span.text-green -27%
        |  elapsed time to flag toggle
      h1 Summary
    Slide(class='darkgray')
      h2.text-white Results
    Slide
      h2 New quickstart launched 20 Dec 2024
      h2 Comparison
      h3 40 days before, 40 days after
      h2 Old Quickstart
      h3 09 Nov - 19 Dec 2024
      h2 New Quickstart
      h3 21 Dec 2024 - 29 Jan 2025
      h1 Tale of the Tape
    Slide
      h2 All Users
      h4 Overall site performance
      h2 Quickstart Users
      h4 All users that viewed the quickstart
      h2 Quickstart Users (No FTU)
      h4 All users that view the quickstart and opted out of the console first time use experience
      h2 FTU Users (No Quickstart)
      h4 All users that used the console first time use experience but did not view the quickstart
      h1 Segments
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
    TableSlide
  },
  data () {
    return {
      sessionStarted: sessionStarted,
      signupCompleted: signupCompleted,
      newFlagClicked: newFlagClicked,
      newFlagSubmitted: newFlagSubmitted,
      featureFlagToggled: featureFlagToggled
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
