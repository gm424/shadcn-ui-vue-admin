import { ref, onMounted } from 'vue';

export function JMixinTable() {
  const mixinData = ref('This is data from composable');

  const loadData = () => {
    console.log('This is a method from composable');
  };

  onMounted(() => {
    console.log('Composable onMounted hook called');
    loadData();
  });

  return {
    mixinData,
    loadData,
  };
}
