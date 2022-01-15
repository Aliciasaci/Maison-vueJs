<template>
  <div class="chambre" :class="{'lumiere-allumee' : $store.state.lumieres.chambre}">
    <h1>Ici la chambre</h1>
       <button @click="actionlumiere">Allumer/éteindre la lumière </button><br/>
       <router-link to="/grenier"><button>Aller au Grenier</button></router-link><br/>
       <img src="https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/master/pass/111LexowAve_Aug18-1074.jpg" rel="chambre" width="700">
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
        this.$store.commit("setLumiere","chambre");
    }
  }
}
</script>
<style scoped>
.lumiere-allumee{
  background-color : black;
}
</style>