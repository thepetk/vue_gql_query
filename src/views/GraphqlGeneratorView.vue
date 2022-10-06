<script setup lang="ts">
import GraphqlGenerator from '../components/GraphqlGenerator.vue';
import AddResource from '../components/AddResource.vue';
import ReadResources from '../components/ReadResources.vue';
</script>

<template>
  <div class="split left">
    <GraphqlGenerator />
    <AddResource />
  </div>
  <div class="split right">
    <ReadResources />
  </div>
</template>

<style scoped>
  .split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding: 20px;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
  
</style>