<template>
    <div>
        <div class="head-container">
            <heading/>
        </div>
        <section>
            <div class="container py-4">
                <div class="row">
                <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                    <h3 class="text-center">Login</h3>
                    <form @submit.prevent="loginUser()" role="form" id="contact-form" method="post" autocomplete="on">
                    <div class="card-body">
                        <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control">
                        </div>
                        </div>
                        <div class="mb-4">
                        <div class="input-group input-group-dynamic">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="btn bg-gradient-dark w-100">Login</button>
                        </div>
                        <div class="col-md-12">
                            <label class="form-check-label ms-3 mb-0">New user?  <router-link to="/sign-up" class="text-dark"><u>Signup</u></router-link>.</label>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
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
  name: 'login',
  data () {
    index=false
    return{
        user: [],
        email: '',
        password: ''
    }
  },
  methods: {
    loginUser(){
    axios.post('http://localhost:8081/login/login_user', {
        Email: this.email,
        Password: this.password,
    })
    .then((response) => {
        this.index=true
        const stat = JSON.parse(response.status);
        this.user = response.data

        if (stat == '200') {
            this.$router.push({name: 'main'});
      }
      })
    .catch((err)=>{
        this.index=false
        console.log(err)
    })
    },
    LoginSuccess() {
        document.getElementById("alert").style.display = "flex";
    }
  },
  components: {
    heading,
    foot
  }
}
$(document).ready(function() {
var docHeight = $(window).height();
$('section').css('padding-block-start', docHeight/6 + 'px')
$('section').css('padding-block-end', docHeight/3 + 'px')
})
</script>
<style scoped>
.text-center{
    font-size: 3vw;
}
h3{
    padding-block-start: 1vw;
    padding-block-end: 1vw;
    height: fit-content;
    font-size: 2.0vw;
}
input{
    color: white;
}
</style>
