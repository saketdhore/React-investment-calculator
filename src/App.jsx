import Calculator from "./components/Calculator";
import Header from "./components/Header";
import { useState } from "react";
import ResultTable from "./components/ResultTable";


function App() {
  //manage state related to Initial investment, annual investment, expected return, and duration
  const [inputValues, setInputValues] = useState({initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0});
  const handleInputChange = (inputId, event) => {
    const newValue = +event.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputId]: +newValue
    }));
  }
  return (
    <>
    <Header/>
    <Calculator onInputChange={handleInputChange}/>
    <ResultTable data={inputValues}/>
    </>
  )
}

export default App
