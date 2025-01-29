import React from "react"; 
// React ko import kar rahe hain jisse hum React components bana sakein.

import { FaSmile } from 'react-icons/fa'; 
// FaSmile icon ko import kar rahe hain, jo hum emoji button ke liye use karenge.

export default function TodoInput({ handleAddTodos, todoValue, setTodoValue, handleEmojiChange, emoji }) {
  // TodoInput component ko define kar rahe hain, jo handleAddTodos, todoValue, setTodoValue, handleEmojiChange, aur emoji ko props ke roop mein accept karega.

  return (
    <header className="todo-header">
      {/* Ye header tag hai jisme hum input field, add button aur emoji button display karenge. */}

      <input
        value={todoValue} 
        // Input field mein value ko todoValue se bind kar rahe hain. 

        onChange={(e) => setTodoValue(e.target.value)} 
        // Jab user input field mein kuch type karega, toh ye onChange event trigger hoga aur todoValue ko update karega.

        placeholder="Enter your task..." 
        // Placeholder text jo input field mein dikhai dega jab koi value enter nahi ki gayi ho.
      />

      <button onClick={() => {
        handleAddTodos(todoValue); 
        // Jab "Add" button click ho, handleAddTodos function ko call kiya jaata hai, jo todo ko list mein add karega.

        setTodoValue(''); 
        // Add button press hone par input field ko clear kar diya jaata hai (todoValue ko empty string set karke).
      }}>
        Add
      </button>

      <button onClick={handleEmojiChange} className="emoji-btn">
        {/* Emoji button ka click hone par handleEmojiChange function ko call karenge, jo emoji ko toggle karega. */}

        <FaSmile /> {emoji}
        {/* FaSmile icon ko button mein display kar rahe hain, aur jo emoji state hai, wo bhi display karenge (😊 ya 😎). */}
      </button>
    </header>
  );
}
