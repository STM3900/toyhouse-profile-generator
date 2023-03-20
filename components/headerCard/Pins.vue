<template>
  <div class="my-2 pins-section">
    <!--
                          oriantation (put direct link on img)
                        -->
    <!-- VALID FLAG IMG  -->
    <div v-for="(pin, index) in pins" class="d-inline mr-1">
      <img
        :src="pin.img"
        alt=""
        width="30px"
        height="30px"
        style="
          filter: contrast(0.9) drop-shadow(0 0 0.1rem black);
          opacity: 0.9;
          transform: rotate(5deg);
          border-radius: 50%;
        "
        :style="
          !pin.placeholder
            ? 'filter: contrast(0.9) drop-shadow(0 0 0.1rem black); opacity: 0.9; transform: rotate(5deg);'
            : 'filter: contrast(0) drop-shadow(0 0 0.1rem black); opacity: 0.2; transform: rotate(-5deg);'
        "
        @click="togglePopup(index)"
      />
    </div>
    <aside class="tooltip-custom" :class="{ 'tooltip-custom-show': showPopup }">
      <div>
        <img
          v-for="(pinImg, index) in pinsImg"
          @click="changePin(index)"
          :src="pinImg"
          alt=""
        />
        <button
          @click="showNestedPopup = !showNestedPopup; $refs.inputimg.focus();"
          type="button"
          class="close close-button"
          aria-label="Close"
        >
          <span aria-hidden="true" class="add"
            ><i class="fas fa-plus"></i
          ></span>
        </button>
        <button
          @click="removeItem()"
          type="button"
          class="close close-button"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </aside>
    <aside
      :class="{ 'tooltip-nested-show': showNestedPopup }"
      class="tooltip-nested"
    >
      <form @submit.prevent="addCustomPin(index)">
        <div class="input-group my-2">
          <input
            v-model="inputValue"
            type="text"
            class="form-control"
            placeholder="link of image"
            aria-label="link of image"
            aria-describedby="add-pin"
            ref="inputimg"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              id="add-pin"
              :disabled="!inputValue"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </form>
    </aside>
  </div>
</template>

<script setup>
const pins = ref([
  {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259335.png",
    placeholder: false,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259335.png",
    placeholder: true,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259335.png",
    placeholder: true,
  },
]);

const pinsImg = ref([
  "https://cdn-icons-png.flaticon.com/512/8259/8259333.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259337.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259340.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259318.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259334.png",
  "https://cdn-icons-png.flaticon.com/512/8259/8259331.png",
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
  "https://cdn-icons-png.flaticon.com/512/8259/8259329.png",
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
};

const addCustomPin = (index) => {
  pins.value[selectedIndex.value] = {
    img: inputValue.value,
    placeholder: false,
  };

  showPopup.value = false;
  showNestedPopup.value = false;
  inputValue.value = ""
};

const removeItem = () => {
  pins.value[selectedIndex.value] = {
    img: "https://cdn-icons-png.flaticon.com/512/8259/8259314.png",
    placeholder: true,
  };

  showPopup.value = false;
};

const togglePopup = (index) => {
  if (!showPopup.value) {
    selectedIndex.value = index;
  } else {
    selectedIndex.value = null;
  }

  showPopup.value = !showPopup.value;
};
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
</style>
