import { ListItem } from "./ListItem";



export function TodoList({deleteTask , tasks , changeStatus,writeEditedTask}) {

    return(
        <ul className="list-reset">

        {tasks.map( (task,index) => <ListItem writeEditedTask={writeEditedTask} changeStatus={changeStatus} deleteTask={deleteTask} task={task} key={index} />)}

    </ul>
    )
}
