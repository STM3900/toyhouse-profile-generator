<template>
  <!--
    Story block
  -->
  <div class="card mt-1 w-100" style="
        transform: rotate(-0.5deg);
        display: inline-block;
        border-radius: 20px;
      ">
    <div class="card-body" :style="{ 'background': storyBackgroundColor }" style="border-radius: 20px;">
      <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeBackgroundColor"
        class="to-exclude" />
      <p class="hidden-element p-4" :style="{ 'color': storyTextColor }" style="white-space: pre-line;">{{
        storyInputValue }}</p>
      <div class="input-group to-exclude">
        <textarea class="form-control" aria-label="story" placeholder="Write your story here c:"
          style="min-height: 350px;" :style="{ 'color': storyTextColor }" v-model="storyInputValue"></textarea>
        <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeTextColor"
          class="to-exclude" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* dynamic color changing */
const storyBackgroundColor = ref("#ffffff")
const storyTextColor = ref("#000000")


/* Input */
const storyInputValue = ref("")

const changeBackgroundColor = (color) => {
  storyBackgroundColor.value = color
}

const changeTextColor = (color) => {
  storyTextColor.value = color
}
</script>

<style scoped>
.hidden-element {
  display: none;
}
</style>
