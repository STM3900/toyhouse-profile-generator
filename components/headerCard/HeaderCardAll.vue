<template>
  <div class="card mb-4" style="border-radius: 20px; transform: rotate(-1deg)">
    <div
      class="card-header container"
      style="border-top-left-radius: 20px; border-top-right-radius: 20px"
          :style="{ 'background': mainHeaderColor }"
          >
          <SuperColorPicker icon="newspaper" button-color="secondary" base-color="#f7f7f7" @color-changed="changeHeaderColor" class="to-exclude" />
            <div class="row mt-1">
              <!--
                  Character name
                -->
              <div class="input-group input-group-lg w-50 ml-2 to-exclude">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  :style="{ 'color': mainTitleColor }"
                />
                <div class="input-group-append">
                  <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeTitleColor" />
                </div>
              </div>
              <!--
                  Navbar
                -->
              <ul
                class="nav nav-tabs card-header-tabs col"
                style="justify-content: flex-end; align-self: flex-end"
              >
                <li class="nav-item">
                  <a
                    class="nav-item nav-link active"
                    id="nav-about-tab"
                    data-toggle="tab"
                    href="#nav-about"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                    :style="{ 'color': mainAboutColor }"
                    >About <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeAboutColor" class="to-exclude" /></a
                  >
                </li>

                <li class="nav-item">
                  <a
                    class="nav-item nav-link"
                    id="nav-story-tab"
                    data-toggle="tab"
                    href="#nav-story"
                    role="tab"
                    aria-controls="nav-story"
                    aria-selected="true"
                    :style="{ 'color': mainStoryColor }"
                    >Story <SuperColorPicker icon="font" button-color="light" base-color="#007bff" @color-changed="changeStoryColor" class="to-exclude" /></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--
              Intro section (with attributes & description)
            -->
          <div class="card-body" :style="{ 'background': mainBackgroundColor }" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
            <div class="container">
              <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" @color-changed="changeBackgroundColor" class="to-exclude" />
              <div class="row py-4">
                <div
                  class="traits col-12 pl-3 col-lg-3 d-flex justify-content-start justify-content-lg-center"
                >
                  <div>
                    <div>
                      <!--
                          tags
                        -->
                      <div
                        v-for="(tag, index) in tags"
                        style="
                          transform: rotate(-1deg);
                          padding: 2px 10px;
                          width: auto;
                          display: inline-block;
                          border-radius: 20px;
                          border: solid 1px black;
                        "
                        :style="{ 'background': mainTagBgColor, 'color': mainTagTextColor }"
                      >
                        {{ tag }}
                        <button
                          @click="removeTag(index)"
                          type="button"
                          class="close margin-top to-exclude"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" @color-changed="changeTagBgColor" class="to-exclude" />
                      <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeTagTextColor" class="to-exclude" />
                      <form @submit.prevent="addTag" class="to-exclude">
                        <div class="input-group my-2">
                          <input
                            v-model="inputValue"
                            type="text"
                            class="form-control"
                            placeholder="tag"
                            aria-label="tag"
                            aria-describedby="add-tag"
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-secondary"
                              type="submit"
                              id="add-tag"
                              :disabled="!inputValue"
                            >
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <HeaderCardPins />
                  </div>
                </div>
                <!-- Description  -->
                <div class="resume col-12 col-lg-9">
                  <div class="input-group to-exclude">
                    <textarea
                      class="form-control"
                      aria-label="description"
                      placeholder="Write your description here!"
                      :style="{ 'color': mainDescriptionColor }"
                    ></textarea>
                    <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeDescriptionColor" class="to-exclude" />
                </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tags = ref(["He"]);
const inputValue = ref("");

const addTag = () => {
  tags.value.push(inputValue.value);
  inputValue.value = "";
};

const removeTag = (index) => {
  tags.value.splice(index, 1);
};

/* dynamic color changing */
const mainHeaderColor = ref()
const mainTitleColor = ref()
const mainAboutColor = ref()
const mainStoryColor = ref()
const mainBackgroundColor = ref()
const mainTagBgColor = ref()
const mainTagTextColor = ref()
const mainDescriptionColor = ref()

const changeHeaderColor = (color) => {
  mainHeaderColor.value = color
}

const changeTitleColor = (color) => {
  mainTitleColor.value = color
}

const changeAboutColor = (color) => {
  mainAboutColor.value = color
}

const changeStoryColor = (color) => {
  mainStoryColor.value = color
}

const changeBackgroundColor = (color) => {
  mainBackgroundColor.value = color
}

const changeTagBgColor = (color) => {
  mainTagBgColor.value = color
}

const changeTagTextColor = (color) => {
  mainTagTextColor.value = color
}

const changeDescriptionColor = (color) => {
  mainDescriptionColor.value = color
}


</script>

<style scoped>
textarea {
  height: 120px;
}

.margin-top {
  margin-top: -2px;
}
</style>
