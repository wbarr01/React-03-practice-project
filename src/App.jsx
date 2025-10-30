import { useState } from "react";

import UserForm from "./components/UserForm";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

const INPUT_DATA = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null
}

function App() {
  const [inputData, SetInputData] = useState(INPUT_DATA);

  function handleInputChange(label, value) {
    SetInputData(prevInput => {
      return {
        ...prevInput,
        [label]: value
      }
    })
  }

  let results = calculateInvestmentResults(inputData);
  console.log(results);
  return (
    <main>
      <UserForm onInputChange={handleInputChange} />
      <Results results={results} />

    </main>
  )

}

export default App
