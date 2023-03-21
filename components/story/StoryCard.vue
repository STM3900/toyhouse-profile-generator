<template>
  <!--
                Story block
              -->
  <div
    class="card mt-1"
    style="
      transform: rotate(-0.5deg);
      display: inline-block;
      border-radius: 20px;
      width: 1000px;
    "
  >
    <div class="card-body">
      <SuperColorPicker icon="chess-board" button-color="secondary" base-color="#ffffff" />
      <div class="input-group">
        <textarea
          class="form-control"
          aria-label="story"
          placeholder="Write your story here c:"
          style="min-height: 350px;"
        ></textarea>
        <SuperColorPicker icon="font" button-color="light" base-color="#000000" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
