<template>
    <div id="heading">
      <nav class="navbar navbar-expand-lg navbar-dark z-index-3 py-3">
        <div class="container">
          <a class="navbar-brand text-white" href="javascript:;">E-Pharmacy</a>
          <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul class="navbar-nav navbar-nav-hover mx-auto">
              <li class="nav-item mx-2">
                <router-link :to="{name: 'main'}" class="nav-link text-white">
                  Home
                </router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/medicine" class="nav-link text-white medicine-link"> <!--Work on scroll-->
                  Medicines
                </router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/clinic" class="nav-link text-white">
                  Emergency Clinic
                </router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/about" class="nav-link text-white">
                  About Us
                </router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="contact" class="nav-link text-white">
                  Contact Us
                </router-link>
              </li>
            </ul>
            <ul class="navbar-nav d-lg-block d-none">
              <li class="nav-item">
                <button type="button" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Cart</button>
              </li>
              <li class="nav-item">
                <button type="button" v-on:click="goToLogin()" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
li {
  display: inline-block;
  margin: 0 8px;
}
</style>
