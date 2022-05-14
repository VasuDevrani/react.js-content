import react from "react";
import { useState } from "react";

export default
 function Container() {

    function handleUpClick(){
        console.log("text changing up");
        let newText=text.toUpperCase();
        setText(newText);
    }

    function handleDownClick(){
        console.log("text changing down");
        let newText=text.toLowerCase();
        setText(newText);
    }

    // Using Usestate hook to keep trac of state of a given component 
    // Used for updating the component part like here it is used for updating the text inside input box
    const [text,setText]=useState(" ");

    function handleOnChange(e)
    {
        setText(e.target.value);
    }

    function copyText()
    {
        navigator.clipboard.writeText(text);
    }

  return (
    <>
      <div className="my-50 container">
        <h1 className="my-5">Enter the text</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-2 mx-3" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>

        <h2>Text Count</h2>
        <p>
            {text.length} characters and {text.split(" ").length-1} words
        </p>
      </div>
    </>
  );
}
