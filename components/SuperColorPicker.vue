<template>
  <ClientOnly>
    <button
      @click="togglePopup"
      class="btn button-color-popup"
      type="button"
      :class="`btn btn-${buttonColor}`"
    >
      <i :class="`fas fa-${icon}`" :style="{ color: colorOk }"></i>
      <ColorPicker
        @click="togglePopup"
        class="content-box color-picker"
        :class="{ 'color-popup-show': showPopup }"
        theme="light"
        :color="colorOk"
        @changeColor="changeColor"
        :colors-default="[]"
      />
    </button>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "circle",
  },
  buttonColor: {
    type: String,
    default: "light",
  },
});

const emit = defineEmits(["colorChanged"]);

const colorOk = ref("#59c7f9");
const showPopup = ref(true);

const togglePopup = () => {
  showPopup.value = !showPopup.value
}

const changeColor = (color) => {
  /*
  const { r, g, b, a } = color.rgba;
  color.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  */
  colorOk.value = color.hex;
  emit("colorChanged", color.hex);
};
</script>

<style>
/* DANGER : NOT SCOPED */
.button-color-popup {
}
.content-box {
  width: 220px !important;
}

.color-picker {
  z-index: 9999999 !important;

  position: absolute;
  margin-top: 10px;
  margin-left: -15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(0, 0, 0, 0.125);

  opacity: 0;
  cursor: default;
  pointer-events: none;
  transition: 0.3s;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}

.color-popup-show {
  transition: 0.3s;
  display: block;
  pointer-events: auto;
  opacity: 1;
  margin-top: 15px;
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
}

.color-picker .saturation canvas,
.color-picker .hue canvas,
.color-picker .color-alpha canvas,
.color-picker .color-show canvas {
  border-radius: 10px !important;
}

.color-picker .color-type .name {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}

.color-picker .color-type .value {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}

.color-picker .color-type:not(.color-show + .color-type) {
  display: none;
}
</style>
