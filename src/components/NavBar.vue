<template>
  <v-container fluid>
    <v-app-bar app color="deep-purple darken-3">
      <v-img src="i13.png" :max-height="600" right></v-img>
      <v-spacer> </v-spacer> 
      <v-spacer> </v-spacer>
      <v-spacer> </v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      color="deep-purple darken-3"
      v-model="drawer"
      location="right"
    >
      <v-list flat>
          <v-list-item v-for="item in items"  :key="item.id" :to="item.route" active-class="border">
            <v-list-item-title >{{item.title}}</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

export default {
  methods: {
    route(item) {
      this.$router.go(item.route)
    }
  },
  data() {
    return {
      drawer: false,
      items: [
        /*{
          title: "TODO",
          route: "/",
          id: 1
        }, */
        {
          title: "HOME",
          route: "/home",
          id: 2
        },
        {
          title: "CONTACT",
          route: "/contact",
          id: 3
        },
        {
          title: "BIO",
          route: "bio",
          id: 4
        },
        {
          title: "MERCH",
          route: "merch",
          id: 5
        },
        {
          title: "MUSIC AND EVENTS",
          route: "music",
          id: 6
        },
        {
          title: "DJ ACADEMY",
          route: "academy",
          id: 7
        },
        {
          title: "FOCO AGENCY",
          route: "agency",
          id: 8
        },
      ],
    };
  },
};
</script>

<style></style>
