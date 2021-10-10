import React, { FC } from 'react';
import './button.css';

interface Props {
    text: string,
    onClick: () => void,
    type: 'main' | 'danger',
    isSubmit?: boolean
};

const Button: FC<Props> = ({text, onClick, type, isSubmit}) => {
  const buttonType: string = 'btn__' + type;
    
  return (
    <button 
      className={'btn '+buttonType} 
      onClick={()=>onClick()}
      type={isSubmit ? 'submit' : undefined}
    >{text}</button>
  );
}

export default Button;
