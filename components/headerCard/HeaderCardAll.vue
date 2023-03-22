<template>
  <div class="card mb-4" style="border-radius: 20px; transform: rotate(-1deg)">
    <div
      class="card-header container"
      style="border-top-left-radius: 20px; border-top-right-radius: 20px"
          :style="{ 'background': mainHeaderColor }"
          >
          <SuperColorPicker icon="newspaper" button-color="dark" base-color="#f7f7f7" @color-changed="changeHeaderColor" class="to-exclude" />
            <div class="row mt-1">
              <!--
                  Character name
                -->
              <h1 class="col hiden-element mb-0" :style="{ 'color': mainTitleColor }" style="font-size: 26px;">{{ nameInputValue }}</h1>
              <div class="input-group input-group-lg w-50 ml-2 to-exclude col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  v-model = nameInputValue
                  :style="{ 'color': mainTitleColor }"
                />
                <div class="input-group-append">
                  <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeTitleColor" />
                </div>
              </div>
              <!--
                  Navbar
                -->
              <div class="nav col" style="justify-content: flex-end; align-items: center; align-content: center; gap: 10px;">
                <a                  
                    data-toggle="tab"
                    href="#nav-about"
                    role="tab"
                    aria-controls="nav-about"
                    :style="{ 'color': mainAboutColor, 'background': mainAboutBackgroundColor }"
                    style="  
                      cursor: pointer;
                      font-weight: 400;
                      text-align: center;
                      vertical-align: middle;
                      padding: 7px 15px;
                      line-height: 1.5;
                      border-radius: 10px;
                      user-select: none;
                      "
                    >
                    About <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeAboutBackgroundColor" class="to-exclude" /> <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeAboutColor" class="to-exclude" />
                  </a> 
                <a  
                    data-toggle="tab"     
                    href="#nav-story"
                    role="tab"
                    aria-controls="nav-secondary"
                    class=""
                    :style="{ 'color': mainStoryColor, 'background': mainStoryBackgroundColor }"
                    style="
                      cursor: pointer;
                      font-weight: 400;
                      text-align: center;
                      vertical-align: middle;
                      padding: 7px 15px;
                      line-height: 1.5;
                      border-radius: 10px;
                      user-select: none;"
                    >
                    Story <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeStoryBackgroundColor" class="to-exclude" /> <SuperColorPicker icon="font" button-color="light" base-color="#000000" @color-changed="changeStoryColor" class="to-exclude" />
                  </a> 
              </div>
            </div>
          </div>
          <!--
              Intro section (with attributes & description)
            -->
          <div class="card-body" :style="{ 'background': mainBackgroundColor }" style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;">
            <div class="container">
              <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeBackgroundColor" class="to-exclude" />
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
                      <SuperColorPicker icon="chess-board" button-color="dark" base-color="#ffffff" @color-changed="changeTagBgColor" class="to-exclude" />
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
                              class="btn btn-outline-dark"
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
                  <p :style="{ 'color': mainDescriptionColor }" style="white-space: pre-line;" class="hidden-element cringe">{{ descriptionInputValue }}</p>
                  <div class="input-group to-exclude">
                    <textarea
                      class="form-control"
                      aria-label="description"
                      placeholder="Write your description here!"
                      :style="{ 'color': mainDescriptionColor }"
                      v-model="descriptionInputValue"
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

/* Input */
const nameInputValue = ref("")
const descriptionInputValue = ref("")


/* dynamic color changing */
const mainHeaderColor = ref("#f7f7f7")
const mainTitleColor = ref("#000000")

const mainAboutColor = ref("#000000")
const mainStoryColor = ref("#000000")

const mainAboutBackgroundColor = ref("#ffffff")
const mainStoryBackgroundColor = ref("#ffffff")

const mainBackgroundColor = ref("#ffffff")
const mainTagBgColor = ref("#ffffff")
const mainTagTextColor = ref("#000000")
const mainDescriptionColor = ref("#000000")

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

const changeAboutBackgroundColor = (color) => {
  mainAboutBackgroundColor.value = color
}

const changeStoryBackgroundColor = (color) => {
  mainStoryBackgroundColor.value = color;
}


</script>

<style scoped>
textarea {
  height: 120px;
}

.margin-top {
  margin-top: -2px;
}

.hiden-element {
  display: none;
}

.cringe {
  display: none !important;
}
</style>
