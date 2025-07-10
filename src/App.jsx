import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTaks] = useState([
    {
      id: 1,
      title: "Estudar programação.",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês.",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática.",
      description: "Estudar matemática para ter um boa logica de computação.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //Não preciso atualizar essa tarefa

      return task;
    });
    setTaks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTaks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
