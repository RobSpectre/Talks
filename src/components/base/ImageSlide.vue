<template lang="pug">
section(
  :data-background-image='src'
)
  slot
</template>

<script>
export default {
  name: 'ImageSlide',
  props: {
    src: {
      type: String,
      default: '@/assets/images/party_hard.gif'
    }
  }
}
</script>
