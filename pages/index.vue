<template>
  <div class="content" :style="{ 'background': mainBackgroundColor }" style="padding: 50px 0 100px 0;">
    <!--
        Code by Théo (STM3900)
        Made with ToyHousePG (also by Théo (me (not you)))
        DONT USE IN WYSIWYG PLS AAAAAAAAA
        USE INSTEAD THE ONLINE GENERATOR PLS I SPEND LIKE 25 HOURS MAKING THAT (im tired)
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
                <!--
                  Carousel section
                -->
                <div class="col-lg-8 d-block col-12 pb-4 pb-lg-0 carousel-section mb-4" style="height: 670px;">
                  <CarouselAll />
                </div>
                <div class="col infos">
                  <!--
                    LikeCard
                  -->
                  <LikeCard style="z-index: 9;" />
                  <!--
                    Dislike card
                  -->
                  <LikeCardDislikesCard style="z-index: 8;" />
                  <!--
                    Relation Card (this one is optionnal)
                  -->
                  <RelationsCard v-if="enableRelations" @relationCardDeleted="enableRelations = false" />
                  <button v-else @click="enableRelations = true" type="button" class="btn btn-light mt-4 to-exclude">
                    Add relation card
                  </button>
                  <button @click="exportHTML" type="button" class="btn btn-info to-exclude d-lg-none d-xl-none mt-3 export-button">Copy HTML to clipboard</button>
                </div>
              </div>
            </div>
            <button @click="exportHTML" type="button" class="btn btn-info to-exclude d-none d-lg-block mx-auto mt-4 export-button">Copy HTML to clipboard</button>
          </div>
          <!--
              Story tab
            -->
          <div class="tab-pane fade" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
            <!--
              Trigger warning (optionnal)
            -->
            <div class="story-section">
              <StoryTriggerWarning />
              <!--
              Story card
            -->
              <StoryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Credits class="to-exclude" />
  </div>
</template>

<script setup>
const notify = () => {
  useNuxtApp().$toast('Copied to clipboard!', {
    icon: "🗸", pauseOnFocusLoss: false
  },);
};

const enableRelations = ref(true);

/* dynamic color changing */
const mainBackgroundColor = ref("#ffffff")

const changeBackgroundColor = (color) => {
  mainBackgroundColor.value = color
}

const format = (html) => {
  var tab = '\t';
  var result = '';
  var indent = '';

  html.split(/>\s*</).forEach(function (element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + '<' + element + '>\r\n';

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}


const exportHTML = () => {
  const documentHtml = document.querySelector(".content")
  const clone = documentHtml.cloneNode(true);

  const toExclude = clone.querySelectorAll(".to-exclude");
  toExclude.forEach((el) => el.parentNode.removeChild(el));

  const html = format(clone.outerHTML);
  navigator.clipboard.writeText(html);

  notify()
}

</script>

<style scoped>
.content {
  padding: 50px 0 100px 0;
}

.carousel-section {
  transition: 0.3s;
  transform: translateX(-10px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.2s;
}

.story-section {
  transition: 0.3s;
  transform: translateX(-10px);
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.export-button {
  transition: 0.3s;
}

.export-button:hover {
  transform: rotate(-2deg);
}

.export-button:active {
  transform: rotate(-2deg) scale(0.9);
}
</style>

