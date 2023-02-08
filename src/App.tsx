import React, { useState } from "react"; // obligacion en todo los archivos de React
import "./App.css";
import { Header } from "./components/Header"; // llamamos al archivo de componente de su carpeta.carpeta
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { TasksList } from "./components/TasksList";
import { TaskType } from "./models/Task";



const App = () => {
  const title = "To do list"; //definicion de la constante que se podra usar durante todo el proceso y a la cual prodemos llamar sola o via un componente para hacer mas eficas el codigo 
  // const tasks = data;
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null>(null)
  const [showModal, setShowModal] = useState(false); //aqui ponemos nuestro hook useState para modificar en la accion que hara el ususario,son donnes dinamicos que pueden cambiar.
  const [tasks, setTasks] = useState(data);// ponemos data porque es el valor inicial que donamos a tasks.
  
  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    let formData= new FormData(event.target)
    let newTask = Object.fromEntries(formData)

    if(taskToEditId != null){
      const tmpTask = tasks.find(task => task.id === taskToEditId);
      if(tmpTask != null){
        tmpTask.title= newTask.title as string;
        tmpTask.description= newTask.description as string;
      }
       setTaskToEdit(null);
      console.log(tmpTask);
      console.log(newTask);
      
    }
    else{
    // let form= event.currentTarget
    const newTasks:TaskType= {
       done:false,
       id: tasks[tasks.length -1].id  + 1, 
       title:newTask.title as string,
       description:newTask.description as string,
      }
       tasks.push(newTasks)
    }
   
    // console.log(form.title.value)
    // console.log(newTask.title);
    // console.log(event.currentTarget);
    // console.log(tasks);
    
    
    setShowModal(false);
  };

  const editTask = (taskId: number) => {
    const tmpTask = tasks.find(task => task.id === taskId);
    if (tmpTask != null) {
      setTaskToEdit(tmpTask);
      setShowModal(true);
    }
  };

  const deleteTask = (taskId: number) => {
  const newList:TaskType[]= tasks.filter(task => task.id !==taskId);
  setTasks(newList);

  
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
      <TasksList tasks={tasks}
                deleteTask={deleteTask}
                editTask={editTask}
            
                />
      <button
        className="add-task-btn" 
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)
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
