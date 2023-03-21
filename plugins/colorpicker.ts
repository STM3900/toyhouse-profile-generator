import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ColorPicker', ColorPicker)
})