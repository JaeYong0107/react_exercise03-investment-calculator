import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react";

const INITIAL_VALUE = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 5,
  duration: 1,
}

function App() {

  const [userInput, setUserInput] = useState(INITIAL_VALUE);

  const isInputValid = userInput.duration >= 1;

  function handleChange(event, inputIdentifier) {
    setUserInput(prevInput => ({ ...prevInput, [inputIdentifier]: +event.target.value }));
  }

  return (<>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {isInputValid && <Result inputs={userInput} />}
    {!isInputValid && <p className="center">Please enter a duration greater than zero</p>}
  </>)
}

export default App
