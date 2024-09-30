import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results.jsx";

import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 1000000,
    annualInvestment: 300,
    expectedReturn: 5,
    duration: 5,
  });

  function handlerChanger(event) {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: +value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInputData={data} handlerChanger={handlerChanger} />
      <Results data={data} />
    </>
  );
}

export default App;
