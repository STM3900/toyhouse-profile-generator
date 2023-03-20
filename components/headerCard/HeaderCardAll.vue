<template>
  <div class="card mb-4" style="border-radius: 20px; transform: rotate(-1deg)">
    <div
      class="card-header container"
      style="border-top-left-radius: 20px; border-top-right-radius: 20px"
    >
      <div class="row">
        <!--
                  Character name
                -->
        <div class="form-group input-group-lg w-50 ml-2">
          <input type="text" class="form-control" placeholder="Name" aria-label="Name">
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
              >About</a
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
              >Story</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--
              Intro section (with attributes & description)
            -->
    <div class="card-body">
      <div class="container">
        <div class="row py-4">
          <div
            class="traits col-12 pl-3 col-lg-3 d-flex justify-content-start justify-content-lg-center"
          >
            <div>
              <div>
                <!--
                          pronouns
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
                >
                  {{ tag }}
                  <button
                    @click="removeTag(index)"
                    type="button"
                    class="close margin-top"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form @submit.prevent="addTag">
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
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="description"
                placeholder="Write your description here!"
              ></textarea>
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
