import { useState } from "react"
import Todo from "./todo"
// definicion: Elemento padre
export default function TodoApp(){
    //manejo del estado(hook: actualizar info de las variables, del estado de la app)
    const[title,setTitle] = useState("Hola"); // devuelve arreglo de dos elementos : {title} -> imprimir
    
    //todo's
    const [todos,setTodos] = useState([]);

    /*
    // cuando se necesite una función con mas de una linea
    function handleClick(e){
       //eliminar comportamiento nativo
       e.preventDefault();
       setTitle("Lucho");
    }
    */
    // actulizar estado
    function handleChange(e){
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo ={
            // generar id aleatorio
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        // insertar
       const temp = [...todos];

       //insertar al principio
       temp.unshift(newTodo);
       setTodos(temp)
       setTitle("")
    }

    // para actulizar
    function handleUpdate(id,value){
        //copia de los todos
        const temp=[...todos];
        const item = temp.find(item => item.id===id);
        item.title = value;
        setTodos(temp);
    }
    // -- Btn eliminar
    function handleDelete(id){
        //copia del todo, menos del eliminado
        const temp= todos.filter(item => item.id!==id);
        setTodos(temp);
    }
    return ( 
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
           <input onChange={handleChange} className="todoInput" value={title}/>
           <input 
            onClick={handleSubmit} 
            type = "submit" 
            value="Create to do"
            className="buttonCreate"
            />
        </form>

        <div className="todosContainer">
            {
                todos.map(item=>(
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
            }
        </div>
    </div>
    );
}
