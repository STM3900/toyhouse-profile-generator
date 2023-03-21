<template>
  <div class="card mt-4" style="border-radius: 20px; transform: rotate(2deg)">
    <h5
      class="card-header"
      style="border-top-right-radius: 20px; border-top-left-radius: 20px"
    >
      <i class="fas fa-heart" style="opacity: 0.5"></i>
      Likes
      <SuperColorPicker icon="newspaper" button-color="light" />
      <SuperColorPicker icon="font" button-color="light" />
    </h5>
    <div class="card-body px-3 pt-2 pb-3">
      <SuperColorPicker icon="chess-board" button-color="light" />
      <div class="dislikes">
        <ul class="list-group list-group-flush">
          <!-- put whathever you want here -->
          <li
            v-for="(item, index) in likeItems"
            class="list-group-item px-0 py-1"
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
            <SuperColorPicker icon="chess-board" button-color="light" />
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
</script>

<style scoped></style>
