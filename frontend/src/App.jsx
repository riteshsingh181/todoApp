import { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todos todos = {todos}/>
      </div>
    </>
  )
}

export default App
