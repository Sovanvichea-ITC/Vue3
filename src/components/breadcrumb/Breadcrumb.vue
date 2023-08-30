<template>
    <nav v-if="items && items.length" class="my-breadcrumbs">
        <ol>
            <li v-for="(item, itemIndex) in items" :key="itemIndex">
                <router-link v-if="itemIndex !== items.length - 1" :to="{ name: item.url }" :title="item.name"
                    class="bc-link">
                    {{ item.name }}
                </router-link>

                <span v-else class="bc-name">{{ item.name }} / {{ $route.params.feature }}</span>
                <span v-if="items[itemIndex + 1]" class="bc-separator">/</span>
            </li>
        </ol>
    </nav>
</template>
    
<!-- <script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script> -->

<script>
export default { props: ['items'] }
</script>

<style>
.my-breadcrumbs {
    background-color: #f7f7f7;
    border-radius: 4px;
}

.my-breadcrumbs ol,
.my-breadcrumbs ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 15px;
}

.my-breadcrumbs ol li,
.my-breadcrumbs ul li {
    color: #222;
}

.my-breadcrumbs ol li .bc-link,
.my-breadcrumbs ul li .bc-link {
    font-weight: 600;
    text-decoration: none;
    transition: all 0.5s ease;
    color: #222;
}

.my-breadcrumbs ol li .bc-link:hover,
.my-breadcrumbs ul li .bc-link:hover {
    color: blue;
    text-decoration: underline;
}

.my-breadcrumbs ol li .bc-separator,
.my-breadcrumbs ul li .bc-separator {
    color: rgba(33, 33, 33, 0.563);
    margin: 0.3rem;
}

ol {
    margin: 0px;
}
</style>