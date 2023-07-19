<template>
  <div class="flex flex-col w-[90%] md:w-1/2 mx-auto p-3 md:p-6 border rounded-lg">
    <h1 class="text-2xl md:text-3xl font-black mb-3 md:mb-6 select-none">Books</h1>
<!--    <FilterNav @filterChange="current = $event" :current="current" />-->
    <div v-if="books" class="mt-4 md:mt-5 py-1 md:py-0">
      <div v-for="(book, index) in books.data" class="mb-5 last-of-type:mb-0">
        <SingleBook :book="book" :doc="books.doc[index]" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, computed, onBeforeMount } from 'vue'
  import getBooks from '../composable/getBooks'
  import SingleBook from "@/components/Singlebook.vue";
  // import FilterNav from "@/components/FilterNav.vue";

  export default {
    components: { SingleBook },
    setup() {
      // lifecycle hook test edildi
      console.log('setup')
      onBeforeMount(() => {
        console.log('before mount')
      })
      onMounted(() => {
        console.log('mounted')
      })

      const books = ref({"doc": [], "data": []})

      getBooks().then((data) => {
        books.value.data = data.data
        books.value.doc = data.doc
      })

      function handleDelete() {
        console.log('delete aktifleştirildi')
      }

      return { books }

    }
  }
</script>