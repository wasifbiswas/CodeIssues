import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil' 




export const counter = atom({
    key: 'counter',
    default: 0
})


function App() {
  return (
      
        <Counter />
      
  )
}

function Counter() {
  
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counter)
 
  return <div>
    <h2>Count:</h2>
    
  </div>
}

function Increase() {
  // const setCount = useSetRecoilState(counter);

  function increase() {
    // setCount(c => c+1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease() {
  // const setCount = useSetRecoilState(counter);

  function decrease() {
    // setCount(c => c-1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}
export default App
