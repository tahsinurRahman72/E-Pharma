<template>
    <div>
        <div class="head-container">
            <heading/>
        </div>
        <section>
            <div id="medCart" class="container py-4">
                    <h3 class="text-center">Cart</h3>
                    <form @submit.prevent="checkOut()" role="form" id="contact-form" method="post" >
                    <div class="card-body">
                        <section v-on:click="show()" class="box" data-hover="" id="medicine" style="padding-block: 0px;" v-for="value in prodAndQuant" :key="value.id">
                        <span>
                            <img src="../assets/tablet.png" alt="icon" class="image">
                        </span>
                        <div class="name">
                            {{value.medicineNameByBrand}}
                        </div>
                        <ul>
                          <li>Price: BDT {{value.medicinePrice}} /-</li>
                          <li>Delivery Status: {{value.medicineDeliveryStatus}}</li>
                        </ul>
                        </section>
                        <li style="display: flex; justify-content: center">
                          <button v-on:click="showSuccessMessage()" type="submit" class="btn btn-primary w-auto me-2 justify-space-between">Checkout</button>
                        </li>
                        <div id=aa style="display:none">
                          <a href="#" v-on:click="hide()">Hide</a>
                          <div>
                            <li class="nav-item" style="padding-right: 0px;">
                              <button v-on:click="getprodAmount()" type="button" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Remove</button>
                            </li>
                          </div>
                        </div>
                    </div>
                    </form>
            </div>
        </section>
        <div class="footer-container">
            <foot/>
        </div>
    </div>
</template>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script scoped>
import axios from 'axios'
import heading from './header.vue'
import foot from './static-footer.vue'
export default {
    name: 'medCart',
  components: {
    heading
  },
  data () {
    return {
      num: 0,
      prodAndQuant: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/cartItems/show_cart_items')
      .then((response) => {
        console.log(response.data)
        this.prodAndQuant = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods:{
    removeItem(){
      axios.delete('http://localhost:8081/cartItems/show_cart_items')
      .then((response)=>{
        //tbd
      })
    },
    checkOut(){
      this.$router.push('/checkoutPage')
    },
    show(e){
      document.getElementById("aa").style.display = "inline-block";
    },
    hide() {
      document.getElementById("aa").style.display = "none";
    },
  },
  components: {
    heading,
    foot
  }
}
$(document).ready(function() {
var docHeight = $(window).height();
$('section').css('padding-block-start', docHeight/15 + 'px')
$('section').css('padding-block-end', docHeight/4 + 'px')
})
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
.right {
  float: right;
  color: white;
}
section {
  position: relative;
  font-size: 1.5vw;
  resize: inherit;
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
