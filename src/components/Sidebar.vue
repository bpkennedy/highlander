<template>
  <div class="nes-container with-title is-centered is-dark sidebar-width">
    <p class="title">Nameless</p>
    <stat-bar
      v-for="att in attributes"
      :key="att.name"
      :label="att.name"
      :bar-color="att.bgColor"
      :text-color="att.color"
      :val="att.value"
      :max="att.max"
    />
  </div>
</template>

<script>
export default {
  components: {
    StatBar: () => import('./StatBar.vue'),
  },
  data: () => ({
    attributes: [{
      name: 'Quickening',
      max: 100,
      value: 25,
      color: 'color-dark-normal',
      bgColor: 'bg-color-error-normal',
    },{
      name: 'Honor',
      max: 100,
      value: 50,
      color: 'color-dark-normal',
      bgColor: 'bg-color-primary-normal',
    },{
      name: 'Power',
      max: 100,
      value: 55,
      color: 'color-dark-normal',
      bgColor: 'bg-color-primary-normal',
    }],
  }),
}
</script>

<style lang="scss">
  .sidebar-width {
    max-width: 15rem;
  }
</style>
