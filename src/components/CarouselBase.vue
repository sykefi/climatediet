<template>
  <VueperSlides
    :slide-ratio="562 / 800"
    class="no-shadow"
    transition-speed="250"
    :bullets="false"
    :arrows-outside="true"
  >
    <VueperSlide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :style="'background-size: contain;  background-repeat: no-repeat;'"
    />
  </VueperSlides>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

button.vueperslides__arrow {
  opacity: 0.8;
  padding: 0;
  height: fit-content;
  width: fit-content;
  color: white;
  background: $highlight;
  transform: translateY(-50%);
  transition: 0.1s ease-in-out;
  &:hover {
    background: $highlight-dark;
  }
}

.vueperslides {
  /* Center child (vueperslides__parallax-wrapper) horizontally*/
  display: flex;
  justify-content: center;
}

.vueperslides__parallax-wrapper {
  width: 41em;
  /* left & right margins keep buttons *actually* outside of the slide image */
  margin: 0 0.5em;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueperSlide, VueperSlides } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

type ISlide = {
  image: string
}

export default defineComponent({
  components: { VueperSlides, VueperSlide },
  props: {
    slides: {
      type: Array<ISlide>,
      required: true,
    },
  },
})
</script>
