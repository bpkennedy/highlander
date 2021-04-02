<template>
  <div id="app" class="flex-column full-height">
    <canvas
        v-if="true"
        id="debug"
        class="debug-panel"
    />
    <div class="flex-row flex-1 navbar-height">
      <navbar class="flex-1" />
    </div>
    <div class="flex-row flex-1">
      <sidebar class="flex-1" />
      <div class="flex-column flex-1">
        <router-view class="flex-1" />
        <actionbar class="flex-1 actionbar-height" />
      </div>
    </div>
  </div>
</template>

<script>
import { startSimulation } from './simulation'
import { STARTED_DIALOGUE_ACTION } from './store'

export default {
  components: {
    Navbar: () => import('./components/Navbar.vue'),
    Sidebar: () => import('./components/Sidebar.vue'),
    Actionbar: () => import('./components/Actionbar.vue'),
  },
  mounted() {
    startSimulation(true)
    this.$store.dispatch(STARTED_DIALOGUE_ACTION, 'intro')
  },
}
</script>

<style lang="scss">
  @import "../node_modules/nes.icons/css/nes-icons.css";
  @import "./styles/nes.css";
  @import "./styles/_colors.scss";
  @import "./styles/_typography.scss";
  @import "./styles/_spacing.scss";
  @import "./styles/_flex.scss";

  .debug-panel {
    position: absolute;
    width: 30rem;
    height: 15rem;
    right: -20rem;
    top: 6rem;
    z-index: 5;
  }

  html, body {
    font-family: "Press Start 2P";
    background: #212529;
    color: #ffffff;
    height: 100%;
  }

  .full-height {
    height: 100%;
  }

  .navbar-height {
    max-height: 6rem;
  }

  .position-relative { position: relative; }
  .position-absolute { position: absolute; }
  .bottom-center { bottom: 0; left: 0; right: 0; margin: auto; }

  .actionbar-height {
    max-height: 10rem;
  }
</style>
