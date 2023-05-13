<template>
  <div class="music">
    <v-container>
      <h1 class="title">{{'DJ ACADEMY'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              :src="img1"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              :src="img2"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.text"></v-card-text>
            <v-row>
              <v-col cols="3">
                <v-img
                  :src="img3">
                </v-img>
              </v-col>
              <v-col cols="9">
              </v-col>
            </v-row>
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
      default: 'i8.png'
    },
    img2: {
      type: String,
      default: 'i9.png'
    },
    img3: {
      type: String,
      default: 'a3.png'
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