<template>
  <!--
                      Refs img carousel
                    -->
  <div
    id="refs-img"
    class="carousel slide w-100 h-100"
    data-ride="carousel"
    style="border-radius: 20px"
  >
    <ol class="carousel-indicators">
      <li
        v-if="carouselImgs.length > 0"
        v-for="(item, index) in carouselImgs"
        data-target="#refs-img"
        :data-slide-to="0"
        :class="{ active: item.isActive }"
      ></li>
      <li v-else data-target="#refs-img" :data-slide-to="0" class="active"></li>
    </ol>
    <!--
      Here you can add or remove img
      use DIRECT LINK of img
    -->
    <div class="carousel-inner h-100" style="border-radius: 20px">
      <div
        v-if="carouselImgs.length > 0"
        v-for="(item, index) in carouselImgs"
        class="carousel-item h-100"
        :class="{ active: item.isActive }"
        :href="item.img"
        target="_blank"
      >
        <div class="custom-delete">
          <button
            @click="removeImg(index)"
            type="button"
            class="btn btn btn-light"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <img
          :src="item.img"
          class="w-100 h-100"
          alt="..."
          style="object-fit: cover; object-position: center top"
        />
      </div>
      <div v-else class="carousel-item h-100 active">
        <img
          src="https://www.ville-sathonaycamp.fr/wp-content/uploads/2021/06/placeholder-1.png"
          class="w-100 h-100"
          alt="..."
          style="object-fit: cover; object-position: center top"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#refs-img"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#refs-img"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script setup>
const carouselImgs = ref([
  {
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1087314148490219590/Mibot_parfait_-_Copie.png",
    isActive: true,
  },
  {
    img: "https://f2.toyhou.se/file/f2-toyhou-se/images/61709401_7zhrAIhNS6luk2w.jpg",
    isActive: false,
  },
  {
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1087319821840023592/Eau.png",
    isActive: false,
  },
]);

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
