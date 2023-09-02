<template>
    <div class="popup d-flex flex justify-content-center flex-column ">
        <div class="w-49 bg-white shadow rounded-lg pt-4 pb-4 pr-5 pl-5">
            <div class="section-pin">
                <div class="mt-1 font-weight-bold">You are about to transfer <span class="text-[#F1C40F] font-weight-bold">
                        {{ data.amountMoney }} </span>
                    {{ data.type }} to <br>
                    <span class="text-[#F1C40F] font-weight-bold">{{
                        data.nameRecive
                    }}</span>
                </div>
                <img src="@assets/svg/Otp.svg">
                <div class="justify-content-center mt-2 font-weight-bold">Verification Code</div>
                <!-- <p>Comfirm Pin</p> -->
                <div id='inputs'>
                    <input id='input1' type='text' maxLength="1" />
                    <input id='input2' type='text' maxLength="1" />
                    <input id='input3' type='text' maxLength="1" />
                    <input id='input4' type='text' maxLength="1" />
                </div>
                <!-- <button>Submit</button> -->
            </div>
            <div class="bg-color-btn p-2 rounded-lg flex justify-content-center mt-3.5 font-weight-bold"
                @click="clickedbtn(true)">COMFIRM</div>
            <div class="bg-color-btn-cancle p-2 rounded-lg flex justify-content-center mt-3.5 font-weight-bold"
                @click="clickedbtn(false)">CANCLE</div>

        </div>
    </div>
    {{ infoTransfer }}
</template>

<style>
.popup {
    transition-duration: 10s, 30s, 230ms;
    transition-timing-function: ease-out;
}

/* 
html {
    background-color: deepskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: "Lato", sans-serif;
} */

.section-pin {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    /* width: 40vw; */
    /* min-width: 350px; */
    /* height: 80vh; */
    /* background-color: white; */
    border-radius: 12px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    padding: 24px 0px;
}

svg {
    margin: 16px 0;
}

title {
    font-size: 20px;
    font-weight: bold;
}

/* p {
    color: #a3a3a3;
    font-size: 14px;
    width: 200px;
    margin-top: 4px;
} */

#input1,
#input2,
#input3,
#input4 {
    width: 32px;
    height: 32px;
    text-align: center;
    border: none;
    border-bottom: 1.5px solid #d2d2d2;
    margin: 0 10px;
}

input:focus {
    border-bottom: 1.5px solid deepskyblue;
    outline: none;
}

/* button {
    width: 250px;
    letter-spacing: 2px;
    margin-top: 24px;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    background-color: #33cdff;
    color: white;
    cursor: pointer;
} */


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
    props: ['infoTransfer'],
    emits: {
        comfirmedPin: null,
    },
    data() {
        return {
            data: { amountMoney: 100, type: 'USD', nameRecive: 'YANN Sovanvichea' },
        }

    },
    // props: ['confirmtTransfer'],

    mounted() {

        const inputs = ["input1", "input2", "input3", "input4"];

        inputs.map((id) => {
            const input = document.getElementById(id);
            addListener(input);
        });

        function addListener(input) {
            input.addEventListener("keyup", () => {
                const code = parseInt(input.value);
                if (code >= 0 && code <= 9) {
                    const n = input.nextElementSibling;
                    if (n) n.focus();
                } else {
                    input.value = "";
                }

                const key = event.key; // const {key} = event; ES6+
                if (key === "Backspace" || key === "Delete") {
                    const prev = input.previousElementSibling;
                    if (prev) prev.focus();
                }
            });
        }
        // data: { amountMoney: 100, type: 'USD', nameRecive: 'YANN Sovanvichea' },
        this.data.amountMoney = this.infoTransfer.amountMoney;
        this.data.type = this.infoTransfer.sendToAcc.type;
        this.data.nameRecive = this.infoTransfer.reciveAcc.name;




    },
    methods: {
        clickedbtn(comfirm) {
            // alert(comfirm)
            // this.$emit('clickedbtn', comfirm);
            this.$emit('comfirmedPin', comfirm);
        }
    }
}
</script>