import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";
import "./TasksList.css";

type TaskListProps = {
    tasks: TaskType[];
};
export const TasksList = ({ tasks }: TaskListProps)=> {
    return (
            <div>
            {tasks.map((task) =>(
            <Task task={task} />
        ))}
        </div> 
       
    )
}



