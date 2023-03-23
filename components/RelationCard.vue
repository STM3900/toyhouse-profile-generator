<template>
  <div class="relation media my-3 px-3">
    <img
      :src="relationInfo.img"
      class="mr-3"
      style="width: 64px; height: 64px; border-radius: 15px"
      alt="..."
    />
    <div class="media-body">
      <h5 class="mt-0"><a v-if="relationInfo.link" :href="relationInfo.link" target="_blank" :style="{'color': relationInfoTitleColor}">{{ relationInfo.title }}</a><span :style="{'color': relationInfoTitleColor}" v-else>{{ relationInfo.title }}</span></h5>
      <span :style="{'color': relationInfoDescriptionColor}">{{ relationInfo.description }}</span>
    </div>
    <button @click="$emit('deleted')" type="button" class="close to-exclude" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script setup>
const { relationInfo } = defineProps(['relationInfo', 'relationInfoTitleColor', 'relationInfoDescriptionColor'])
const emit = defineEmits(['deleted'])
</script>

<style scoped></style>
