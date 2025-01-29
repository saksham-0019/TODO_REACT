import React from 'react'; 
// React ko import kar rahe hain jisse hum React components bana sakein.

import TodoCard from './TodoCard'; 
// TodoCard component ko import kar rahe hain. Ye component har ek todo ko ek card ke form mein display karega.

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  // TodoList component define kar rahe hain, jo todos, handleEditTodo aur handleDeleteTodo ko props ke roop mein accept karega.

  return (
    <ul className='todo-list'>
      {/* Ye ul (unordered list) tag hai jahan hum sabhi todos ko list mein render karenge. */}

      {todos.map((todo, todoIndex) => (
        // Todos array ko map karke har ek todo ko TodoCard ke andar render kar rahe hain.
        // map function har todo ko TodoCard component mein pass karta hai.

        <TodoCard key={todoIndex} index={todoIndex} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}>
          {/* TodoCard ko key (todoIndex) de rahe hain, jisse React ko pata chale kaunsa item update ho raha hai.
              index, handleEditTodo aur handleDeleteTodo ko bhi pass kar rahe hain jisse TodoCard mein edit aur delete actions handle kiye ja sakein. */}

          <p>{todo}</p>
          {/* Ye p tag hai jisme hum todo ka text show karenge. */}
        </TodoCard>
      ))}
    </ul>
  );
}
