import React from 'react'; 
// React ko import kar rahe hain jisse hum React component bana sakein.

import { FaPen, FaTrash } from 'react-icons/fa'; 
// FaPen aur FaTrash icons ko import kar rahe hain, jo edit aur delete buttons ke liye use karenge.

export default function TodoCard({ children, handleDeleteTodo, index, handleEditTodo }) {
  // TodoCard component ko define kar rahe hain. Ismein 'children' prop hai (jo todo ka text hoga), 'handleDeleteTodo' aur 'handleEditTodo' functions hain, aur 'index' hai jo todo ki position ko track karega.

  return (
    <li className='todo-item'>
      {/* Ye ek list item hai jo ek todo item ko represent karega. */}
      
      {children} 
      {/* 'children' ko render kar rahe hain, jo ki actual todo ka text hoga (jise TodoInput component se pass kiya gaya tha). */}

      <div className='actions-container'>
        {/* Ye ek div hai jo edit aur delete buttons ko wrap karega. */}
        
        <button onClick={() => handleEditTodo(index)}>
          {/* Jab edit button pe click hoga, handleEditTodo function call hoga aur index ke saath current todo ko edit karne ke liye pass hoga. */}
          
          <FaPen />
          {/* FaPen icon ko render kar rahe hain jo pen ka icon hai, jo editing ke liye represent karta hai. */}
        </button>

        <button onClick={() => handleDeleteTodo(index)}>
          {/* Jab delete button pe click hoga, handleDeleteTodo function call hoga aur index ke saath current todo ko delete karne ke liye pass hoga. */}
          
          <FaTrash />
          {/* FaTrash icon ko render kar rahe hain jo trash can ka icon hai, jo todo ko delete karne ke liye represent karta hai. */}
        </button>
      </div>
    </li>
  );
}

