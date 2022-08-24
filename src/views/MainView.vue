<template lang="pug">
div
  Carousel(:autoplay="3000", :wrap-around="true")
    Slide(v-for="slide in 3", :key="slide")
      .carousel__item {{ slide }}

    template(#addons)
      Navigation/
      Pagination/
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
</script>

<style scoped lang="scss">
div {
  width: 80%;
  float: left;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__pagination {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  background-color: #dc3545 !important;
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel .carousel__next,
.carousel .carousel__prev {
  top: 45% !important;
}
</style>
