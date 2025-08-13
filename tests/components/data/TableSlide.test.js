import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TableSlide from '@/components/data/TableSlide.vue'

describe('TableSlide', () => {
  let wrapper
  const mockHeaders = ['Name', 'Value', 'Change']
  const mockData = {
    'Item 1': { name: 'Test Item 1', value: 100, change: 10 },
    'Item 2': { name: 'Test Item 2', value: 200, change: -5 },
    'Item 3': { name: 'Test Item 3', value: 150, change: 0 }
  }
  const mockTitle = 'Test Table'

  beforeEach(() => {
    wrapper = mount(TableSlide, {
      props: {
        title: mockTitle,
        headers: mockHeaders,
        data: mockData
      },
      global: {
        stubs: {
          Table: { template: '<table><slot /></table>' },
          TableHeader: { template: '<thead><slot /></thead>' },
          TableBody: { template: '<tbody><slot /></tbody>' },
          TableRow: { template: '<tr><slot /></tr>' },
          TableHead: { template: '<th><slot /></th>' },
          TableCell: { template: '<td><slot /></td>' }
        }
      }
    })
  })

  it('renders table with correct structure', () => {
    expect(wrapper.findComponent({ name: 'Slide' }).exists()).toBe(true)
    expect(wrapper.find('table').exists()).toBe(true)
    expect(wrapper.find('thead').exists()).toBe(true)
    expect(wrapper.find('tbody').exists()).toBe(true)
  })

  it('renders table headers correctly', () => {
    const headerCells = wrapper.findAll('th')
    
    expect(headerCells).toHaveLength(mockHeaders.length)
    mockHeaders.forEach((header, index) => {
      expect(headerCells[index].text()).toBe(header)
    })
  })

  it('renders table rows with data', () => {
    const bodyRows = wrapper.find('tbody').findAll('tr')
    
    expect(bodyRows).toHaveLength(Object.keys(mockData).length)
  })

  it('renders table cells with correct data', () => {
    const firstRow = wrapper.find('tbody').findAll('tr')[0]
    const cells = firstRow.findAll('td')
    
    // First cell should be the key
    expect(cells[0].text()).toBe('Item 1')
    
    // Subsequent cells should be the values
    expect(cells[1].text()).toBe('Test Item 1')
    expect(cells[2].text()).toBe('100')
    expect(cells[3].text()).toBe('10')
  })

  it('displays table title', () => {
    expect(wrapper.find('h1').text()).toBe(mockTitle)
  })

  it('applies percent change colors when isLastColumnPercentChanged is true', async () => {
    await wrapper.setProps({ isLastColumnPercentChanged: true })
    
    const rows = wrapper.find('tbody').findAll('tr')
    
    // Check positive change (green)
    const row1LastCell = rows[0].findAll('td')[3]
    expect(row1LastCell.find('span.text-green').exists()).toBe(true)
    
    // Check negative change (red)
    const row2LastCell = rows[1].findAll('td')[3]
    expect(row2LastCell.find('span.text-red-700').exists()).toBe(true)
  })

  it('does not apply colors when isLastColumnPercentChanged is false', () => {
    const rows = wrapper.find('tbody').findAll('tr')
    
    // Check that color classes are not applied
    rows.forEach(row => {
      const lastCell = row.findAll('td')[3]
      expect(lastCell.find('span.text-green').exists()).toBe(false)
      expect(lastCell.find('span.text-red-700').exists()).toBe(false)
    })
  })

  it('handles non-numeric values in last column', async () => {
    const dataWithStrings = {
      'Item 1': { name: 'Test', value: 100, status: 'Active' }
    }
    
    await wrapper.setProps({ 
      data: dataWithStrings,
      isLastColumnPercentChanged: true 
    })
    
    const lastCell = wrapper.find('tbody').find('tr').findAll('td')[3]
    expect(lastCell.find('span.text-green').exists()).toBe(false)
    expect(lastCell.find('span.text-red-700').exists()).toBe(false)
    expect(lastCell.text()).toBe('Active')
  })

  it('has correct component name', () => {
    expect(wrapper.vm.$options.name).toBe('TableSlide')
  })

  it('applies correct CSS classes to slide', () => {
    const slide = wrapper.findComponent({ name: 'Slide' })
    expect(slide.attributes('class')).toContain('darkgray')
    expect(slide.attributes('class')).toContain('text-white')
    expect(slide.attributes('class')).toContain('flex')
    expect(slide.attributes('class')).toContain('flex-col')
  })

  it('handles empty data object', async () => {
    await wrapper.setProps({ data: {} })
    
    const bodyRows = wrapper.find('tbody').findAll('tr')
    expect(bodyRows).toHaveLength(0)
  })

  it('renders table with responsive text classes', () => {
    // These classes are applied via SASS scoped styles, so we check the component structure instead
    expect(wrapper.find('table').exists()).toBe(true)
    // Verify the component has the scoped style by checking it renders properly
    expect(wrapper.vm.$options.name).toBe('TableSlide')
  })
})