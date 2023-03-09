<template>
    <div class="bg">
        <img :src="maintenance" alt="">
    </div>
</template>


<script>

import maintenance from '@/assets/images/maintenance.jpeg'

export default {
    layout: 'maintenance',
    data() {
        return {
            maintenance
        }
    }
}


</script>

<style scoped>

.bg {
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
}
.bg img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}

</style>