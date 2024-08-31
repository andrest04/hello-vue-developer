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

</template>

<style scoped>

</style>