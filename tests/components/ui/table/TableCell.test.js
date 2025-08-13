import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TableCell from '@/components/ui/table/TableCell.vue'

// Mock the utils function
vi.mock('@/lib/utils', () => ({
  cn: (...classes) => classes.filter(Boolean).join(' ')
}))

describe('TableCell', () => {
  it('renders td element with default classes', () => {
    const wrapper = mount(TableCell)
    const td = wrapper.find('td')
    
    expect(td.exists()).toBe(true)
    expect(td.classes()).toContain('p-2')
    expect(td.classes()).toContain('align-middle')
  })

  it('applies custom class when provided', () => {
    const customClass = 'custom-cell-class'
    const wrapper = mount(TableCell, {
      props: {
        class: customClass
      }
    })
    
    const td = wrapper.find('td')
    expect(td.classes()).toContain(customClass)
  })

  it('renders slot content inside td', () => {
    const slotContent = 'Table Cell Content'
    const wrapper = mount(TableCell, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.text()).toBe(slotContent)
  })

  it('handles complex slot content', () => {
    const slotContent = '<span class="bold">Bold Text</span><br><em>Italic Text</em>'
    const wrapper = mount(TableCell, {
      slots: {
        default: slotContent
      }
    })
    
    expect(wrapper.html()).toContain('Bold Text')
    expect(wrapper.html()).toContain('Italic Text')
    expect(wrapper.find('span.bold').exists()).toBe(true)
    expect(wrapper.find('em').exists()).toBe(true)
  })

  it('combines default and custom classes correctly', () => {
    const customClass = 'text-center font-bold'
    const wrapper = mount(TableCell, {
      props: {
        class: customClass
      }
    })
    
    const td = wrapper.find('td')
    expect(td.classes()).toContain('p-2')
    expect(td.classes()).toContain('align-middle')
    expect(td.classes()).toContain('text-center')
    expect(td.classes()).toContain('font-bold')
  })

  it('includes checkbox-related utility classes', () => {
    const wrapper = mount(TableCell)
    const td = wrapper.find('td')
    
    // Check that the complex selector classes are present
    const classString = td.element.className
    expect(classString).toContain('[&:has([role=checkbox])]:pr-0')
    expect(classString).toContain('[&>[role=checkbox]]:translate-y-0.5')
  })
})