<template>
    <div class="profile">
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-4 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5 profile-image">
                        <img class="rounded-circle mt-5" width="150px" :src=dataProfileUser.img>
                        <span class="font-weight-bold">{{ dataProfileUser.fullname }}
                        </span>
                        <span class="text-black-50">{{ dataProfileUser.email }}</span>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="mx-auto">
                        <div class="p-3 py-5 px-3">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text"
                                        class="form-control" placeholder="first name" value=""></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text"
                                        class="form-control" value="" placeholder="surname"></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text"
                                        class="form-control" placeholder="enter phone number" value=""></div>
                                <div class="col-md-12"><label class="labels">Address</label><input type="text"
                                        class="form-control" placeholder="enter address" value=""></div>
                                <!-- <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text"
                                        class="form-control" placeholder="enter address line 2" value=""></div> -->
                                <!-- <div class="col-md-12"><label class="labels">Postcode</label><input type="text"
                                        class="form-control" placeholder="enter address line 2" value=""></div> -->
                                <!-- <div class="col-md-12"><label class="labels">State</label><input type="text"
                                    class="form-control" placeholder="enter address line 2" value=""></div>
                            <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control"
                                    placeholder="enter address line 2" value=""></div> -->
                                <div class="col-md-12"><label class="labels">Email</label><input type="text"
                                        class="form-control" placeholder="enter email" value=""></div>
                                <div class="col-md-12"><label class="labels">Education</label><input type="text"
                                        class="form-control" placeholder="education" value=""></div>

                                <div class="col-md-12"><label class="labels">Position</label><input type="text"
                                        class="form-control" placeholder="position" value=""></div>
                            </div>
                            <!-- <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text"
                                    class="form-control" placeholder="country" value=""></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text"
                                    class="form-control" value="" placeholder="state"></div>
                        </div> -->
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save
                                    Profile</button></div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit
                                Experience</span><span class="border px-3 p-1 add-experience"><i
                                    class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                        <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text"
                                class="form-control" placeholder="experience" value=""></div> <br>
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text"
                                class="form-control" placeholder="additional details" value=""></div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        dataProfileUser: {
            idUser: "123",
            fullname: "John Smith",
            email: "john.smith@gmail.com",
            img: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png",
        },
    }),
}

</script>

  
<style>
.profile {
    /* min-height: 70vh; */
    display: flex;
    align-items: center;
    
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}

.profile-image img {
    width: 150px;
}

/* @media (min-width: 1024px) {
    .profile {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
} */
</style>
  