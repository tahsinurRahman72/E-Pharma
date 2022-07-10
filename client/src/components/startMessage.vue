<template>
    <div id="start">
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
    </div>
</template>
<style scoped>
.ePharma{
  animation: ePharma 1.25s;
  animation-direction: alternate;
}
@keyframes ePharma {
  0%   {left: -100vw; opacity: 0%;}
  100%  {left: 0vw; opacity: 100%;}
}
</style>
