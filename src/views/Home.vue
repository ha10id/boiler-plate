<template>
  <div class="home">
    <el-row type="flex" justify="center" v-for="o in 44" :key="o">
      <el-col :span="23">
        <el-card class="box-card" shadow="hover">  
          <div class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.box-card {
  margin: 2px;
}
</style>
