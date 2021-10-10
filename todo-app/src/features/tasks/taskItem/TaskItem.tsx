import React, { FC } from 'react';
import './taskItem.css';
import Task from '../../../shared/interfaces/task';
import Button from '../../../shared/components/button/Button';

import {FaRegSquare, FaRegCheckSquare} from 'react-icons/fa';

interface Props {
  task: Task,
  showForm: boolean, //if form is showing the Edit and Delete Buttons are hidden
  onEdit: (task: Task)=> void,
  onDelete: (id:number)=> void,
  onComplete: (id:number)=> void
};

const TaskItem: FC<Props> = ({task, showForm, onEdit, onDelete, onComplete}) => {

  const titleStyle: string = task.completed ? 'item-title__completed' : '';
    
  return (
    <div className="container container__row item">
      <div className='item-container' >
        {task.completed ? 
          <FaRegCheckSquare className='item-check' onClick={()=>onComplete(task.id)}/> : 
          <FaRegSquare className='item-check' onClick={()=>onComplete(task.id)}/>
        }
        <p className={'item-title '+titleStyle}>{task.title}</p>
      </div>
      
      <div className='button-container'>
        {
          !showForm && 
          <>
            <Button text={'Edit'} onClick={()=>onEdit(task)} type={'main'}/>
            <Button text={'Delete'} onClick={()=>onDelete(task.id)} type={'danger'}/>
          </>
        }
      </div>
    </div>
  );
}

export default TaskItem;
