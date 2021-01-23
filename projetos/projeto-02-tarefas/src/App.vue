<template>
  <div id="app">
    <h1>Tarefas</h1>
    <tasks-progress :progress="progress" />
    <new-task @taskAdded="addTask" />
    <task-grid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
    />
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask";
import TasksProgress from "./components/TasksProgress";

export default {
  components: { TaskGrid, NewTask, TasksProgress },
  data() {
    return {
      tasks: [],
    };
  },
  watch: {
    tasks: {
      // o 'deep: true' faz um watch profundo verificando todas as mudanças desde troca de ordem
      // dos elementos como tambem de inclusao e exclusao dos objetos que estão dentro do array
      deep: true,
      handler() {
        // setando no localStorage a chave 'tasks' que terá a lista de 'tasks'
        // convertidas para string com JSON.stringfy
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  computed: {
    progress() {
      // todas as tasks
      const total = this.tasks.length;
      // todas que não estao pendentes
      const done = this.tasks.filter((t) => !t.pending).length;

      // pegando o percentual
      return Math.round((done / total) * 100) || 0;
    },
  },
  methods: {
    addTask(task) {
      // filtre e procure um valor igual
      const sameName = (t) => t.name === task.name;

      // se não achar um valor igual ao filtrar então o array voltará vazio "[]"
      // ao usar o length eu quero tornar o resultado do retorno do filtro booleano, pois se não encontrar
      // valor na operação de filtro, o retorno será um array vazio igual a "true"
      // se o valor é true então o valor inserido é um 'novo' valor
      // se retornar false o valor inserido ja 'existe' no array
      const reallyNew = this.tasks.filter(sameName).length == 0;

      // essa expressao é nova e a ideia é igual ao if
      // entendesse assim, se 'reallyNew' for verdadeiro então execute a segunda expressao apos '&&'
      // do contrario não faz nada
      reallyNew &&
        this.tasks.push({
          name: task.name,
          pending: task.pending || true, // se não houver 'task.pending' por padrão o valor será 'true'
        });
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  created() {
    // pegando os valores armazenados no localStarage
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
