<template>
  <div>
      <router-link to="/">Next job</router-link>|
      <router-link to="/">Previews job</router-link>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    // console.log(document.querySelector('.job-list'));
  },
  mounted() {

  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 800px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
