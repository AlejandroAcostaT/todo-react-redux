import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { created, updated, deleted, completed } from './task.slice';
import './task.css';

function Task() {
    const tasks = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const completeTask = ()=> {
        dispatch(completed(0));
    }

  return (
    <div className="">
        <h1>The Task {tasks[0].title} has status {tasks[0].completed ? 'completed' : 'pending'}</h1>
        <button onClick={completeTask}> Complete Task </button>
    </div>
  );
}

export default Task;
