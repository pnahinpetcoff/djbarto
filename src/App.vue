<template>
  <v-app>
    <Navbar/>
    <v-content class="ma-4">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </v-content>
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