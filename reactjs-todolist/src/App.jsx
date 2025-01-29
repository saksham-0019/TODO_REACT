import { useState, useEffect } from "react"; 
// React ke useState aur useEffect hooks ko import kar rahe hain. useState se hum state manage karenge aur useEffect se side effects handle karenge.

import TodoInput from "./components/Todoinput"; 
// TodoInput component ko import kar rahe hain jahan user apne tasks add karega.

import TodoList from "./components/Todolist"; 
// TodoList component ko import kar rahe hain jahan tasks dikhaye jayenge.

import "./index.css"; 
// CSS styles ko import kar rahe hain, jisse humara UI properly style ho sake.

import { FaSun, FaMoon, FaSmile } from 'react-icons/fa'; 
// React-icons se sun, moon aur smile emojis ko import kar rahe hain jo hum buttons mein use karenge.

function App() {
  const [todos, setTodos] = useState([]); 
  // Todos ko store karne ke liye ek state variable banaya hai (empty array se initial). Ye tasks ko manage karega.

  const [todoValue, setTodoValue] = useState(''); 
  // Todo input field ki value ko manage karne ke liye ek state variable banaya hai.

  const [isNightMode, setIsNightMode] = useState(false); 
  // Night mode ko toggle karne ke liye ek state variable banaya hai (initially false, yani day mode hai).

  const [emoji, setEmoji] = useState('😊'); 
  // Emoji ko store karne ke liye ek state variable banaya hai (initially smiling emoji).

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
    // Ye function todos ko localStorage mein save karne ke liye hai. LocalStorage mein data ko persist karne ke liye use hota hai.
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]; 
    // New todo ko current todos list ke saath add kar rahe hain.

    persistData(newTodoList); 
    // Updated todo list ko localStorage mein store kar rahe hain.

    setTodos(newTodoList); 
    // Updated todo list ko state mein set kar rahe hain, jisse UI update ho jaye.
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    // Filter function se selected index wala todo remove kar rahe hain.

    persistData(newTodoList); 
    // Updated list ko localStorage mein save kar rahe hain.

    setTodos(newTodoList); 
    // Updated todo list ko state mein set kar rahe hain.
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index]); 
    // Edit karte waqt selected todo ko input field mein set kar rahe hain.

    handleDeleteTodo(index); 
    // Edit karne ke baad us todo ko delete kar rahe hain, phir updated todo ko add karenge.
  }

  function toggleDayNightMode() {
    setIsNightMode(!isNightMode); 
    // Night mode toggle karne ke liye state change kar rahe hain. Agar night mode true hai, to false ho jayega, aur vice versa.
  }

  function handleEmojiChange() {
    setEmoji(emoji === '😊' ? '😎' : '😊'); 
    // Emoji ko toggle kar rahe hain, agar current emoji '😊' hai to '😎' ho jayega, warna '😊' ho jayega.
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))?.todos || [];
    // Page load hone par localStorage se todos ko fetch kar rahe hain, agar kuch nahi mila to empty array set kar rahe hain.

    setTodos(localTodos); 
    // Fetched todos ko state mein set kar rahe hain, jisse page par dikh sake.
  }, []); 
  // useEffect ko empty dependency array ke saath use kiya hai, isliye ye sirf initial render par hi chalega.

  const motivationalQuotes = [
    "Keep going, you're doing great!", 
    "Success is the sum of small efforts!", 
    "Believe in yourself, every day is a new beginning!", 
    "Stay positive and keep moving forward!"
  ];
  // Motivational quotes ka ek array banaya hai jisme kuch inspirational quotes hain.

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  // Random motivational quote ko select kar rahe hain.

  return (
    <div className={`todo-container ${isNightMode ? 'night-mode' : ''}`}>
      {/* Ye div todo-container ko render karega. Agar night mode hai to 'night-mode' class bhi add hogi. */}
      <div className="header-container">
        <button onClick={toggleDayNightMode} className="mode-toggle">
          {/* Ye button day/night mode toggle karne ke liye hai. Agar night mode on hai to sun icon, nahi to moon icon show hoga. */}
          {isNightMode ? <FaSun /> : <FaMoon />}
        </button>
        <h1 className="quote">{randomQuote}</h1>
        {/* Random motivational quote ko render kar rahe hain. */}
      </div>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        handleEmojiChange={handleEmojiChange}
        emoji={emoji}
      />
      {/* TodoInput component ko pass kar rahe hain todos ke value aur handle functions */}
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
      {/* TodoList component ko pass kar rahe hain todos list aur handle functions */}
    </div>
  );
}

export default App;
