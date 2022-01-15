<template>
  <div class="chambre">
    <h1>Ici le grenier</h1>
    <div>
      <img src="https://www.ctendance.fr/wp-content/uploads/2021/05/grenier.jpg" rel="grenier" width="700">
      <img @click="trouver" src="https://www.wanimo.com/veterinaire/wp-content/uploads/2015/07/images_articles_lapin_lapin-regarde.jpg" width="100">
    </div>
  </div>
</template>
<script>
export default{
    methods : {
      trouver() {
        this.$store.commit('setOuEstLeLapin','grenier');
        alert('vous avez trouvé le lapin !');
        }
    }
}
</script>
