<script setup>

import Breadcrumbs from '../../components/breadcrumb/Breadcrumb.vue'
// import Simple from './simple.vue'
import Simple from './transferOwner.vue'


const myItems = [{
  name: 'home',
  url: 'Homepage'
}, {
  name: 'transfer',
  url: 'Transfer'
}]
</script>


<template>
  <div class="transfer">
    <div class="row g-3">
      <div class="col-4 p-3 d-flex justify-content-center">
        <div class="button-function" role="button">
          <!-- <div><img src="../../assets/svg/bill.svg"></div> -->
          <div><span>Transfer to own</span></div>
        </div>
      </div>
      <div class="col-4 p-3 d-flex justify-content-center">
        <div class="button-function" role="button">
          <!-- <div><img src="../../assets/svg/bill.svg"></div> -->
          <div><span>Transfer to other</span></div>
        </div>
      </div>
      <div class="col-4 p-3 d-flex justify-content-center">
        <div class="button-function" role="button">
          <!-- <div><img src="../../assets/svg/bill.svg"></div> -->
          <div><span>Recent</span></div>
        </div>
      </div>
    </div>

    <div class=" row breadcrumbs col-12 px-4">
      <Breadcrumbs :items="myItems" />
    </div>
    <div class="row px-4 mt-3">
      <Simple></Simple>
    </div>
  </div>
  <!-- <h1>This is an transfer page</h1> -->
</template>
  
<style>

/* .breadcrumbs{
  align-items:flex-start;
  display: flex;
  justify-content: flex-start;
} */
.button-function {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

}

.button-function:hover,
.button-function:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

.button-function:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-function:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

.transfer {
  /* min-height: 60vh; */
  margin-top: 5em;



  align-items: center;
  /* margin-left: 55px; */
  justify-content: center;
  display: flex;
  flex-direction: column;

}
</style>
  