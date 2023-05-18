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
      default: '/pics/1.png'
    },
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
  top: 50%;
}

</style>

