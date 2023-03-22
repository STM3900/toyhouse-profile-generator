<template>
  <div class="card mt-4" style="border-radius: 20px; transform: rotate(2deg)">
    <h5
      class="card-header"
      style="border-top-right-radius: 20px; border-top-left-radius: 20px"
        :style="{ 'color': likeTitleColor, 'background': likeHeaderColor }"
      >
        <i class="fas fa-heart" style="opacity: 0.5"></i>
        Likes
        <SuperColorPicker icon="newspaper" button-color="secondary" base-color="#f7f7f7" @color-changed="changelikeHeaderColor" class="to-exclude" />
        <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changelikeTitleColor" class="to-exclude" />
      </h5>
      <div class="card-body px-3 pt-2 pb-3" :style="{ 'background': likeBackgroundColor }" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
        <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" @color-changed="changelikeBackgroundColor" class="to-exclude" />
        <div class="likes">
          <ul class="list-group list-group-flush">
            <!-- put whathever you want here -->
            <li
              v-for="(item, index) in likeItems"
              class="list-group-item px-0 py-1"
              :style="{ 'color': likeTextColor, 'background': likeBackgroundColor }"
            >
              {{ item }}
              <button
                @click="removeItem(index)"
                type="button"
                class="close to-exclude"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>
          </ul>
        </div>
        <form @submit.prevent="addItem" class="to-exclude">
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
        <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changelikeTextColor" class="to-exclude" />
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
const likeHeaderColor = ref("#f7f7f7")
const likeTitleColor = ref("#000000")
const likeBackgroundColor = ref("#ffffff")
const likeTextColor = ref("#000000")

const changelikeHeaderColor = (color) => {
  likeHeaderColor.value = color
}

const changelikeTitleColor = (color) => {
  likeTitleColor.value = color
}

const changelikeBackgroundColor = (color) => {
  likeBackgroundColor.value = color
}

const changelikeTextColor = (color) => {
  likeTextColor.value = color
}
</script>

<style scoped></style>
