<template>
  <div class="card mt-4" style="border-radius: 20px; transform: rotate(-2deg)">
    <h5
      class="card-header"
      style="border-top-right-radius: 20px; border-top-left-radius: 20px"
      :style="{'color' : dislikeTitleColor, 'background' : dislikeHeaderColor}"
    >
      <i class="fas fa-heart-broken" style="opacity: 0.5"></i>
      Dislikes
      <SuperColorPicker icon="newspaper" button-color="secondary" base-color="#f7f7f7" @color-changed="changeDislikeHeaderColor" />
      <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeDislikeTitleColor" />
    </h5>
    <div class="card-body px-3 pt-2 pb-3" :style="{'background': dislikeBackgroundColor}" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
      <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" @color-changed="changeDislikeBackgroundColor" />
      <div class="dislikes">
        <ul class="list-group list-group-flush">
          <!-- put whathever you want here -->
          <li
            v-for="(item, index) in likeItems"
            class="list-group-item px-0 py-1"
            :style="{'color': dislikeTextColor, 'background': dislikeBackgroundColor}"
          >
            {{ item }}
            <button
              @click="removeItem(index)"
              type="button"
              class="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        </ul>
      </div>
      <form @submit.prevent="addItem">
        <div class="input-group my-2">
          <input
            v-model="inputValue"
            type="text"
            class="form-control"
            placeholder="thing"
            aria-label="thing"
            aria-describedby="add-like"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              id="add-like"
              :disabled="!inputValue"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </form>
      <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeDislikeTextColor" />
    </div>
  </div>
</template>

<script setup>
const likeItems = ref([]);
const inputValue = ref("");

const addItem = () => {
  likeItems.value.push(inputValue.value);
  inputValue.value = "";
};

const removeItem = (index) => {
  likeItems.value.splice(index, 1);
};

/* dynamic color changing */
const dislikeHeaderColor = ref("#f7f7f7")
const dislikeTitleColor = ref("#000000")
const dislikeBackgroundColor = ref("#ffffff")
const dislikeTextColor = ref("#000000")

const changeDislikeHeaderColor = (color) => {
  dislikeHeaderColor.value = color
}

const changeDislikeTitleColor = (color) => {
  dislikeTitleColor.value = color
}

const changeDislikeBackgroundColor = (color) => {
  dislikeBackgroundColor.value = color
}

const changeDislikeTextColor = (color) => {
  dislikeTextColor.value = color
}
</script>

<style scoped></style>
