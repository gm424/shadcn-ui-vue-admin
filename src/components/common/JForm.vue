<template>
  <div class="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
      <form @submit="onSubmit">
        <slot></slot>
      </form>
    </div>
  </div>

  <div class="grid gap-6"></div>
</template>

<script setup>
import { inject, ref, defineExpose } from 'vue';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-vue-next';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { Button } from '@/components/ui/button';
const props = defineProps({
  validator: Object,
});
const emit = defineEmits(['Submit']);
const $t = inject('$t');
let loading = ref(false);
const formState = ref({ username: undefined, password: undefined });

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(props.validator),
});

const onSubmit = handleSubmit(() => {
  emit('Submit');
});
</script>
