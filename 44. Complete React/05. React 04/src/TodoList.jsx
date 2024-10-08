import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function TodoList(){
    let [todos, setTodos] = useState([{task : "Sample Task", id : uuidv4(), isDone : false}]); // Array For TodoList's Tasks
    let [newTodo, setNewTodo] = useState("");     // NewTask Having Input's Value
    let addNewTask = () => {                     // Adding NewTask In Toto List
        console.log(`New Task Entered\n`);
        setTodos((prevTodo) => {
            return [...prevTodo, {task : newTodo, id:uuidv4(), isDone : false}]
        });
        setNewTodo("");
    }

    let deleteTask = (id) => {
        setTodos((prevTodo) => {  // Always use Filter Method To Remove Unwanted Data From Arrays.
            return prevTodo.filter((todo) => todo.id != id);   
        })
    }

    let updateValue = (event) => { // OnChange Handler For Our Input Element
        setNewTodo(event.target.value);
    }

    let capitalizeAll = () => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                return {
                    ...todo,
                    task : todo.task.toUpperCase()
                }
            });
        });
    }

    let capitalizeOne = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => {
            if (todo.id === id){
                return {
                ...todo,
                task : todo.task.toUpperCase()
                }
            } 
            else return todo;
        })
    )}

    let markAsDone = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => {
            if (todo.id === id){
                return {
                ...todo,
                isDone : true
                }
            } 
            else return todo;
        })
    )}

    let markAllFinished = () => {
        setTodos((prevTodo) => {
            return prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone : true
                }
            })
        })
    }

    return (
        <div>    
            <input type="text" placeholder="Add New Task : " value={newTodo} onChange={updateValue}/><br/>
            <button type="submit" onClick={addNewTask}>Add Task</button>
            <br/><br/><br/><hr/>
            <h4> Tasks To Do </h4>
            <ul>{  // Always Use Map Method To Use All Elements Of Array After Applying Some Operations
                todos.map((tasks) => (  
                    <li  key={tasks.id}>
                        <span style={tasks.isDone ? {textDecorationLine:"line-through"}: {}}>
                            {tasks.task}
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTask(tasks.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => capitalizeOne(tasks.id)}> Capitalize It </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => markAsDone(tasks.id)}> Mark Finished </button>
                    </li>
                ))
            }</ul>
            <span>
                <button onClick={capitalizeAll}> Capitalize All </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={markAllFinished}> Mark All Finished </button>
            </span>
        </div>
    )
}

// Keys : 
// Used To Uniquely Identify Each Value Present In A List
// In React We Get A Warning Evenry Single Time We Initialize A New List Having Items Without Keys.
// Every Key Must Be Diffrent.
// Here We Have Used UUID TO Create Unique ID's That We Will Use As Keys.

// Onclick Handler Functions : 
// Here We Have Set The Value Of The Input Tag To The Value Of A Specific Variable.
// In That Case The Value Of The Input Element Becomes Immutable And Changes Only When The
// Value Of The Variable Is Changed.
// To Avoid Such Situations We Create An Onclick Handler Function That Changes The Value Of The
// Variable Every Time The Value Of The Input Element Is Changed.