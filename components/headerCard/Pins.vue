<template>
  <ClientOnly>
    <div class="my-2 pins-section">
      <!--
        oriantation (put direct link on img)
      -->
      <!-- VALID FLAG IMG  -->
      <div v-for="(pin, index) in pins" class="d-inline mr-1">
        <img v-if="!pin.placeholder" :src="pin.img" alt="" :class="{ blink: pin.isBlinking }" style="
                filter: contrast(0.9) drop-shadow(0 0 0.1rem black);
                opacity: 0.9;
                transform: rotate(5deg);
                border-radius: 50%;
                width: 30px;
                height: 30px;
              " :style="
                !pin.placeholder
                  ? 'filter: contrast(0.9) drop-shadow(0 0 0.1rem black); opacity: 0.9; transform: rotate(5deg);'
                  : 'filter: contrast(0) drop-shadow(0 0 0.1rem black); opacity: 0.2; transform: rotate(-5deg);'
              " @click="togglePopup(index)" />
        <i v-else class="fas fa-circle" @click="togglePopup(index)" :class="{ 'blink-placeholder': pin.isBlinking }"
          style="font-size: 32px; transform: translateY(8px); cursor: pointer;"
          :style="{ 'color': pinPlaceholderColor }"></i>
      </div>
      <SuperColorPicker icon="palette" button-color="dark" base-color="#f0f0f0" @color-changed="changePlaceholderColor"
        class="to-exclude" />
      <aside class="tooltip-custom to-exclude" :class="{ 'tooltip-custom-show': showPopup }">
        <div>
          <img v-for="(pinImg, index) in pinsImg" @click="changePin(index)" :src="pinImg" alt="" />
          <button @click="
            showNestedPopup = !showNestedPopup;
          $refs.inputimg.focus();
                                    " type="button" class="close close-button" aria-label="Close">
            <span aria-hidden="true" class="add"><i class="fas fa-image"></i></span>
          </button>
          <button @click="removeItem()" type="button" class="close close-button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </aside>
      <aside :class="{ 'tooltip-nested-show': showNestedPopup }" class="tooltip-nested to-exclude mt-4">
        <form @submit.prevent="addCustomPin(index)">
          <div class="input-group my-2">
            <input v-model="inputValue" type="text" class="form-control" placeholder="link of image"
              aria-label="link of image" aria-describedby="add-pin" ref="inputimg" />
            <div class="input-group-append">
              <button class="btn btn-outline-dark" type="submit" id="add-pin" :disabled="!inputValue">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </aside>
    </div>
  </ClientOnly>
</template>

<script setup>
const pins = ref([
  {
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1088251770721021952/Mibot_loading.gif",
    placeholder: false,
    isBlinking: false,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259314.png",
    placeholder: false,
    isBlinking: false,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259314.png",
    placeholder: true,
    isBlinking: false,
  },
]);

const pinsImg = ref([
  "https://cdn-icons-png.flaticon.com/512/8259/8259333.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259337.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259340.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259318.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259334.png",
  "https://cdn.discordapp.com/attachments/455791465734602782/1092707781469016074/lesbian_flag.jpg",
  "https://cdn-icons-png.flaticon.com/512/8259/8259314.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259335.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259327.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259310.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259338.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259325.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259323.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259308.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259312.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259316.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259321.png",
  "https://cdn.discordapp.com/attachments/455791465734602782/1092707781225758740/gay_flag.jpg",
  "https://cdn-icons-png.flaticon.com/512/8259/8259336.png",
]);

const showPopup = ref(false);
const showNestedPopup = ref(false);
const selectedIndex = ref();
const inputValue = ref("");

const changePin = (index) => {
  pins.value[selectedIndex.value] = {
    img: pinsImg.value[index],
    placeholder: false,
  };

  showPopup.value = false;
  showNestedPopup.value = false;
  pins.value[index].isBlinking = false;
};

const addCustomPin = (index) => {
  pins.value[selectedIndex.value] = {
    img: inputValue.value,
    placeholder: false,
    isBlinking: false,
  };

  showPopup.value = false;
  showNestedPopup.value = false;
  inputValue.value = "";
  pins.value[index].isBlinking = false;
};

const removeItem = () => {
  pins.value[selectedIndex.value] = {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259314.png",
    placeholder: true,
  };

  showPopup.value = false;
  showNestedPopup.value = false;
  pins.value[index].isBlinking = false;
};

const togglePopup = (index) => {
  if (!showPopup.value) {
    selectedIndex.value = index;
    pins.value[index].isBlinking = true;
  } else {
    selectedIndex.value = null;
    for (let i = 0; i < pins.value.length; i++) {
      pins.value[i].isBlinking = false;
    }
    showNestedPopup.value = false;
  }

  showPopup.value = !showPopup.value;
};

/* dynamic color changing */
const pinPlaceholderColor = ref("#f0f0f0")

const changePlaceholderColor = (color) => {
  pinPlaceholderColor.value = color
}
</script>

<style scoped>
.pins-section {
  position: relative;
}

.pins-section div img:hover {
  cursor: pointer;
}

.tooltip-custom {
  position: absolute;

  width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background: rgba(255, 255, 255, 0.8);
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  display: block;

  opacity: 0;
  cursor: default;
  pointer-events: none;
  transition: 0.3s;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}

.tooltip-custom div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  gap: 10px;
  width: 100%;
}

.tooltip-custom div img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  filter: contrast(0.9) drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.125));
  transition: 0.3s;
}

.tooltip-custom .close-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #e5e5e5;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.tooltip-custom .close-button .add {
  font-size: 16px;
  margin-top: 2px;
}

.tooltip-custom .close-button span {
  margin-top: -5px;
}

.tooltip-custom div img:hover {
  cursor: pointer;
  transform: translateY(-2px);
}

.tooltip-custom div img:active {
  transform: translateY(-2px) scale(0.9);
}

.tooltip-custom-show {
  transition: 0.3s;
  display: block;
  pointer-events: auto;
  opacity: 1;
  margin-top: 20px;
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
}

.tooltip-nested {
  position: absolute;

  width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background: rgba(255, 255, 255, 0.8);
  margin-top: 10px;

  top: 175px;

  opacity: 0;
  cursor: default;
  pointer-events: none;
  transition: 0.3s;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}

.tooltip-nested-show {
  transition: 0.3s;
  display: block;
  pointer-events: auto;
  opacity: 1;
  margin-top: 15px;
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
}

.blink {
  animation: blink 1s ease infinite;
}

.blink-placeholder {
  animation: placeholderblink 1s ease infinite;
}

@keyframes blink {
  0% {
    opacity: 0.9;
    transform: scale(1) rotate(5deg);
  }

  50% {
    opacity: 0.7;
    transform: scale(0.98) rotate(5deg);
  }

  100% {
    opacity: 0.9;
    transform: scale(1) rotate(5deg);
  }
}

@keyframes placeholderblink {
  0% {
    opacity: 1;
    transform: scale(1) translateY(8px);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.98) translateY(8px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(8px);
  }
}
</style>
