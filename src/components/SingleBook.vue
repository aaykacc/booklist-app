<template>
  <div v-bind:class="{ complete: book.complete }" class="flex flex-col justify-start space-y-2 py-2 pl-2 border-l-2 border-l rounded-lg border-amber-600">
    <div class="flex justify-between items-center cursor-pointer gap-4">
	    <div>
        <h1 @click="toggleDetails" class="text-md md:text-xl font-semibold select-none">{{ book.name }}</h1>
	    </div>
      <div class="flex space-x-2">
<!--        <router-link :to="{name: 'EditBook', params: {id: book.id}}" class="p-1 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900">-->
<!--          <UpdateIcon />-->
<!--        </router-link>-->
<!--        <div @click="completeAction" class="p-1 rounded-lg transition-all" :class="{ onay: book.complete == false, babay: book.complete == true }">-->
<!--          <span v-if="book.complete == false">-->
<!--            <CompleteIcon />-->
<!--          </span>-->
<!--          <span v-else>-->
<!--            <UncompleteIcon />-->
<!--          </span>-->
<!--        </div>-->
        <div  @click="deleteAction(doc)" class="p-1 rounded-lg transition-all hover:bg-red-400 dark:hover:bg-red-900">
          <DeleteIcon />
        </div>
      </div>
    </div>
    <div v-if="showDetails">
      <p class="text-sm">{{ book.author }}</p>
    </div>
  </div>
</template>

<script>
  import UpdateIcon from '@/components/icons/Update.vue';
  import DeleteIcon from '@/components/icons/Delete.vue';
  import CompleteIcon from '@/components/icons/Complete.vue';
  import UncompleteIcon from '@/components/icons/Uncomplete.vue';
  import { ref } from "vue";
  import deleteBook from '../composable/deleteBook'

  export default {
    name: "SingleBook",
    components: {UpdateIcon, DeleteIcon, CompleteIcon, UncompleteIcon},
    props: ['book', 'doc'],
    setup(props) {
      const book = props.book
      const doc = props.doc
      const showDetails = ref(false)

      const toggleDetails = () => {
        return showDetails.value = !showDetails.value
      }

      const deleteAction = (doc) => {
        deleteBook()
            .then(() => this.$emit('delete', this.doc.id))
            .catch(err => console.log(err.message))
      }

      return { book, doc, showDetails, toggleDetails, deleteAction }
    }
    // data() {
    //   return {
    //     showDetails: false,
    //     uri: 'http://localhost:3000/projects/' + this.project.id
    //   }
    // },
    // methods: {
    //   toggleDetails() {
    //     this.showDetails = !this.showDetails
    //   },
    //   deleteAction() {
    //     fetch(this.uri, { method: "DELETE" })
    //         .then(() => this.$emit('delete', this.project.id))
    //         .catch(err => console.log(err.message))
    //   },
    //   completeAction() {
    //     fetch(this.uri, { method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({'complete': !this.project.complete}) })
    //         .then(() => this.$emit('complete', this.project.id))
    //         .catch(err => console.log(err.message))
    //   }
    // }
  }
</script>

<style scoped>
  .complete{
    border-left: 2px #16a34a solid;
  }
  .onay:hover{
    background-color: #dcfce7;
  }
  .babay:hover{
    background-color: #ffedd5;
  }
  html.dark .onay:hover{
	  background-color: #14532d;
  }
  html.dark .babay:hover{
	  background-color: #7c2d12;
  }
</style>