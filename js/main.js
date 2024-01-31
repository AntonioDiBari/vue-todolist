const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [
        {
          text: "Fare la spesa",
          state: false,
        },
        {
          text: "Fare le pulizie",
          state: false,
        },
        {
          text: "Fare il bucato",
          state: true,
        },
        {
          text: "Rinnovare la patente",
          state: false,
        },
        {
          text: "Portare a spasso il cane",
          state: false,
        },
        {
          text: "Prendere la compressa",
          state: true,
        },
      ],
    };
  },
  methods: {
    deleteTask(currentTask) {
      this.tasks.splice(currentTask, 1);
    },
  },
  mounted() {},
});

app.mount("#root");
