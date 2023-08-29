<template>
    <div v-if="items && items.length">
        <div v-for="(item, itemIndex) in items" :key="itemIndex">
            <li class="item item-lists" @click=clickedActive(item.id)>
                <!-- <router-link :to="{ name: item.url }" :id=item.id class="link flex item-select " v-bind:class="{ active: item.active } "> -->
                
                <div v-if="$route.name == item.url">
                    <router-link :to="{ name: item.url }" :id=item.id class="link flex item-select active">
                        <i :class=item.icon></i>
                        <span>{{ item.name }}</span>
                    </router-link>
                </div>

                <div v-else>
                    <router-link :to="{ name: item.url }" :id=item.id class="link flex item-select ">
                        <i :class=item.icon></i>
                        <span>{{ item.name }}</span>
                    </router-link>
                </div>

            </li>
        </div>
    </div>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }

})
</script>

<script>
export default {
    emits: ["clickedID"],
    data: () => ({
        selectActiveBtn: null
    }),
    mounted() {

    },
    methods: {
        clickedActive(id) {

            this.$emit("clickedID", id);


            // this.items[id].active = true;

        }
    }
}


</script>

