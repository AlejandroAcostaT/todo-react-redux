import React, { FC } from 'react';
import './taskItem.css';
import Task from '../../../shared/interfaces/task';
import Button from '../../../shared/components/button/Button';

import {FaRegSquare, FaRegCheckSquare} from 'react-icons/fa';

interface Props {
  task: Task
};

const click = () => {
  console.log('Click');
}

const TaskItem: FC<Props> = ({task}) => {

  const titleStyle: string = task.completed ? 'item-title__completed' : '';
    
  return (
    <div className="container container__row item">
      <div className='item-container' >
        {task.completed ? 
          <FaRegCheckSquare className='item-check' onClick={click}/> : 
          <FaRegSquare className='item-check' onClick={click}/>
        }
        <p className={'item-title '+titleStyle}>{task.title}</p>
      </div>
      
      <div className='button-container'>
        <Button text={'Edit'} onClick={click} type={'main'}/>
        <Button text={'Delete'} onClick={click} type={'danger'}/>
      </div>
    </div>
  );
}

export default TaskItem;
