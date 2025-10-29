import { useState } from "react";

import UserForm from "./components/UserForm";
import Results from "./components/Results";

const INPUT_DATA = {
  initInvest: null,
  annualInvest: null,
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

  return (
    <main>
      <UserForm onInputChange={handleInputChange} />
      DATA {inputData.initInvest} {inputData.duration}
    </main>
  )

}

export default App
