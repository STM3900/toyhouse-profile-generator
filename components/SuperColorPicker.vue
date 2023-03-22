<template>
  <ClientOnly>
    <button
      @click="togglePopup"
      class="btn button-color-popup to-exclude"
      type="button"
      :class="`btn btn-${buttonColor}`"
      @focusout="showPopup = false"
      tabindex="0"
    >
      <i :class="`fas fa-${icon}`" :style="{ color: colorIcon }"></i>
      <ColorPicker
        @click="togglePopup"
        class="content-box color-picker"
        :class="{ 'color-popup-show': showPopup }"
        theme="light"
        :color="colorFinal"
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
  baseColor: {
    type: String,
    default: "#AFAFAF",
  }
});

const colorFinal = ref("")

const emit = defineEmits(["colorChanged"]);
const showPopup = ref(false);
const colorIcon = ref("");

onMounted(() => {
  colorIcon.value = props.baseColor
  colorFinal.value = props.baseColor
})

const togglePopup = () => {
  showPopup.value = !showPopup.value
}

const RGBAToHexA = (rgba, forceRemoveAlpha = false) => {
  return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string)) // Converts them to numbers
    .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
    .join("") // Puts the array to togehter to a string
}

const changeColor = (color) => {
  const { r, g, b, a } = color.rgba;
  color.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  color.hex = RGBAToHexA(color.value)

  colorIcon.value = color.hex;
  colorFinal.value = color.hex;
  emit("colorChanged", color.hex);
};
</script>

<style>
/* DANGER : NOT SCOPED */
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
  border: 1px solid #ffffff;

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


</style>
