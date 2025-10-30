import { useState } from "react";

import UserForm from "./components/UserForm";
import Results from "./components/Results";
import { } from "./util/investment";

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

  return (
    <main>
      <UserForm inputData={inputData} onInputChange={handleInputChange} />
      <Results inputData={inputData} />

    </main>
  )

}

export default App
