<template>
  <div class="grid gap-2">
    <FormField v-slot="{ componentField }" :name="props.name">
      <FormItem>
        <FormLabel>{{ props.label }}</FormLabel>
        <FormControl>
          <slot :componentField="componentField"></slot>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-vue-next';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Button } from '@/components/ui/button';

const props = defineProps({
  name: String,
  label: String,
  placeholder: String,
});
</script>

<style></style>
