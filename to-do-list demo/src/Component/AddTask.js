import React, { useState } from 'react'
import '../App.css'
import TaskList from './TaskList'
export default function AddTask(props) {
    const style = {
        border: '1px solid black',
        borderRadius: '4px',
        padding: '5px',
        margin: '5px 5px 5px 5px',
    }
    const [addTaskList, setAddTaskList] = useState(false)
    const [name, setName] = useState()
    const setStatus = () => {
        setAddTaskList(true)
    }
    const linkList = () => {
        props.closeForm()
    }
    const getValueInput = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleAddTask = () => {
        props.addTask1(name)
        linkList()
    }

    if (addTaskList) {
        return (
            <>
                <TaskList />
            </>
        )
    }

    return (
        <>
            <div style={{ marginLeft: '3%' }}>
                <h3>Add task list</h3>
                <input
                    placeholder={'Name task'}
                    onChange={getValueInput}
                ></input>
                <br></br>
                <button type="submit" style={style} onClick={handleAddTask}>
                    Add task
                </button>
                <button type="button" style={style} onClick={setStatus}>
                    Back
                </button>
            </div>
        </>
    )
}
