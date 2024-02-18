
import { useEffect, useState } from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';
import { Ex } from './components/Example';
import { Counter } from './components/Counter';
import { Context } from './context';


function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const createTodo = () => {
    let arr = [...todos, { text: inputValue, complete: false }]
    if (inputValue) {
      setTodos(arr)
      setInputValue("")
      localStorage.setItem("todos", JSON.stringify(arr))
    }
  }

  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"))

    localTodos && setTodos(localTodos)

    // alert("New task is here")
    // },[todos])
  })

  const updateLocal = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr))
  }

  const deleteTodo = (id) => {
    let arr = [...todos]
    arr.splice(id, 1)
    setTodos(arr)
    updateLocal(arr)
  }

  const completeTodo = (id) => {
    let arr = [...todos]
    arr[id].complete = !arr[id].complete
    setTodos(arr)
    updateLocal(arr)
  }

  return (
    <Context.Provider value={{deleteTodo,completeTodo}}>
      <div className="App">
        <div>
          <input type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }} />
          <button onClick={createTodo}>Add</button>
        </div>
        <div>
          {todos &&
            todos.map((el, id) => {
              return <TodoItem 
                todo={el} key={id} id={id} />
            })
          }
        </div>
        <Ex />
        <Counter />
      </div>
    </Context.Provider>

  );
}

export default App;
