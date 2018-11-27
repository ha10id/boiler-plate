<template>
  <el-menu
    :default-active="activeIndex"
    class="navigation"
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
</template>

<style scoped>
.navigation { flex-shrink:0; }

</style>

<script>
import { mapGetters, mapState } from 'vuex'
import { AUTH_LOGOUT } from '@/actions/auth'

export default {
  name: 'navigation',
  data() {return {activeIndex: '1'}},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
    ...mapState({
      authLoading: state => state.auth.status === 'loading',
      name: state => `${state.user.profile.title} ${state.user.profile.name}`,
    })
  },
}
</script>
