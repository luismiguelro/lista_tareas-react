import { useState } from "react";

export default function Todo({item,onUpdate,onDelete}){
    // modificar
    const [isEdit, setIsEdit] = useState(false);

    // --- Inicio Boton: editar
    function FormEdit(){
        const [newValue,setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();  
        }
    
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
    
        function handleClick(){
            // actulizar nuevo estado
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        
        return( 
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}></input>
            <button className="button" onClick={handleClick}>Editar</button>
        </form>
        );
    }
    // Fin Boton: Editar

    function TodoElement(){{
        return (
        <div className="todoInfo">
            {item.title} <button onClick={()=>setIsEdit(true)}>Editar</button>
            <button onClick={()=>onDelete(item.id)}>Eliminar</button>
        </div>
        );
    }
    }
    //props: propiedades
    return(
        <div className ="todo">
            {isEdit ? <FormEdit/>: <TodoElement/>}</div>
    
    );
}