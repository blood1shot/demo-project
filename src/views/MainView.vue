<template lang="pug">
.carousel-div
  Carousel(:autoplay="3000", :wrap-around="true")
    Slide(v-for="image in images", :key="image.name")
      .carousel__item
        img(:src="getImgUrl(image.name)")
        h2.film-title Bladerunner 2049
        button.film-info Info

    template(#addons)
      Navigation/
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const images = [
  { name: "blade-runner.jpg" },
  { name: "blade-runner.jpg" },
  { name: "blade-runner.jpg" },
];

function getImgUrl(pic: string) {
  return require("@/assets/films/" + pic);
}
</script>

<style lang="scss">
.film-info {
  color: #fff;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  // border: 2px solid #fff;
  border: none;
  border-radius: 10px;
  left: 40px;
  bottom: 15px;
  text-decoration: none;
  padding: 10px 35px;
  background-color: #dc3545;
  position: absolute;
  font-size: 15px;
  &:hover {
    background-color: #b02a37;
  }
}

.film-title {
  left: 40px;
  bottom: 60px;
  color: #fff;
  font-weight: bold;
  position: absolute;
}

.carousel-div {
  width: 80%;
  float: left;
}

.carousel__item img {
  border-radius: 20px;
}

.carousel__item {
  position: relative;
  // min-height: 200px;
  // width: 100%;
  // background-color: #fff;
  color: #000;
  font-size: 20px;
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

.carousel .carousel__prev,
.carousel .carousel__next {
  background-color: #dc3545 !important;
  // border: 5px solid white;
}

// .carousel .carousel__next,
// .carousel button {
//   top: 45% !important;
// }
</style>
