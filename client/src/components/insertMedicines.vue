<template>
    <div>
        <div class="head-container">
            <heading/>
        </div>
        <div class="alert alert-primary text-white font-weight-bold viewAlert" id="alert" style="display: none">
        <div id="success" style="display:none">Registration Successful!</div>
        <div id="fail" style="display:none">Registration Failed, email already exists</div>
        <button class="button" @click="hideSuccessMessage()">x</button>
        </div>
        <section>
            <div class="container py-4">
                <div class="row">
                <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                    <h3 class="text-center">Sign-Up</h3>
                    <form @submit.prevent="registerUser()" role="form" id="contact-form" method="post" autocomplete="off">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-6">
                            <div class="input-group input-group-dynamic mb-4">
                            <label class="form-label">MedicineNameByBrand</label>
                            <input v-model="MedicineNameByBrand" class="form-control" aria-label="First Name..." type="text" required >
                            </div>
                        </div>
                        <div class="col-md-6 ps-2">
                            <div class="input-group input-group-dynamic">
                            <label class="form-label">medicineGroupName</label>
                            <input v-model="medicineGroupName" type="text" required class="form-control" placeholder="" >
                            </div>
                        </div>
                        </div>
                        <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">medicineStrength</label>
                            <input v-model="medicineStrength" type="text" required class="form-control" placeholder="" >
                        </div>
                        </div>
                        <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">medicineManufacturer</label>
                            <input v-model="medicineManufacturer" type="text" required class="form-control" placeholder="" >
                        </div>
                        </div>
                         <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">medicineInfo</label>
                            <input v-model="medicineInfo" type="text" required class="form-control" placeholder="" >
                        </div>
                        </div>
                         <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">medicinePrice</label>
                            <input v-model="medicinePrice" type="text" required class="form-control" placeholder="" >
                        </div>
                        </div>
                         <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">medicineDeliveryStatus</label>
                            <input v-model="medicineDeliveryStatus" type="text" required class="form-control" placeholder="" >
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                            <div class="form-check form-switch mb-4 d-flex align-items-center">
                            <input v-on:click="checked=true" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label ms-3 mb-0" for="flexSwitchCheckDefault">I agree to the <a href="#" class="text-dark"><u>Terms and Conditions</u></a>.</label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button v-on:click="showSuccessMessage()" type="submit" class="btn bg-gradient-dark w-100">Signup</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script scoped>
import axios from 'axios'
import heading from './header.vue'

export default {
  name: 'insertMedicine',
  data () {
    index=false
    return{
        user: [],
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
  },
  methods: {
    registerUser () {
    axios.post('', {
        
    })
    .then((response) => {
        this.index=true
        this.user = response.data
      })
    .catch((err)=>{
        this.index=false
        console.log(err)
    })
    },
    showSuccessMessage () {
        document.getElementById("alert").style.display = "flex";
    },
    hideSuccessMessage () {
        document.getElementById("alert").style.display = "none";
    }
  },
  components: {
    heading
  }
}
$(document).ready(function() {
var docHeight = $(window).height();
$('section').css('padding-block-start', docHeight/6 + 'px')
$('section').css('padding-block-end', docHeight/3 + 'px')
})
</script>
<style scoped>
h3{
    padding-block-start: 1vw;
    padding-block-end: 1vw;
    height: fit-content;
    font-size: 2.0vw;
}
input{
    color: white;
}
.viewAlert{
    display: none;
    align-items: center;
    justify-content: center;
    align-content: space-between;
}
.button{
    border: 0;
    color: white;
    background-color: rgba(255, 0, 0, 0);
    margin-inline-end: 0;
}
</style>
