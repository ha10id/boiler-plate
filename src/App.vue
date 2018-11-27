<template>
  <div id="app">
    <navigation/>

    <div class="content">
      <router-view/>
    </div>
    <sqreen-footer/>
  </div>
</template>

<script>

import Navigation from '@/components/navigation'
import SqreenFooter from '@/components/footer/index.vue'
import { USER_REQUEST } from '@/store/actions/user'

export default {
  components: { Navigation, SqreenFooter },  
   created: function () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST)
    }
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

body {
  padding: 0;
  margin: 0;
  font-family: 'Monofur', sans-serif;
  color: #2e426b;
}

#app {
  padding: 0;
  margin: 0;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  background: url('assets/222.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  flex-wrap: nowrap;
}
.content {
  flex-grow:1;
  overflow-y:auto;
  overflow-x:hidden;
  /*min-height:90vh;*/
}
</style>
