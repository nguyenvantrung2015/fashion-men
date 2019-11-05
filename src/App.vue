<template>
  <div id="app">
    <div class="container">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
}

.container {
  padding: 0;
}

#app {
  background-color: black;
  color: white;
}
</style>
