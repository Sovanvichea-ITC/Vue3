<template>
    <div class="popup d-flex flex justify-content-center flex-column ">
        <div class="w-49 bg-white shadow rounded-lg pt-4 pb-4 pr-5 pl-5">
            <div class="icon flex justify-content-center ">
                <img src="../../../assets/svg/wallet.svg">
            </div>
            <div class="text-decri flex justify-content-center mb-2">
                <h6><b>You will transfer</b></h6>
                <!-- #F1C40F -->
            </div>
            <div class="money flex justify-content-center mb-3 ">
                <h3><b>{{ confirmTransfer.amountMoney }} {{ confirmTransfer.type }}</b></h3>

            </div>
            <div class="text flex justify-content-center mb-2">
                <h6><b>To</b></h6>
            </div>
            <div class="flex justify-content-center text-color-name mb-2">
                <h5><b><b> {{ confirmTransfer.TransferName }}</b></b></h5>

            </div>
            <div class="text-name flex justify-content-center mb-2">
                <h6><b> {{ confirmTransfer.type }} {{ confirmTransfer.accountID }}</b></h6>
            </div>
            <div class="text flex justify-content-center text-secondary ">
                Please verify the information above.
            </div>

            <div class="bg-color-btn p-2 rounded-lg flex justify-content-center mt-3 font-weight-bold"
                @click="clickedbtn(true)">COMFIRM</div>
            <div class="bg-color-btn-cancle p-2 rounded-lg flex justify-content-center mt-3 font-weight-bold"
                @click="clickedbtn(false)">CANCLE</div>
        </div>
    </div>
</template>

<style>
.popup {
    transition-duration: 10s, 30s, 230ms;
    transition-timing-function: ease-out;
}


.text-color-name {
    color: #F1C40F;
}

.bg-color-btn {
    background: #0926A7;
    color: #F1C40F;
}

.bg-color-btn-cancle {
    background: #8e8f92;
    color: #ffffff;
}

.bg-color-btn-cancle:hover {
    background: #d6d6d6;
    color: #8e8f92;
}



.bg-color-btn:hover {
    color: #fff;
}
</style>



<script>

export default {
    data() {
        return {
            confirmTransfer: { TransferName: 'YANN Sovanvichea', amountMoney: '100', type: 'USD', accountID: '017715327' }
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