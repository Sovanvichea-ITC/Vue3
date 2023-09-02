<template>
    <div id="formTransfer" class="col-md-12 col-12 ">
        <div class="row flex justify-content-center ">

            <div class="col-6 px-0 mb-3 " v-bind:class="{ blur: getBlur }">
                <div class=" box-right shadow-sm">
                    <div class=" d-flex mb-2">
                        <h5>Tranfer to other account</h5>
                    </div>

                    <div class="row">
                        <div class="col-12 mb-2">

                            <p class="textmuted h8">From</p>

                            <select class="form-control" @change="changeCurrencyFrom($event)">
                                <option disabled selected value="">Select Credit account</option>
                                <option v-for="(option, optIndex) in optionsFrom" :key="optIndex" :value="optIndex">
                                    <span>{{ option.id }} </span>
                                    &nbsp;<span>{{ option.name }} </span>
                                    &nbsp; <span>{{ option.money }} </span>
                                    <span>{{ option.type }} </span>
                                </option>
                            </select>

                        </div>

                        <div class="col-12 mb-2">

                            <p class="textmuted h8">To</p>

                            <!-- <select class="form-control" @change="changeCurrencyTo($event)">
                                <option disabled selected value="">Select Credit account</option>
                                <option v-for="(opt, optionIndex)  in optionsTo" :key="optionIndex" :value="optionIndex">
                                    <span>{{ opt.id }} </span>
                                    &nbsp;<span>{{ opt.name }} </span>
                                    &nbsp; <span>{{ opt.money }} </span>
                                    <span>{{ opt.type }} </span>
                                </option>

                            </select> -->

                            <input class="form-control" @change="changeCurrencyTo($event)" placeholder="Account number">
                            <!-- <option disabled selected value="">Select Credit account</option>
                            <option v-for="(opt, optionIndex)  in optionsTo" :key="optionIndex" :value="optionIndex">
                                <span>{{ opt.id }} </span>
                                &nbsp;<span>{{ opt.name }} </span>
                                &nbsp; <span>{{ opt.money }} </span>
                                <span>{{ opt.type }} </span>
                            </option> -->




                        </div>
                        <div class="col-12 mb-2">
                            <p class="textmuted h8">Amount</p>
                            <input class="form-control" type="text" name="currency-field" id="currency-field"
                                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="00.00">
                        </div>

                        <div class="col-12 mb-2">
                            <p class="textmuted h8">Purpose</p>
                            <select class="form-control" @change="purosetxt($event)">
                                <option disabled selected value="">Select purpose (optional)</option>
                                <option v-for="(p, purposeIndex)  in purpose" :key="purposeIndex" :value="purposeIndex">
                                    <span>{{ p.text }} </span>
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 flex justify-content-center mt-4">
                    <div class="col-12 ">
                        <div class="bg-color-bluedark  align-middle text-center  p-2 rounded-lg shadow-sm font-weight-bold "
                            @click="getData()"> <span><b>Transfer to Other</b></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div v-if="showPopupComfirm" style="position: static;">
        <div id="" class="popupComfirmTransfer">
            <popUpComfirm @clickedbtn="transferComfirmPopup">
            </popUpComfirm>
        </div>
    </div>

    <div v-if="showpopupComfirmPin" style="position: static;">
        <div class="popupComfirmPin">
            <ComfirmPin @comfirmedPin="comfirPin" :infoTransfer="infoTransferComfirm"></ComfirmPin>
        </div>
    </div>

    <div v-if="showPopupTransfered" style="position: static;">
        <div id="" class="popupComfirmTransfer">
            <popUpTransfer @clickedbtn="popupTransfered" :transferedInfo:="transferedInfo"></popUpTransfer>
        </div>
    </div>
</template>

<script setup>

import popUpTransfer from '@components/popup/transfered/PopupTransfered.vue'
import popUpComfirm from '@components/popup/pin/Pin.vue'

import ComfirmPin from '@components/popup/pin/Pin.vue'



</script>

<script>
export default {

    data() {
        return {
            showpopupComfirmPin: false,
            showPopupComfirm: false,
            showPopupTransfered: false,
            infoTransferComfirm: {},
            transferedInfo: {},
            selectedFromAcc: '',
            selectedToAcc: '',
            selectedPurpose: '',
            currency: "KHR",
            amountMoney: '',
            getBlur: false,
            optionsFrom: [
                { id: '0001 343 336', name: 'Wallet Account', money: '199999.00', type: 'KHR' },
                { id: '0001 999 336', name: 'Wallet Account', money: '199555.06', type: 'USD' },
                { id: '0001 333 666', name: 'Savings Account', money: '212223.08', type: 'USD' }
            ],
            optionsTo: [
                { id: '0001 343 336', name: 'Wallet Account', money: '199999.00', type: 'KHR' },
                { id: '0001 999 336', name: 'Wallet Account', money: '199555.06', type: 'USD' },
                { id: '0001 333 666', name: 'Savings Account', money: '212223.08', type: 'USD' }
            ],
            purpose: [
                { text: 'For buy something' },
                { text: 'For Student ' },
                { text: 'Other Bill' }
            ],
        }
    },

    mounted() {
        this.infoTransferComfirm = { amountMoney: this.amountMoney.replace('USD', "").replace('KHR', "").replace(',', ""), sendToAcc: this.selectedFromAcc, reciveAcc: this.selectedToAcc }

        console.log("selectedFromAcc", this.selectedFromAcc)
        console.log("selectedToAcc", this.selectedToAcc)
        console.log("amountMoney", this.amountMoney.replace('USD', "").replace('KHR', "").replace(',', ""))

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
        changeCurrencyFrom(event) {
            // this.user.address.country = event.target.value
            if (event.target.value) {
                this.selectedFromAcc = this.optionsFrom[event.target.value]
                this.currency = this.selectedFromAcc.type;
            }
            console.log("changeCurrencyFrom: ", event.target.value);
            this.onChange(this.currency);


            // alert() 
        },
        changeCurrencyTo(event) {
            // if (event.target.value) {
            //     this.selectedToAcc = this.optionsTo[event.target.value]
            this.selectedToAcc = event.target.value;
            // }
            // search acc

            console.log("changeCurrencyTo: ", event.target.value);

        },
        purosetxt(event) {
            if (event.target.value) {
                this.selectedPurpose = this.purose[event.target.value]
                alert(this.selectedPurpose)
            }
        },
        onChange(curr) {
            // var amount = '';
            $("input[data-type='currency']").on({
                keyup: function () {
                    var amount = formatCurrency($(this));
                    console.log(amount)
                },
                blur: function () {
                    formatCurrency($(this), "blur");

                }
            });


            function formatNumber(n) {
                // format number 1000000 to 1,234,567
                return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }


            function formatCurrency(input, blur) {
                // appends $ to value, validates decimal side
                // and puts cursor back in right position.

                // get input value
                var input_val = input.val();
                // alert(input_val)

                // don't validate empty input
                if (input_val === "") { return; }

                // original length
                var original_len = input_val.length;

                // initial caret position 
                var caret_pos = input.prop("selectionStart");

                // check for decimal
                if (input_val.indexOf(".") >= 0) {

                    // get position of first decimal
                    // this prevents multiple decimals from
                    // being entered
                    var decimal_pos = input_val.indexOf(".");

                    // split number by decimal point
                    var left_side = input_val.substring(0, decimal_pos);
                    var right_side = input_val.substring(decimal_pos);

                    // add commas to left side of number
                    left_side = formatNumber(left_side);

                    // validate right side
                    right_side = formatNumber(right_side);

                    // On blur make sure 2 numbers after decimal
                    if (blur === "blur") {
                        right_side += "00";
                    }

                    // Limit decimal to only 2 digits
                    right_side = right_side.substring(0, 2);

                    // join number by . + currency



                    input_val = curr + left_side + "." + right_side;

                    // console.log(parseFloat(((left_side.replace(',',"")) + "." + right_side)))
                    // amount = left_side.replace(',', "")
                    // amount = parseFloat(amount) + "." + right_side;
                    // this.amountMoney = amount

                    // amount = left_side + "." + right_side;

                } else {

                    input_val = formatNumber(input_val);

                    input_val = curr + input_val;

                    // final formatting
                    if (blur === "blur") {
                        input_val += ".00";
                    }
                    // amount = parseFloat(((left_side.replace(',', "")) + "." + right_side));
                    // amount = left_side.replace(',', "")
                    // amount = parseFloat(amount) + "." + right_side;
                    // this.amountMoney = amount
                    // amount = left_side + "." + right_side;
                }

                // send updated string to input

                input.val(input_val);


                // put caret back in the right position
                var updated_len = input_val.length;
                caret_pos = updated_len - original_len + caret_pos;
                input[0].setSelectionRange(caret_pos, caret_pos);

                // return amount;
            }

        },
        getData() {
            // var formTransferElement = document.getElementById("#formTransfer");
            // $("#formTransfer").className += 'blur'
            // formTransferElement.classList.add("blur");
            this.getBlur = true;
            $("#formTransfer").find("*").prop('disabled', true);

            this.showpopupComfirmPin = true;


            this.amountMoney = $("input[data-type='currency']").val()


            this.infoTransferComfirm = { amountMoney: this.amountMoney.replace('USD', "").replace('KHR', "").replace(',', ""), sendToAcc: this.selectedFromAcc, reciveAcc: this.selectedToAcc }

            console.log("selectedFromAcc", this.selectedFromAcc)
            console.log("selectedToAcc", this.selectedToAcc)
            console.log("amountMoney", this.amountMoney.replace('USD', "").replace('KHR', "").replace(',', ""))

            // $("input[data-type='currency']").val(this.amountMoney)
        },
        comfirPin(env) {
            // alert(env)
            if (env) {
                this.showpopupComfirmPin = false;
                this.showPopupTransfered = true;
            } else {
                this.showpopupComfirmPin = false;
                // alert(this.showpopupComfirmPin)
                $("#formTransfer").find("*").prop('disabled', false);
                this.getBlur = false;
            }
        }
        ,
        transferComfirmPopup(env) {
            // alert(env)
            if (env) {
                // this.popupComfirmPin = true;
                this.showPopupComfirm = false;

            } else {
                $("#formTransfer").find("*").prop('disabled', false);

                this.getBlur = false;
                this.showPopupComfirm = false;
                // this.getBlur = true;
            }
        },
        popupTransfered() {
            this.showPopupTransfered = false;
            $("#formTransfer").find("*").prop('disabled', false);
            this.getBlur = false;
        }



    },

    // datas: () => ({
    //     selectedAcc: null,

    // }),

}

</script>

<style>
.popupComfirmPin {
    position: relative;
    left: 0%;
    top: -80%;
    z-index: 3;
    margin: auto;
    transition-duration: 10s, 30s, 230ms;
}

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

.p-blue {
    font-size: 14px;
    color: #1976d2
}

.fas.fa-circle {
    font-size: 12px
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