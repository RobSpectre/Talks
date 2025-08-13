import { vi } from 'vitest'

// Mock Reveal.js
vi.mock('reveal.js', () => ({
  default: vi.fn(() => ({
    initialize: vi.fn(() => Promise.resolve()),
    layout: vi.fn(),
    removeKeyBinding: vi.fn(),
    getCurrentSlide: vi.fn(() => ({
      getElementsByTagName: vi.fn(() => [])
    })),
    on: vi.fn()
  }))
}))

// Mock GSAP
vi.mock('gsap', () => ({
  default: {
    fromTo: vi.fn(),
    to: vi.fn(),
    timeline: vi.fn(() => ({
      fromTo: vi.fn(),
      to: vi.fn()
    }))
  }
}))

// Mock ECharts
vi.mock('echarts', () => ({
  init: vi.fn(() => ({
    setOption: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn()
  })),
  registerTheme: vi.fn()
}))


// Global mocks
global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

global.requestAnimationFrame = vi.fn(cb => setTimeout(cb, 0))

// Mock DOM methods globally
Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  get: vi.fn(() => 1024),
  configurable: true
})

Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  get: vi.fn(() => 768),
  configurable: true
})

// Mock document.getElementById
global.document.getElementById = vi.fn((id) => ({
  clientWidth: 1024,
  clientHeight: 768,
  parentElement: {
    style: {
      backgroundColor: '#000000'
    }
  }
}))

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn()
}