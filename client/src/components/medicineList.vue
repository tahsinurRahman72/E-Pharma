<template>
<div>
  <div class="header-container">
    <heading/>
  </div>
  <div class="medicineList">
      <u>
        List of Medicines
      </u>
  </div>
  <div id="app">
    <a href="https://google.com">
    <section class="box" id="medicine" style="padding-block: 0px;" v-for="value in medicine" :key="value.id">
      <span>
        <img src="../assets/tablet.png" alt="icon" class="image">
      </span>
      {{value.medicineNameByBrand}}
      <ul>
        <li>Price: BDT {{value.medicinePrice}} /-</li>
        <li>Delivery Status: {{value.medicineDeliveryStatus}}</li>
      </ul>
    </section>
    </a>

  </div>
  <div class="page-section">
    <pagination/>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import heading from './header.vue'
import pagination from './Pagination.vue'
export default {
  name: '#app',
  data () {
    return {
      medicine: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/medicine/show_medicine')
      .then((response) => {
        console.log(response.data)
        this.medicine = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  components: {
    heading,
    pagination
  }
}
</script>

<style scoped>
#medicine{
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
  padding-block-start: 5vw;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .box {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1em;
    grid-row-gap: 10px;
  }
}
section::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

section:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

section::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  border-radius: 9px;
  background: hsl(180, 86%, 27%);
  z-index: -1;
  transition: transform .3s ease;
  color: white;
}

section {
  position: relative;
  font-size: 1.5vw;
  resize: inherit;
}
.header-container{
  padding-block-start: 1vw;
  padding-block-end: 50px;
}
.medicineList{
  padding-block-start: 2vw;
  padding-inline-start: 5.5vw;
  height: fit-content;
  font-size: 2.0vw;
  animation: medicineList 1.25s;
  animation-direction: alternate;
}
@keyframes medicineList {
  0%   {left: -100px; opacity: 0%;}
  100%  {left: 0px; opacity: 100%;}
}
.image {
  max-width: 100%;
  height: auto;
}
.box{
  color: #fff;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.1);
  height: fit-content;
  width: fit-content;
  margin: auto;
  margin-block-end: 9px;
  padding: 2px 10px 20px 10px ;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 9px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
}
.blur {
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.8) !important;
}
li{
  list-style: none;
  padding-block-start: 0.2em;
  padding-inline-start: 0;
  padding-inline-end: 3em;
  font-size: 1vw;
  }
ul{
  padding-inline-start: 0.2em;
  padding-inline-end: 1.5em;
}
u{
  color: white;
}
</style>
