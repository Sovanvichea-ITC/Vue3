<template>
  <main class="bg-blue-700">
    <div class="h-[95vh] flex justify-between items-center">
      <div class="flex flex-col ml-64">
        <div class="flex justify-center">
          <img :src="image" alt="FTB image" />
        </div>
        <div class="my-10">
          <button class="outline text-white outline-white outline-none rounded-md px-10 py-5">
            <a href="https://ftb.com.kh/en/" target="_blank">
              Click to know more!</a>
          </button>
        </div>
      </div>
      <div class="bg-white rounded-md text-center mr-20">
        <span class="text-2xl relative top-2">{{ greeting }}</span>
        <div class="flex justify-center my-5">
          <router-link :to="{ name: 'Login' }"
            class="outline outline-1 outline-gray-500 hover:bg-blue-700 hover:text-white rounded-md px-14 py-2 mr-2"
            v-bind:class="{
              'bg-blue-700 text-white outline outline-1 outline-blue-700':
                isLoginPage,
            }">
            Login
          </router-link>
          <router-link :to="{ name: 'Register' }"
            class="outline outline-1 outline-gray-500 hover:bg-blue-700 hover:text-white rounded-md px-14 py-2 ml-2"
            v-bind:class="{
              'bg-blue-700 text-white outline outline-1 outline-blue-700':
                isRegisterPage,
            }">
            Register
          </router-link>
        </div>
        <div class="mx-24 mb-16 w-450">
          <router-view />
        </div>
      </div>
    </div>
    <span class="bg-white text-blue-900 text-sm py-2 flex justify-end space-x-2 items-center">
      <u> <a class="space-2" href="#">Contact Us</a> </u><span>|</span>
      <u> <a href="#">Locate Us</a> </u><span>|</span>
      <u> <a href="#">Calculator</a> </u><span>|</span>
      <u> <a href="#">FAQs</a> </u><span>|</span>
      <u> <a class="pr-32" href="#">Exchange Rated</a></u>
    </span>
  </main>
</template>

<script>
import image from "@/assets/icons/logo-white.png";
export default {
  data() {
    return {
      image: image,
      greeting: "",
    };
  },
  computed: {
    isLoginPage() {
      return (
        this.$router.currentRoute.path === "/auth/login" ||
        this.$router.currentRoute.path === "/auth/login/"
      );
    },
    isRegisterPage() {
      return (
        this.$router.currentRoute.path === "/auth/register" ||
        this.$router.currentRoute.path === "/auth/register/"
      );
    },
  },
  mounted() {
    this.setGreeting();
  },
  methods: {
    setGreeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 0 && currentHour < 12) {
        this.greeting = "Good morning!";
      } else if (currentHour >= 12 && currentHour < 18) {
        this.greeting = "Good afternoon!";
      } else {
        this.greeting = "Good evening!";
      }
    },
  },
};
</script>

<style></style>
