<script> /*Es para poder declarar los comportamientos y la logica*/

import RegisterDeveloper from "./welcoming/components/register-developer.component.vue";
import Welcome from "./welcoming/components/welcome.component.vue";
import ShowDeveloperCount from "./welcoming/components/show-developer-count.component.vue";

export default {
  name: 'App',
  components: {ShowDeveloperCount, Welcome, RegisterDeveloper},
  data() {
    return { // Se inicializan las variables
      firstName: '',
      lastName: '',
      developerCount: 0,
    }
  },
  methods: {
    updateDeveloperCount() { // Actualiza el contador de desarrolladores
      if (developer.fullName !== 'Unknown') {
        this.developerCount++;
      }
    },
    onDeveloperRegistered(developer) { // Se ejecuta cuando se emite el evento developer-registered
      this.firstName = developer.firstName;
      this.lastName = developer.lastName;
      console.log('Developer registered:', developer);
      this.updateDeveloperCount();
    },
  }
}

</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <register-developer v-on:developer-registered="onDeveloperRegistered"/> <!-- Se escucha el evento developer-registered -->
  <welcome :first-name = "firstName" :last-name = "lastName"/> <!-- Se pasan los datos a welcome -->
  <show-developer-count developer-count="developerCount"/> <!-- Se pasa el contador de desarrolladores -->
</template>

<style scoped>
</style>
