<template>
  <div class="relation media my-3 px-3">
    <img
      :src="relationInfo.img"
      class="mr-3"
      style="width: 64px; height: 64px; border-radius: 15px"
      alt="..."
    />
    <div class="media-body">
      <h5 class="mt-0">{{ relationInfo.title }} <SuperColorPicker icon="font" button-color="light" /></h5>
      {{ relationInfo.description }} <SuperColorPicker icon="font" button-color="light" />
    </div>
    <button @click="$emit('deleted')" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script setup>
const { relationInfo } = defineProps(['relationInfo'])
const emit = defineEmits(['deleted'])
</script>

<style scoped></style>
