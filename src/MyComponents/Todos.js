import React from 'react'
import { Link } from 'react-router-dom';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container" style={props.myStyle}>
            <h3 className="my-3">Todos List &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/addtodo'><button className='btn btn-sm btn-success'>Add Todo</button></Link></h3>
            <hr />
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
