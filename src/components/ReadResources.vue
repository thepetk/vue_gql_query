<template>  
  <div class="queryNotebook">
    <p 
      v-for="resource in res"
      :key="resource.name"
    >
      {{ res }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      res: [JSON.parse(localStorage.getItem("resources"))]
      return {
          res: localStorage.getItem("resources") || "Insert your resources"
      }
    }
  }
</script>

<style scoped>
  .queryNotebook {
    background-color: beige;
  }
</style>
  