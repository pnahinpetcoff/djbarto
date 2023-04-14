<template>
  <v-container fluid>
    <v-app-bar app color="deep-purple darken-3">
      <v-btn :to="'/'" height="200" max-width="200" @click="drawer = false" id="bartoDjHome" aria-label="Go to BartDj Home Page">
        <v-img src="a1.png" :width="200"> </v-img>
      </v-btn>
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
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :to="item.route"
          active-class="border"
           @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "PICS",
          route: "pics",
          id: 2,
        },
        {
          title: "MUSIC AND EVENTS",
          route: "music",
          id: 6,
        },
        {
          title: "DJ ACADEMY",
          route: "academy",
          id: 7,
        },
        {
          title: "FOCO AGENCY",
          route: "agency",
          id: 8,
        },
        {
          title: "BIO",
          route: "bio",
          id: 4,
        },
        {
          title: "MERCH",
          route: "merch",
          id: 5,
        },
        {
          title: "CONTACT",
          route: "contact",
          id: 3,
        },
        {
          title: "DONATION",
          route: "donation",
          id: 3,
        }
      ],
    };
  },
};
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
