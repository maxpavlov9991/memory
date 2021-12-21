import { Board } from './components/board/board';
import './App.css';
import { Menu } from './components/menu/menu'
import { useCallback, useState } from 'react';
import { createMatrix } from './lib/matrix';

function App() {
  const [matrix, setMatrix] = useState(null)

  const handleStart = useCallback((n) => {
    console.log(n)
    setMatrix(createMatrix(n))
  })

  return (
    <div className="App">
      {!matrix && <Menu onStart={handleStart}/>}
      {matrix && <Board matrix={matrix}/>}
    </div>
  );
}

export default App;
