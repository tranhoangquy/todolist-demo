import React, { useState } from 'react'
import AddTask from './AddTask'
export default function TaskList(props) {
    const style = {
        listStyle: 'none',
        height: '30px',
        border: '1px solid black',
        width: '50%',
        borderRadius: '8px',
        marginBottom: '5px',
    }
    const [task, setTask] = useState(['Task 1', 'Task 2'])
    const [showaddform, setShowaddform] = useState(false)
    const setStatus = () => {
        setShowaddform(true)
    }

    const closeForm = () => {
        setShowaddform(false)
    }
    const addTask1 = (name) => {
        task.push(name)
        console.log(task)
    }
    if (showaddform) {
        return (
            <>
                <AddTask addTask1={addTask1} closeForm={closeForm} />
            </>
        )
    }
    return (
        <>
            {/* {!!showaddform && ( */}

            {/* )} */}

            <button
                onClick={setStatus}
                style={{
                    margin: '8px 0 0 3%',
                    border: '1px solid black',
                    padding: '5px',
                    borderRadius: '4px',
                }}
            >
                Add new task
            </button>
            <h2 style={{ margin: '8px 0 0 3%' }}>List Task</h2>
            <h4 style={{ margin: '8px 0 0 3%' }}>Name of Task :</h4>
            <div className="tasklist">
                <ul>
                    {task.map((item) => {
                        return <li style={style}>{item}</li>
                    })}
                </ul>
            </div>
        </>
    )
}
