/* eslint-disable */
<template>
  <div class="hello">
    <header>
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
                <a class="nav-link text-white" href="javascript:;">
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
        </div>
      </nav>
      <div class="page-header min-vh-100" loading="lazy">
        <span class="mask"></span>
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
    <section class="py-9">
      <div class="container">
        <div class="row" style="color: #f0f2f5">
          <div class="col-lg-6 my-auto">
            <h3>Read More About Us</h3>
            <p class="pe-5">Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            <a href="javascript:;" class="text-primary icon-move-right">More about us
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-ship opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">It becomes harder for us to give others a hand. <br> We get our heart broken by people we love.</p>
              </div>
            </div>

            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-handshake opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">As we live, our hearts turn colder. <br>Cause pain is what we go through as we become older.</p>
              </div>
            </div>
            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-hourglass opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">When we lose family over time. <br> What else could rust the heart more over time? Blackgold.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    let extScript = document.createElement('script')
    extScript.setAttribute('src', './assets/script/core/bootstrap.bundle.min.js')
    document.head.appendChild(extScript)
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
