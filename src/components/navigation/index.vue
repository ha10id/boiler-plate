<template>
  <el-menu
    :default-active="activeIndex"
    class="navigation el-menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item v-if="isProfileLoaded" @click="profile" style="float: right;" index="2">Profile</el-menu-item>
    <el-menu-item v-if="isAuthenticated" @click="logout" style="float: right;" index="3">Logout</el-menu-item>
    <el-menu-item v-if="!isAuthenticated && !authLoading" style="float: right;" index="4">Login</el-menu-item>
  </el-menu>
</template>

<style scoped>
.navigation { 
  flex-shrink:0; 
  justify-content: end;
}
/*.el-menu--horizontal .el-submenu > .el-menu {*/
  /*left: initial !important;*/
  /*right: 0;*/
/*}*/

</style>

<script>
import { mapGetters, mapState } from 'vuex'
import { AUTH_LOGOUT } from '@/actions/auth'

export default {
  name: 'navigation',
  data() {return {activeIndex: '1'}},
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
      //switch(key) {
        //case '4':  this.$router.push('/login'); break
      //}
      if (key == 4) {
        //console.log('login')
        this.$router.push('/login')
      }
    },
    profile: function () {
      this.$router.push('/account')
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
