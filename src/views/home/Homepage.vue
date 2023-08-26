<template>
    <div class="homepage">
        <div class="wrapper">
            <div class="card">
                <div class="circle">
                    <div class="bar"></div>
                    <div class="box"><span></span></div>
                </div>
                <!-- <div class="text">HTML & CSS</div> -->
            </div>


            <div class="card">
                <span>Money: 300,000$ </span> <br>
                <span>Account Number: 123 334 444 </span>
            </div>
            <div class="card">
                <span>Money: 300,330,332 reil</span> <br>
                <span>Account Number: 123 334 444 </span>


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
                        <div><span>Account</span></div>
                    </div>
                </div>

                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/bill.svg"></div>
                        <div><span>Account</span></div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/transfer.svg"></div>
                        <div><span>Account</span></div>
                    </div>
                </div>
                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/schdule.svg"></div>
                        <div><span>Account</span></div>
                    </div>
                </div>

                <div class="col-4 p-3 d-flex justify-content-center">
                    <div class="button-8" role="button">
                        <div><img src="../../assets/svg/mobile.svg"></div>
                        <div><span>Account</span></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    data: () => ({
        persent: 0.60,

    }),
    mounted() {
        let options = {
            startAngle: -1.55,
            size: 150,
            value: this.persent,
            fill: { gradient: ['#a445b2', '#fa4299'] }
        }
        $(".circle .bar").circleProgress(options).on('circle-animation-progress',
            function (event, progress, stepValue) {
                $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
            });

    }
}



</script>
  
<style>
.info {
    height: 100px;
    display: flex;

}

.USD,
.KHR {
    padding: 15px;
    margin: 10px;
    background: #ffffff;
}

.feature {
    margin-top: 35px;
    background: #fff;
}

.button-8 {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 150px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;

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
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.wrapper .card {
    background: #fff;
    width: calc(33% - 20px);
    /* height: 300px; */
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

.wrapper .card .circle {
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    cursor: default;
}

.card .circle .box,
.card .circle .box span {
    position: absolute;
    top: 50%;
    left: 50%;
}

.card .circle .box {
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all 0.2s;
}

.card .circle:hover .box {
    transform: translate(-50%, -50%) scale(0.91);
}

.card .circle .box span,
.wrapper .card .text {
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.circle .box span {
    font-size: 38px;
    font-family: sans-serif;
    font-weight: 600;
    transform: translate(-45%, -45%);
    transition: all 0.1s;
}

.card .circle:hover .box span {
    transform: translate(-45%, -45%) scale(1.09);
}

.card .text {
    font-size: 20px;
    font-weight: 600;
}

@media(max-width: 753px) {
    .wrapper {
        max-width: 700px;
    }

    .wrapper .card {
        width: calc(50% - 20px);
        margin-bottom: 20px;
    }
}

@media(max-width: 505px) {
    .wrapper {
        max-width: 500px;
    }

    .wrapper .card {
        width: 100%;
    }
}
</style>
  