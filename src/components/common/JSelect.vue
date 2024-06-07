<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup v-for="(item, index) in props.dataSource" :key="index">
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple"> Apple </SelectItem>
        <SelectItem value="banana"> Banana </SelectItem>
        <SelectItem value="blueberry"> Blueberry </SelectItem>
        <SelectItem value="grapes"> Grapes </SelectItem>
        <SelectItem value="pineapple"> Pineapple </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const props = defineProps({
  dataSource: Array,
  showLabel: {
    type: Boolean,
    default: false,
  },
});
</script>
