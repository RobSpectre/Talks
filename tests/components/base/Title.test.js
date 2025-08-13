import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Title from '@/components/base/Title.vue'
import VideoSlide from '@/components/base/VideoSlide.vue'
import ImageSlide from '@/components/base/ImageSlide.vue'

describe('Title', () => {
  it('renders VideoSlide with image heading by default', () => {
    const wrapper = mount(Title)
    
    expect(wrapper.findComponent(VideoSlide).exists()).toBe(true)
    expect(wrapper.findComponent(ImageSlide).exists()).toBe(false)
    expect(wrapper.find('img.titleLogo').exists()).toBe(true)
    expect(wrapper.find('h2.titleLogo').exists()).toBe(false)
  })

  it('renders ImageSlide when backgroundType is not video', () => {
    const wrapper = mount(Title, {
      props: {
        backgroundType: 'image'
      }
    })
    
    expect(wrapper.findComponent(VideoSlide).exists()).toBe(false)
    expect(wrapper.findComponent(ImageSlide).exists()).toBe(true)
  })

  it('renders text heading when headingType is text', () => {
    const headingText = 'My Presentation Title'
    const wrapper = mount(Title, {
      props: {
        heading: headingText,
        headingType: 'text'
      }
    })
    
    expect(wrapper.find('img.titleLogo').exists()).toBe(false)
    expect(wrapper.find('h2.titleLogo').exists()).toBe(true)
    expect(wrapper.find('h2.titleLogo').text()).toBe(headingText)
  })

  it('uses custom video src', () => {
    const customSrc = '/video/custom-intro.mp4'
    const wrapper = mount(Title, {
      props: {
        src: customSrc
      }
    })
    
    const videoSlide = wrapper.findComponent(VideoSlide)
    expect(videoSlide.props('src')).toBe(customSrc)
  })

  it('uses custom image heading', () => {
    const customHeading = '/images/custom-logo.png'
    const wrapper = mount(Title, {
      props: {
        heading: customHeading
      }
    })
    
    expect(wrapper.find('img.titleLogo').attributes('src')).toBe(customHeading)
  })

  it('has correct component name', () => {
    const wrapper = mount(Title)
    
    expect(wrapper.vm.$options.name).toBe('Title')
  })

  it('applies titleLogo styles to both image and text variants', () => {
    // Test image variant
    const imageWrapper = mount(Title, {
      props: { headingType: 'image' }
    })
    expect(imageWrapper.find('.titleLogo').exists()).toBe(true)

    // Test text variant
    const textWrapper = mount(Title, {
      props: { headingType: 'text', heading: 'Test Title' }
    })
    expect(textWrapper.find('.titleLogo').exists()).toBe(true)
  })
})