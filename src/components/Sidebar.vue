<template>
  <div class="nes-container with-title is-centered is-dark sidebar-width">
    <p class="title">{{ player.name }}</p>
    <stat-bar
        v-for="att in player.attributes"
        :key="att.value"
        :label="att.display"
        :bar-color="att.progressColor"
        :text-color="att.color"
        :val="att.val"
        :max="att.max"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    StatBar: () => import('./StatBar.vue'),
  },
  computed: {
    ...mapState(['progress', 'player']),
  }
}
</script>

<style lang="scss">
  .sidebar-width {
    max-width: 15rem;
  }
</style>
