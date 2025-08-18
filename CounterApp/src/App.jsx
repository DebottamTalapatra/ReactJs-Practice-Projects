import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
// import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };
  const handleClick3 = () => {
    setCounter(counter === 0);
    window.location.reload();
  };
  return (
    <div className="app">
      {/* outer card white */}
      <div className="container">
        {/*linear gradient card*/}
        <div
          className="total_amount_card"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(253,230,90,100%), rgba(204,254,87,100%))`,
          }}
        >
          {/* svg icon */}
          <div className="right">
            <svg
              onClick={handleClick3}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="17"
              height="17"
            >
              <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
            </svg>
          </div>
          {/*card text*/}
          <div className="card-text">
            <div className="total_amount_heading">{counter}</div>
          </div>
        </div>
        {/*buttons*/}

        <form>
          <div className="button_collection">
            <Stack spacing={2} direction="row">
              <Button
                onClick={handleClick1}
                variant="contained"
                className="btn-one"
              >
                +
              </Button>
              <Button
                onClick={handleClick2}
                variant="contained"
                className="btn-two"
              >
                -
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
