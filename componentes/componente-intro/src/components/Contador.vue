<template>
  
  <div class="contador">
      <span>
          {{contador}}
      </span>
      <button @click="adicionar">+</button>
      <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            contador:0
        }
    },
    methods: {
        adicionar() {
            return this.contador++
        },
        subtrair(){
            return this.contador--
        }
        
    }

}
</script>

<style>
.contador span {
    border-bottom: 1px solid #ccc;
    height:30px;
    padding:5px 25px;
}

.contador button {
    height:30px;
    width:30px;
    border-radius:15px;
    background:coral;
    color:#fff;
    margin-left:10px;
    outline: none;
}

</style>