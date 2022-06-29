<template>
    <div id="heading">
    <header>
      <br>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none">
        <div class="container">
          <a class="navbar-brand text-white" href="javascript:;">E-Pharmacy</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header-2" aria-controls="navbar-header-2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-header-2">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link text-white" href="javascript:;">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white medicine-link" href="#"> <!--Work on scroll-->
                  Medicines
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="javascript:;">
                  Emergency Clinic
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="javascript:;">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="javascript:;">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Cart</button>
        </div>
      </nav>
      <div class="page-header min-vh-100 ePharma" loading="lazy">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
              <h1 class="text-white mb-4">E-Pharmacy</h1>
              <p class="text-white opacity-8 lead pe-5 me-5"> One step solution to find emergency clinic and prescribed medicines right at your doorstep </p>
              <div class="buttons">
                <button type="button" class="btn btn-white mt-4">Get Started</button>
                <button type="button" class="btn text-white shadow-none mt-4">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import axios from 'axios'
export default {
  el: '#heading',
  data () {
    return {
      medicine: {}
    }

  },
  mounted () {
    axios.get('http://localhost:8081/medicine')
    .then((response) =>{
      console.log(response.data)
      this.medicine = response.data
    })
    .catch((error) =>{
      console.log(error)
    })
  }
}
</script>
<style scoped>
.ePharma{
  animation: ePharma 1.25s;
  animation-direction: alternate;
}
@keyframes ePharma {
  0%   {left: -100px; opacity: 0%;}
  100%  {left: 0px; opacity: 100%;}
}
</style>
