<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="charName">Character name</label>
      <input
        v-model="inputs.title"
        type="text"
        class="form-control"
        id="charName"
        placeholder="Name"
      />
    </div>
    <div class="form-group">
      <label for="charDescription">Character description</label>
      <input
        v-model="inputs.description"
        type="text"
        class="form-control"
        id="charDescription"
        placeholder="Description"
      />
    </div>
    <div class="form-group">
      <label for="profilePic">Character image</label>
      <input
        v-model="inputs.img"
        type="text"
        class="form-control"
        id="profilePic"
        aria-describedby="profilePicHelp"
        placeholder="Link of profile picture"
      />
      <small id="profilePicHelp" class="form-text text-muted"
        >direct link to img is needed!</small
      >
    </div>
    <button type="submit" class="btn btn-light" :disabled="!checkForm">Add</button>
  </form>
</template>

<script setup>
const emit = defineEmits({
  submited: (inputs) => {
    if (inputs.img && inputs.title && inputs.description) {
      return true;
    } else {
      console.warn("Invalid submit event payload!");
      return false;
    }
  },
});

const checkForm = computed(() => {
  return Object.values(inputs.value).every(input => input.trim() !== "");
})

const inputs = ref({
  img: "",
  title: "",
  description: "",
});

const submitForm = () => {
  emit("submited", inputs.value);
};
</script>

<style scoped></style>
