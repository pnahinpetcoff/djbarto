<template>
    <div>
      <v-container>
        <h1>HOME</h1>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-carousel show-arrows="hover">
                <v-carousel-item
                  src="i1.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i2.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i3.png"
                  cover
                ></v-carousel-item>
                <v-carousel-item
                  src="i4.png"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      <h1>CONTACT</h1>
      <v-row>
        <v-col >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'BOOKING & MANAGEMENT'}}</v-card-title> 
                <v-card-subtitle>{{'Foco Agency'}}</v-card-subtitle>
                <v-card-subtitle>{{'Francisco Marquevich'}}</v-card-subtitle>
                <v-card-text v-html="this.text">
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                  dense 
                  color="deep-purple darken-3" 
                  icon="fa-brands fa-whatsapp"
                  href="https://api.whatsapp.com/send?phone=541161034185&text=Hello! I need to contact you to arrange an event with BARTO DJ" 
                  target="_blank">
                  </v-btn>
                  <v-btn 
                    dense 
                    color="deep-purple darken-3" 
                    icon="fa-regular fa-envelope"
                    href="mailto:franmarquevich@gmail.com">
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="i2.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>

<script>

export default {
  name: 'TodoView',
  components: {
  },

  data: () => ({
    text: 'franmarquevich@gmail.com</br>focoactiva@gmail.com</br>+54 9 11 55283428</br>'
  }),
};
</script>

<style scoped>
</style>