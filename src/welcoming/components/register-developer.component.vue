<script>
export default {
  name: "register-developer", // convencion de nombre de componente
  data() { // datos del formulario
    return {
      firstName: '',
      lastName: '',
    }
  },
  methods: { // metodo para registrar un desarrollador
    onSubmit(){
      console.log("Registering developer"); // log para verificar que se esta ejecutando la funcion
      this.$emit('developer-registered', {firstName: this.firstName, lastName: this.lastName}); // emitir evento con los datos del formulario
    }
  }
}
</script>

<template>
  <div>
    <h2> New Developer </h2>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="first-name">First Name </label>  <!-- etiqueta para el campo de texto -->
          <input type="text" id = "first-name" v-model="firstName" required> <!-- campo de texto para el nombre -->
        </div>
        <div>
          <label for="last-name">Last Name </label>
          <input type="text" id="last-name" v-model="lastName" required> <!-- campo de texto para el apellido -->
        </div>
        <br>
        <div>
          <button type="submit">Register</button> <!-- boton para enviar el formulario -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>