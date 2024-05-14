<template lang="pug">
section(
  v-if='muted'
  :data-background-video='src'
  data-background-color='#000'
  data-background-video-muted
  data-background-video-loop
)
  slot
section(
  v-else
  :data-background-video='src'
  data-background-color='#000'
)
  slot
</template>

<script>
export default {
  name: 'VideoSlide',
  props: {
    src: String,
    muted: {
      type: Boolean,
      default: true
    }
  }
}
</script>
