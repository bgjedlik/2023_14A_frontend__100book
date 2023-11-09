<template>
    <div class="container">
        {{books}}
    </div>
</template>

<script setup>
import bookservice from '../services/bookservice.js'
import {ref} from 'vue'

const books = ref();

bookservice.getAllBook()
    .then(resp =>{
        books.value = resp;
    });
   
</script>

<style lang="scss" scoped>

</style>