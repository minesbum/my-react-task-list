import { Task } from "./Task"
export const TaskList = () => {
    
    return (
        <div>
            <ul>
                <li> <input type="checkbox" />Aprende a volar <span><Task/></span></li>
                <li> <input type="checkbox" />Dejarle comida a mi perro <span><Task/></span></li>
                <li> <input type="checkbox" />Recordar leer la lista <span><Task/></span></li>
                <li> <input type="checkbox" />Aprender PHP <span><Task/></span></li>
                <li> <input type="checkbox" />Usar zapatos <span><Task/></span></li>
            </ul>
        </div>

    )
} 

