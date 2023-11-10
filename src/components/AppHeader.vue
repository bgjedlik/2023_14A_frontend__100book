<template>
    <div class="container-fluid p-0">
        <div class="d-flex justify-content-around">
            <img :src="imgUrl + book.ImageName" class="header-image" :alt="book.Title" v-for="book in books">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import bookservice from '../services/bookservice';
const imgUrl = import.meta.env.VITE_IMG_URL;

const books = ref();

bookservice.getRandomBooks(10)
    .then(resp =>{
        books.value = resp
    })

</script>

<style lang="scss" scoped>

</style>