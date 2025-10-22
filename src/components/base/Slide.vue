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
    },
    timeout: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      timeoutId: null
    }
  },
  mounted () {
    if (this.timeout !== null && window.deck) {
      this.setupAutoAdvance()
    }
  },
  beforeUnmount () {
    this.clearAutoAdvance()
  },
  methods: {
    setupAutoAdvance () {
      // Listen for when this slide becomes active
      window.deck.on('slidechanged', this.handleSlideChanged)

      // Check if this slide is currently active
      const currentSlide = window.deck.getCurrentSlide()
      if (currentSlide === this.$el) {
        this.startTimeout()
      }
    },
    handleSlideChanged (event) {
      // Clear any existing timeout
      this.clearAutoAdvance()

      // If this slide is now active, start the timeout
      if (event.currentSlide === this.$el) {
        this.startTimeout()
      }
    },
    startTimeout () {
      if (this.timeout !== null) {
        // Convert seconds to milliseconds
        const ms = this.timeout * 1000
        this.timeoutId = setTimeout(() => {
          if (window.deck) {
            window.deck.navigateNext()
          }
        }, ms)
      }
    },
    clearAutoAdvance () {
      if (this.timeoutId !== null) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
    }
  }
}
</script>
