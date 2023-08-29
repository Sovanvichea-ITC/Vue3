

<template>

    <div class="homepage ">
        <div class="wrapper ">
            <div class="card-d bg-card-d-1 ">
                <div class="circle">
                    <div class="bar"></div>
                    <div class="box"><span></span></div>
                </div>
                <!-- <div class="text">HTML & CSS</div> -->
            </div>

            <div class="card-d bg-card-d border-left-USD ">
                <span>Total in USD </span><br>
                <h3 class="fs-3"><b>300,330,332 USD</b></h3>
            </div>

            <div class="card-d bg-card-d border-left-KHR ">
                <span>Total in KHR </span><br>
                <h3 class="fs-3"><b>300,330,332 KHR</b></h3>
            </div>

        </div>


        <!-- <h1>This is an home page</h1> -->

        <div class="feature">
            <div class="row g-3">
                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/account.svg"></div>
                        <div><span>Account</span></div>
                    </div>
                </div>
                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/card.svg"></div>
                        <div><span>Card</span></div>
                    </div>
                </div>

                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/bill.svg"></div>
                        <div><span>Bill</span></div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-4 p-3 d-flex justify-content-center">
                    <router-link :to="{ name: 'Transfer' }">
                        <div class="button-8" role="button">
                            <div><img src="../../assets/svg/transfer.svg"></div>
                            <div><span>Transfer</span></div>
                        </div>
                    </router-link>
                </div>
                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/schdule.svg"></div>
                        <div><span>Schdule</span></div>
                    </div>
                </div>

                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/mobile.svg"></div>
                        <div><span>Mobile</span></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data: () => ({
        persent: 0.80,

    }),
    mounted() {

        this.getData();

        let options = {
            startAngle: -1.55,
            size: 150,
            value: this.persent,

            fill: { gradient: [' #2d53fc', '#0926A7'] }
        }
        $(".circle .bar").circleProgress(options).on('circle-animation-progress',
            function (event, progress, stepValue) {
                // $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
                $(this).parent().find("span").text(String("All Accounts Summary") + "");

            });
    },

    methods: {
        getData() {
            this.persent = 0.2;
        },
    }
}

</script>
  
<style>
canvas {
    column-fill: #F1C40F;
}

.info {
    height: 100px;
    display: flex;

}

.USD,
.KHR {
    padding: 15px;
    margin: 10px;
    /* background: #ffffff; */
}

.feature {
    margin-top: 35px;
    /* background: #fff; */
}

.bg-card-d {
    padding-top: 5px;
    padding-bottom: 5px;
    border-left-style: solid;

    padding-left: 10px;
    border-left-width: 6px;
    /* background-color: #ffc39c; */
}

.border-left-KHR {
    border-left-color: #F1C40F;
}

.border-left-USD {
    border-left-color: #2d53fc;
}


/* 
.bg-card-d-1 {
    background-color: #ffffff00;
} */

.button-8 {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);

}

.button-8:hover,
.button-8:focus {
    background-color: #b3d3ea;
    color: #2c5777;
}

.button-8:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
}

.homepage {
    /* min-height: 60vh; */
    margin-top: 5em;

    align-items: center;
    /* margin-left: 55px; */
    justify-content: center;
    display: flex;
    flex-direction: column;

}

/* 

body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
} */
.wrapper {
    width: 60em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1); */
    padding: 30px;
}

.wrapper .card-d {
    /* background: #ffffff00; */
    width: calc(33% - 20px);
    /* height: 300px; */
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    /* border: 0px solid rgba(0, 0, 0, .125); */
    /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1); */
}

.wrapper .card-d .circle {
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    cursor: default;
    /* background-color: #002fff; */
}

.card-d .circle .box,
.card-d .circle .box span {
    position: absolute;
    top: 50%;
    left: 50%;

}

.card-d .circle .box {
    height: 100%;
    width: 100%;
    background: #ffffff00;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all 0.2s;
}

.card-d .circle:hover .box {
    transform: translate(-50%, -50%) scale(0.91);
}

.card-d .circle .box span,
.wrapper .card-d .text {

    background: -webkit-linear-gradient(left, #2d53fc, #0926A7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.circle .box span {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 600;
    transform: translate(-45%, -45%);
    transition: all 0.1s;
}

.card-d .circle:hover .box span {
    transform: translate(-45%, -45%) scale(1.09);

}

.card-d .text {
    font-size: 20px;
    font-weight: 600;
}

@media(max-width: 753px) {
    .wrapper {
        max-width: 700px;
    }

    .wrapper .card-d {
        width: calc(50% - 20px);
        margin-bottom: 20px;
    }
}

@media(max-width: 505px) {
    .wrapper {
        max-width: 500px;
    }

    .wrapper .card-d {
        width: 100%;
    }
}
</style>
  