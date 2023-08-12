import React from "react";
import { useGetTodosByIdQuery/*, useGetTodosQuery*/ } from "./store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = React.useState(1);

    // const { data: todos = [], isLoading} = useGetTodosQuery();
    const { data: todo, isLoading} = useGetTodosByIdQuery(todoId);
    //console.log(todo);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }

    const prevTodo = () => {
        if (todoId === 1) {
            return;
        }
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify(todo) }</pre>
            
            <button onClick={prevTodo}>Prev Todo</button>
            <button onClick={nextTodo}>Next Todo</button>

            {/* <ul>
                {
                    todos.map( ({ title, id }) => (
                        <li key={ id }>
                            <strong>{ todos.completed ? 'Done' : 'Pending' } </strong>
                            { title }
                        </li>
                    ))
                }
            </ul> */}

        </>
    )
}