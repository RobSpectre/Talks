<template lang="pug">
Slide(class='darkgray text-white flex flex-col')
  div(class='mx-64')
    Table
      TableHeader
        TableRow
          TableHead(
            v-for='header in headers'
            class='uppercase text-white text-4xl'
          ) {{ header }}
      TableBody
        TableRow(
          v-for='key in Object.keys(data)'
        )
          TableCell(class='uppercase font-medium text-2xl') {{ key }}
          TableCell(
            v-for='(value, index) in Object.values(data[key])'
            class='text-2xl'
          )
            span(
              v-if="isLastColumnPercentChanged && index === Object.values(data[key]).length - 1 && typeof value === 'number'"
              :class="{ 'text-green': value > 0, 'text-red-700': value < 0 }"
            ) {{ value }}
            span(v-else) {{ value }}
    h1 {{ title }}
</template>

<script>
import Slide from '@/components/base/Slide.vue'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default {
  name: 'TableSlide',
  components: {
    Slide,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  },
  props: {
    title: String,
    headers: Array,
    data: Object,
    isLastColumnPercentChanged: {
      type: Boolean,
      default: false
    }
  }
}
</script>
