<template lang="pug">
Reveal
  .slides
    VideoSlide(src='/oso_messaging_survey/intro.mp4')
      .footer
        ul.list-outside(style='list-style-type: none;')
          li Oso Messaging Survey 
          li Rob Spectre
          li rob@brooklynhacker.com
    VideoSlide(src='/oso_messaging_survey/crossing_the_chasm_cut.mp4')
      h1 Crossing the Chasm
    ImageSlide(src='/oso_messaging_survey/survey_results.png')
      h1 Company Survey 
    Slide(class='darkgray')
      .slide-headline
        span.text-green 7 
        |  responses
      h1 Low Response Rate
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/oso_is_for.json'
    )
    TableSlide(
      title='Oso Is For...'
      :headers="['#', 'Response']"
      :data='oso_is_for'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/who_must.json'
    )
    TableSlide(
      title='Who Must...'
      :headers="['#', 'Response']"
      :data='who_must'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/our_product_is.json'
    )
    TableSlide(
      title='Our Product Is...'
      :headers="['#', 'Response']"
      :data='our_product_is'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/that_provides.json'
    )
    TableSlide(
      title='That Provides...'
      :headers="['#', 'Response']"
      :data='that_provides'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/unlike.json'
    )
    TableSlide(
      title='Unlike...'
      :headers="['#', 'Response']"
      :data='unlike'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/we_have.json'
    )
    TableSlide(
      title='We have...'
      :headers="['#', 'Response']"
      :data='we_have'
    )
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/alignment_radar.json'
    )
</template>

<script>
import ImageSlide from '@/components/base/ImageSlide.vue'
import Reveal from '@/components/base/Reveal.vue'
import Title from '@/components/base/Title.vue'
import Slide from '@/components/base/Slide.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ChartSlide from '@/components/charts/ChartSlide.vue'
import TableSlide from '@/components/data/TableSlide.vue'

export default {
  name: 'OsoMessagingSurvey',
  components: {
    Title,
    Slide,
    Reveal,
    ImageSlide,
    VideoSlide,
    ChartSlide,
    TableSlide
  },
  data () {
    return {
      oso_is_for: {
        1: { response: 'Growing SaaS Companies' },
        2: { response: 'app developers' },
        3: { response: 'companies iterating on their technology' },
        4: { response: 'B2B software companies scaling their platforms and teams' },
        5: { response: 'developers' },
        6: { response: 'B2B SaaS Companies' },
        7: { response: 'Platform engineering teams at B2B SaaS midmarket companies ' }
      },
      who_must: {
        1: { response: 'Solve authorization to grow scalably.' },
        2: { response: 'limit access to certain resources to certain users in your app' },
        3: { response: 'control access to their data assets' },
        4: { response: 'are evolving their access control to match growing complexity and scale' },
        5: { response: 'control who can access what in their application' },
        6: { response: 'Ship fine-grained authorization in microservices apps' },
        7: { response: 'add fine grained permissions to their application' }
      },
      our_product_is: {
        1: { response: 'Authorization-as-a-service platform' },
        2: { response: 'SaaS API' },
        3: { response: 'authorization platform' },
        4: { response: 'authorization-as-a-service platform that brings policy-as-code to modern development teams building microservices' },
        5: { response: 'coding language and infrastructure' },
        6: { response: 'authorization as a service' },
        7: { response: 'authorization as a service' }
      },
      that_provides: {
        1: { response: 'Highly custom, performant and available authorization queries at large scale.' },
        2: { response: 'low-latency and globally replicated answers to authorization questions in real time' },
        3: { response: 'a service to govern access to sensitive data assets with world-class performance' },
        4: { response: 'a unified policy engine and developer tooling to model access, make decisions using your application data, and enforce them without needing to centralize or move that data,' },
        5: { response: 'the tools to support any desired access pattern or use case' },
        6: { response: 'the most reliable way to deliver fine-grained authorization' },
        7: { response: 'centralized authorization in microservices without needing to sync and reconcile data ' },
      },
      unlike: {
        1: { response: 'Homegrown builds and OPA-based builders' },
        2: { response: 'building your own authorization logic or service' },
        3: { response: 'building this yourself' },
        5: { response: 'custom, hardcoded authorization logic that becomes difficult to scale and audit over time,' },
        6: { response: 'DIY or a Google Zanzibar clone' },
        7: { response: 'DIY and Zanzibar solutions' },
        8: { response: 'Zanzibar or DIY solutions ' },
      },
      we_have: {
        1: { response: 'Custom data modeling and 99.99% uptime.' },
        2: { response: "a configuration language that is uniquely suited for expressing authorization logic maintainably and extensibly, which gives you a fully managed authorization service tailored to your app's domain model" },
        3: { response: 'a declarative policy language to model out any possible governance scheme, global distribution, realtime logging, and clear adoption + migration tooling to get into production quickly' },
        4: { response: "a modern authorization platform built for the speed and complexity of today’s software teams." },
        5: { response: "the flexibility for you to build RBAC, ReBAC or ABAC, without needing to centralize your data"},
        6: { response: "Flexible, reliable, best support/docs" },
        7: { response: "scalable authorization so that you can sell to more enterprise customers & expand usage with them" }
      }
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
