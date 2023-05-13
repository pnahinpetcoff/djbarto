<template>
  <div class="music">
    <v-container>
      <h2 class="title">{{'FOCO AGENCY'}}</h2>
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
      default: 'i10.png'
    },
    img2: {
      type: String,
      default: 'i11.png'
    },
    img3: {
      type: String,
      default: 'a2.png'
    }
  },
  name: 'FocoView',
  data() {
    return {
       text: 'Foco es una agencia que acompaña el desarrollo de  artistas, emergentes e independientes.</br></br>Donde trabaja en la totalidad del ecosistema de la industria musical. Desde la comunicación y relaciones públicas a management, booking, estrategias de marketing para promoción de nuevos lanzamientos, distribución de obras en plataformas digitales y la administración de tu proyecto.</br></br>Principalmente dedicados a un sonido urbano y actual donde nos enfocamos al Trap, Rap, Indie y Música electrónica. Nuestra experiencia nos obliga a estar en constante movimiento para estar a la vanguardia y activando.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>