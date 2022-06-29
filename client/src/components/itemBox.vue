<template>
<div id="app">
  <!-- <div class="card card-body blur mx-md-4 mt-n6 mx-3">
  </div> -->
  <section class="box" id="medicine" v-for="value in medicine" :key="value">
  <a href="google.com"></a>
    <span>
      <img src="../assets/tablet.png" alt="icon" class="image">
    </span>
    {{value.medicineName}}
    <ul>
      <li>Price: {{value.medicinePrice}}</li>
      <li>Delivery Status: {{value.delivery}}</li>
    </ul>
  </section>
</div>
</template>

<script>
export default({
  el: '#app',
  data () {
    return {
      medicine: [
        {
          medicineName: 'Peracetamol', medicinePrice: '10BDT', delivery: 'Available'
        },
        {
          medicineName: 'Napadol', medicinePrice: '15BDT', delivery: 'Not Available'
        },
        {
          medicineName: 'Napadol', medicinePrice: '15BDT', delivery: 'Not Available'
        },
        {
          medicineName: 'Napadol', medicinePrice: '15BDT', delivery: 'Not Available'
        }
      ]
    }
  }
})
</script>

<style scoped>
#app{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

section {
  position: relative;
  font-size: 1.5vw;
  resize: inherit;
}
.image {
  max-width: 100%;
  height: auto;
}
.box{
  color: #fff;
  flex-wrap: wrap;
  /* background: rgba(255, 255, 255, 0.1); */
  height: max-content;
  width: max-content;
  margin: auto;
  padding: 2px 10px 20px 10px ;
  /* border: 1px solid rgba(255, 255, 255, 0.42); */
  border-radius: 9px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
}
.mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
}
.mt-n6 {
    margin-top: -4rem !important;
}
.mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
}
.blur {
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.8) !important;
}
.card-body {
    flex: 1 1 auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    color: var(--bs-card-color);
}
.card {
    --bs-card-spacer-y: 1rem;
    --bs-card-spacer-x: 1rem;
    --bs-card-title-spacer-y: 0.5rem;
    --bs-card-border-width: 0;
    --bs-card-border-color: rgba(0, 0, 0, 0.125);
    --bs-card-border-radius: 0.75rem;
    --bs-card-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --bs-card-inner-border-radius: 0.75rem;
    --bs-card-cap-padding-y: 0.5rem;
    --bs-card-cap-padding-x: 1rem;
    --bs-card-cap-bg: #fff;
    --bs-card-cap-color: ;
    --bs-card-height: ;
    --bs-card-color: ;
    --bs-card-bg: #fff;
    --bs-card-img-overlay-padding: 1rem;
    --bs-card-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: var(--bs-card-height);
    word-wrap: break-word;
    background-color: var(--bs-card-bg);
    background-clip: border-box;
    border: var(--bs-card-border-width) solid var(--bs-card-border-color);
    border-radius: var(--bs-card-border-radius)
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
</style>
