<template>
  <div id="home">
    <v-img
      :src="img1" 
      cover
    >
    </v-img>
  </div>
</template>
<script>

export default ({
  props: {
    img1: {
      type: String,
      default: 'i1.png'
    },
    img2: {
      type: String,
      default: 'i2.png'
    },
    img3: {
      type: String,
      default: 'i3.png'
    },
    img4: {
      type: String,
      default: 'i4.png'
    }
  },
  name: "PicsView",
  data() {
    return {
    };
  },
  components: {
  }
});
</script>

<style scoped>
.home{
  width: 100%; 
  height: 100%; 
  display: flex;
  right: 0%;
  left: 0%;
}

</style>

