<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade do usuário: <strong>{{ idade }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn()">Reiniciar Nome Callback</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      default: "Anonimo",
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
