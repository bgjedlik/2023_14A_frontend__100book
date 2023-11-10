<template>
    <div class="container">
        <div class="row my-4">
            <h1 class="display-4">Könyv keresés</h1>
        </div>

        <div class="row">
            <div class="col-12 col-md-4">
                <form class="row" @submit.prevent="onSearchByAuthor">
                    <div class="col-md-8">
                        <label class="form-label">Szerző:</label>
                        <select class="form-select" v-model="selectedAuthor">
                            <option :value="author" v-for="author in authors">{{ author }}</option>
                            <option value="noauthor">Nincs szerző</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-primary" type="submit">Keresés</button>
                    </div>
                </form>
            </div>
            <div class="col-12 col-md-8">
                <div class="row">
                    <!-- {{ filteredBooks.length }} -->
                    <div v-if="filteredBooks.length">
                        <div class="col-12 col-md-4" v-for="book in filteredBooks">
                            <BookCard :book="book"/>
                        </div>
                    </div>
                    <div v-else>
                        <div class="alert alert-danger">Ennek a szerzőnek nincs könyve az adatbázisban.</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import BookCard from '../components/BookCard.vue';
import { ref } from 'vue';
import bookservice from '../services/bookservice';

const authors = ref();
const selectedAuthor = ref();
const filteredBooks = ref([]);

bookservice.getAllAuthor()
    .then(resp =>{
        authors.value = resp;
        selectedAuthor.value = authors.value[0];
        onSearchByAuthor();
    })

function onSearchByAuthor(){
    // console.log('ok',selectedAuthor.value);
    bookservice.getBooksByAuthor(selectedAuthor.value)
        .then(resp =>{
            filteredBooks.value = resp;
        })
        .catch(err =>{
            // console.log(err);
            filteredBooks.value = [];
        })
}
</script>

<style lang="scss" scoped>

</style>