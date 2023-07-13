import React, { useState } from 'react'

export default function CreateTask(props) {

    const [task, setTask] = useState({
        title: '',
        content: ''
    });

    function detectChange(event) {
        const { name, value } = event.target;
        setTask((oncekitask) => {
            return {
                ...oncekitask,
                [name]: value
            }
        });
    }

    const submitTask = (e) => {
        props.onAdd(task);
        setTask({
            title: '',
            content: ''
        })
        e.preventDefault();
    }

    return (
        <div className='todoDivArea'>
            <form className='todoDiv' >
                <input type="text" className='form-control todoText mb-3' value={task.title} name='title' onChange={detectChange} placeholder='Başlık' />
                <textarea name="content" rows={3} className='form-control todoText mb-3' value={task.content} onChange={detectChange} placeholder="işinizi yazınız"></textarea>
                <button className="btn btn-primary todoButton" onClick={submitTask}>Ekle</button>
            </form>
        </div>
    )
}
