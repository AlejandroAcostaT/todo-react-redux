import React, { FC, useState } from 'react';
import './taskForm.css';
import Task from '../../../shared/interfaces/task';
import Button from '../../../shared/components/button/Button';

interface Props {
  task: Task,
  formCreate: boolean,
  onSubmit: (formTask: Task) => void
  onCancel: () => void
};

const TaskForm: FC<Props> = ({task, formCreate, onSubmit, onCancel}) => {

  const [title, setTitle] = useState(task.title || '');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formTask: Task;

    if(formCreate){
      formTask = {
        id:-1,
        title: title,
        completed: false
      };
    }else{
      formTask = {
        id:task.id,
        title: title,
        completed: task.completed
      };
    }

    onSubmit(formTask);
  }
    
  return (
    <div className="container">
      <form className='form-container' onSubmit={submit}>
        
        <input 
          className='form-input' 
          placeholder={formCreate ? 'Add your new task' : 'Update Task'} 
          type={'text'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <div className='container__row'>
          <Button 
            isSubmit={true} 
            text={formCreate ? 'Create Task' : 'Update Task'} 
            type={'main'} 
            onClick={()=>{}}
          />

          <Button text={'Cancel'} type={'danger'} onClick={()=>onCancel()}/>
        </div>

      </form>
    </div>
  );
}

export default TaskForm;
