<script>
export default {
  name: "welcome", // por que queremos que el selector sea el nombre
  props: {
    firstName: String,
    lastName: String
  },
  methods: {
    developerName() {
      let developer = new Developer(this.firstName, this.lastName);
      return developer.fullName;
    }
  }
}
</script>

<template>
  <p> Hello {{developerName()}}, Now you are a Vue Developer </p> <!-- se puede llamar la funcion derectamente en el parrafo-->
</template>

<style scoped>

</style>