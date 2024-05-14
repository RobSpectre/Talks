<template lang="pug">
.reveal(class='theater' ref='presentation')
  slot
</template>

<script>
import Reveal from 'reveal.js'

export default {
  name: 'Reveal',
  data: function () {
    return {
      deck: undefined,
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    }
  },
  mounted () {
    this.presentation = this.$refs.presentation

    this.waitToRenderReveal()
  },
  methods: {
    waitToRenderReveal () {
      if (!(this.presentation.parentElement.clientWidth > 0)) {
        setTimeout(window.requestAnimationFrame(this.waitToRenderReveal),
          500)
      } else {
        this.renderReveal()
      }
    },
    renderReveal () {
      this.deck = new Reveal({
        controls: false,
        progress: true,
        history: true,
        overview: false,
        loop: false,
        transition: 'none',
        embedded: true,
        margin: 0,
        width: '100%',
        height: '100%',
        keyboard: {
          32: null,
          66: null,
          70: null,
          72: null,
          75: null,
          76: null,
          78: null,
          79: null,
          80: null
        }
      })

      this.deck.initialize().then(() => {
        this.deck.layout()
        this.$emit('reveal-rendered', this.deck)
        window.deck = this.deck
        this.setShortcuts(window.deck.getCurrentSlide())
        this.setShortcutListener()
      })
    },
    setShortcutListener () {
      window.deck.on('slidechanged', event => {
        this.setShortcuts(event.currentSlide)
      })
    },
    setShortcuts (slide) {
      if (slide.getElementsByTagName('button').length > 0) {
        this.setButtonShortcuts(slide)
      } else if (slide.getElementsByTagName('a').length > 0) {
        this.setAnchorShortcuts(slide)
      }

      if (slide.getElementsByTagName('input').length > 0) {
        this.setInputShortcut(slide)
      }
    },
    setButtonShortcuts (slide) {
      Array.from(slide.getElementsByTagName('button')).forEach((button, index) => {
        button.setAttribute('accesskey', this.alphabet[index])
      })
    },
    setAnchorShortcuts (slide) {
      Array.from(slide.getElementsByTagName('a')).forEach((button, index) => {
        button.setAttribute('accesskey', this.alphabet[index])
      })
    },
    setInputShortcut (slide) {
      slide.getElementsByTagName('input')[0].setAttribute('accesskey', 'i')
    }
  }
}
</script>

<style src="@/../node_modules/reveal.js/dist/reveal.css"></style>
<style lang="scss" src="../../assets/styles/reveal_theme.scss"></style>
<style lang="scss">
.theater {
  @apply h-screen w-full;
}

section {
  @apply h-full;
}
</style>
