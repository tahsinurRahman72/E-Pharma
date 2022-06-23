<template>
<div id="app">
   <div class="box" v-for="value in myArr" :key="value.id">{{value}}</div>
</div>
</template>
<script>
export default({
  el: '#app',
  data () {
    return {
      myArr: ['Tahsinur', 'Rahman', 'Rafsan', 'Rafsi']
    }
  }
})
</script>

<style scoped>
#app{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.box{
  background: rgba(255, 255, 255, 0.1);
  height: fit-content;
  width: fit-content;
  margin: auto;
  padding: 2px 10px 20px 10px ;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 9px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  border: 1px solid rgba(255, 255, 255, 0.42);
}
</style>
