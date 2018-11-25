<template>
  <div id="app" class="app">
    <el-menu
      :default-active="activeIndex"
      class="header"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!--<el-menu-item index="3" disabled>Info</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>-->
    </el-menu>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer"><a href="#">@2018. Mars Weapons Inc.</a></div>
  </div>
</template>

<script>
export default {
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
}

#app {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
}
.header {
  flex-shrink:0;
  /*height:44px;*/
}
.content {
  flex-grow:1;
  overflow-y:auto;
  overflow-x:hidden;
  /*min-height:90vh;*/
}
.app {
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  flex-wrap: nowrap;
  padding:0;
  /*overflow-y:auto;*/
}
.footer {
  height:16px;
  flex-shrink: 0;
  background-color: #545c64;
  text-align:center;
  vertical-align: baseline;
  color:#ffd04b;
}
.footer a {
  font-size: 10px;
  margin:auto;
  text-decoration: none;
  color:#ffd04b;
}
.footer a:hover {
  font-weight:bold;
  color:#ffd04b;
}
</style>
