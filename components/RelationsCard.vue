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
			<button @click="$emit('relationCardDeleted')" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </h5>
    <div class="card-body py-20">
			<RelationCard v-for="(relation, index) in relations" :relationInfo="relation" @deleted="deleteRelation(index)" />
			<RelationCardForm @submited="addRelation" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["relationCardDeleted"]);

const relations = ref([
  {
    title: "Some dude",
    description: "omg the description woaaaa",
    img: "https://images-ext-2.discordapp.net/external/-nZJnhgyniLrhlV1h0Wp6RmCo8r1joceIug-V5CGMac/https/pbs.twimg.com/media/FrPxnYdXsAEsjG9.jpg?width=400&height=400"
  }
]);

const addRelation = (relation) => {
	relations.value.push(  {
    title: relation.title,
    img:  relation.img,
    description: relation.description,
  })
}

const deleteRelation = (index) => {
  relations.value.splice(index, 1)
}
</script>

<style scoped></style>
