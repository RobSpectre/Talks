import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Slide from '@/components/base/Slide.vue'

describe('Slide', () => {
  it('renders basic slide with default props', () => {
    const wrapper = mount(Slide)

    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('div.flex.flex-col.items-center.justify-center.h-5\\/6').exists()).toBe(true)
  })

  it('renders with custom classes', () => {
    const wrapper = mount(Slide, {
      props: {
        classes: 'custom-class another-class'
      }
    })

    expect(wrapper.find('section').classes()).toContain('custom-class')
    expect(wrapper.find('section').classes()).toContain('another-class')
  })

  it('renders with animation when animate is true', () => {
    const wrapper = mount(Slide, {
      props: {
        animate: true
      }
    })

    expect(wrapper.find('section').attributes('data-auto-animate')).toBeDefined()
  })

  it('does not render animation attributes when animate is false', () => {
    const wrapper = mount(Slide, {
      props: {
        animate: false
      }
    })

    expect(wrapper.find('section').attributes('data-auto-animate')).toBeUndefined()
  })

  it('sets custom transition', () => {
    const customTransition = 'slide-up'
    const wrapper = mount(Slide, {
      props: {
        transition: customTransition
      }
    })

    expect(wrapper.find('section').attributes('data-transition')).toBe(customTransition)
  })

  it('uses default transition when not specified', () => {
    const wrapper = mount(Slide)

    expect(wrapper.find('section').attributes('data-transition')).toBe('fade-in fade-out')
  })

  it('renders slot content', () => {
    const slotContent = '<h1>Test Content</h1>'
    const wrapper = mount(Slide, {
      slots: {
        default: slotContent
      }
    })

    expect(wrapper.html()).toContain('Test Content')
  })

  describe('timeout prop', () => {
    let mockDeck

    beforeEach(() => {
      vi.useFakeTimers()
      mockDeck = {
        navigateNext: vi.fn(),
        on: vi.fn(),
        getCurrentSlide: vi.fn()
      }
      window.deck = mockDeck
    })

    afterEach(() => {
      vi.restoreAllMocks()
      vi.useRealTimers()
      delete window.deck
    })

    it('does not set up auto-advance when timeout is null', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: null
        }
      })

      expect(mockDeck.on).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('sets up slidechanged listener when timeout is provided', () => {
      mockDeck.getCurrentSlide.mockReturnValue(null)

      const wrapper = mount(Slide, {
        props: {
          timeout: 3
        }
      })

      expect(mockDeck.on).toHaveBeenCalledWith('slidechanged', expect.any(Function))
      wrapper.unmount()
    })

    it('calls deck.navigateNext() after timeout expires when slide is active', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 2.5
        }
      })

      // Simulate the slide being active
      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)

      // Trigger setupAutoAdvance
      wrapper.vm.setupAutoAdvance()

      expect(mockDeck.navigateNext).not.toHaveBeenCalled()

      // Fast-forward time by 2.5 seconds (2500ms)
      vi.advanceTimersByTime(2500)

      expect(mockDeck.navigateNext).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('does not call deck.navigateNext() if timeout has not expired', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 5
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Fast-forward time by 3 seconds (less than timeout)
      vi.advanceTimersByTime(3000)

      expect(mockDeck.navigateNext).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('clears timeout when component is unmounted', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 3
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Unmount before timeout expires
      wrapper.unmount()

      // Fast-forward past the timeout
      vi.advanceTimersByTime(5000)

      // Should not call navigateNext() because timeout was cleared
      expect(mockDeck.navigateNext).not.toHaveBeenCalled()
    })

    it('clears timeout when slide changes', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 3
        }
      })

      const otherSlide = document.createElement('section')
      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)

      wrapper.vm.setupAutoAdvance()

      // Simulate slide change to different slide
      const slideChangedHandler = mockDeck.on.mock.calls[0][1]
      slideChangedHandler({ currentSlide: otherSlide })

      // Fast-forward past the timeout
      vi.advanceTimersByTime(5000)

      // Should not call navigateNext() for the original slide
      expect(mockDeck.navigateNext).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('starts timeout when slide becomes active via slidechanged event', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 2
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(null)
      wrapper.vm.setupAutoAdvance()

      // Get the slidechanged handler
      const slideChangedHandler = mockDeck.on.mock.calls[0][1]

      // Simulate this slide becoming active
      slideChangedHandler({ currentSlide: wrapper.element })

      // Fast-forward time
      vi.advanceTimersByTime(2000)

      expect(mockDeck.navigateNext).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('converts seconds to milliseconds correctly', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 1.5 // 1.5 seconds = 1500ms
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Should not trigger at 1000ms
      vi.advanceTimersByTime(1000)
      expect(mockDeck.navigateNext).not.toHaveBeenCalled()

      // Should trigger at 1500ms
      vi.advanceTimersByTime(500)
      expect(mockDeck.navigateNext).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('does not call deck.navigateNext() if window.deck becomes undefined', () => {
      const wrapper = mount(Slide, {
        props: {
          timeout: 1
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Remove window.deck before timeout expires
      delete window.deck

      vi.advanceTimersByTime(1000)

      // Should not throw error and should not call navigateNext
      expect(mockDeck.navigateNext).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('does not set up auto-advance when window.deck does not exist', () => {
      delete window.deck

      const wrapper = mount(Slide, {
        props: {
          timeout: 3
        }
      })

      // Should not throw error
      expect(wrapper.vm.timeoutId).toBeNull()
      wrapper.unmount()
    })
  })
})