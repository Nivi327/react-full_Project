import './App.css';
import Timer from './Timer';
import { useCallback, useMemo, useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  // useMemo --> used for memoising the return values
  // const addRandom = useMemo(() => {
  //   return () => {
  //     const randomValue = parseInt(Math.random() * 1000 + 100)
  //     setNumbers((prevNums) => [...prevNums, randomValue]);
  //   }
  // }, [numbers]);

  // useCallback --> used for memoising the functions
  const addRandom = useCallback(() => {
    const randomValue = parseInt(Math.random() * 1000 + 100)
    setNumbers((prevNums) => [...prevNums, randomValue]);
  }, [numbers]);

  return (
    <div className="App">
      <div>
        <h2>Count</h2>
        {count}
        <button onClick={incrementCount}>+</button>
      </div>
      <hr />
      <Timer nums={numbers} addRandom={addRandom} />
    </div>
  );
}

export default App;
