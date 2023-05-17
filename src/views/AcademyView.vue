<template>
  <div class="music">
    <v-container>
      <v-row>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
        </v-col>
        <v-col cols="12">
          <h2 class="title">{{'DJ ACADEMY'}}</h2>
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
            <v-carousel-item
              :src="img7"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="img8"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <v-card-text v-html="this.text"></v-card-text>
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
      default: '/academy/1.png'
    },
    img2: {
      type: String,
      default: '/academy/2.png'
    },
    img3: {
      type: String,
      default: '/academy/3.png'
    },
    img4: {
      type: String,
      default: '/academy/4.png'
    },
    img5: {
      type: String,
      default: '/academy/5.png'
    },
    img6: {
      type: String,
      default: '/academy/6.png'
    },
    img7: {
      type: String,
      default: '/academy/7.png'
    },
    img8: {
      type: String,
      default: '/academy/8.png'
    },
    img9: {
      type: String,
      default: '/academy/9.png'
    }
  },
  name: 'AcademyView',
  data() {
    return {
       text: 'DJ Academy is an educational institution that has been working within the music industry since 2010, with a primary focus on training students in the art of DJing, music production, and artist marketing strategies.</br></br>Barto serves as the director and teacher, bringing his passion for music and the art of mixing songs into his classes. He also collaborates with other artists in different traveling events to showcase emerging talents in the electronic music and hip hop scenes in Argentina.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>