<template>
  <div class="container">
    <!-- {{books}} -->
    <div class="row my-4">
      <h1 class="display-4">Könyvek</h1>
    </div>
    <div v-if="!isError">
      <div class="row">
        <div class="col-12 col-md-3 mb-3" v-for="book in books">
         <BookCard :book="book"/>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger">Az adatbázis nem érhető el.</div>
    </div>
  </div>
</template>

<script setup>
import BookCard from '../components/BookCard.vue';
import bookservice from '../services/bookservice.js'
import { ref } from 'vue'

const books = ref();
// const imgUrl = import.meta.env.VITE_IMG_URL;
const isError = ref(false);

bookservice.getAllBook()
  .then(resp => {
    books.value = resp;
    isError.value = false;
  })
  .catch(err =>{
    isError.value = true;
  });

</script>

<style lang="scss" scoped></style>