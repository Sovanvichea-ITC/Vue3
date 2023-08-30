<template>
    <div class="popup d-flex flex justify-content-center flex-column pl-8 pr-8">
        <div class="w-49 bg-popup-blue shadow rounded-lg p-5  ">
            <div class="icon flex justify-content-center ">
                <img src="../../../assets/svg/handsThankYou.svg">
            </div>
            <div class="text-decri-transfered flex justify-content-center m-3">
                <h6><b>Transfer was completed</b></h6>
                <!-- #F1C40F -->
            </div>
            <div class="money-transfered flex justify-content-center mb-3 ">
                <h3><b>{{ confirmTransfered.amountMoney }} {{ confirmTransfered.type }}</b></h3>

            </div>
            <div class="text-transfered flex justify-content-center mb-2">
                <h6><b>To</b></h6>
            </div>
            <div class="flex justify-content-center text-color-name mb-2">
                <h5><b><b> {{ confirmTransfered.TransferName }}</b></b></h5>

            </div>
            <div class="text-name-transfered flex justify-content-center mb-2">
                <h6><b> {{ confirmTransfered.type }} {{ confirmTransfered.accountID }}</b></h6>
            </div>
            <div class="text-date-transfered flex justify-content-center ">
                {{ confirmTransfered.dateTransdered }}
            </div>

            <div class="bg-color-btn-transfered p-2 rounded-lg flex justify-content-center mt-3 font-weight-bold"
                @click="clickedbtn(true)">VIEW TRANSFERS</div>
            <!-- <div class="bg-color-btn-cancle p-2 rounded-lg flex justify-content-center mt-3 font-weight-bold"
                @click="clickedbtn(false)">CANCLE</div> -->
        </div>
    </div>
</template>

<style>
.text-decri-transfered,
.money-transfered,
.text-transfered,
.text-name-transfered {
    color: #fff;
}

.text-date-transfered {
    color: #b3b3b3;
}

.bg-popup-blue {
    background-color: #0926A7;
}

.popup {
    transition-duration: 10s, 30s, 230ms;
}


.text-color-name {
    color: #F1C40F;
}

.bg-color-btn-transfered {
    background: #ffffff;
    color: #F1C40F;
}

/* .bg-color-btn-cancle {
    background: #8e8f92;
    color: #ffffff;
} */

.bg-color-btn-cancle:hover {
    background: #d6d6d6;
    color: #8e8f92;
}



.bg-color-btn-transfered:hover {
    color: #fff;
    background-color: #b4b4b4;
}
</style>



<script>

export default {
    data() {
        return {
            confirmTransfered: { TransferName: 'YANN Sovanvichea', amountMoney: '100', type: 'USD', accountID: '017715327', dateTransdered: 'Aug 30, 2023 04:00PM' }
        }

    },
    // props: ['confirmtTransfer'],

    mounted() {

    },
    methods: {
        clickedbtn(comfirm) {
            this.$emit('clickedbtn', comfirm);
        }
    }
}
</script>