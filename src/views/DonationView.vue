<template>
  <div>
    <v-container>
      <h1>{{'DONATION'}}</h1>
      <v-row>
        <v-col >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'¿Querés ayudar al artista?'}}</v-card-title> 
                <v-card-subtitle>{{'¡Invitame un cafecito!'}}</v-card-subtitle>
                <v-card-text v-html="this.text">
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    icon="fab fa-instagram"
                    variant="plain"
                    color="white"
                    href="https://mpago.la/2j2MPsN"
                    target="_blank"
                  ></v-btn>
                </v-card-actions>
              </div>
            </div>
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

export default {
  name: 'ContactView',
  data() {
    return {
      text: 'franmarquevich@gmail.com</br>focoactiva@gmail.com</br>+54 9 11 55283428</br>'
    };
  },
  components: {
  },
}
</script>

<style>
</style>