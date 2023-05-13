<template>
  <div class="music">
    <v-container>
      <h1 class="title">{{'DJ ACADEMY'}}</h1>
      <v-row>
        <v-col>
          <v-carousel :cycle="true" show-arrows="hover" color="dark darken-3">
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
        </v-col>
        <v-col cols="12">
          <v-card color="black">
            <v-card-text v-html="this.text"></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"></v-col>
        <v-divider thickness="10" color="dark darken-3"></v-divider>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    img1: {
      type: String,
      default: 'i2.png'
    },
    img2: {
      type: String,
      default: 'i3.png'
    },
    img3: {
      type: String,
      default: 'i4.png'
    },
    img4: {
      type: String,
      default: 'i5.png'
    }
  },
  name: 'AcademyView',
  data() {
    return {
       text: 'DJ Academy es un espacio académico que desde el 2010 trabaja en el marco de la industria musical enfocado principalmente en la formación de alumnxs en el arte del DJing, la producción musical y estrategias de marketing para artistas.</br></br>Barto se desempeña como director y docente, imprimiendo en sus clases la pasión por la música y por el arte de mezclar canciones; también colabora con otrxs artistas de la escena en diferentes ciclos itinerantes para visibilizar a los artistas emergentes de la escena de música electrónica en Argentina.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>