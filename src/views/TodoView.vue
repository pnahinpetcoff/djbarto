<template>
  <div>
    <v-container>
      <h1>{{'HOME'}}</h1>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-carousel show-arrows="hover">
              <v-carousel-item
                src="i1 (2).png"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="i2 (2).png"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="i3 (2).png"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="i4 (2).png"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
      <h1>{{'MUSIC & EVENTS'}}</h1>
      <v-row>
        <v-col cols="12">
          <iframe width="100%" height="300" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1597418329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a href="https://soundcloud.com/barto_dj" title="BARTO" target="_blank" style="color: #cccccc; text-decoration: none;">BARTO
            </a> · 
            <a href="https://soundcloud.com/barto_dj/sets/remix-mashups" title="Remix &amp; Mashups" target="_blank" style="color: #cccccc; text-decoration: none;">Remix &amp; Mashups
            </a>
          </div>
        </v-col>
        <v-col cols="12">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/8HszxJwbtes?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </v-col>
        <v-col cols="12">
          <iframe width="100%" height="315" src="https://youtube.com/embed/Vc3eaMOrbWE?start=0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>          
        </v-col>
      </v-row>
      <h1>{{'DJ ACADEMY'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i8 (2).png"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i9 (2).png"
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.textAcademy"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h1>{{'FOCO AGENCY'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i10 (2).png"
              :max-height="400" 
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i11 (2).png"
              :max-height="400" 
              cover
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.textAgency"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h1>{{'BIO'}}</h1>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              src="i5 (2).png"
              :max-height="400" 
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-text v-html="this.textBio"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h1>{{'MERCH'}}</h1>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="i6 (2).png"
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
              src="i7 (2).png"
              :max-height="400" 
              cover
            ></v-img>
            <v-card-title>Basic T-Shirt</v-card-title>
            <v-card-subtitle>USD 20</v-card-subtitle>
            <v-card-text>Confortable cotton made</v-card-text>
            <v-card-actions><v-btn dense color="deep-purple darken-3">BUY ME!</v-btn></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <h1>{{'CONTACT'}}</h1>
      <v-row>
        <v-col >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{'BOOKING & MANAGEMENT'}}</v-card-title> 
                <v-card-subtitle>{{'Foco Agency'}}</v-card-subtitle>
                <v-card-subtitle>{{'Francisco Marquevich'}}</v-card-subtitle>
                <v-card-text v-html="this.textContact">
                </v-card-text>
                <v-card-actions>
                  <v-btn 
                  dense 
                  color="deep-purple darken-3" 
                  icon="fa-brands fa-whatsapp"
                  href="https://api.whatsapp.com/send?phone=541161034185" 
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
                <v-img :src="'a2 (2).png'"></v-img>
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
  data() {
    return {
      textContact: 'franmarquevich@gmail.com</br>focoactiva@gmail.com</br>+54 9 11 55283428</br>',
      textBio: 'Tomas Bartolomei, AKA Barto, es un DJ y productor musical de Buenos Aires, Argentina.</br></br> Entre la tendencia, los clásicos y el underground sus sets hacen bailar a la pista, generando una conexión corporal y emocional con el público.</br></br>Conectado con la música desde pequeño, Barto lo demuestra en sus sets y su selección musical con un abanico muy grande de géneros y posibilidades lo cual lo destacan en su labor.</br></br>Es un DJ  versátil que se adecua al contexto según lugar, artistas involucrados y público presente. Es capaz de demoler una pista en un club de techno o aclimatarnos con un sunset en la playa inolvidable y lleno de emociones.</br></br>Grooves inquietos, melodías pegadizas y letras con mensaje hacen a este artista que fusiona ritmos electrónicos con urbanos como el funk, hip hop,trap,  R&B, house, entre otros.</br></br>Además, Barto es director y profesor de DJ Academy, institución en Buenos Aires, enfocada en la formación de alumnos en el DJing y producción musical y es dueño agencia de artistas  y productora de eventos orientada a la industria de la música llamada FOCO.',
      textAgency: 'Foco es una agencia que acompaña el desarrollo de  artistas, emergentes e independientes.</br></br>Donde trabaja en la totalidad del ecosistema de la industria musical. Desde la comunicación y relaciones públicas a management, booking, estrategias de marketing para promoción de nuevos lanzamientos, distribución de obras en plataformas digitales y la administración de tu proyecto.</br></br>Principalmente dedicados a un sonido urbano y actual donde nos enfocamos al Trap, Rap, Indie y Música electrónica. Nuestra experiencia nos obliga a estar en constante movimiento para estar a la vanguardia y activando.',
      textAcademy: 'DJ Academy es un espacio académico que desde el 2010 trabaja en el marco de la industria musical enfocado principalmente en la formación de alumnxs en el arte del DJing, la producción musical y estrategias de marketing para artistas.</br></br>Barto se desempeña como director y docente, imprimiendo en sus clases la pasión por la música y por el arte de mezclar canciones; también colabora con otrxs artistas de la escena en diferentes ciclos itinerantes para visibilizar a los artistas emergentes de la escena de música electrónica en Argentina.'
    };
  },
  components: {
  },
}
</script>

<style>
</style>