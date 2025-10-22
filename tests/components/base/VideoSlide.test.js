import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import VideoSlide from '@/components/base/VideoSlide.vue'

describe('VideoSlide', () => {
  it('renders muted video section by default', () => {
    const src = '/video/test-video.mp4'
    const wrapper = mount(VideoSlide, {
      props: { src }
    })

    const section = wrapper.find('section')
    expect(section.exists()).toBe(true)
    expect(section.attributes('data-background-video')).toBe(src)
    expect(section.attributes('data-background-color')).toBe('#000')
    expect(section.attributes('data-background-video-muted')).toBeDefined()
    expect(section.attributes('data-background-video-loop')).toBeDefined()
  })

  it('renders unmuted video when muted is false', () => {
    const src = '/video/test-video.mp4'
    const wrapper = mount(VideoSlide, {
      props: {
        src,
        muted: false
      }
    })

    const section = wrapper.find('section')
    expect(section.attributes('data-background-video')).toBe(src)
    expect(section.attributes('data-background-color')).toBe('#000')
    expect(section.attributes('data-background-video-muted')).toBeUndefined()
    expect(section.attributes('data-background-video-loop')).toBeUndefined()
  })

  it('renders slot content in centered container', () => {
    const slotContent = '<h1>Video Content</h1>'
    const wrapper = mount(VideoSlide, {
      props: { src: '/test.mp4' },
      slots: {
        default: slotContent
      }
    })

    expect(wrapper.html()).toContain('Video Content')
    expect(wrapper.find('div.flex.flex-col.items-center.justify-center.h-5\\/6').exists()).toBe(true)
  })

  it('has correct component name', () => {
    const wrapper = mount(VideoSlide, {
      props: { src: '/test.mp4' }
    })

    expect(wrapper.vm.$options.name).toBe('VideoSlide')
  })

  describe('timeout prop', () => {
    let mockDeck

    beforeEach(() => {
      vi.useFakeTimers()
      mockDeck = {
        next: vi.fn(),
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
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: null
        }
      })

      expect(mockDeck.on).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('sets up slidechanged listener when timeout is provided', () => {
      mockDeck.getCurrentSlide.mockReturnValue(null)

      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 3
        }
      })

      expect(mockDeck.on).toHaveBeenCalledWith('slidechanged', expect.any(Function))
      wrapper.unmount()
    })

    it('calls deck.next() after timeout expires when slide is active', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 2.5
        }
      })

      // Simulate the slide being active
      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)

      // Trigger setupAutoAdvance
      wrapper.vm.setupAutoAdvance()

      expect(mockDeck.next).not.toHaveBeenCalled()

      // Fast-forward time by 2.5 seconds (2500ms)
      vi.advanceTimersByTime(2500)

      expect(mockDeck.next).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('does not call deck.next() if timeout has not expired', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 5
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Fast-forward time by 3 seconds (less than timeout)
      vi.advanceTimersByTime(3000)

      expect(mockDeck.next).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('clears timeout when component is unmounted', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 3
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Unmount before timeout expires
      wrapper.unmount()

      // Fast-forward past the timeout
      vi.advanceTimersByTime(5000)

      // Should not call next() because timeout was cleared
      expect(mockDeck.next).not.toHaveBeenCalled()
    })

    it('clears timeout when slide changes', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
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

      // Should not call next() for the original slide
      expect(mockDeck.next).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('starts timeout when slide becomes active via slidechanged event', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
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

      expect(mockDeck.next).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('converts seconds to milliseconds correctly', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 1.5 // 1.5 seconds = 1500ms
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Should not trigger at 1000ms
      vi.advanceTimersByTime(1000)
      expect(mockDeck.next).not.toHaveBeenCalled()

      // Should trigger at 1500ms
      vi.advanceTimersByTime(500)
      expect(mockDeck.next).toHaveBeenCalledTimes(1)
      wrapper.unmount()
    })

    it('does not call deck.next() if window.deck becomes undefined', () => {
      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 1
        }
      })

      mockDeck.getCurrentSlide.mockReturnValue(wrapper.element)
      wrapper.vm.setupAutoAdvance()

      // Remove window.deck before timeout expires
      delete window.deck

      vi.advanceTimersByTime(1000)

      // Should not throw error and should not call next
      expect(mockDeck.next).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it('does not set up auto-advance when window.deck does not exist', () => {
      delete window.deck

      const wrapper = mount(VideoSlide, {
        props: {
          src: '/test.mp4',
          timeout: 3
        }
      })

      // Should not throw error
      expect(wrapper.vm.timeoutId).toBeNull()
      wrapper.unmount()
    })
  })
})