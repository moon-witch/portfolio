<script lang="ts">
export default {
  props: {
    image: String,
    name: String,
    description: String,
    additional: String,
  },
};
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-lg card-custom">
    <img class="h-32 rounded-2xl w-full object-cover" :src="image" />
    <div class="px-6 py-4">
      <div class="font-bold text mb-2">{{ name }}</div>
      <p class="text-alt">
        {{ description }}
      </p>
      <p class="text-alt pl-4 pt-2">
        {{ additional }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-custom {
  background-color: var(--dark);
}

.text {
  color: var(--primary);
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1px;
}

.text-alt {
  color: var(--light);
  font-weight: 200;
  font-size: 16px;
  letter-spacing: 0.5px;
}
</style>
