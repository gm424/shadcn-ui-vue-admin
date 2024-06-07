<template>
  <div>
    <JDataTable :data="data" :columns="columns" :pagination="pagination" @change="handleTableChange"></JDataTable>
  </div>
</template>

<script setup>
import { ref, h } from 'vue';
import JDataTable from '@/components/common/JDataTable.vue';
import { JMixinTable } from '@/mixins/JMixinTable.js';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import DropdownAction from '@/components/DataTableDemoColumn.vue';
const { mixinData, loadData } = JMixinTable();
const url = ref({
  list: '',
});
const data = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
];

const columns = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked: table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: 'Select all',
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        ariaLabel: 'Select row',
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-left' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return h(Input, { class: 'text-left font-medium' }, formatted);
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      console.log('payment', payment);
      return h(DropdownAction, {
        payment,
      });
    },
  },
];
const pageSize = ref(10);
const pageNum = ref(1);
const pagination = {
  total: 200,
  defaultPage: 1,
};
// 可以在这做页面重新加载
const handleTableChange = (e) => {
  console.log('返回的选择的那个页面', e);
  pageNum.value = e;
};
</script>

<style></style>
