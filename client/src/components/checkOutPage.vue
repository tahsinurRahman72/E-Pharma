<template>
<div>
  <div class="header-container">
    <heading/>
  </div>
        <div class="alert alert-primary text-white font-weight-bold viewAlert" id="alert" style="display: none">
        <div id="success" style="display:none">Registration Successful!</div>
        <div id="fail" style="display:none">Registration Failed, email already exists</div>
        <button class="button" @click="hideSuccessMessage()">x</button>
        </div>
  <section class="py-7">
  <div class="container">
    <div class="row justify-space-between py-2">
      <div class="col-lg-4 mx-auto">
        <div style=" justify-content: space-between;">
            <section class="box" data-hover="" style="padding-block: 0px;" v-for="value in selectedItems" :key="value.id">
                    <ul style="list-style-type: none; display: inline-block; ">
                        <li>{{value[0]}}</li>
                    </ul>

                    <ul style="list-style-type: none; display: inline-block; float:right;">
                       <li>{{value[1]}}</li>
                    </ul>
            </section>
            <div class="finalDiv">
                <ul>
                    <li>
                        Total Amount: {{finalPrice}} /-
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
<li style="display: flex; justify-content: center">
    <button v-on:click="showSuccessMessage()" type="submit" class="btn btn-primary w-auto me-2 justify-space-between">Place Order</button>
</li>
</div>
</template>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
import axios from 'axios'
import heading from './header.vue'
import pagination from './Pagination.vue'
import VueNumericInput from 'vue-numeric-input'

export default {
  name: 'checkOutPage',
  data () {
    return {
      finalPrice: 0,
      selectedItems: [],
      quantityOfItems: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/checkout/checkout_items')
      .then((response) => {
        this.finalPrice = response.data.finalPrice
        this.selectedItems = response.data.itemSelected
        this.quantityOfItems = response.data.quantityOfItems
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
    showSuccessMessage () {
        document.getElementById("alert").style.display = "flex";
        document.getElementById("success").style.display = "inline-block";
    },
    hideSuccessMessage () {
        document.getElementById("alert").style.display = "none";
        document.getElementById("success").style.display = "none";
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
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-container{
  padding-block-start: 1vw;
  padding-block-end: 50px;
}
li{
  list-style: none;
  padding-block-start: 0.2em;
  padding-inline-start: 0;
  padding-inline-end: 3em;
  font-size: 1vw;
  display: block;
  }
u{
  color: white;
}
.button{
    border: 0;
    color: white;
    background-color: rgba(255, 0, 0, 0);
    margin-inline-end: 0;
}
</style>
