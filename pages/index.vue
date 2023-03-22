<template>
  <div class="content" :style="{ 'background': mainBackgroundColor }" style="padding: 50px 0 100px 0;">
    <!--
        Code by Théo (STM3900)
        DONT USE IN WYSIWYG PLS AAAAAAAAA
      -->
    <div class="d-flex justify-content-center">
      <div style="width: 1000px" class="mx-lg-5 mx-md-5 mx-sm-5 mx-3">
        <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff"
          @color-changed="changeBackgroundColor" class="to-exclude" />
        <!--
            INTRO CARD
          -->
        <HeaderCardAll style="z-index: 10;" />
        <!--
            Main section
          -->
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade active show" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
            <div class="container px-0 mx-0">
              <div class="row">
                <div class="col-lg-8 d-block col-12 pb-4 pb-lg-0" style="height: 670px;">
                  <CarouselAll />
                  <button @click="exportHTML" type="button" class="btn btn-info to-exclude">Render HTML</button>
                </div>
                <div class="col infos">
                  <LikeCard style="z-index: 9;" />
                  <LikeCardDislikesCard style="z-index: 8;" />

                  <RelationsCard v-if="enableRelations" @relationCardDeleted="enableRelations = false" />
                  <button v-else @click="enableRelations = true" type="button" class="btn btn-light mt-4 to-exclude">
                    Add relation card
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--
              Story tab
            -->
          <div class="tab-pane fade" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
            <StoryTriggerWarning />
            <StoryCard />
            <button @click="exportHTML" type="button" class="btn btn-info to-exclude mt-3">Render HTML</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const enableRelations = ref(true);

/* dynamic color changing */
const mainBackgroundColor = ref("#ffffff")

const changeBackgroundColor = (color) => {
  mainBackgroundColor.value = color
}

const html = ref('');

const exportHTML = () => {
  const documentHtml = document.querySelector(".content")
  const clone = documentHtml.cloneNode(true);
  const toExclude = clone.querySelectorAll(".to-exclude");
  toExclude.forEach((el) => el.parentNode.removeChild(el));
  const html = clone.outerHTML;
  console.log(html); // Le code HTML exporté sans les éléments à exclure
  navigator.clipboard.writeText(html);
}
</script>

<style scoped>
.content {
  padding: 50px 0 100px 0;
}
</style>
