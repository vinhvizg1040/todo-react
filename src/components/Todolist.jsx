import React from 'react'
import TodoItem from './TodoItem'
import './Todolist.css'

const Todolist = () => {
    return (
        <>
            <div className='list-container'>
                <div className='list-title'>
                    <i>Todo List</i>
                </div>
                <div className='list-sort'>
                    <button>All</button>
                    <button>Done</button>
                    <button>Todo</button>
                </div>
                <TodoItem/>
                <div className='list-delete'>
                    <button>Delete done tasks</button>
                    <button>Delete all tasks</button>
                </div>
            </div>
        </>
    )
}

export default Todolist