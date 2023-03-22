<template>
  <!--
                Story block
              -->
  <div
    class="card mt-1"
    style="
      transform: rotate(-0.5deg);
      display: inline-block;
      border-radius: 20px;
      width: 1000px;
    "
  >
      <div class="card-body" :style="{ 'background': storyBackgroundColor }" style="border-radius: 20px;">
        <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeBackgroundColor" class="to-exclude" />
        <div class="input-group to-exclude">
          <textarea
            class="form-control"
            aria-label="story"
            placeholder="Write your story here c:"
            style="min-height: 350px;"
            :style="{'color': storyTextColor}"
          ></textarea>
          <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeTextColor" class="to-exclude" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* dynamic color changing */
const storyBackgroundColor = ref("#ffffff")
const storyTextColor = ref("#000000")

const changeBackgroundColor = (color) => {
  storyBackgroundColor.value = color
}

const changeTextColor = (color) => {
  storyTextColor.value = color
}
</script>

<style scoped></style>
