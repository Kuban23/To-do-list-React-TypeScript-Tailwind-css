import React, { FC } from 'react';
import classes from './FilterTodoItem.module.css';


interface FilterTodoItemProps {
  filterTodoForList: Function,
};

const FilterTodoItem: FC<FilterTodoItemProps> = ({ filterTodoForList }) => {
  return (
    <header className={classes.header}>
      <button onClick={()=>filterTodoForList('active')}
        className={classes.header__btn}>
        Активные
      </button>
      <button onClick={()=>filterTodoForList('completed')}
        className={classes.header__btn}>
        Выполненные
      </button>
      <button onClick={()=>filterTodoForList('all')}
        className={classes.header__btn}>
        Все
      </button>
    </header>
  );
};

export default FilterTodoItem;
