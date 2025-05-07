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
        span.text-green 9 
        |  responses
      h1 Response Rate
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
    Slide(class='darkgray')
      .slide-headline been doing this longer than anyone else, and have built a carefully crafted product which: 1. supercharges development through our core engine, Polar, that is opinionated enough to simplify the most common use cases, but flexible enough to meet the most unique requirements 2. empowers you to control how much data to centralize or not, fine-tuning it to your needs 3. offers best-in-class robustness and performance for one of the most critical areas of any app.
    ChartSlide(
      class='darkgray'
      src='/oso_messaging_survey/data/alignment_radar.json'
    )
      h1 Alignment
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
        7: { response: 'Platform engineering teams at B2B SaaS midmarket companies ' },
        8: { response: 'software engineering teams' },
        9: { response: 'Mid-market B2B SaaS companies' }
      },
      who_must: {
        1: { response: 'Solve authorization to grow scalably.' },
        2: { response: 'limit access to certain resources to certain users in your app' },
        3: { response: 'control access to their data assets' },
        4: { response: 'are evolving their access control to match growing complexity and scale' },
        5: { response: 'control who can access what in their application' },
        6: { response: 'Ship fine-grained authorization in microservices apps' },
        7: { response: 'add fine grained permissions to their application' },
        8: { response: 'built enterprise-grade access control features quickly, without sacrificing future scalability' },
        9: { response: 'Apply access control across their entire system' }
      },
      our_product_is: {
        1: { response: 'Authorization-as-a-service platform' },
        2: { response: 'SaaS API' },
        3: { response: 'authorization platform' },
        4: { response: 'authorization-as-a-service platform that brings policy-as-code to modern development teams building microservices' },
        5: { response: 'coding language and infrastructure' },
        6: { response: 'authorization as a service' },
        7: { response: 'authorization as a service' },
        8: { response: 'authorization-as-a-service infrastructure solution' },
        9: { response: 'Authorization Fabric' }
      },
      that_provides: {
        1: { response: 'Highly custom, performant and available authorization queries at large scale.' },
        2: { response: 'low-latency and globally replicated answers to authorization questions in real time' },
        3: { response: 'a service to govern access to sensitive data assets with world-class performance' },
        4: { response: 'a unified policy engine and developer tooling to model access, make decisions using your application data, and enforce them without needing to centralize or move that data,' },
        5: { response: 'the tools to support any desired access pattern or use case' },
        6: { response: 'the most reliable way to deliver fine-grained authorization' },
        7: { response: 'centralized authorization in microservices without needing to sync and reconcile data ' },
        8: { response: 'the quickest way for teams to meet their short and long-term goals at a fraction of the cost of in-house solutions' },
        9: { response: 'a DSL for writing authorization logic once and enforcing it uniformly across applications, databases, RAG pipelines, and AI agents' }
      },
      unlike: {
        1: { response: 'Homegrown builds and OPA-based builders' },
        2: { response: 'building your own authorization logic or service' },
        3: { response: 'building this yourself' },
        4: { response: 'custom, hardcoded authorization logic that becomes difficult to scale and audit over time,' },
        5: { response: 'DIY or a Google Zanzibar clone' },
        6: { response: 'DIY and Zanzibar solutions' },
        7: { response: 'Zanzibar or DIY solutions ' },
        8: { response: 'pure policy engines and Zanzibar clones' },
        9: { response: 'DIY or our competitors' }
      },
      we_have: {
        1: { response: 'Custom data modeling and 99.99% uptime.' },
        2: { response: "a configuration language that is uniquely suited for expressing authorization logic maintainably and extensibly, which gives you a fully managed authorization service tailored to your app's domain model" },
        3: { response: 'a declarative policy language to model out any possible governance scheme, global distribution, realtime logging, and clear adoption + migration tooling to get into production quickly' },
        4: { response: "a modern authorization platform built for the speed and complexity of today’s software teams." },
        5: { response: "the flexibility for you to build RBAC, ReBAC or ABAC, without needing to centralize your data"},
        6: { response: "Flexible, reliable, best support/docs" },
        7: { response: "scalable authorization so that you can sell to more enterprise customers & expand usage with them" },
        8: { response: 'an authorization engine flexible enough to support any query and efficient enough to compute thousands of results in milliseconds' }
      }
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Titan+One&family=Cutive+Mono&family=Roboto:wght@700&display=swap');
</style>
