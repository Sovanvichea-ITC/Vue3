<script setup>

import BtnClick from '../components/button/BtnClick.vue'



const myItems = [
    {
        id: 'home',
        name: 'Home',
        url: 'Homepage',
        icon: 'bx bx-home-alt',
        active: false
    },
    {
        id: 'language',
        name: 'Language',
        url: 'Language',
        icon: 'bx bx-world',
        active: false
    },
    {
        id: 'about',
        name: 'About',
        url: 'About',
        icon: 'bx bxs-contact',
        active: false
    },
    {
        id: 'setting',
        name: 'Setting',
        url: 'Setting',
        icon: 'bx bx-cog',
        active: false
    },
    {
        id: 'contact',
        name: 'Contact Us',
        url: 'Contact',
        icon: 'bx bxs-contact',
        active: false
    },
    {
        id: 'logout',
        name: 'Logout',
        url: 'Home',
        icon: 'bx bx-log-out',
        active: false
    },
]

</script>

<template>
    <div class="container">
        <div class="">
            <div class="col-12">
                <nav class="sidebar locked ">
                    <!-- <router-link :to="{ name: 'Profile' }"> -->
                    <div class="logo_items flex">

                        <span class="nav_image cursor-pointer" @click="gotoProfile()">
                            <img :src=user.img alt="logo_img" />
                        </span>
                        <span class="logo_name cursor-pointer" @click="gotoProfile()">{{ user.fullname }}</span>
                        <i class="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
                        <i class="bx bx-x" id="sidebar-close"></i>
                    </div>
                    <!-- </router-link> -->
                    <div class="menu_container">
                        <div class="menu_items">
                            <ul class="menu_item" id="menu_item_click">
                                <div class="menu_title flex">
                                    <span class="title">Dashboard</span>
                                    <span class="line"></span>
                                </div>
                                <BtnClick :items="myItems" @clickedID="onClicked"></BtnClick>
                            </ul>
                        </div>
                        <div class="sidebar_profile flex">
                            <span class="nav_image">
                                <img src="images/profile.jpg" alt="logo_img" />
                            </span>
                            <div class="data_text">
                                <span class="name">David Oliva</span>
                                <span class="email">david@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-12">
                <nav class="routeview ">
                    <RouterView />
                </nav>
            </div>

        </div>
    </div>
</template>
  
<style>
/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;

    /* box-sizing: border-box; */
    /* font-family: "Poppins", sans-serif; */
}

.routeview {
    place-items: center;
    margin-left: 5em;
    margin-top: 5em;
}

.container {
    width: 100%;
    justify-content: center;
    /* min-height: 100vh; */
    margin: auto;
    /* background: #eef5fe; */
}





body {
    background: #F0F3F4;
}

/* Pre css */
.flex {
    display: flex;
    align-items: center;
}

.nav_image {
    display: flex;
    min-width: 55px;
    justify-content: center;
}

.nav_image img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    object-fit: cover;
}

/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 270px;
    background: #fff;
    padding: 15px 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
}

.sidebar.close {
    width: calc(55px + 20px);
}

.logo_items {
    gap: 8px;
}

.logo_name {
    font-size: 22px;
    color: #333;
    font-weight: 500px;
    transition: all 0.3s ease;
}

.sidebar.close .logo_name,
.sidebar.close #lock-icon,
.sidebar.close #sidebar-close {
    opacity: 0;
    pointer-events: none;
}

#lock-icon,
#sidebar-close {
    padding: 10px;
    color: #4070f4;
    font-size: 25px;
    cursor: pointer;
    margin-left: -4px;
    transition: all 0.3s ease;
}

#sidebar-close {
    display: none;
    color: #333;
}

.menu_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 40px;
    overflow-y: auto;
    height: calc(100% - 82px);
}

.menu_container::-webkit-scrollbar {
    display: none;
}

.menu_title {
    position: relative;
    height: 50px;
    width: 55px;
}

.menu_title .title {
    margin-left: 15px;
    transition: all 0.3s ease;
}

.sidebar.close .title {
    opacity: 0;
}

.menu_title .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 20px;
    border-radius: 25px;
    background: #aaa;
    transition: all 0.3s ease;
}

.menu_title .line {
    opacity: 0;
}

.sidebar.close .line {
    opacity: 1;
}

.item {
    list-style: none;
}

.link {
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 8px;
    color: #707070;
}

.link:hover {
    color: #fff;
    background-color: #F1C40F;
    /* background-color: #4070f4; */
}

.active {
    background-color: #F1C40F;
    /* background-color: #440ff1; */
}

.link span {
    white-space: nowrap;
}

.link i {
    height: 50px;
    min-width: 55px;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

.sidebar_profile {
    padding-top: 15px;
    margin-top: 15px;
    gap: 15px;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.sidebar_profile .name {
    font-size: 18px;
    color: #333;
}

.sidebar_profile .email {
    font-size: 15px;
    color: #333;
}

/* Navbar */
.navbar {
    max-width: 500px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 60%;
    transform: translateX(-50%);
    background: #fff;
    padding: 10px 20px;
    border-radius: 0 0 8px 8px;
    justify-content: space-between;
}

#sidebar-open {
    font-size: 30px;
    color: #333;
    cursor: pointer;
    margin-right: 20px;
    display: none;
}

.search_box {
    height: 46px;
    max-width: 500px;
    width: 100%;
    border: 1px solid #aaa;
    outline: none;
    border-radius: 8px;
    padding: 0 15px;
    font-size: 18px;
    color: #333;
}

.navbar img {
    height: 40px;
    width: 40px;
    margin-left: 20px;
}

/* Responsive */
@media screen and (max-width: 1100px) {
    .navbar {
        left: 65%;
    }
}

@media screen and (max-width: 800px) {
    .sidebar {
        left: 0;
        z-index: 1000;
    }

    .sidebar.close {
        left: -100%;
    }

    #sidebar-close {
        display: block;
    }

    #lock-icon {
        display: none;
    }

    .navbar {
        left: 0;
        max-width: 100%;
        transform: translateX(0%);
    }

    #sidebar-open {
        display: block;
    }
}
</style>


  
<script>

import router from '../router/index.js';

export default {
    data: () => ({
        user: {
            idUser: "123",
            fullname: "John Smith",
            img: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png",
        },



        sidebar: null,
        sidebarOpenBtn: null,
        sidebarCloseBtn: null,
        sidebarLockBtn: null,

    }),




    mounted() {
        // Selecting the sidebar and buttons
        this.sidebar = document.querySelector(".sidebar");
        // this.sidebarOpenBtn = document.querySelector("#sidebar-open");
        // this.sidebarCloseBtn = document.querySelector("#sidebar-close");
        this.sidebarLockBtn = document.querySelector("#lock-icon");


        // console.log(btns);



        // Function to toggle the lock state of the sidebar
        const toggleLock = () => {
            this.sidebar.classList.toggle("locked");
            // If the sidebar is not locked
            if (!this.sidebar.classList.contains("locked")) {
                this.sidebar.classList.add("hoverable");
                this.sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
            } else {
                this.sidebar.classList.remove("hoverable");
                this.sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
            }
        };

        // Function to hide the sidebar when the mouse leaves
        const hideSidebar = () => {
            if (this.sidebar.classList.contains("hoverable")) {
                this.sidebar.classList.add("close");
            }
        };

        // Function to show the sidebar when the mouse enter
        const showSidebar = () => {
            if (this.sidebar.classList.contains("hoverable")) {
                this.sidebar.classList.remove("close");
            }
        };

        // Function to show and hide the sidebar
        const toggleSidebar = () => {
            this.sidebar.classList.toggle("close");
        };

        // If the window width is less than 800px, close the sidebar and remove hoverability and lock
        if (window.innerWidth < 800) {
            this.sidebar.classList.add("close");
            this.sidebar.classList.remove("locked");
            this.sidebar.classList.remove("hoverable");
        }


        // Adding event listeners to buttons and sidebar for the corresponding actions
        this.sidebarLockBtn.addEventListener("click", toggleLock);
        this.sidebar.addEventListener("mouseleave", hideSidebar);
        this.sidebar.addEventListener("mouseenter", showSidebar);
        // this.sidebarOpenBtn.addEventListener("click", toggleSidebar);
        // this.sidebarCloseBtn.addEventListener("click", toggleSidebar);



    },
    methods: {
        gotoProfile() {
            // Do your stuff
            // router.push({ name: 'Profile', params: { 'none': '' } });
            router.replace({ path: '/home/profile' })
        },
        onClicked(id) {

            // myItems[1].active = true;

            // alert(id);
            // console.log(this.items[id], id);
            // this.selectActiveBtn = document.getElementById(id);
            // alert(this.selectActiveBtn);
            // this.selectActiveBtn.classList.add('active')
            // this.selectActiveBtn.className.replace("active", "");
            // current.className = current.className.replace(" active", "");
        }

    },
}
</script>