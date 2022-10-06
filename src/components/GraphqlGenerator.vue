<template>
  <div class="greetings">
    <h3>
      Welcome to <a href="https://graphql.org/learn/queries/" target="_blank" rel="noopener">GQL</a> Query Generator for <a href="https://gitlab.com/">Gitlab</a>
    </h3>
    <h4>
      Type your gitlab graphql api resource you want to fetch
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
