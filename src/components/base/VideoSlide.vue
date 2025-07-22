<template lang="pug">
section(
  v-if='muted'
  :data-background-video='src'
  data-background-color='#000'
  data-background-video-muted
  data-background-video-loop
)
  div(class='flex flex-col items-center justify-center h-5/6')
    slot
section(
  v-else
  :data-background-video='src'
  data-background-color='#000'
)
  div(class='flex flex-col items-center justify-center h-5/6')
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
