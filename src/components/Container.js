import { useState, useEffect } from 'react';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoList from './TodoList';
import moment from "moment";

function Container(){

    const [inputTitle, setInputTitle] = useState('')
    const [selectedDate, setSelectedDate] = useState(null);
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos' )) || [])


    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const dateForm = moment(selectedDate).format('YYYY-DD-MM');


    const addTodos = (text) => {


                setTodos((state) => {
                    const hasSameObject = state.filter(item => item[dateForm]);

                    if(hasSameObject.length){
                        return state.map((item) => {
                            if(item[dateForm]){
                                return {
                                    [dateForm]: [...item[dateForm], text]
                                }
                            }

                            return item;
                        })
                    } else {
                        return [
                            ...state,
                            {
                                [dateForm]: [text]
                            }
                        ]}
                    
                    });
            setInputTitle('');
        }
        console.log(todos)
    return (
        <div className='container_box'>
            <h1>Todos List</h1>
            <div className='input_box'>
                <input onChange={(e) => setInputTitle(e.target.value)} 
                       className='text_input'
                       placeholder='Type here...' 
                       type='text'
                       value={inputTitle}/>
                <DatePicker selected={selectedDate} 
                            onChange={date => setSelectedDate(date)}/>
                <button onClick={() => addTodos(inputTitle)}>Add</button>
            </div>
            <TodoList todos={todos}/>
        </div>
    )
};

export default Container;