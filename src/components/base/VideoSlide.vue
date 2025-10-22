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
    },
    timeout: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      timeoutId: null,
      revealCheckInterval: null
    }
  },
  mounted () {
    if (this.timeout !== null) {
      if (window.deck) {
        this.setupAutoAdvance()
      } else {
        // Wait for Reveal to initialize
        this.waitForReveal()
      }
    }
  },
  beforeUnmount () {
    this.clearAutoAdvance()
    if (this.revealCheckInterval !== null) {
      clearInterval(this.revealCheckInterval)
      this.revealCheckInterval = null
    }
  },
  methods: {
    waitForReveal () {
      // Poll for window.deck to be available
      const checkInterval = setInterval(() => {
        if (window.deck) {
          clearInterval(checkInterval)
          this.setupAutoAdvance()
        }
      }, 100)

      // Store interval ID for cleanup
      this.revealCheckInterval = checkInterval
    },
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
