<script setup lang="ts">
import Menu from "../components/Menu.vue";
</script>

<template>
  <div id="layout">
    <Menu />
    <a-card id="content">
      <router-view></router-view>
    </a-card>
  </div>
</template>

<style>
#layout {
  display: flex;
  width: 100%;
  height: 100vh;
}
#content {
  width: 85%;
}
</style>
