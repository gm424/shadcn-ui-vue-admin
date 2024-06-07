<template>
  <div>
    <IButton
      :color="props.color"
      :loading="props.loading"
      :round="props.round"
      :type="props.type"
      :size="props.size"
      :disabled="props.disabled"
      @click="emitClick"
    >
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
        <slot name="icon"></slot>
        <slot name="loading"></slot>
        <slot></slot>
      </div>
    </IButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IButton from '@/ui/button/button.vue';

const props = defineProps({
  color: String,
  loading: Boolean,
  text: String,
  round: Boolean,
  type: String,
  size: String,
  disabled: Boolean,
});

const emit = defineEmits(['click']);

const emitClick = () => {
  emit('click', 'e');
};
</script>

<style></style>
