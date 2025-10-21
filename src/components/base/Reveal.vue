<template lang="pug">
.reveal(class='theater' ref='presentation')
  slot
</template>

<script>
import Reveal from 'reveal.js'

export default {
  name: 'Reveal',
  props: {
    // Display
    controls: { type: Boolean, default: false },
    controlsTutorial: { type: Boolean, default: true },
    controlsLayout: { type: String, default: 'bottom-right' },
    controlsBackArrows: { type: String, default: 'faded' },
    progress: { type: Boolean, default: true },
    slideNumber: { type: [Boolean, String], default: false },
    showSlideNumber: { type: String, default: 'all' },
    hashOneBasedIndex: { type: Boolean, default: false },
    hash: { type: Boolean, default: false },
    respondToHashChanges: { type: Boolean, default: true },
    jumpToSlide: { type: Boolean, default: true },
    history: { type: Boolean, default: true },
    keyboard: { type: [Boolean, Object], default: () => ({
      32: null,
      66: null,
      70: null,
      72: null,
      75: null,
      76: null,
      78: null,
      79: null,
      80: null,
      191: null
    }) },
    keyboardCondition: { type: [String, Function], default: null },
    disableLayout: { type: Boolean, default: false },
    overview: { type: Boolean, default: false },
    center: { type: Boolean, default: true },
    touch: { type: Boolean, default: true },
    loop: { type: Boolean, default: false },
    rtl: { type: Boolean, default: false },
    navigationMode: { type: String, default: 'default' },
    shuffle: { type: Boolean, default: false },
    fragments: { type: Boolean, default: true },
    fragmentInURL: { type: Boolean, default: true },
    embedded: { type: Boolean, default: true },
    help: { type: Boolean, default: true },
    pause: { type: Boolean, default: true },
    showNotes: { type: Boolean, default: false },
    showHiddenSlides: { type: Boolean, default: false },
    autoPlayMedia: { type: [Boolean, String], default: null },
    preloadIframes: { type: [Boolean, String], default: null },
    autoAnimate: { type: Boolean, default: true },
    autoAnimateMatcher: { type: [String, Function], default: null },
    autoAnimateEasing: { type: String, default: 'ease' },
    autoAnimateDuration: { type: Number, default: 1.0 },
    autoAnimateUnmatched: { type: Boolean, default: true },
    autoAnimateStyles: { type: Array, default: () => [
      'opacity',
      'color',
      'background-color',
      'padding',
      'font-size',
      'line-height',
      'letter-spacing',
      'border-width',
      'border-color',
      'border-radius',
      'outline',
      'outline-offset'
    ] },
    autoSlide: { type: Number, default: 0 },
    autoSlideStoppable: { type: Boolean, default: true },
    autoSlideMethod: { type: Function, default: null },
    defaultTiming: { type: Number, default: null },
    mouseWheel: { type: Boolean, default: false },
    previewLinks: { type: Boolean, default: false },
    postMessage: { type: Boolean, default: true },
    postMessageEvents: { type: Boolean, default: false },
    focusBodyOnPageVisibilityChange: { type: Boolean, default: true },
    transition: { type: String, default: 'none' },
    transitionSpeed: { type: String, default: 'default' },
    backgroundTransition: { type: String, default: 'fade' },
    pdfMaxPagesPerSlide: { type: Number, default: Number.POSITIVE_INFINITY },
    pdfSeparateFragments: { type: Boolean, default: true },
    pdfPageHeightOffset: { type: Number, default: -1 },
    viewDistance: { type: Number, default: 3 },
    mobileViewDistance: { type: Number, default: 2 },
    display: { type: String, default: 'block' },
    hideInactiveCursor: { type: Boolean, default: true },
    hideCursorTime: { type: Number, default: 5000 },

    // Presentation Size
    width: { type: [Number, String], default: '100%' },
    height: { type: [Number, String], default: '100%' },
    margin: { type: Number, default: 0 },
    minScale: { type: Number, default: 0.2 },
    maxScale: { type: Number, default: 2.0 },

    // Parallax Background
    parallaxBackgroundImage: { type: String, default: '' },
    parallaxBackgroundSize: { type: String, default: '' },
    parallaxBackgroundRepeat: { type: String, default: '' },
    parallaxBackgroundHorizontal: { type: Number, default: null },
    parallaxBackgroundVertical: { type: Number, default: null },

    // Scrollable Slides
    scrollActivationWidth: { type: Number, default: null },

    // Plugins
    plugins: { type: Array, default: () => [] },
    dependencies: { type: Array, default: () => [] }
  },
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
      // Build config object from props
      const config = {
        // Display
        controls: this.controls,
        controlsTutorial: this.controlsTutorial,
        controlsLayout: this.controlsLayout,
        controlsBackArrows: this.controlsBackArrows,
        progress: this.progress,
        slideNumber: this.slideNumber,
        showSlideNumber: this.showSlideNumber,
        hashOneBasedIndex: this.hashOneBasedIndex,
        hash: this.hash,
        respondToHashChanges: this.respondToHashChanges,
        jumpToSlide: this.jumpToSlide,
        history: this.history,
        keyboard: this.keyboard,
        disableLayout: this.disableLayout,
        overview: this.overview,
        center: this.center,
        touch: this.touch,
        loop: this.loop,
        rtl: this.rtl,
        navigationMode: this.navigationMode,
        shuffle: this.shuffle,
        fragments: this.fragments,
        fragmentInURL: this.fragmentInURL,
        embedded: this.embedded,
        help: this.help,
        pause: this.pause,
        showNotes: this.showNotes,
        showHiddenSlides: this.showHiddenSlides,
        autoPlayMedia: this.autoPlayMedia,
        preloadIframes: this.preloadIframes,
        autoAnimate: this.autoAnimate,
        autoAnimateEasing: this.autoAnimateEasing,
        autoAnimateDuration: this.autoAnimateDuration,
        autoAnimateUnmatched: this.autoAnimateUnmatched,
        autoAnimateStyles: this.autoAnimateStyles,
        autoSlide: this.autoSlide,
        autoSlideStoppable: this.autoSlideStoppable,
        defaultTiming: this.defaultTiming,
        mouseWheel: this.mouseWheel,
        previewLinks: this.previewLinks,
        postMessage: this.postMessage,
        postMessageEvents: this.postMessageEvents,
        focusBodyOnPageVisibilityChange: this.focusBodyOnPageVisibilityChange,
        transition: this.transition,
        transitionSpeed: this.transitionSpeed,
        backgroundTransition: this.backgroundTransition,
        pdfMaxPagesPerSlide: this.pdfMaxPagesPerSlide,
        pdfSeparateFragments: this.pdfSeparateFragments,
        pdfPageHeightOffset: this.pdfPageHeightOffset,
        viewDistance: this.viewDistance,
        mobileViewDistance: this.mobileViewDistance,
        display: this.display,
        hideInactiveCursor: this.hideInactiveCursor,
        hideCursorTime: this.hideCursorTime,

        // Presentation Size
        width: this.width,
        height: this.height,
        margin: this.margin,
        minScale: this.minScale,
        maxScale: this.maxScale,

        // Parallax Background
        parallaxBackgroundImage: this.parallaxBackgroundImage,
        parallaxBackgroundSize: this.parallaxBackgroundSize,
        parallaxBackgroundRepeat: this.parallaxBackgroundRepeat,

        // Scrollable Slides
        scrollActivationWidth: this.scrollActivationWidth,

        // Plugins
        plugins: this.plugins,
        dependencies: this.dependencies
      }

      // Add optional props that should only be included if provided
      if (this.keyboardCondition !== null) {
        config.keyboardCondition = this.keyboardCondition
      }
      if (this.autoAnimateMatcher !== null) {
        config.autoAnimateMatcher = this.autoAnimateMatcher
      }
      if (this.autoSlideMethod !== null) {
        config.autoSlideMethod = this.autoSlideMethod
      }
      if (this.parallaxBackgroundHorizontal !== null) {
        config.parallaxBackgroundHorizontal = this.parallaxBackgroundHorizontal
      }
      if (this.parallaxBackgroundVertical !== null) {
        config.parallaxBackgroundVertical = this.parallaxBackgroundVertical
      }

      this.deck = new Reveal(config)

      this.deck.initialize().then(() => {
        this.deck.layout()
        this.$emit('reveal-rendered', this.deck)
        window.deck = this.deck

        this.deck.removeKeyBinding(191)

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
