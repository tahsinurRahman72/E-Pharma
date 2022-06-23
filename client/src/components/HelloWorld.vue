<template>
  <div class="main">
    <heading/>
    <boxes/>
    <read/>
  </div>
</template>

<script>
import heading from './header.vue'
import boxes from './itemBox.vue'
import read from './readMore.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '#'
    }
  },
  mounted () {
    let extScript = document.createElement('script')
    extScript.setAttribute('src', './assets/script/core/bootstrap.bundle.min.js')
    document.head.appendChild(extScript)
  },
  components: {
    boxes,
    heading,
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
