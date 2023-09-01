<template>
    <div class="d-flex">
        <div class="float-start col-11">
            <div class="flex justify-content-center float-start">
                <p class="text-primary ">Details</p>
            </div>
        </div>
        <div class=" flex float-end">
            <div class="" @click="clickedClose(false)">
                <img src='../../../assets/svg/close.svg' class="">
            </div>
        </div>




        <!-- <i class='bx bx-x'></i> -->

    </div>
</template>
<script>
export default {
    methods: {
        clickedClose(evn) {
            this.$emit("clickedclose", evn)
        }
    }
}
</script>