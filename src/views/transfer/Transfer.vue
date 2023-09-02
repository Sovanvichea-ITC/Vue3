<script setup>

import Breadcrumbs from '@components/breadcrumb/Breadcrumb.vue'
// import TransferOwner from './TransferOwner.vue'
import TransferOwner from './TransferToOwner.vue'
import TransferToOther from './TransferToOther.vue'
import Recent from './Recent.vue'

// const myItems = [{
//   name: 'home',
//   url: 'Homepage'
// }, {
//   name: 'transfer',
//   url: 'Transfer'
// }]
</script>


<template>
  <div class="transfer">
    <div class=" row breadcrumbs col-10 pr-4 mb-4 ml-56">
      <Breadcrumbs :items="myItems" />
    </div>
    <div class="row g-3">
      <div class="col-4 p-3 d-flex justify-content-center">
        <router-link :to="{ name: 'Transfer', params: { feature: 'Transfer_To_Own' } }">
          <div v-if="$route.params.feature == 'Transfer_To_Own'" @click="getFeature('Transfer_To_Own')"
            class="button-function-feature selected-feature" role="button">
            <!-- <div><img src="../../assets/svg/bill.svg"></div> -->
            <div class=""><span>Transfer to own</span></div>
          </div>
          <div v-else class="button-function-feature " role="button">
            <!-- <div><img src="../../assets/svg/bill.svg"></div> -->
            <div class=""><span>Transfer to own</span></div>
          </div>
        </router-link>
      </div>
      <div class="col-4 p-3 d-flex justify-content-center">
        <router-link :to="{ name: 'Transfer', params: { feature: 'Transfer_To_Other' } }">
          <div v-if="$route.params.feature == 'Transfer_To_Other'" @click="getFeature('Transfer_To_Other')"
            class="button-function-feature selected-feature" role="button">
            <div><span>Transfer to other</span></div>
          </div>
          <div v-else class="button-function-feature" role="button">
            <div><span>Transfer to other</span></div>
          </div>
        </router-link>
      </div>
      <div class="col-4 p-3 d-flex justify-content-center">
        <router-link :to="{ name: 'Transfer', params: { feature: 'Recent' } }">
          <div v-if="$route.params.feature == 'Recent'" @click="getFeature('Recent')"
            class="button-function-feature selected-feature" role="button">
            <div><span>Recent</span></div>
          </div>
          <div v-else class="button-function-feature" role="button">
            <div><span>Recent</span></div>
          </div>
        </router-link>

      </div>
    </div>


    <div v-if="$route.params.feature == 'Transfer_To_Own'" class="row px-4 mt-3">
      <TransferOwner></TransferOwner>
    </div>
    <div v-else-if="$route.params.feature == 'Transfer_To_Other'" class="row px-4 mt-3">
      <TransferToOther></TransferToOther>
    </div>
    <div v-else-if="$route.params.feature == 'Recent'" class="row px-4 mt-3">
      <Recent></Recent>
    </div>
  </div>
  <!-- <h1>This is an transfer page</h1> -->
</template>
<script>
import router from '../../router/index.js';

export default {
  data: () => ({
    myItems: [{
      name: 'Home',
      url: 'Homepage',
    }, {
      name: 'Transfer',
      url: 'Transfer',
    },]
  }),
  methods: {
    getFeature(feature) {
      // this.myItems[1].params = feature
      // this.myItems = this.myItems
      // alert(feature)
    }
  },
  mounted() {
    // router.replace({ path: '/home/profile' })
    // if (this.$route.params.feature) {
    //   this.myItems[1].params = 'Transfer To Other'
    // }
    // alert(this.$route.params.feature)
  }
}
</script>
  
<style>
/* .breadcrumbs{
  align-items:flex-start;
  display: flex;
  justify-content: flex-start;
} */

.blur {
  background: rgba(181, 187, 255, 0.16);
  filter: blur(8px);

}

.selected-feature {
  background-color: #b3d3ea;
  color: #2c5777;
}

.button-function-feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 50px;
  /* background-color: #ffffff; */
  border-radius: 5px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

}

.button-function-feature:hover,
.button-function-feature:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

.button-function-feature:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-function-feature:active {
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
  