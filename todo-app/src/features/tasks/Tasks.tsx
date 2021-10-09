import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { created, updated, deleted, completed } from './tasks.slice';
import TaskForm from './taskForm/taskForm';
import TaskItem from './taskItem/TaskItem';

import Task from '../../shared/interfaces/task';
import './tasks.css';

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

  return (
    <div className="container container-list">
        <h1 className='list-title'>My Todo List</h1>
        <div className='container'>
            <TaskForm/>
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
