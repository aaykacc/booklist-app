<script>
	import { RouterView } from 'vue-router';
	import Navbar from "@/components/Navbar.vue";
	import Footer from "@/components/Footer.vue";

	export default {
		components: {Navbar, Footer}
	}
</script>

<template>
  <header>
    <div>
      <nav class="w-2/3 md:w-1/2 mx-auto h-10 pt-2 mb-4 md:mb-8">
        <Navbar />
      </nav>
    </div>
  </header>

  <main class="pb-20">
    <RouterView />
  </main>

  <footer class="fixed bottom-0 w-full py-2 bg-white drop-shadow dark:bg-slate-900">
    <Footer />
  </footer>
</template>
