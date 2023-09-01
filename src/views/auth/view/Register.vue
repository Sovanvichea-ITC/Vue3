<template>
    <div class="">
        <div class="flex justify-between">
            <div class="flex items-center my-4">
                <input checked id="default-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm text-gray-900 dark:text-gray-300">Activate with Account
                    Number</label>
            </div>
            <div class="flex items-center my-4">
                <input id="default-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm text-gray-900 dark:text-gray-300">Activate with Account
                    Card</label>
            </div>
        </div>
        <form class="" action="POST">
            <label class="block mt-2">
                <span class="block text-left text-sm font-medium text-slate-700">Username</span>
                <!-- Using form state modifiers, the classes can be identical for every input -->
                <input type="text" placeholder="Username"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </label>
            <label class="block mt-2">
                <span class="block text-left text-sm font-medium text-slate-700">Date of Birth</span>
                <!-- Using form state modifiers, the classes can be identical for every input -->
                <input type="date" placeholder="Date of Birth"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </label>

            <label class="block mt-2">
                <span class="block text-left text-sm font-medium text-slate-700">Email</span>
                <!-- Using form state modifiers, the classes can be identical for every input -->
                <input type="text" placeholder="Email"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </label>

            <label class="block mt-2">
                <span class="block text-left text-sm font-medium text-slate-700">Address</span>
                <!-- Using form state modifiers, the classes can be identical for every input -->
                <input type="text" placeholder="Address"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
            </label>

            <label class="block mt-2 ">
                <div class="password-field">
                    <span class="block text-left text-sm font-medium text-slate-700">Password</span>
                    <!-- Using form state modifiers, the classes can be identical for every input -->
                    <!-- :v-bind:type="show ? 'password' : 'text'"  -->
                    <input placeholder="Password" type="password" id="fakePassword"
                        class=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                    <span class="absolute"><i id="toggler" class="far fa-eye"></i></span>
                </div>
                <!-- <div id="toggler" class="absolute z-30"> <img src="@/assets/svg/eye-off.svg" alt=""></div> -->
            </label>
            <div class="flex items-center my-4">
                <input id="default-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm text-gray-900 dark:text-gray-300">I have read and agreed
                    to
                    <u class="text-blue-800">Terms and Conditions</u></label>
            </div>

            <label class="block mt-4">
                <!-- Using form state modifiers, the classes can be identical for every input -->
                <button type="button"
                    class="mt-1 block w-full px-3 py-3 bg-yellow-600 text-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:yellow-sky-500 disabled:bg-yellow-50 disabled:text-yellow-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
                    Register
                </button>
            </label>
        </form>
    </div>
</template>

<script setup>
// import EyeOpen from "@/assets/svg/eye-off.svg";

</script>

<script>

export default {
    data() {
        return {
            show: 'text',
        }
    },
    mounted() {

        const showHidePassword = () => {
            var password = document.getElementById('fakePassword');
            var toggler = document.getElementById('toggler');
            if (password.type == 'password') {
                password.setAttribute('type', 'text');
                toggler.classList.add('fa-eye-slash');
            } else {
                toggler.classList.remove('fa-eye-slash');
                password.setAttribute('type', 'password');
            }
        };
        toggler.addEventListener('click', showHidePassword);




    },
    methods: {

    }
}
</script>

<style>
body .password-field {
    position: relative;
}

body .password-field input {

    letter-spacing: 1px;
}

/* body .password-field input::placeholder {
    color: #000;
    font-weight: bold;
} */

body .password-field #toggler {
    position: absolute;
    right: -20vh;
    top: -1.1vw;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>
