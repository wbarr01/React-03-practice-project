import { useState } from "react";

import UserForm from "./components/UserForm";
import Results from "./components/Results";

function App() {

  const [inputData, SetInputData] = useState({
    initialInvestment: 1500,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 2
  });

  function handleInputChange(identifier, value) {
    SetInputData(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: +value//transfor to number, Number(value)
      };
    });
  }

  const inputIsValid = inputData.duration >= 1;
  let showResults = (<Results inputData={inputData} />);
  if (!inputIsValid) {
    showResults = <p className="center">Please enter a duration larger than 0</p>
  }

  return (
    <main>
      <UserForm inputData={inputData} onInputChange={handleInputChange} />
      {showResults}
    </main>
  )

}

export default App
