<template>
<div class="ma-3">  
  <v-app>
    <Navbar/>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <v-row >
      <v-col cols="3"></v-col>
      <v-col cols="6" class="text-center">
        <text>SalchiDevs®</text>
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="12"></v-col>
      <v-col cols="12"></v-col>
    </v-row>
    <Footer/>
  </v-app>
  </div>
</template>

<script>

import Navbar from '@/components/NavBar'
import Footer from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
   Navbar,
   Footer
  },

  data: () => ({
    ldPage: true
  }),
    mounted() {
      this.true = false
    }, 
};
</script>

<style scoped>
</style>