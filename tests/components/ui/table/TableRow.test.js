import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TableRow from '@/components/ui/table/TableRow.vue'

// Mock the utils function
vi.mock('@/lib/utils', () => ({
  cn: (...classes) => classes.filter(Boolean).join(' ')
}))

describe('TableRow', () => {
  it('renders tr element with default classes', () => {
    const wrapper = mount(TableRow)
    const tr = wrapper.find('tr')
    
    expect(tr.exists()).toBe(true)
    expect(tr.classes()).toContain('border-b')
    expect(tr.classes()).toContain('transition-colors')
    expect(tr.classes()).toContain('hover:bg-muted/50')
    expect(tr.classes()).toContain('data-[state=selected]:bg-muted')
  })

  it('applies custom class when provided', () => {
    const customClass = 'custom-row-class'
    const wrapper = mount(TableRow, {
      props: {
        class: customClass
      }
    })
    
    const tr = wrapper.find('tr')
    expect(tr.classes()).toContain(customClass)
  })

  it('renders slot content inside tr', () => {
    const slotContent = '<td>Cell 1</td><td>Cell 2</td>'
    const wrapper = mount(TableRow, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.html()).toContain('Cell 1')
    expect(wrapper.html()).toContain('Cell 2')
    expect(wrapper.findAll('td')).toHaveLength(2)
  })

  it('combines default and custom classes correctly', () => {
    const customClass = 'my-custom-class'
    const wrapper = mount(TableRow, {
      props: {
        class: customClass
      }
    })
    
    const tr = wrapper.find('tr')
    expect(tr.classes()).toContain('border-b')
    expect(tr.classes()).toContain('transition-colors')
    expect(tr.classes()).toContain(customClass)
  })
})