<template>
  <div class="login">
    <form @submit.prevent="login">
      <el-card>
        <div slot="header" class="clearfix header">
          <span>Вход</span>
        </div>
        <el-input required v-model="username" type="text" suffix-icon="el-icon-edit" placeholder="Пользователь"></el-input>
        <el-input required v-model="password" type="password" suffix-icon="el-icon-edit" placeholder="Пароль"></el-input>
        <el-button type="primary" native-type="submit" :loading="loading">Login</el-button>
      </el-card>
    </form>
  </div>
</template>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.header {
  font-weight: bold;
  font-size:1.6em;
  color: navy;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
}
.el-button { margin-top: 1.6em; }
.el-input { margin: .2em; }
.el-card { display:flex;flex-direction: column; }
</style>

<script>
import {AUTH_REQUEST} from '@/store/actions/auth'


export default {
  name: 'login',
  data () {
    return {
      username: 'dogo',
      password: 'dogy',
      loading: false,
    }
  },
  methods: {
    login: function () {
      const { username, password } = this
      this.loading = true
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      })
    }
  },
}
</script>
