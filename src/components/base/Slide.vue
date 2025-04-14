<template lang="pug">
section(
  v-if='animate'
  :class='classes'
  :data-transition='transition'
  data-auto-animate
)
  div(class='flex flex-col items-center justify-center h-5/6')
    slot
section(v-else :class='classes' :data-transition='transition')
  div(class='flex flex-col items-center justify-center h-5/6')
    slot
</template>

<script>
export default {
  name: 'Slide',
  props: {
    classes: {
      type: String
    },
    animate: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade-in fade-out'
    }
  }
}
</script>
