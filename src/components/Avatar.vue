<template>
  <div class="avatar-box">
    <img :src="imageUrl" class="avatar-box-content"/>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar-box {
  display: inline-flex;
  background: #ffffff;
  border-radius: 0.375rem;
  overflow: hidden;
  width: 6.25rem;
  height: 7.5rem;

  .avatar-box-content {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    left: -0.1875rem;
  }
}
</style>
