<template>
      <Pics img1='i1 (2).png'/>
      <Music/>
      <Academy img1='i2 (2).png' img2='i3 (2).png' img3='i4 (2).png' img4='i5 (2).png'/>
      <Agency img1='i10 (2).png' img2='i11 (2).png' img3='a2 (2).png'/>
      <Bio img1='i5 (2).png' img2='a4 (2).png'/>
      <Merch img1='i6 (2).png' img2='i7 (2).png'/>
      <Contact/>
      <Donation img1='a5 (2).png'/>
</template>

<script>

import Pics from '@/views/PicsView'
import Music from '@/views/MusicView'
import Academy from '@/views/AcademyView'
import Agency from '@/views/AgencyView'
import Bio from '@/views/BioView'
import Merch from '@/views/MerchView'
import Contact from '@/views/ContactView'
import Donation from '@/views/DonationView'

export default {
  name: 'HomeView',
  components: {
    Pics,
    Music,
    Academy,
    Agency,
    Bio,
    Merch,
    Contact,
    Donation
  }
}
</script>

<style>
</style>