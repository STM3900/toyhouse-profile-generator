<template>
  <div class="content">
    <!--
        Code by Théo (STM3900)
        DONT USE IN WYSIWYG PLS AAAAAAAAA
      -->
    <div class="d-flex justify-content-center">
      <div style="max-width: 1000px">
        <!--
            INTRO CARD
          -->
        <HeaderCardAll class="z-top" />
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
                  <LikeCard />
                  <LikeCardDislikesCard />

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

// https://f2.toyhou.se/file/f2-toyhou-se/images/62415424_wRLztgy4rdOGtD9.png
</script>

<style scoped>
.content {
  margin: 50px 0;
}

.z-top {
  z-index: 10;
}

.z-bottom {
  z-index: 1;
}
</style>
