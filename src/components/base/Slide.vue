<template lang="pug">
section(:class='classes')
  div(class='flex flex-col items-center justify-center h-5/6')
    slot
  h1(v-if='heading') {{ heading }}
</template>

<script>
export default {
  name: 'Slide',
  props: {
    heading: {
      type: String
    },
    classes: {
      type: String
    }
  }
}
</script>
