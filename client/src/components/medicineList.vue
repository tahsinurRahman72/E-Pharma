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
  <div id="medicineList">
    <button v-on:click="getProductName(), show($event)" class="box" data-hover="" id="medicine" style="padding-block: 0px;" v-for="value in medicine" :key="value.id">
      <span>
        <img src="../assets/tablet.png" alt="icon" class="image">
      </span>
      <div class="medName">
        {{value.medicineNameByBrand}}
      </div>
      <ul>
        <li>Price: BDT {{value.medicinePrice}} /-</li>
        <li>Delivery Status: {{value.medicineDeliveryStatus}}</li>
      </ul>
    </button>
  </div>
  <div id=aa style="display:none">
    <a href=# target_self v-on:click="hide()" class=right>x</a>
    <div>
      <vue-numeric-input v-model="num" align="center" width="125px" ></vue-numeric-input>
      <li class="nav-item" style="padding-right: 0px;">
        <button v-on:click="getprodAmount(), selectItemsForCart()" type="button" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Add to Cart</button>
      </li>
    </div>
  </div>
  <div class="page-section">
    <pagination/>
  </div>
</div>
</template>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
import axios from 'axios'
import heading from './header.vue'
import pagination from './Pagination.vue'
import VueNumericInput from 'vue-numeric-input'

export default {
  name: 'medicineList',
  data () {
    return {
      num: 0,
      medicine: [],
      medName: null,
      quantity: 0,
      prodAndQuant: []
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
  methods: {
    /* eslint-disable */
    selectItemsForCart() {
    axios.post('http://localhost:8081/cartItems/cart_items', {
        name: this.medName,
        quantity: this.quantity
    })
    .then((response) => {
        this.prodAndQuant = response.data
      })
    .catch((err)=>{
        console.log(err)
    })
    },
    show(e){
      document.getElementById("aa").style.display = "inline-block";
    },
    hide() {
      document.getElementById("aa").style.display = "none";
      this.num = 0;
    },
    getprodAmount() {
      var amount = this.num
      document.getElementById("aa").style.display = "none";
      setTimeout(function() { alert("Medicine Added"); }, 3);
      // console.log(amount)
      this.quantity = amount
      console.log(this.quantity)
      // return amount
    },
    getProductName() {
      var productName = event.target.textContent.trim()
      // console.log(productName)
      this.medName = productName
      console.log(this.medName)
      // return productName
    }
  },
  components: {
    heading,
    pagination,
    VueNumericInput
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
#medicine::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

#medicine:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#medicine::before {
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
#medicine {
  position: relative;
  font-size: 1.5vw;
  resize: inherit;
}
.header-container{
  padding-block-start: 1vw;
  padding-block-end: 50px;
}
.medName{
  height: fit-content;
  font-size: 1.8vw;
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
.right {
  float: right;
  color: white;
}
#aa {

  font-weight: bold;
  position:absolute;
  margin-inline-start: 150vh;
  padding: 15px;
  top: 50%;
  transform: translateY(translation-value);
  box-sizing: content-box;
}
</style>
