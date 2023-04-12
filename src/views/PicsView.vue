<template>
    <div>
      <v-container>
        <h1>{{'PICS'}}</h1>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-carousel show-arrows="hover">
                <v-carousel-item
                  src="i1.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i2.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i3.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i4.png"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-divider thickness="10" color="deep-purple darken-3"></v-divider>
          <v-col cols="12"><text>SalchiDevs®</text></v-col>
          <v-col cols="12"></v-col>
        </v-row>
      </v-container>
    </div>
</template>


<script>

export default ({
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

