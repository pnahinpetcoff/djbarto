<template>
  <div>
    <v-container>
      <h1>{{'MERCH'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i6.png"
              :max-height="400" 
            ></v-img>
            <v-card-title>Basic T-Shirt</v-card-title>
            <v-card-subtitle>USD 20</v-card-subtitle>
            <v-card-text>Confortable cotton made</v-card-text>
            <v-card-actions><v-btn color="deep-purple darken-3">BUY ME!</v-btn></v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i7.png"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>Basic T-Shirt</v-card-title>
            <v-card-subtitle>USD 20</v-card-subtitle>
            <v-card-text>Confortable cotton made</v-card-text>
            <v-card-actions><v-btn dense color="deep-purple darken-3">BUY ME!</v-btn></v-card-actions>
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
  name: 'MerchView',
  data() {
    return {
      text: 'Tomas Bartolomei, AKA Barto, es un DJ y productor musical de Buenos Aires, Argentina.</br></br>Entre la tendencia, los clásicos y el underground sus sets hacen bailar a la pista, generando una conexión corporal y emocional con el público.</br></br>Conectado con la música desde pequeño, Barto lo demuestra en sus sets y su selección musical con un abanico muy grande de géneros y posibilidades lo cual lo destacan en su labor.</br></br>Es un DJ  versátil que se adecua al contexto según lugar, artistas involucrados y público presente. Es capaz de demoler una pista en un club de techno o aclimatarnos con un sunset en la playa inolvidable y lleno de emociones.</br></br>Grooves inquietos, melodías pegadizas y letras con mensaje hacen a este artista que fusiona ritmos electrónicos con urbanos como el funk, hip hop,trap,  R&B, house, entre otros.</br></br>Además, Barto es director y profesor de DJ Academy, institución en Buenos Aires, enfocada en la formación de alumnos en el DJing y producción musical y es dueño agencia de artistas  y productora de eventos orientada a la industria de la música llamada FOCO.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>