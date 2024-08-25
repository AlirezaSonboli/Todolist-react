import { react } from "react";
import { useState } from "react";
import { DeleteItem } from "./Icons/DeleteItem";
import { EditItem } from "./Icons/EditItem";



export function ListItem({task, deleteTask,changeStatus, writeEditedTask}) {
    const [changeTitle , setChhangeTitle] = useState(false)
    console.log(changeTitle)
    const confirm = (event) =>{
        if (event.key == "Enter") {
            setChhangeTitle(false)
        }
    }
    return(
       <li className="relative flex items-center justify-between px-2 py-6 border-b">
         {
            changeTitle ? <div className="w-full flex items-center">
            <input type="text" defaultValue={ task.title } onKeyDown={confirm} onChange={() =>{writeEditedTask(event,task)} } className="
            py-2 mx-1 w-full ring-1 ring-purple-600 rounded-md" />
            <button type="button" onClick={() =>setChhangeTitle(false)} className="absolute right-4 ">
                 <DeleteItem/>
            </button>
          </div>
          : <div> <div>
          <input type="checkbox"  checked={task?.status} onChange={() =>changeStatus(task)} className="" />
          <p  className={`inline-block mt-1 ml-2 text-gray-600 ${task?.status ? 'line-through' : ''}`}>{task?.title}</p>
      </div>
      <button type="button" onClick={() =>setChhangeTitle(true)} className="absolute right-5 ">
      <EditItem/>
      </button >
      <button type="button" onClick={() =>deleteTask(task)} className="absolute right-0 ">
          <DeleteItem/>
      </button></div> }


     </li>



   )
}
