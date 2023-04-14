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
                <v-card-actions>
                  <v-btn
                    href="https://mpago.la/2j2MPsN"
                    target="_blank"
                    width="30"
                    dense 
                    color="deep-purple darken-3"
                  >
                    <v-img :src="img1" width="30"> </v-img>
                  </v-btn>
                  <v-btn
                    dense 
                    color="deep-purple darken-3" 
                    icon="fa-brands fa-paypal"
                  >
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12"></v-col>
        <v-divider thickness="10" color="deep-purple darken-3"></v-divider>
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
      default: 'a5.png'
    }
  },
  name: 'ContactView',
  data() {
    return {
      
    };
  },
  components: {
  },
}
</script>

<style>
</style>