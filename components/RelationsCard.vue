<template>
  <div
    class="relations card mt-4"
    style="border-radius: 20px; transform: rotate(2deg)"
  >
    <h5
      class="card-header"
      style="border-top-right-radius: 20px; border-top-left-radius: 20px"
    >
      <i class="fas fa-user-friends" style="opacity: 0.5"></i>
      Relations
      <SuperColorPicker icon="newspaper" button-color="secondary" base-color="#f7f7f7" />
      <SuperColorPicker icon="font" button-color="light" base-color="#000000" />
      <button
        @click="$emit('relationCardDeleted')"
        type="button"
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </h5>
    <div class="card-body py-20">
      <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" />
      <RelationCard
        v-for="(relation, index) in relations"
        :relationInfo="relation"
        @deleted="deleteRelation(index)"
      />
      <RelationCardForm @submited="addRelation" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["relationCardDeleted"]);

const relations = ref([
  {
    title: "Name",
    description: "description",
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1087278797621039144/Mibot_happy.jpg",
  },
]);

const addRelation = (relation) => {
  relations.value.push({
    title: relation.title,
    img: relation.img,
    description: relation.description,
  });
};

const deleteRelation = (index) => {
  relations.value.splice(index, 1);
};
</script>

<style scoped></style>
