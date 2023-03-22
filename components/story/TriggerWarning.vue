<template>
  <div v-if="enableTW" class="container">
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
        <i class="fas fa-exclamation-triangle mr-2"></i>
        <span class="hidden-element"> {{ twInputValue }}</span>
        
        <div class="form-group-sm ml-4 d-inline-block to-exclude" style="width: 85%">
          <input
            type="text"
            class="form-control"
            placeholder="Trigger warning"
            aria-label="Trigger warning"
            v-model="twInputValue"
          />
        </div>
        <button
          @click="enableTW = false"
          type="button"
          class="close to-exclude"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
  <button
    v-else
    @click="enableTW = true"
    type="button"
    class="btn btn-danger my-2 to-exclude"
  >
    Add Trigger Warning
  </button>
</template>

<script setup>
const enableTW = ref(false);

/* Input */
const twInputValue = ref("")
</script>

<style scoped>
.hidden-element {
  display: none;
}
</style>
