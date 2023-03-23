<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="charName">Character name</label>
      <input v-model="inputs.title" type="text" class="form-control" id="charName" placeholder="Name" />
    </div>
    <div class="form-group">
      <label for="charDescription">Character description</label>
      <input v-model="inputs.description" type="text" class="form-control" id="charDescription"
        placeholder="Description" />
    </div>
    <div class="form-group">
      <label for="charLink">Character page link (optional)</label>
      <input v-model="inputs.link" type="url" class="form-control" id="charLink" placeholder="Link to character page" />
    </div>
    <div class="form-group">
      <label for="profilePic">Character image</label>
      <input v-model="inputs.img" type="text" class="form-control" id="profilePic" aria-describedby="profilePicHelp"
        placeholder="Link of profile picture" />
      <small id="profilePicHelp" class="form-text text-muted">direct link to img is needed!</small>
    </div>
    <button type="submit" class="btn btn-light" :disabled="!checkForm">
      Add
    </button>
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


const inputs = ref({
  img: "",
  title: "",
  description: "",
  link: ""
});

function checkInputValues(inputs) {
  for (const key in inputs) {
    if (key !== "link" && inputs[key] === "") {
      return false;
    }
  }
  return true;
}

const checkForm = computed(() => {
  return checkInputValues(inputs.value)
});

const submitForm = () => {
  emit("submited", inputs.value);
  inputs.value = {
    img: "",
    title: "",
    description: "",
    link: ""
  };
};
</script>

<style scoped></style>
