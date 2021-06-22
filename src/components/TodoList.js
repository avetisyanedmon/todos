import { useHistory } from 'react-router-dom';


function TodoList({ todos }){

const history = useHistory();

const goToTodo = (title) => {
    history.push(`/${title}`)
}

    return (
        <div>
            {todos.map((todo, index) => {
              return <div key={index}
                                onClick={() => goToTodo(Object.keys(todo))}
                                className='todo_box'>
                            {`${Object.keys(todo)} (${Object.values(todo)[0].length})`} 
                         </div>
            })}
        </div>
    )
}

export default TodoList;