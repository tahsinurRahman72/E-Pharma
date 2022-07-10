<template>
  <div class="main">
    <heading/>
    <getStarted/>
    <displayboxes/>
    <read/>
  </div>
</template>

<script>
import heading from './header.vue'
import getStarted from './startMessage.vue'
import displayboxes from './itemBox.vue'
import read from './readMore.vue'
export default {
  name: 'main',
  data () {
    return {
    }
  },
  components: {
    heading,
    getStarted,
    displayboxes,
    read
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-links{
  color: #fff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
