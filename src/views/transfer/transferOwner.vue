<template>
    <div class="col-md-12 col-12">
        <div class="row">
            <div class="col-12 mb-4">
                <div class="row box-right">
                    <div class="col-md-8 ps-0 ">
                        <p class="ps-3 textmuted fw-bold h6 mb-0">TOTAL RECIEVED</p>
                        <p class="h1 fw-bold d-flex"> <span
                                class=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>84,254
                            <span class="textmuted">.58</span>
                        </p>
                        <p class="ms-3 px-2 bg-green">+10% since last month</p>
                    </div>
                    <div class="col-md-4">
                        <p class="p-blue"> <span class="fas fa-circle pe-2"></span>Pending </p>
                        <p class="fw-bold mb-3"><span class="fas fa-dollar-sign pe-1"></span>1254 <span
                                class="textmuted">.50</span> </p>
                        <p class="p-org"><span class="fas fa-circle pe-2"></span>On drafts</p>
                        <p class="fw-bold"><span class="fas fa-dollar-sign pe-1"></span>00<span class="textmuted">.00</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 px-0">
                <div class="box-right">
                    <div class="d-flex mb-2">
                        <p class="fw-bold">Create new invoice</p>
                        <p class="ms-auto textmuted"><span class="fas fa-times"></span></p>
                    </div>
                    <div class="d-flex mb-2">
                        <p class="h7">#AL2545</p>
                        <p class="ms-auto bg btn btn-primary p-blue h8"><span class="far fa-clone pe-2"></span>COPY
                            PAYMENT LINK </p>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-2">
                            <p class="textmuted h8">Project / Description</p> <input class="form-control" type="text"
                                placeholder="Legal Consulting">
                        </div>
                        <div class="col-6">
                            <p class="textmuted h8">Issused on</p> <input class="form-control" type="text"
                                placeholder="Oct 25, 2020">
                        </div>
                        <div class="col-6">
                            <p class="textmuted h8">Due on</p> <input class="form-control" type="text"
                                placeholder="Oct 25, 2020">
                        </div>
                    </div>
                </div>
            </div>

            <div class="btn btn-primary d-block h8">PAY <span class="fas fa-dollar-sign ms-2"></span>1400<span
                    class="ms-3 fas fa-arrow-right"></span>
            </div>
        </div>
    </div>
</template>

<style>
p {
    margin: 0
}

/* .container {
    max-width: 900px; 
    margin: 30px auto;
    background-color: #e8eaf6;
     padding: 35px;
} */

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