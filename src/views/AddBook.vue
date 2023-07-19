<template>
  <div class="flex flex-col space-y-6 w-[90%] md:w-1/2 mx-auto p-3 md:p-6 border rounded-lg">
    <h1 class="text-2xl md:text-3xl font-black mb-3 md:mb-6 select-none">Add Book</h1>
    <form @submit.prevent="sendData" method="post" class="space-y-3">
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Name:</label>
        <input v-model="title" type="text" name="name" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800" placeholder="Enter book's name" required>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Author:</label>
        <input v-model="author" type="text" name="author" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800" placeholder="Enter book's author" required>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Your Thoughts:</label>
        <textarea v-model="thinks" name="thinks" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800"  cols="30" rows="5" placeholder="Enter your thoughts about book" required></textarea>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Page Count:</label>
        <input v-model="pageCount" type="number" name="pageCount" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800" placeholder="Enter book's page count" min="1" max="9999" required>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Publisher:</label>
        <input v-model="publisher" type="text" name="publisher" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800" placeholder="Enter title" required>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Raiting:</label>
        <div class="rating rating-sm space-x-1">
          <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
        </div>
      </div>
      <div class="flex justify-start pt-4">
        <input type="submit" class="w-max px-10 py-2 bg-black text-white rounded cursor-pointer transition-all dark:bg-slate-300 dark:text-black" value="Add">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        details: '',
        uri: 'http://localhost:3000/projects'
      }
    },
    methods: {
      sendData() {
        let project = {
          title: this.title,
          details: this.details,
          complete: false
        };
        fetch(this.uri, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project) })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err.message))
      }
    }
  }
</script>
