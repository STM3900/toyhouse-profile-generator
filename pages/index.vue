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
            <div class="container">
              <div class="row">
                <!--
                    For trigger warnings
                  -->
                <div
                  class="alert alert-danger alert-dismissible fade show mt-1 col-12 col-lg-6"
                  role="alert"
                  style="
                    transform: rotate(0.5deg);
                    border-radius: 15px;
                    display: inline-block;
                  "
                >
                  <i class="fas fa-exclamation-triangle"></i> TW parental abuse
                </div>
              </div>
            </div>
            <!--
                Story block
              -->
            <div
              class="card mt-1"
              style="
                transform: rotate(-0.5deg);
                display: inline-block;
                border-radius: 20px;
              "
            >
              <div class="card-body">
                <p style="line-height: 25px; content: ''" class="p-4">
                  He was born in a rich family and is the twin of Laï.<br /><br />His
                  parent didn't expected twins and so they valued one more than
                  the other to "take care of the legacy". His parents never
                  cared for him and he was mostly seen as a nuisance to them.
                  But Laï was always so kind and adorable to him despite all of
                  that. And so he always took care of her and stayed by her side
                  no matter what.<br /><br />
                  When he was in preschool he met Cléo in the parc and they
                  quickly became inseparable. He spent most of his time at
                  Cléo's house since his parents didn't care about him but
                  Cléo's parents did and they listened to him. They quickly
                  became familly to him. Then Laï came out as trans to him and
                  he 100% supported her and he helped her became the one that
                  she is now.<br /><br />They got kicked out of their home not
                  so long after and with the money that Laï make as an idol they
                  quickly found an appartment in the same building as Coralie.
                  He befriended Coralie in high-school and he's a Coraïl shipper
                  since the day they met-
                </p>
              </div>
            </div>
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
