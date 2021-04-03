<template>
  <div class="full-width full-height position-absolute top-left responsive-background" :style="{ backgroundImage: `url(${this.image})` }">&nbsp;</div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null,
    }
  },
}
</script>

<style lang="scss">
.responsive-background {
  height: 100%;
  //min-height: 500px; <-- no, because short viewports makes it overflow
  //background-image: url(images/bg.jpeg); <-- needs to be dynamically sent in via props
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1d3557; // <-- default background color while image loads in
}
</style>
