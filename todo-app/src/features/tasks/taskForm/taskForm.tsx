import React, { FC } from 'react';
import './taskForm.css';
import Task from '../../../shared/interfaces/task';
import Button from '../../../shared/components/button/Button';

interface Props {
  task?: Task,
  type: 'create' | 'edit'
};

const TaskForm: FC<Props> = ({task, type}) => {

  const submit = () => {

  }
    
  return (
    <div className="container">
      <form className='form-container' onSubmit={submit}>
        {
          type === 'create' ?
          <>
          <input className='form-input' placeholder='Add your new task' type={'text'}/>
          <Button text={'Create New Task'} type={'main'} onClick={submit}/>
          </>
          :
          <>
            <input className='form-input' placeholder='Update your task' type={'text'}/>
            <Button text={'Update Task'} type={'main'} onClick={submit}/>
          </>
        }
      
      </form>
    </div>
  );
}

export default TaskForm;
