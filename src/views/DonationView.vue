<template>
  <div class="music">
    <v-container>
      <h2 class="title">{{'SUPPORT ME'}}</h2>
      <v-row>
        <v-col >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'¿Querés ayudar al artista?'}}</v-card-title> 
                <v-card-subtitle>{{'¡Invitame un cafecito!'}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    id="mercadoPagoLink"
                    href="https://mpago.la/2j2MPsN"
                    target="_blank"
                    width="30"
                    dense 
                    color="dark darken-3"
                    aria-label="Donations with MP"
                  >
                    <v-img :src="img1" width="30"> </v-img>
                  </v-btn>
                  <v-btn
                    id="payPalLink"
                    dense 
                    color="dark darken-3" 
                    icon="fa-brands fa-paypal"
                    aria-label="Donations with PP"
                  >
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
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