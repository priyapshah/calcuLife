import React, { useState } from "react";
import './App.css'

function Calculator() {
  const [dilution, setDilution] = useState(() => {
    return 0;
  });

  function handleCalculation(event) {
    event.preventDefault();
    let a = event.target.initConc.value / event.target.finalConc.value;
    let doseVol = event.target.amtDeliver.value / event.target.initConc.value;
    let volToDeliver = a * doseVol;
    let salineToAdd = volToDeliver - doseVol;
    setDilution(salineToAdd);
  }

  const styles = {
    h1: {
      textAlign: "center",
      padding: "10px",
      fontFamily: "monospace",
      color: "teal",
    },
    input: {
      textAlign: "center",
      padding: "10px",
      fontFamily: "monospace",
      padding: "10px",
      margin: "10px",
    },
    submit: {
      textAlign: "center",
      padding: "10px",
      fontFamily: "monospace",
      backgroundColor: "teal",
      color: "white",
      marginBottom: "20px",
    },
    ans: {
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "xx-large",
    },
  };

  return (
    <>
      <h1> CalcuLife </h1>
      <form onSubmit={handleCalculation}>
        <div className="input" >
          <label>
            Initial Concentration:
            <input type="number" step="0.0001" name="initConc" />
            mg/mL
          </label>
        </div>
        <div className="input" >
          <label>
            Final Concentration:
            <input type="number" step="0.0001" name="finalConc" />
            mg/mL
          </label>
        </div>
        <div className="input" >
          <label>
            Amount of Medicine:
            <input type="number" step="0.0001" name="amtDeliver" />
            mg/mL
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="submit"
           
          />
        </div>
      </form>

      <div >
        <span className="ans" style={styles.ans}>
          Amount of saline to add: {dilution} mL
        </span>
      </div>
    </>
  );
}

export default Calculator;
