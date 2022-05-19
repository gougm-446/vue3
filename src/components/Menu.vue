<template>
  <div style="width: 15%">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      class="menu"
    >
      <a-menu-item key="1">
        <router-link to="/baseComponents">基础控件</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/baseForm">基础表单</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/baseUpload">基础上传</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/baseTable">基础表格</router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon> </template>
        <template #title>一级菜单</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon> </template>
        <template #title>二级菜单</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style>
.menu {
  height: 100%;
}
</style>

