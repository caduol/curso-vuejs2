new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    perigo: true,
    classe3: "",
    classe4: "",
    cor5: "",
    estilo5: {
      width: "100px",
      height: "100px",
    },
    estilo6: {
      border: "1px solid #ddd",
      backgroundColor: "red",
      height: "20px",
    },
    width: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        return (this.classe1 =
          this.classe1 == "destaque" ? "encolher" : "destaque");
      }, 1000);
    },
    iniciarProgresso() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
        if (valor == 100) clearInterval(temporizador);
      }, 500);
    },
    setPerigo(e) {
      if (e.target.value == "false") {
        this.perigo = false;
      } else if (e.target.value == "true") {
        this.perigo = true;
      }
    },
  },
  computed: {},
});
