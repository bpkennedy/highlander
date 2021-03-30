<template>
  <div id="app" class="flex-column full-height">
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
  export default {
    components: {
      Navbar: () => import('./components/Navbar.vue'),
      Sidebar: () => import('./components/Sidebar.vue'),
      Actionbar: () => import('./components/Actionbar.vue'),
    },
  }
</script>

<style lang="scss">
  @import "../node_modules/nes.css/css/nes.css";
  @import "../node_modules/nes.icons/css/nes-icons.css";
  @import "./styles/_spacing.scss";
  @import "./styles/_flex.scss";

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

  .position-relative {
    position: relative;
  }

  .actionbar-height {
    max-height: 10rem;
  }
</style>
