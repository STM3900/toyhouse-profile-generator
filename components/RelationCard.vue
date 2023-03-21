<template>
  <div class="relation media my-3 px-3">
    <img
      :src="relationInfo.img"
      class="mr-3"
      style="width: 64px; height: 64px; border-radius: 15px"
      alt="..."
    />
    <div class="media-body">
      <h5 class="mt-0" :style="{'color': relationInfoTitleColor}">{{ relationInfo.title }} <SuperColorPicker icon="font" button-color="light" base-color="#000000" @colorChanged="changeInfoTitleColor" /></h5>
      <span :style="{'color': relationInfoDescriptionColor}">{{ relationInfo.description }} <SuperColorPicker icon="font" button-color="light" base-color="#000000" @colorChanged="changeInfoDescriptionColor" /></span>
    </div>
    <button @click="$emit('deleted')" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script setup>
const { relationInfo } = defineProps(['relationInfo'])
const emit = defineEmits(['deleted'])

const relationInfoTitleColor = ref("#000000")
const relationInfoDescriptionColor = ref("#000000")

const changeInfoTitleColor = (color) => {
  relationInfoTitleColor.value = color;
}

const changeInfoDescriptionColor = (color) => {
  relationInfoDescriptionColor.value = color
}
</script>

<style scoped></style>
