import { object } from 'prop-types';
import { useState, useEffect } from 'react';

function TodoItem() {

    const [todosData, setTodosData] = useState(null)
    const locationName = window.location.pathname.replace('/','');

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem('todos'));

        if(todo) {
					const pageData = todo.reduce((acc,todo) => {
							if(Object.keys(todo) == locationName) {
								acc = todo
							}
							return acc;
						}, {});

					setTodosData(pageData);
        }

    }, [])

    return (
        <div>
					{
						todosData && todosData[locationName].map((item) => {
							return <div>{item}</div>
						})
					}
        </div>
    )
}

export default TodoItem