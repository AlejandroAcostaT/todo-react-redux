import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { created, updated, deleted, completed } from './tasks.slice';
import TaskForm from './taskForm/taskForm';
import TaskItem from './taskItem/TaskItem';

import Task from '../../shared/interfaces/task';
import './tasks.css';
import Button from '../../shared/components/button/Button';

function Tasks() {
    const tasks = useAppSelector((state) => state.tasks);
    const [showForm, setShowForm] = useState(false);
    const [selectedTask, setSelectedTask] = useState({
        id: -1,
        title: '',
        completed: false
    });
    const [formCreate, setFormCreate] = useState(true);

    const dispatch = useAppDispatch();

    const createTask = (title: string)=> {
        dispatch(created(title));
    }
    const updateTask = (task: Task)=> {
        dispatch(updated(task));
    }
    const deleteTask = (id: number)=> {
        dispatch(deleted(id));
    }
    const completeTask = (id: number)=> {
        dispatch(completed(id));
    }

    const showHideCreateForm = () => {
        setFormCreate(true);
        setShowForm(!showForm);
    }

    const showHideUpdateForm = (task: Task) => {
        setSelectedTask(task);
        setFormCreate(false);
        setShowForm(!showForm);
    }

    const onTaskSubmitted = (formTask: Task) => {

        if(formCreate){
            createTask(formTask.title);
        }else{
            updateTask(formTask);
        }
        setSelectedTask({
            id:-1,
            title: '',
            completed: false
        });
        setShowForm(!showForm);
    }

    const onCancelForm = () => {
        setSelectedTask({
            id:-1,
            title: '',
            completed: false
        });
        setShowForm(!showForm);
    }

  return (
    <div className="container container-list">
        <div className='container-header'>
            <h1 className='list-title'>My To Do List</h1>
            {
                !showForm &&
                <Button text={'Add New Task'} type={'main'} onClick={()=>showHideCreateForm()}/>
            }
        </div>
        <div className='container'>
            {
                showForm &&
                <TaskForm 
                    formCreate={formCreate} 
                    task={selectedTask}
                    onSubmit={(formTask)=>onTaskSubmitted( formTask)} 
                    onCancel={()=>onCancelForm()}
                />
            }
            {
                tasks.map((task:Task) => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onEdit={(task: Task)=>showHideUpdateForm(task)}
                        onDelete={(id: number)=>deleteTask(id)}
                        onComplete={(id: number)=>completeTask(id)}
                        showForm={showForm}
                    />
                ))
            }

        </div>
    </div>
  );
}

export default Tasks;
