import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { created, updated, deleted, completed } from './tasks.slice';
import TaskForm from './taskForm/taskForm';
import TaskItem from './taskItem/TaskItem';

import Task from '../../shared/interfaces/task';
import './tasks.css';
import Button from '../../shared/components/button/Button';

function Tasks() {
    const tasks = useAppSelector((state) => state.tasks);

    const dispatch = useAppDispatch();

    const createTask = (title: string)=> {
        dispatch(created(title));
    }
    const updateTask = (task: Task)=> {
        dispatch(updated(task));
    }
    const deleteTask = ()=> {
        dispatch(completed(0));
    }
    const completeTask = ()=> {
        dispatch(completed(0));
    }

    const click = () => {

    }

  return (
    <div className="container container-list">
        <div className='container-header'>
            <h1 className='list-title'>My Todo List</h1>
            <Button text={'Add New Task'} type={'main'} onClick={click}/>
        </div>
        <div className='container'>
            <TaskForm type='edit'/>
            {
                tasks.map((task:Task) => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </div>
    </div>
  );
}

export default Tasks;
