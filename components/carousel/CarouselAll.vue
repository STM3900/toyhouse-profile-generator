<template>
  <!--
                      Refs img carousel
                    -->
  <div id="refs-img" class="carousel slide w-100 h-100" data-ride="carousel" style="border-radius: 20px;">
    <ol class="carousel-indicators">
      <li v-if="carouselImgs.length > 0" v-for="(item, index) in carouselImgs" data-target="#refs-img" :data-slide-to="0"
        :class="{ active: item.isActive }"></li>
      <li v-else data-target="#refs-img" :data-slide-to="0" class="active"></li>
    </ol>
    <!--
      Here you can add or remove img
      use DIRECT LINK of img
    -->
    <div class="carousel-inner h-100" style="border-radius: 20px">
      <div v-if="carouselImgs.length > 0" v-for="(item, index) in carouselImgs" class="carousel-item h-100"
        :class="{ active: item.isActive }" :href="item.img" target="_blank" style="width: 100%;">
        <div class="custom-delete to-exclude">
          <button @click="removeImg(index)" type="button" class="btn btn btn-light">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <img :src="item.img" alt="..." class="w-100 h-100"
          style="object-fit: cover; object-position: center top; width: 100%; height: 100%;" />
      </div>
      <div v-else class="carousel-item h-100 active">
        <img src="http://tsr-industrie.fr/wp-content/uploads/2016/04/ef3-placeholder-image.jpg" class="w-100 h-100"
          alt="..." style="object-fit: cover; object-position: center top" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#refs-img" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#refs-img" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div class="to-exclude">
    <form @submit.prevent="addImg">
      <div class="input-group my-2">
        <input v-model="inputValue" type="text" class="form-control" placeholder="direct link of image"
          aria-label="direct link of image" aria-describedby="add-like" />
        <div class="input-group-append">
          <button class="btn btn-outline-dark" type="submit" id="add-like" :disabled="!inputValue">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const carouselImgs = ref([
  {
    img: "https://cdn.discordapp.com/attachments/971143024988020837/1087394283855822888/image.png",
    isActive: true,
  },
  {
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1087314148490219590/Mibot_parfait_-_Copie.png",
    isActive: false,
  },
]);

const inputValue = ref("");

const removeImg = (index) => {
  const isLast = index == carouselImgs.value.length - 1;
  carouselImgs.value.splice(index, 1);

  // Je sais pas pourquoi y'a un comportement super chelou avec le dernier element
  // Du coup j'ai fait ça mais c'est carrement degueu
  if (isLast) {
    const firstCarouselImg = document.querySelector(".carousel-item");
    firstCarouselImg.classList.add("active");
  } else {
    carouselImgs.value[0].isActive = true;
  }
};

const addImg = () => {
  const isActive = carouselImgs.value.length == 0;
  carouselImgs.value.push({
    img: inputValue.value,
    isActive: isActive,
  });

  inputValue.value = "";
};
</script>

<style scoped>
.custom-delete {
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
}

.custom-delete button {
  cursor: pointer;
  margin-bottom: 50px;
}
</style>
