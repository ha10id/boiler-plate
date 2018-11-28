<template>
  <el-card :body-style="{ padding: '0px', display: 'flex' }" class="appeal-item">
    <el-col style="width: 140px"> 
      <div class="img-container">
        <img :src="appeal.images[0]" class="edge">
      </div>
    </el-col>
    <el-col style="width:90%; padding: 2px 6px 2px 6px;">
      <h5 style="width:100%;">{{appeal.title | truncate(50)}}</h5>
      <p>{{appeal.description | truncate(80) }}</p>
    </el-col>
  </el-card>
</template>

<style scoped>
.el-card {
  justify-content: start;
  align-items: start;
  flex-direction: row;
  padding:0;
  margin:0;
  margin-top: .2em;
  height: 120px;
  width: 99%;
}
.img-container {
  background-size: cover;
  width: 140px;
  height: 120px;
  overflow: hidden;
}
.el-col {
  justify-content: start;
  align-items: start;
}
img { width:140px; height:120px; }
.edge {
  image-rendering: -moz-crisp-edges; /* Firefox */
  -ms-interpolation-mode: nearest-neighbor;  /* IE */
  image-rendering: crisp-edges; /* Стандартное свойство */
}
h5, p { text-align: left; padding: 2px 2px 2px 2px; margin: 0;}
.appeal-content {
  padding: 0;
  margin: 0;
  /*padding-left: 1.6em;*/
  padding-right: 1em;
}
</style>

<script>

export default {
  name: 'feedItem',
  props: {appeal: Object},
  filters: {
    truncate: function( value, maxlength ) {
      if(!value) return ''
      if (value.length > maxlength) {
        return value.slice(0, maxlength - 3) + '...' }
      return value
    }
  }
}
</script>

