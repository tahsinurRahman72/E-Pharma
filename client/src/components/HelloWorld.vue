/* eslint-disable */
<template>
  <div class="hello">
    <div class="main">
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3">
      <div class="container">
        <a class="navbar-brand text-white nav-main-title" href="#" data-placement="bottom">
          E-Pharmacy
        </a>
        <a href="#" class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Your Cart</a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1">Medicines</span>
            <span class="navbar-toggler-bar bar2">Emergency Clinic</span>
            <span class="navbar-toggler-bar bar3">Contact</span>
            <span class="navbar-toggler-bar bar3">Account</span>
          </span>
        </button>
        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
          <ul class="navbar-nav navbar-nav-hover mx-auto">
            <li class="nav-item mx-2">
              <a class="nav-link nav-links ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                Medicines
                <!-- <img src="./assets/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1"> -->
              </a>
            </li>

            <li class="nav-item mx-2">
              <a class="nav-link nav-links ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                Emergency Clinic
                <!-- <img src="./assets/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1"> -->
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link nav-links ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                Contact
                <!-- <img src="./assets/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1"> -->
              </a>
            </li>

            <li class="nav-item dropdown dropdown-hover mx-2">
              <a class="nav-link nav-links ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                Account
                <!-- <img src="./assets/down-arrow-white.svg" alt="down-arrow" class="arrow ms-1"> -->
              </a>
            </li>
          </ul>

          <ul class="navbar-nav d-lg-block d-none">
            <li class="nav-item">
              <a href="#" class="btn btn-sm  bg-gradient-primary mb-0 me-1" role="button">Your Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '#'
    }
  },
  mounted () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', './assets/script/material-kit.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-main-title{
  font-size: 2em;
}
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
