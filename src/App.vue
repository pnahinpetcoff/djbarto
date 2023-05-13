<template>
  <v-app class="ma-2">
    <Navbar/>
    <div>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6" class="text-center">
        <text>SalchiDevs®</text>
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="12"></v-col>
      <v-col cols="12"></v-col>
    </v-row>
    </div>
    <Footer/>
  </v-app>
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
    //
  }),
};
</script>

<style scoped>

</style>