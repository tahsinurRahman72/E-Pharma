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
                <router-link :to="{name: 'main'}" class="nav-link text-white">
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/medicine" class="nav-link text-white medicine-link"> <!--Work on scroll-->
                  Medicines
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/clinic" class="nav-link text-white">
                  Emergency Clinic
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="contact" class="nav-link text-white">
                  Contact Us
                </router-link>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-primary w-auto me-2 justify-space-between" style="margin-bottom: 0px;">Cart</button>
        </div>
      </nav>
    </header>
    </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>

import axios from 'axios'
export default {
  data () {
    return {
    }

  }
}
</script>
