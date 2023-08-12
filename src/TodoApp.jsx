import { useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const { data: todos = [], isLoading} = useGetTodosQuery();

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre>...</pre>

            <ul>
                {
                    todos.map( ({ title, id }) => (
                        <li key={ id }>
                            <strong>{ todos.completed ? 'Done' : 'Pending' } </strong>
                            { title }
                        </li>
                    ))
                }
            </ul>

            <button>Next Todo</button>
        </>
    )
}