import React, { FC } from 'react';
import './taskItem.css';
import Task from '../../../shared/interfaces/task';

interface Props {
  task: Task
};


const TaskItem: FC<Props> = ({task}) => {
    
  return (
    <div className="container container__row item">
      <p className='item-check'>{task.completed ? 'Y' : 'N'}</p>
      <p className='item-title'>{task.title}</p>
    </div>
  );
}

export default TaskItem;
