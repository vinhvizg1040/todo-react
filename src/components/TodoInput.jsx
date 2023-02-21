import React from 'react'
import './TodoInput.css'
const TodoInput = () => {
    return (
        <>
            <div className='input-container'>
                <div className='input-title'>
                    <i>Todo Input</i>
                </div>
                <div className='input-value'>
                    <div className='input-field'>
                        <span class="fa fa-sticky-note-o book-icon"></span>
                        <input className='input-todo' placeholder='New Todo'></input>
                    </div>
                    <div className='input-button'>
                        <input type="submit" value="Add new task" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoInput