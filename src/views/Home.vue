<template>
  <div class="home">
    <h1>Bienvenue</h1>
      <ul>
        <li><router-link to="/cuisine">Cuisine</router-link></li>
        <li><router-link to="/chambre">Chambre</router-link></li>
        <li><router-link to="/salon">Salon</router-link></li>
        <li><router-link to="/grenier">Grenier</router-link></li>
      </ul>
      <div>
        <button @click="actionLumiereChambre">
          <template v-if="$store.state.lumieres.chambre">Eteindre</template>
          <template v-else>Allumer</template>
          La lumière de la chambre
        </button>
        <button @click="actionLumiereSalon">
          <template v-if="$store.state.lumieres.salon">Eteindre</template>
          <template v-else>Allumer</template>
          La lumière du salon
        </button>
      </div>
      <div>
        Le lapin se trouve dans : {{$store.state.ouEstLeLapin}}
      </div>
  </div>
</template>
<script>
export default {
  methods : {
    actionLumiereChambre(){
      this.$store.commit("setLumiere","chambre");
    },
      actionLumiereSalon(){
      this.$store.commit("setLumiere","salon");
    },
  }
}
</script>
