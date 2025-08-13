import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ImageSlide from '@/components/base/ImageSlide.vue'

describe('ImageSlide', () => {
  it('renders section with background image', () => {
    const wrapper = mount(ImageSlide)
    
    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('section').attributes('data-background-image')).toBe('@/assets/images/party_hard.gif')
  })

  it('uses custom src prop for background image', () => {
    const customSrc = '/images/custom-background.jpg'
    const wrapper = mount(ImageSlide, {
      props: {
        src: customSrc
      }
    })
    
    expect(wrapper.find('section').attributes('data-background-image')).toBe(customSrc)
  })

  it('renders slot content', () => {
    const slotContent = '<div class="content">Slide Content</div>'
    const wrapper = mount(ImageSlide, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.html()).toContain('Slide Content')
    expect(wrapper.find('.content').exists()).toBe(true)
  })

  it('has correct component name', () => {
    const wrapper = mount(ImageSlide)
    
    expect(wrapper.vm.$options.name).toBe('ImageSlide')
  })
})