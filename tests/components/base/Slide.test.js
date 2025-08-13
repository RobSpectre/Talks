import { describe, it, expect } from 'vitest'
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
})