<template>
  <div class="salon" :class="{'lumiere-allumee' : $store.state.lumieres.salon}">
    <h1>Ici le salon</h1>
    <button @click="actionlumiere">Allumer/éteindre la lumière </button><br/>
    <img src="https://st.hzcdn.com/simgs/pictures/living-rooms/modern-living-room-debra-ackerbloom-interiors-llc-img~c971036c0bdc4f53_4-2169-1-a92e8d5.jpg" rel="living-room" width="700">
  </div>
</template>
<script>
export default {
   mounted () {
    // this.$bus.$on("allumer-lumiere-chambre",this.actionsLumiere);
  },
methods : {
  actionlumiere(){
    console.log("Allumer ou eteindre la lumière de la chambre")
    this.$store.commit("setLumiere","salon");
    }
  }
}
</script>
<style scoped>
.lumiere-allumee{
  background-color : black;
}
</style>