import { type } from '@testing-library/user-event/dist/type';
import React, { FC } from 'react';
import Check from '../../../check/Check';
import { BsTrash } from 'react-icons/bs';
import cn from 'classnames';
import classes from './TodoItem.module.css';

interface TodoType {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface PropsTodoItem {
  todos: Array<TodoType>;
  removeTodo: Function;
  checkedTodo: Function;
}

export const TodoItem: FC<PropsTodoItem> = ({ todos, removeTodo, checkedTodo }) => {
  const AddQuantityTodo = todos.length;
  const completeQuantityTodo = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div>
      <div className={classes.lead}>
        <div className={classes.lead__item}>
          <p>Всего созданных дел</p>
          <span className={classes.lead__text}>{AddQuantityTodo}</span>
        </div>

        <div className={classes.lead__item}>
          <p>Выполненных дел</p>
          <span className={classes.lead__text}>
            {completeQuantityTodo} из {AddQuantityTodo}
          </span>
        </div>
      </div>
      {todos.map((todo) => (
        <div
          className={classes.main}
          key={todo.id}>
          <span className={classes.maim__conteiner}>
            <button onClick={() => checkedTodo(todo.id)}>
              <Check isCompleted={todo.isCompleted} />
            </button>
            <span className={cn({ 'line-through': todo.isCompleted })}>{todo.title}</span>
          </span>
          <button onClick={() => removeTodo(todo.id)}>
            <BsTrash size={22} className={classes.main__btnTrash} />
          </button>
        </div>
      ))}

      <div></div>
    </div>
  );
};
