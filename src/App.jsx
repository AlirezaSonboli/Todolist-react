import { useState } from 'react'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="bg-gray-100">
        <Todos/>

    </div>
  )
}

export default App
