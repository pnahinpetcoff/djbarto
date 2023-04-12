<template>
  <div>
    <v-container>
      <h1>FOCO AGENCY</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i10.png"
              :max-height="400" 
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i11.png"
              :max-height="400" 
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.text"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
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