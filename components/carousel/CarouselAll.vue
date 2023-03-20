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
      <a
        v-if="carouselImgs.length > 0"
        v-for="item in carouselImgs"
        class="carousel-item h-100"
        :class="{ active: item.isActive }"
        style="cursor: pointer"
        :href="item.img"
        target="_blank"
      >
        <img
          :src="item.img"
          class="w-100 h-100"
          alt="..."
          style="object-fit: cover; object-position: center top"
        />
      </a>
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
    img: "https://cdn.discordapp.com/attachments/455791465734602782/1087310457322344511/Mibot_parfait.png",
    isActive: true,
  },
  {
    img: "https://f2.toyhou.se/file/f2-toyhou-se/images/61709401_7zhrAIhNS6luk2w.jpg",
    isActive: false,
  },
]);
</script>

<style scoped></style>
