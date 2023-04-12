<template>
  <div>
    <v-container>
      <h1>{{'DJ ACADEMY'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i8.png"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i9.png"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.text"></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-divider thickness="10" color="deep-purple darken-3"></v-divider>
        <v-col cols="12"><v-text>SalchiDevs®</v-text></v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
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