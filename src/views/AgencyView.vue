<template>
  <div class="music">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'FOCO AGENCY'}}</h2>
        </v-col>
        <v-col>
          <v-carousel :cycle="true" color="dark darken-3" hide-delimiters hide-delimiter-background>
            <v-carousel-item
              :src="img1"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img2"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img3"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img4"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img5"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img6"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <v-card-text v-html="this.text">
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    img1: {
      type: String,
      default: '/agency/1.png'
    },
    img2: {
      type: String,
      default: '/agency/2.png'
    },
    img3: {
      type: String,
      default: '/agency/3.png'
    },
    img4: {
      type: String,
      default: '/agency/4.png'
    },
    img5: {
      type: String,
      default: '/agency/5.png'
    },
    img6: {
      type: String,
      default: '/agency/6.png'
    }
  },
  name: 'FocoView',
  data() {
    return {
       text: 'FOCO is an agency that accompanies the growth of emerging and independent artists, operating within the entire music industry ecosystem. We provide comprehensive services ranging from communication and public relations to artist management, booking, marketing strategies for promoting new releases, digital platform distribution, and project administration.</br></br>Our main focus is on contemporary urban sounds, with an emphasis on Trap, Rap, Indie, and Electronic music. Our extensive experience drives us to constantly stay ahead and take proactive steps.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>