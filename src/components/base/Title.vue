<template lang="pug">
VideoSlide(
  v-if='backgroundType === "video"'
  :src='src'
)
  .h-full.flex.items-center.justify-center
    img(
      v-if='headingType === "image"'
      class='titleLogo'
      :src='heading'
    )
    h2(v-else class='titleLogo') {{ heading }}
ImageSlide(v-else)
  div(class='flex h-full')
    img(
      v-if='headingType === "image"'
      class='titleLogo'
      :src='heading'
    )
    h2(v-else class='titleLogo') {{ heading }}
</template>

<script>
import VideoSlide from '@/components/base/VideoSlide.vue'
import ImageSlide from '@/components/base/ImageSlide.vue'

export default {
  name: 'Title',
  components: {
    VideoSlide,
    ImageSlide
  },
  props: {
    src: {
      type: String,
      default: '/video/intro.mp4'
    },
    backgroundType: {
      type: String,
      default: 'video'
    },
    heading: {
      type: String,
      default: '/images/hackparty_logo.png'
    },
    headingType: {
      type: String,
      default: 'image'
    }
  }
}
</script>

<style lang="scss" scoped>
.titleLogo {
  @apply flex grow-0;
}
</style>
