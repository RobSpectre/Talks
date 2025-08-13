import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Table from '@/components/ui/table/Table.vue'

// Mock the utils function
vi.mock('@/lib/utils', () => ({
  cn: (...classes) => classes.filter(Boolean).join(' ')
}))

describe('Table', () => {
  it('renders table wrapper with correct structure', () => {
    const wrapper = mount(Table)
    
    expect(wrapper.find('div.relative.w-full.overflow-auto').exists()).toBe(true)
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('applies default classes to table element', () => {
    const wrapper = mount(Table)
    const table = wrapper.find('table')
    
    expect(table.classes()).toContain('w-full')
    expect(table.classes()).toContain('caption-bottom')
    expect(table.classes()).toContain('text-sm')
  })

  it('applies custom class when provided', () => {
    const customClass = 'custom-table-class'
    const wrapper = mount(Table, {
      props: {
        class: customClass
      }
    })
    
    const table = wrapper.find('table')
    expect(table.classes()).toContain(customClass)
  })

  it('renders slot content inside table', () => {
    const slotContent = '<thead><tr><th>Header</th></tr></thead>'
    const wrapper = mount(Table, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.html()).toContain('Header')
    expect(wrapper.find('thead').exists()).toBe(true)
    expect(wrapper.find('th').exists()).toBe(true)
  })

  it('maintains responsive overflow behavior', () => {
    const wrapper = mount(Table)
    const container = wrapper.find('div')
    
    expect(container.classes()).toContain('overflow-auto')
    expect(container.classes()).toContain('w-full')
    expect(container.classes()).toContain('relative')
  })
})