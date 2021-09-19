import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to upper case", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to lower case", "success")
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces has been removed", "success")
  };
  const ClearText = () => {
    setText("");
    props.showAlert("Text Area has been cleared", "success")
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text Copied", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className={`btn ${props.btn} mx-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn ${props.btn} mx-1`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn ${props.btn} mx-1`}
          onClick={handleSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn ${props.btn} mx-1`}
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className={`btn ${props.btn} mx-1`}
          onClick={ClearText}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words {text.length} characters which will
          take {text.split(" ").length * 0.08} minutes to read
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
