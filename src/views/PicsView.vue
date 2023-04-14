<template>
    <div>
      <v-container>
        <h1>{{'PICS'}}</h1>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-carousel :cycle="true" show-arrows="hover" color="deep-purple darken-3">
                <v-carousel-item
                  :src="img1"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  :src="img2"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  :src="img3"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  :src="img4"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col cols="12"></v-col>
          <v-divider thickness="10" color="deep-purple darken-3"></v-divider>
          <v-col cols="12"></v-col>
        </v-row>
      </v-container>
    </div>
</template>


<script>

export default ({
  props: {
    img1: {
      type: String,
      default: 'i1.png'
    },
    img2: {
      type: String,
      default: 'i2.png'
    },
    img3: {
      type: String,
      default: 'i3.png'
    },
    img4: {
      type: String,
      default: 'i4.png'
    }
  },
  name: "PicsView",
  data() {
    return {
    };
  },
  components: {
  }
});
</script>

<style scoped>
</style>

