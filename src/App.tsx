import React from "react"; // obligacion en todo los archivos de React
import "./App.css";
import { Header } from "./components/Header"; // llamamos al archivo de componente de su carpeta.carpeta
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { TasksList } from "./components/TasksList";


const App = () => {
  const title = "To do list"; //definicion de la constante que se podra usar durante todo el proceso y a la cual prodemos llamar sola o via un componente para hacer mas eficas el codigo 
  const tasks = data;
  const taskToEdit: any = null;

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
        <Header title= {title}/> {/*// hacemos uso el componente Header y eliminamos las tres lineas de abajo que e slo mismo pero optimizado */}
      {/* <div className="header">
        <h1>{title}</h1>
      </div> */}
      {/* <Task task= {tasks[1]}/>  //ahora saco esto para hacer un map para replicar y poner todo lo que tengo en mi variables tasks y asi hago todo en una linea y no 4 veces y asi aficho todo lo que esta en data */}
      {/* {tasks.map((task) =>(
      <Task task={task} /> 
      ))} //esto lo llevo a mi nuevo fichier TasksList.tsx porque ahi voy crear mi componente y props y en esta carpeta padre app solo voy a llamar a las funciones para que apliquen lo que quiero */}
      <TasksList tasks={tasks} />
      <button
        className="add-task-btn" 
        onClick={() => console.log("this button should open the modal")}
      >
        +
      </button>
      <TaskFormModal
        show={false}
        handleClose={() =>
          console.log("pass me a method that will close the modal")
        }
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
