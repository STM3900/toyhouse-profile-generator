<template>
  <div
    class="relations card mt-4"
    style="border-radius: 20px; transform: rotate(2deg)"
  >
    <h5
      class="card-header"
      style="border-top-right-radius: 20px; border-top-left-radius: 20px"
      :style="{'color': relationCardTitleColor, 'background': relationCardHeaderColor}"
    >
      <i class="fas fa-user-friends" style="opacity: 0.5"></i>
      Relations
      <SuperColorPicker icon="newspaper" button-color="dark" base-color="#f7f7f7" @color-changed="changeRelationCardHeaderColor" class="to-exclude" />
      <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeRelationCardTitleColor" class="to-exclude" />
      <button
        @click="$emit('relationCardDeleted')"
        type="button to-exclude"
        class="close"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </h5>
    <div class="card-body py-20" :style="{'background': relationCardBackgroundColor}" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
      <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeRelationCardBackgroundColor" class="to-exclude"/>
      <RelationCard
        v-for="(relation, index) in relations"
        :relationInfo="relation"
        @deleted="deleteRelation(index)"
      />
      <RelationCardForm class="to-exclude" @submited="addRelation" />
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

/* dynamic color changing */
const relationCardTitleColor = ref("#000000")
const relationCardHeaderColor = ref("#f7f7f7")
const relationCardBackgroundColor = ref("#ffffff")

const changeRelationCardTitleColor = (color) => {
  relationCardTitleColor.value = color
}

const changeRelationCardHeaderColor = (color) => {
  relationCardHeaderColor.value = color
}

const changeRelationCardBackgroundColor = (color) => {
  relationCardBackgroundColor.value = color
}
</script>

<style scoped></style>
