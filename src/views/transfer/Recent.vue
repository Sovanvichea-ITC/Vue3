<template>
    <div id="popupDetailTransfered" class="flex justify-content-center col-12 ">
        <div class="row flex justify-content-center col-md-8 " v-bind:class="{ blur: getBlurDetail }">
            <div v-for="( tran, i ) in  transfereds  " :key="i">
                <div v-if="tran.transaction == 'tranferred'" class="col-12 mb-4" @click="popupDetailFun(true)">
                    <div class="row box-right bg-white shadow">
                        <div class="col-md-8 ps-0 ">
                            <p class="ps-3 textmuted fw-bold h6 mb-0">Transfered To <b> {{ tran.receivedName }}</b> |
                                <b> {{ tran.receivedID }}</b>
                                <!-- Reciever <b> {{ tran.sendName }}</b> -->
                            </p>
                            <p class="ps-3 textmuted fw-bold h6 mb-0"> From account
                                <b> {{ tran.sendName }}</b> | <b> {{ tran.sendId }}</b>
                            </p>



                            <p class="h1 fw-bold d-flex"> <span class="  textmuted pe-1 h6 align-text-top mt-1"></span>
                                -{{ tran.amount }}
                                <span class="textmuted">&nbsp;{{ tran.type }}</span>
                            </p>
                            <p class="ms-3 px-2 bg-red">Transaction Hash: {{ tran.hash }}</p>
                        </div>
                        <div class="col-md-4">
                            <p class=""> Transaction Date:<span class="pe-2 p-blue"></span><br>
                                <span class="p-blue">{{ tran.date }}</span>
                            </p>
                            <p class="fw-bold mb-3"><span class=" pe-1">

                                </span>
                                <!-- <span class="textmuted">.50</span> -->
                            </p>
                            <p class="p-org "><span class=" pe-2"></span>Purpose: </p>
                            <p class="fw-bold"><span class=" pe-1"></span>
                                <span class="text-break">{{ tran.purose }}</span>
                                <!-- <span class="textmuted">.00</span> -->
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="tran.transaction == 'recieved'" class="col-12 mb-4" @click="popupDetailFun(true)">
                    <div class="row box-right bg-white shadow">
                        <div class="col-md-8 ps-0 ">
                            <p class="ps-3 textmuted fw-bold h6 mb-0">Receiver <b> {{ tran.receivedName }}</b> |
                                <b> {{ tran.receivedID }}</b>
                                <!-- Reciever <b> {{ tran.sendName }}</b> -->
                            </p>
                            <p class="ps-3 textmuted fw-bold h6 mb-0"> From account
                                <b> {{ tran.sendName }}</b> | <b> {{ tran.sendId }}</b>
                            </p>

                            <p class="h1 fw-bold d-flex"> <span class="  textmuted pe-1 h6 align-text-top mt-1"></span>
                                {{ tran.amount }}
                                <span class="textmuted">&nbsp;{{ tran.type }}</span>
                            </p>
                            <p class="ms-3 px-2 bg-green">Transaction Hash: {{ tran.hash }}</p>
                        </div>
                        <div class="col-md-4">
                            <p class=""> Transaction Date:<span class=" pe-2 p-blue"></span><br>
                                <span class="p-blue">{{ tran.date }}</span>
                            </p>
                            <p class="fw-bold mb-3"><span class=" pe-1">

                                </span>
                                <!-- <span class="textmuted">.50</span> -->
                            </p>
                            <p class="p-org"><span class=" pe-2"></span>Purpose: </p>
                            <p class="fw-bold text-break"><span class=" pe-1"></span>
                                <span class="text-break">{{ tran.purose }}</span>
                                <!-- <span class="textmuted">.00</span> -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div v-if="popupDetail" class="popupDetail align-middle">
        <PopupDetail @clickedclose="clickedclosed"></PopupDetail>
    </div>
</template>

<script setup>

import PopupDetail from '../../components/popup/recent/PopupDetail.vue'

</script>

<script>

export default {
    data() {
        return {
            popupDetail: false,
            getBlurDetail: false,
            showPopupComfirm: false,
            showPopupTransfered: false,
            selectedFromAcc: '',
            selectedToAcc: '',
            selectedPurpose: '',
            currency: "KHR",
            amountMoney: '',
            getBlur: false,
            transfereds: [
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'tranferred', date: '17 June 2023, 09:36PM' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'USD', transaction: 'recieved', date: '08 June 2023, 09:36PM' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'recieved', date: '11 April 2022, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'tranferred', date: '28 March 2022, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'USD', transaction: 'tranferred', date: '20 April 2022, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'recieved', date: '01 April 2022, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'recieved', date: '08 Junly 2021, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'recieved', date: '20 June 2021, 09:36PM ' },
                { sendId: '0001 343 336', sendName: 'YANN Sovanvichea', receivedID: '001 333 110', receivedName: 'Sophea Boramey', amount: '9999.00', hash: '2ha3qp', purose: 'Donate', type: 'KHR', transaction: 'recieved', date: '08 June 2021, 09:36PM ' },

            ],
        }
    },

    mounted() {

    },
    watch: {
        // currency() {
        //     this.onChange(this.currency);
        // },
        // amountMoney(oldvalue, newvalue) {
        //     console.log("newvalue: ", newvalue)
        // }
    },
    methods: {
        clickedclosed(evn) {
            this.popupDetail = evn
            this.getBlurDetail = evn;
        },
        popupDetailFun(evn) {
            this.popupDetail = evn
            this.getBlurDetail = evn;
            $("#formTransfer").find("*").prop('disabled', true);
        },

        getData() {
            // var formTransferElement = document.getElementById("#formTransfer");
            // $("#formTransfer").className += 'blur'
            // formTransferElement.classList.add("blur");
            this.getBlur = true;
            $("#formTransfer").find("*").prop('disabled', true);

            this.showPopupComfirm = true;

            this.amountMoney = $("input[data-type='currency']").val()
            console.log("selectedFromAcc", this.selectedFromAcc)
            console.log("selectedToAcc", this.selectedToAcc)
            console.log("amountMoney", this.amountMoney.replace('USD', "").replace('KHR', "").replace(',', ""))

            // $("input[data-type='currency']").val(this.amountMoney)
        },
        transferComfirmPopup(env) {
            // alert(env)
            if (env) {
                this.showPopupComfirm = false;
                this.showPopupTransfered = true;
            } else {
                $("#formTransfer").find("*").prop('disabled', false);
                this.getBlur = false;
                this.showPopupComfirm = false;
                // this.getBlur = true;
            }
        },
        popupTransfered() {
            this.showPopupTransfered = false;
            $("#popupDetailTransfered").find("*").prop('disabled', false);
            this.getBlur = false;
        }
    },

    // datas: () => ({
    //     selectedAcc: null,

    // }),

}

</script>

<style>
#popupDetailTransfered {
    position: relative;
}

.popupDetail {
    border: solid 1px black;
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: white;
    z-index: 100;
    height: 400px;
    margin-top: -200px;

    width: 600px;
    margin-left: -300px;
    /* top: calc(100vh); */
}

/* .blur {
    background: rgba(255, 255, 255, 0.2);
    filter: blur(1px);
    
} */

/* body:not(#unblurred) {
    filter: blur(0.2px);
} */

/* #unblurred {
    background:yellow; 
    filter: blur(0px);
} */
p {
    margin: 0
}



.popupComfirmTransfer {
    position: relative;
    left: 0%;
    top: -94%;
    z-index: 3;
    margin: auto;
    transition-duration: 10s, 30s, 230ms;
}

/* .container {
    max-width: 900px; 
    margin: 30px auto;
    background-color: #e8eaf6;
     padding: 35px;
} */

.bg-color-bluedark {
    background: #0926A7;
    color: #F1C40F;

}

.bg-color-bluedark:hover {
    color: #fff;
}

.box-right {
    padding: 30px 25px;
    background-color: white;
    border-radius: 15px
}

.box-left {
    padding: 20px 20px;
    background-color: white;
    border-radius: 15px
}

.textmuted {
    color: #7a7a7a
}

.bg-green {
    background-color: #d4f8f2;
    color: #06e67a;
    padding: 3px 0;
    display: inline;
    border-radius: 25px;
    font-size: 11px
}

.bg-red {
    background-color: #f8d4d4;
    color: #e61106;
    padding: 3px 0;
    display: inline;
    border-radius: 25px;
    font-size: 11px
}

.p-blue {
    font-size: 14px;
    color: #1976d2
}

.p-org {
    font-size: 14px;
    color: #fbc02d
}

.h7 {
    font-size: 15px
}

.h8 {
    font-size: 12px
}

.h9 {
    font-size: 10px
}

.bg-blue {
    background-color: #dfe9fc9c;
    border-radius: 5px
}

.form-control {
    box-shadow: none !important
}

.card input::placeholder {
    font-size: 14px
}

::placeholder {
    font-size: 14px
}

input.card {
    position: relative
}

.far.fa-credit-card {
    position: absolute;
    top: 10px;
    padding: 0 15px
}

.fas,
.far {
    cursor: pointer
}

.cursor {
    cursor: pointer
}

.btn.btn-primary {
    box-shadow: none;
    height: 40px;
    padding: 11px
}

.bg.btn.btn-primary {
    background-color: transparent;
    border: none;
    color: #1976d2
}

.bg.btn.btn-primary:hover {
    color: #539ee9
}

/* @media(max-width:320px) {
    .h8 {
        font-size: 11px
    }

    .h7 {
        font-size: 13px
    }

    ::placeholder {
        font-size: 10px
    }
} */
</style>