new Vue({
  el: "#desafio",
  data: {
    name: "Cadu",
    age: 37,
    imgSample:
      "https://amp.thenationalnews.com/image/policy:1.172937:1499300331/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8",
  },
  methods: {
    randomNum() {
      return Math.random().toFixed(2);
    },
  },
});
