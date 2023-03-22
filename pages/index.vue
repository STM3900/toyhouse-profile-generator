<template>
  <div class="content" :style="{'background': mainBackgroundColor}">
    <!--
        Code by Théo (STM3900)
        DONT USE IN WYSIWYG PLS AAAAAAAAA
      -->
    <div class="d-flex justify-content-center">
      <div style="max-width: 1000px">
        <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" @color-changed="changeBackgroundColor" />
        <!--
            INTRO CARD
          -->
        <HeaderCardAll class="z-top" style="z-index: 10;" />
        <!--
            Main section
          -->
        <div class="tab-content z-bottom" id="nav-tabContent">
          <div
            class="tab-pane fade active show"
            id="nav-about"
            role="tabpanel"
            aria-labelledby="nav-about-tab"
          >
            <div class="container px-0">
              <div class="row">
                <div
                  class="col-lg-8 d-block col-12 pb-4 pb-lg-0"
                  style="height: 670px"
                >
                  <CarouselAll />
                </div>
                <div class="col infos">
                  <LikeCard style="z-index: 9;"  />
                  <LikeCardDislikesCard style="z-index: 8;"  />

                  <RelationsCard
                    v-if="enableRelations"
                    @relationCardDeleted="enableRelations = false"
                  />
                  <button
                    v-else
                    @click="enableRelations = true"
                    type="button"
                    class="btn btn-light mt-4"
                  >
                    Add relation card
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--
              Story tab
            -->
          <div
            class="tab-pane fade"
            id="nav-story"
            role="tabpanel"
            aria-labelledby="nav-story-tab"
          >
            <StoryTriggerWarning />
            <StoryCard />
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
</script>

<style scoped>
.content {
  padding: 50px 0 100px 0;
}
</style>
