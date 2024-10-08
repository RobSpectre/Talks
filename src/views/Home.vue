<template lang="pug">
.bg-gray-600.py-12(class='sm:py-32')
  .relative.isolate.flex.flex-col.gap-8
    .title Rob's Talks
  .bg-white.mx-auto.max-w-7xl.py-8.px-6(class='lg:px-8')
    .mx-auto.max-w-2xl(class='lg:max-w-4xl')
      .mt-16.space-y-20(class='lg:mt-20 lg:space-y-20')
        div(v-for='route in routes')
          article.relative.isolate.flex.flex-col.gap-8(
            v-if='route.private !== true'
            :key='route.path'
            class='lg:flex-row'
          )
            .relative(
              class='aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'
            )
              a(:href='route.path')
                img.absolute.inset-0.h-full.w-full.rounded-2xl.bg-gray-50.object-cover(:src='route.img', alt='')
                .absolute.inset-0.rounded-2xl.ring-1.ring-inset(class='ring-gray-900/10')
            div
              .flex.items-center.gap-x-4.text-xs
                .group.relative.max-w-xl
                  .mt-3.text-lg.font-semibold.leading-6.uppercase
                    a(:href='route.path') {{ route.name }}
                  p.mt-5.text-sm.leading-6.text-gray-600 {{ route.description }}
</template>

<script>
import { routes } from '@/router/index.js'

export default {
  name: 'Home',
  data () {
    return {
      routes: routes
    }
  }
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.title {
  font-family: 'Press Start 2P', cursive !important;
  @apply mx-auto max-w-7xl px-6 lg:px-8 text-5xl text-white #{!important};
}

.reveal li {
  list-style: none;
}

html, body {
  @apply bg-gray-600 #{!important};
}
</style>
