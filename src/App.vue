<template>
  <v-app>
    <Navbar/>
    <div class="ma-4">
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
    <Footer class="foot"/>
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
.foot {
  position:fixed;
  left:0;
  bottom:0;
  padding: 0;
}
</style>