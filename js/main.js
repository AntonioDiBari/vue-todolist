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
      newTask: {
        text: "",
        state: false,
      },
    };
  },
  methods: {
    deleteTask(currentTask) {
      this.tasks.splice(currentTask, 1);
    },
    addTask() {
      if (!this.newTask.text || this.newTask.text.length <= 5) {
        alert("Inserisci almeno 5 caratteri");
        return;
      }
      const newTaskCopy = { ...this.newTask };
      this.tasks.push(newTaskCopy);
      this.newTask.text = "";
    },
    changeState(currentTask) {
      this.tasks[currentTask].state = !this.tasks[currentTask].state;
    },
  },
  mounted() {
    this.$refs.inputText.focus();
  },
});

app.mount("#root");
