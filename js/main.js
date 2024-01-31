const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      isOk: "ok Vue",
    };
  },
  methods: {
    printOK() {
      console.log(this.isOk);
    },
  },
  mounted() {
    this.printOK();
  },
});

app.mount("#root");
