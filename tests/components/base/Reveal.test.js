import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Reveal from '@/components/base/Reveal.vue'

// Additional mock for Reveal.js specific to this test
vi.mock('reveal.js', () => {
  const MockReveal = vi.fn(function() {
    this.initialize = vi.fn(() => Promise.resolve())
    this.layout = vi.fn()
    this.removeKeyBinding = vi.fn()
    this.getCurrentSlide = vi.fn(() => ({
      getElementsByTagName: vi.fn((tag) => {
        if (tag === 'button') return []
        if (tag === 'a') return []
        if (tag === 'input') return []
        return []
      })
    }))
    this.on = vi.fn()
  })

  return {
    default: MockReveal
  }
})

describe('Reveal', () => {
  let wrapper

  beforeEach(() => {
    global.window.deck = undefined
  })

  it('renders reveal container with theater class', () => {
    wrapper = mount(Reveal)
    
    expect(wrapper.find('.reveal.theater').exists()).toBe(true)
  })

  it('renders slot content inside reveal container', () => {
    const slotContent = '<section>Test Slide</section>'
    wrapper = mount(Reveal, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.html()).toContain('Test Slide')
  })

  it('has correct component name', () => {
    wrapper = mount(Reveal)
    
    expect(wrapper.vm.$options.name).toBe('Reveal')
  })

  it('initializes with correct data properties', () => {
    wrapper = mount(Reveal)
    
    // deck gets initialized during mount, so check it exists after mount
    expect(wrapper.vm.deck).toBeDefined()
    expect(wrapper.vm.alphabet).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
  })

  it('calls waitToRenderReveal on mount', async () => {
    const waitToRenderRevealSpy = vi.spyOn(Reveal.methods, 'waitToRenderReveal')
    
    wrapper = mount(Reveal)
    await wrapper.vm.$nextTick()
    
    expect(waitToRenderRevealSpy).toHaveBeenCalled()
    waitToRenderRevealSpy.mockRestore()
  })

  it('sets up presentation reference on mount', () => {
    wrapper = mount(Reveal)
    
    expect(wrapper.vm.presentation).toBe(wrapper.vm.$refs.presentation)
  })

  it('handles retry logic when presentation width is not ready', () => {
    // Mock setTimeout to not execute immediately, just capture the call
    const mockSetTimeout = vi.fn()
    const mockRequestAnimationFrame = vi.fn((fn) => fn) // Return the function itself
    
    global.setTimeout = mockSetTimeout
    global.window.requestAnimationFrame = mockRequestAnimationFrame
    
    wrapper = mount(Reveal)
    
    // Mock the presentation element to initially have no width
    const mockPresentation = {
      parentElement: {
        clientWidth: 0 // Initially no width
      }
    }
    wrapper.vm.presentation = mockPresentation
    
    // Spy on renderReveal to see if it gets called
    const renderRevealSpy = vi.spyOn(wrapper.vm, 'renderReveal')
    
    // Call waitToRenderReveal when width is 0
    wrapper.vm.waitToRenderReveal()
    
    // Should have called setTimeout with requestAnimationFrame
    expect(mockSetTimeout).toHaveBeenCalledWith(wrapper.vm.waitToRenderReveal, 500)
    expect(mockRequestAnimationFrame).toHaveBeenCalledWith(wrapper.vm.waitToRenderReveal)
    
    // Should not have called renderReveal yet since width is 0
    expect(renderRevealSpy).not.toHaveBeenCalled()
    
    // Reset mocks
    mockSetTimeout.mockClear()
    mockRequestAnimationFrame.mockClear()
    
    // Now simulate width becoming available
    mockPresentation.parentElement.clientWidth = 800
    
    // Call again
    wrapper.vm.waitToRenderReveal()
    
    // Now renderReveal should be called and no setTimeout should be called
    expect(renderRevealSpy).toHaveBeenCalled()
    expect(mockSetTimeout).not.toHaveBeenCalled()
    
    renderRevealSpy.mockRestore()
  })

  it('sets button shortcuts correctly', () => {
    wrapper = mount(Reveal)
    
    // Mock a slide with buttons
    const mockButton1 = { setAttribute: vi.fn() }
    const mockButton2 = { setAttribute: vi.fn() }
    const mockSlide = {
      getElementsByTagName: vi.fn(() => [mockButton1, mockButton2])
    }
    
    wrapper.vm.setButtonShortcuts(mockSlide)
    
    expect(mockButton1.setAttribute).toHaveBeenCalledWith('accesskey', 'a')
    expect(mockButton2.setAttribute).toHaveBeenCalledWith('accesskey', 'b')
  })

  it('sets anchor shortcuts correctly', () => {
    wrapper = mount(Reveal)
    
    // Mock a slide with anchors
    const mockAnchor1 = { setAttribute: vi.fn() }
    const mockAnchor2 = { setAttribute: vi.fn() }
    const mockSlide = {
      getElementsByTagName: vi.fn(() => [mockAnchor1, mockAnchor2])
    }
    
    wrapper.vm.setAnchorShortcuts(mockSlide)
    
    expect(mockAnchor1.setAttribute).toHaveBeenCalledWith('accesskey', 'a')
    expect(mockAnchor2.setAttribute).toHaveBeenCalledWith('accesskey', 'b')
  })

  it('sets input shortcuts correctly', () => {
    wrapper = mount(Reveal)
    
    // Mock a slide with input
    const mockInput = { setAttribute: vi.fn() }
    const mockSlide = {
      getElementsByTagName: vi.fn(() => [mockInput])
    }
    
    wrapper.vm.setInputShortcut(mockSlide)
    
    expect(mockInput.setAttribute).toHaveBeenCalledWith('accesskey', 'i')
  })

  it('setShortcuts calls appropriate shortcut methods based on slide content', () => {
    wrapper = mount(Reveal)
    
    const setButtonSpy = vi.spyOn(wrapper.vm, 'setButtonShortcuts')
    const setAnchorSpy = vi.spyOn(wrapper.vm, 'setAnchorShortcuts') 
    const setInputSpy = vi.spyOn(wrapper.vm, 'setInputShortcut')
    
    // Mock slide with buttons - need proper mock elements with setAttribute
    const mockButton = { setAttribute: vi.fn() }
    const slideWithButtons = {
      getElementsByTagName: vi.fn((tag) => {
        if (tag === 'button') return [mockButton]
        if (tag === 'a') return []
        if (tag === 'input') return []
        return []
      })
    }
    
    wrapper.vm.setShortcuts(slideWithButtons)
    expect(setButtonSpy).toHaveBeenCalledWith(slideWithButtons)
    
    // Mock slide with anchors
    const mockAnchor = { setAttribute: vi.fn() }
    const slideWithAnchors = {
      getElementsByTagName: vi.fn((tag) => {
        if (tag === 'button') return []
        if (tag === 'a') return [mockAnchor]
        if (tag === 'input') return []
        return []
      })
    }
    
    wrapper.vm.setShortcuts(slideWithAnchors)
    expect(setAnchorSpy).toHaveBeenCalledWith(slideWithAnchors)
    
    // Mock slide with inputs
    const mockInput = { setAttribute: vi.fn() }
    const slideWithInputs = {
      getElementsByTagName: vi.fn((tag) => {
        if (tag === 'button') return []
        if (tag === 'a') return []
        if (tag === 'input') return [mockInput]
        return []
      })
    }
    
    wrapper.vm.setShortcuts(slideWithInputs)
    expect(setInputSpy).toHaveBeenCalledWith(slideWithInputs)
    
    setButtonSpy.mockRestore()
    setAnchorSpy.mockRestore()
    setInputSpy.mockRestore()
  })

  it('sets up slide change listener', () => {
    wrapper = mount(Reveal)
    
    // Mock window.deck
    const mockDeck = {
      on: vi.fn()
    }
    global.window.deck = mockDeck
    
    wrapper.vm.setShortcutListener()
    
    expect(mockDeck.on).toHaveBeenCalledWith('slidechanged', expect.any(Function))
  })
})