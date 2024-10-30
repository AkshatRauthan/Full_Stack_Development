import './App.css'
import Lottery from './lottery';
import WinningCondition from './WinningCondition';
function App() {

  return (
    <>
      <Lottery n={3} winningCondition={WinningCondition} />
      {/* Sending Complete Function As A Prop To Child Components */}
    </>
  )
}

export default App;