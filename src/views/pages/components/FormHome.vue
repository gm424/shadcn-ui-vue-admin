<template>
  <div>
    <JForm :validator="validator" ref="JFormRef" @submit="Submit">
      <JFormItem label="用户名" name="username">
        <template v-slot="{ componentField }">
          <Input
            type="username"
            v-model="formState.username"
            v-bind="componentField"
            :placeholder="$t('user.tip.usernameHolder')"
          />
        </template>
      </JFormItem>
      <JFormItem label="密码" name="password">
        <template v-slot="{ componentField }">
          <Input
            v-model="formState.password"
            v-bind="componentField"
            type="password"
            :placeholder="$t('user.tip.passwordHolder')"
          />
        </template>
      </JFormItem>

      <Button class="mt-3 w-full" :disabled="loading" type="submit">
        <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
        {{ $t('common.common.signIn') }}
      </Button>
    </JForm>
  </div>
</template>

<script setup>
import * as z from 'zod';
import { inject, ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import JForm from '@/components/common/JForm.vue';
import JFormItem from '@/components/common/JFormItem.vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-vue-next';
const $t = inject('$t');
let loading = ref(false);
const JFormRef = ref('');
const validator = z.object({
  username: z
    .string({ required_error: $t('user.validator.usernameRequired') })
    .min(2, $t('user.validator.usernameLengthLeast'))
    .max(20, $t('user.validator.usernameLengthMost')),
  password: z
    .string({ required_error: $t('user.validator.passwordRequired') })
    .min(6, $t('user.validator.passwordLengthLeast'))
    .max(20, $t('user.validator.passwordLengthMost')),
});
const formState = ref({ username: undefined, password: undefined });
const Submit = () => {
  console.log('提交', formState.value);
};
</script>

<style></style>
