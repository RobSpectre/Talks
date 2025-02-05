<template lang="pug">
Slide(class='darkgray text-white flex flex-col')
  div(class='w-5/6')
    Table
      TableHeader
        TableRow
          TableHead(
            v-for='header in headers'
            class='uppercase text-white font-medium text-xl'
          ) {{ header }}
      TableBody
        TableRow(
          v-for='key in Object.keys(data)'
        )
          TableCell(class='uppercase font-medium text-xl') {{ key }}
          TableCell(
            v-for='(value, index) in Object.values(data[key])'
          )
            span(
              v-if="isLastColumnPercentChanged && index === Object.values(data[key]).length - 1 && typeof value === 'number'"
              class='text-xl'
              :class="{ 'text-green': value > 0, 'text-red-700': value < 0 }"
            ) {{ value }}
            span.text-xl(v-else) {{ value }}
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

<style lang='sass' scoped>
table
  @apply text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
</style>
