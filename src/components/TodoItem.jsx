import React from 'react'

const TodoItem = () => {
    return (
        <>
            <div className='list-value'>
                <i className='item-title'>Practice ReactJS</i>
                <div className='item-action'>
                    <input type="checkbox" name="" id="" />
                    <a href='#1'><i className='fa fa-pencil' /></a>
                    <a href='#1'><i className='fa fa-trash' /></a>
                </div>
            </div>

        </>
    )
}

export default TodoItem