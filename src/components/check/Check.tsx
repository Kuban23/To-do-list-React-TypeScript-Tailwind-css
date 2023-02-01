import React, { FC } from 'react';
import { BsCheck } from 'react-icons/bs';
import cn from 'classnames';
import classes from './Check.module.css';

interface PropsCheck {
  isCompleted: boolean;
}

const Check: FC<PropsCheck> = ({ isCompleted }) => {
  return (
    <div className={cn(classes.check, { 'bg-pink-400': isCompleted })}>
    
      {isCompleted && <BsCheck className={classes.check__btn} size={24} />}
    </div>
  );
};

export default Check;
