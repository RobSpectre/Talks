<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/images/childsafeai-assets/intro.webm')
      img(src='/images/childsafeai-assets/childsafeai/png/green_and_white/childsafe-logo-gw-h@HD.png')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Introduction to Core Technology
          li Rob Spectre
          li rob@childsafe.ai
    Slide(class='darkgray')
      .slide-headline
        | To protect
        span.text-green  children online
        |  through
      .slide-headline
        | the
        span.text-green  direct disruption
        |  of
      .slide-headline
        span.text-green  networks
        |  of
        span.text-green  exploitation
      h1 Mission
    Slide(class='darkgray')
      .slide-headline
        | Launched in
        span.text-green  2018
      .slide-headline
        span.text-green 14
        |  law enforcement agencies
      .slide-headline
        span.text-green 5
        |  National Operations
      .slide-headline
        | Deterred
        span.text-green  60k+
        |  buyers
      .slide-headline
        span.text-green 12%
        |  reoffense rate
      .slide-headline
        span.text-green 2k+
        |  arrests
      h1 Results
    Slide(class='darkgray')
      .slide-headline Origins
    VideoSlide(src='/images/childsafeai-assets/congressional_briefing_cut.mp4')
      h1 Founder and CEO
    ImageSlide(src='/images/childsafeai-assets/polaris_map.jpg')
      h1 BEFREE / Polaris
    Slide
      img(src='/images/childsafeai-assets/agencies.png')
      h1 Consulting
    VideoSlide(src='/images/childsafeai-assets/deterrence_demo.mp4')
      h1 First Product
    VideoSlide(src='/images/childsafeai-assets/deterrence_demo.mp4' :muted='false')
      h1 First Product
    ImageSlide(src='/images/childsafeai-assets/point_cloud_deterrence.png')
      h1 National Reach
    Slide(class='darkgray')
      .slide-headline
        a(href="https://www.nytimes.com/2019/04/09/opinion/ai-joins-the-campaign-against-sex-trafficking.html")
          | New York Times
      .slide-headline
        a(href="https://www.reuters.com/article/world/report-gives-glimpse-into-murky-world-of-us-prostitution-in-post-backpage-era-idUSKCN1RN160/")
          | Reuters
      .slide-headline
        a(href="https://www.wsj.com/articles/after-backpage-u-s-investigates-massage-escort-websites-that-now-dominate-market-11568548800")
          | Wall Street Journal
      .slide-headline
        a(href="https://www.kiro7.com/news/local/this-is-not-a-setup-bellevue-police-join-prostitution-chat-forum-to-help-sex-workers/1005848591/")
          | ABC
      .slide-headline
        a(href="https://www.nbcbayarea.com/news/local/sex-review-boards-internet/151516/")
          | NBC
      .slide-headline
        a(href="https://chicago.suntimes.com/crime/2019/7/31/20748945/sex-trafficking-national-johns-suppression-initiative-ai-childsafe")
          | Chicago Sun-Times
      .slide-headline
        a(href="https://nypost.com/2018/04/03/nypd-sends-warning-texts-to-creeps-looking-for-prostitutes/")
          | New York Post
      .slide-headline
        a(href="https://www.vice.com/en/article/a-sex-trafficking-law-is-fundamentally-changing-the-internet/")
          | Vice
      .slide-headline
        a(href="https://gizmodo.com/dhs-doj-now-looking-into-escort-and-massage-sites-that-1838131975")
          | Gizmodo
      .slide-headline
        a(href="https://www.zdnet.com/article/fosta-sesta-trafficking-law-used-once-since-2018-gao-report/")
          | ZDNET
      h1 Coverage
    Slide(class='darkgray')
      .slide-headline Core Technology
    Slide(class='darkgray')
      .slide-headline Training set
      .slide-headline Classifier models
      .slide-headline Data set (no PII)
      h1 Core Technology
    Slide(class='darkgray')
      .slide-headline
        span.text-green 75k
        |  labels
      .slide-headline
        span.text-green 23
        |  classes
      .slide-headline
        span.text-green 7
        |  websites
      .slide-headline
        span.text-green 12
        |  cities
      .slide-headline
        span.text-green 7
        |  combinations
      .slide-headline
        span.text-green 62k
        |  unlabeled set
      h1 Training Set
    Slide(class='darkgray')
      .slide-headline
        span.text-green Real
        |  buyers
      .slide-headline
        span.text-green Real
        |  ads
      .slide-headline
        span.text-green Real
        |  websites
      .slide-headline
        span.text-green Real
        |  annotators
      h1 Provenance
    Slide(class='darkgray')
      .slide-headline
        span.text-green 8
        |  convolutional networks
      .slide-headline
        span.text-green 23
        |  classes of
        span.text-green  buyer intent
      .slide-headline
        |  transformer
        span.text-green  classifier
      h1 Classifier Models
    Slide(class='darkgray' v-if='false')
      .slide-headline Classifier Demo
      label.text-sm.font-medium.leading-5.text-gray-700(for='text')
      .my-2.bg-white.flex.rounded-md.shadow-sm.mx-20
        .relative.flex-grow(class='focus-within:z-10')
          textarea.my-2.outline-none.form-input.block.w-full.rounded-none.pl-10.transition.ease-in-out.duration-150(
            class='sm:text-sm sm:leading-5'
            placeholder='Conversation'
            v-model='conversation'
            v-on:keydown.enter='submitConversation(text)')
      .slide-headline(
        v-if="Object.keys(conversationList).length > 0"
        v-for="(value, key) in conversationList"
      )
        | Class:
        span.text-green  {{ key }}
        |  - Confidence:
        span.text-green  {{ (value * 100).toFixed(2) }}%
      h1(v-if="error") {{ error }}
    Slide(class='darkgray' v-if='connected')
      .slide-headline Buyer Intent Demo
      label.text-sm.font-medium.leading-5.text-gray-700(for='text')
      .my-2.bg-white.flex.rounded-md.shadow-sm.mx-20
        .relative.flex-grow(class='focus-within:z-10')
          input.my-2.outline-none.form-input.block.w-full.rounded-none.pl-10.transition.ease-in-out.duration-150(class='sm:text-sm sm:leading-5' placeholder='Message' v-model='text' v-on:keydown.enter='submit(text)')
      .slide-headline(
        v-if="Object.keys(classifiedList).length > 0"
        v-for="(value, key) in classifiedList"
      )
        | Class:
        span.text-green  {{ key }}
        |  - Confidence:
        span.text-green  {{ (value * 100).toFixed(2) }}%
      h1(v-if="error") {{ error }}
    Slide(class='darkgray')
      .slide-headline
        span.text-green 280k+
        |  messages
      .slide-headline
        | Personally Identifying Information
        span.text-green  scrubbed
      .slide-headline
        span.text-green Largest
        |  counter demand operations in the
        span.text-green  US
      h1 Dataset
    Slide(class='darkgray')
      .slide-headline Domain
      .slide-headline Brand
      .slide-headline Annotation pipeline
      .slide-headline Research
      h1 Miscellaneous
    Slide(class='darkgray')
      .slide-headline Content
        span.text-green  Moderation
      .slide-headline Harm
        span.text-green  Reduction
      .slide-headline Risk
        span.text-green  Management
      .slide-headline Safety
        span.text-green  evals
      .slide-headline
      h1 Use Cases
    Slide(class='darkgray')
      .slide-headline
        a(href="/images/childsafeai-assets/njsi_winter_2020.pdf")
          | Example report from national operation
      .slide-headline
        a(href="https://www.youtube.com/watch?v=H2YrkQGRBc8")
          | Talk from PyGotham 2019
      .slide-headline
        a(href="/images/childsafeai-assets/beyond-backpage.pdf")
          | Example research brief
      .slide-headline
        a(href="https://vimeo.com/386533750")
          | Congressional briefing from 2020
      .slide-headline
        a(href="https://www.gao.gov/assets/gao-21-385.pdf")
          | Government Accountability Office Study from 2021
      h1 Resources
    VideoSlide(src='/images/childsafeai-assets/intro.webm')
      img(src='/images/childsafeai-assets/childsafeai/png/green_and_white/childsafe-logo-gw-h@HD.png')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Thank You
          li Questions?
          li rob@childsafe.ai
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
  },
  data () {
    return {
      text: '',
      conversation: '',
      classifiedList: [],
      conversationList: [],
      error: null,
      connected: false
    }
  },
  mounted () {
    try {
      fetch('http://localhost:8000/test')
        .then(response => {
          if (!response.ok) {
            // If the response is not okay, we throw an error
            throw new Error('Failed to classify text.')
          }
          // Parse the JSON response
          return response.json()
        })
        .then(data => {
          // Log the data and set it to connected
          console.log(data)
          this.connected = data.result
        })
        .catch(error => {
          // Handle errors
          this.error = error.message
        })
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async submit () {
      if (!this.text) {
        this.error = 'Please input a message'
        return
      }

      try {
        const response = await fetch('http://localhost:8000/classify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: this.text })
        })

        if (!response.ok) {
          this.error('Failed to classify text.')
        }

        const data = await response.json()

        this.classifiedList = data || []
      } catch (error) {
        this.error = error.message
      }
    },
    async submitConversation () {
      if (!this.conversation) {
        this.error = 'Please input a message'
        return
      }

      try {
        const response = await fetch('http://localhost:8000/classify_conversation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: this.conversation })
        })

        if (!response.ok) {
          this.error('Failed to classify text.')
        }

        const data = await response.json()

        this.conversationList = data || []
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');

</style>
