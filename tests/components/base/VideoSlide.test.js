import { describe, it, expect } from 'vitest'
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
})