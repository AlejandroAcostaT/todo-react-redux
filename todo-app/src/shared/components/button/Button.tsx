import React, { FC } from 'react';
import './button.css';

interface Props {
    text: string,
    onClick: Function,
    type: 'main' | 'danger'
};

const Button: FC<Props> = ({text, onClick, type}) => {
  const buttonType: string = 'btn__' + type;
    
  return (
    <button className={'btn '+buttonType} onClick={onClick()}>{text}</button>
  );
}

export default Button;
