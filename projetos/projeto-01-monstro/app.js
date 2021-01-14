new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
    },
    attack(especial) {
      this.hurt("monsterLife", 5, 10, especial, "Jogador", "Monstro", "player");

      //    essa condicional é para validar que o monstro será atacado primeiro
      //    e garante que não ocorra empate
      if (this.monsterLife > 0) {
        this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
      }
    },
    hurt(prop, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      // nessa linha a funcao Math.max faz o calculo no primeiro
      // parametro entre this.playerLife - hurt, somente no caso de o
      // calculo retornar um valor negativo a funcao assume o segundo
      // parametro com valor 0
      this[prop] = Math.max(this[prop] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls);
    },
    healAndHurt() {
      this.heal(10, 15);
      this.hurt("playerLife", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      // nessa linha a funcao Math.min faz o calculo no primeiro
      // parametro entre this.playerLife + heal, somente no caso de o
      // calculo retornar um valor superior a 100 a funcao assume o segundo
      // parametro com valor 100, ou seja, o menor valor sempre.
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Jogador ganhou força de ${heal}.`, "player");
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResult(value) {
      if (value) {
        this.running = false;
      }
    },
  },
});
