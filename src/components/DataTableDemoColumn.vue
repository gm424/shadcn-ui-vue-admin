<script setup>
import { MoreHorizontal } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const props = defineProps({
  payment: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
    }),
    validator: function (value) {
      return typeof value.id === 'string';
    },
  },
});
const copy = (id) => {
  console.log('复制id', id);
  navigator.clipboard.writeText(id);
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="copy(props.payment.id)"> 编辑 </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>详情</DropdownMenuItem>
      <DropdownMenuItem>删除</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
