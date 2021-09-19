import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [redBtn, setRedBtn] = useState("btn-primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleDark = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "danger");
      document.title = "TextUtils Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils";
    }
  };

  const toggleRed = () => {
    if (Mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "	#800000";
      showAlert("Red mode has been enabled", "primary");
      setRedBtn("btn-danger");
      document.title = "TextUtils Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setRedBtn("btn-primary");
      document.title = "TextUtils";
    }
  };

  return (
    <><Router>
      <Navbar
        mode={Mode}
        toggleMode={{ toggleDark, toggleRed }}
        title="TextUtils"
        aboutText="About us"
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              btn={redBtn}
              mode={Mode}
              heading="Enter the text to analyze"
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
