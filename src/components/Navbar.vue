<template>
  <div class="nes-container with-title is-centered is-dark">
    <p class="title">There can be only one</p>
    <div>
      <router-link to="/alley">Alley</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['progress']),
  }
}
</script>
