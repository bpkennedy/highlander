<template>
  <div class="flex-column position-relative">
    <p class="title absolute-center-title dark-background">Actions</p>
    <div class="flex-column horizontal-scrollbox nes-container is-dark full-height p-a-1 p-t-5">
      <action
        v-for="action of actionData"
        :key="action.id"
        :action="action"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Action: () => import('./Action.vue'),
  },
  data: () => ({
    actionData: [{
      id: 2,
      date: new Date(),
      message: 'You sense another immortal in the building.',
    }, {
      id: 3,
      date: new Date(),
      message: 'A man shouts nearby and starts running',
    }, {
      id: 4,
      date: new Date(),
      message: 'You use your senses and know that it is him',
    }, {
      id: 5,
      date: new Date(),
      message: 'You sense another immortal in the building.',
    }, {
      id: 6,
      date: new Date(),
      message: 'You sense another immortal in the building.',
    }],
  }),
}
</script>

<style lang="scss">
  @import "../styles/_spacing.scss";

  .absolute-center-title {
    position: absolute;
    left: 0;
    right: 0;
    width: 8rem;
    z-index: 2;
    margin: auto;
    text-align: center;
  }

  .dark-background {
    background: #212529;
  }

  .horizontal-scrollbox {
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: column-reverse
  }
</style>
