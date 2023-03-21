<template>
  <ClientOnly>
    <div>
      <button @click="showPopup = !showPopup" type="button button-color-popup" class="btn btn-light">
        <i :class="`fas fa-${icon}`" :style="{ color: colorOk }"></i>
      </button>
      <ColorPicker
        class="content-box color-picker"
        :class="{ 'color-popup-show': showPopup }"
        theme="light"
        :color="colorOk"
        @changeColor="changeColor"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "circle"
  }
})

const colorOk = ref("#59c7f9");
const showPopup = ref(false);

const changeColor = (color) => {
  /*
  const { r, g, b, a } = color.rgba;
  color.value = `rgba(${r}, ${g}, ${b}, ${a})`;
  */
  colorOk.value = color.hex;
};
</script>

<style scoped>
.button-color-popup {
  display: inline-block !important;
}
.content-box {
  width: 220px !important;
}

.color-picker {
  position: absolute;
  margin-top: 10px;

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
</style>
