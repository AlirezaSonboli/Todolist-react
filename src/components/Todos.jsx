import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from 'uuid';



export function Todos(params) {


    let [tasks,setTasks]= useState([
        {
            id : uuidv4(),
            title : 'go to the gym!',
            status : false
        },
        {
            id : uuidv4(),
            title : 'work out a lot!',
            status : false
        },
        {
            id : uuidv4(),
            title : 'Buy Books foe school!',
            status : false
        }
    ])
    let [newTask, setNewTask] = useState('')

    function writeNewTask(event) {
        setNewTask(event.target.value)
    }


    function addNewTask(event) {
        if(event.key === "Enter"){
            setTasks([
                ...tasks,
                {
                id : uuidv4(),
                title : newTask,
                status : false
                }

            ])
            event.target.value = ''
        }
        }

        const writeEditedTask = (event,task) =>
        {
            const updatedTasks = tasks.map(nTask => nTask.id === task.id ? {...nTask,title: event.target.value } : nTask )
            setTasks(updatedTasks);
        }


        const deleteTask = (task) => {
            const newTasks = tasks.filter((rTask) => rTask.id !== task.id );
            setTasks(newTasks);
        };
        const changeStatus = (task) => {
            const updatedTasks = tasks.map(nTask => nTask.id === task.id ? {...nTask,status: !nTask.status} : nTask )
            setTasks(updatedTasks);}



    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input onChange={writeNewTask} onKeyDown={addNewTask} type="text" placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList writeEditedTask={writeEditedTask} changeStatus={changeStatus} deleteTask={deleteTask} tasks={tasks}/>

            </div>
        </div>
    )

}
