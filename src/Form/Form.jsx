import React, { useRef, useState } from "react";
import './Form.css';
import Button from "../Button/Button";

export default function MyConfettiForm({ handleHomeClick }) {
  const inputRef = useRef(null);
  const [genratedURL, setGeneratedUrl] = useState();
  const [copyText, setCopyText] = useState("Copy");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const value = e.target?.[0]?.value;
    if (value) {
      setGeneratedUrl(`${window.location.protocol}//${window.location.host}?query=${btoa(value)}`)
    }
  }

  const copyToClipboard = () => {
    try{
      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand('copy');
        // You can use state or any other method to indicate the copy operation
        setCopyText("Copied")
        console.log(`Copied to clipboard: ${genratedURL}`);
        setTimeout(() => {
          setCopyText('Copy');
        }, 2000)
      }
    } catch(err){
      console(err);
      alert('Error in copy command');
    }
  };

  return <div className="login-box">
    {
      genratedURL ? <div className="user-box">
        <input ref={inputRef} type="text" value={genratedURL} readOnly />
        <h3 style={{ color: 'white', fontSize: 26 }}>Share this URL with custom name</h3>
        <Button className="mr-10" onClick={copyToClipboard} text={copyText} />
        <Button onClick={handleHomeClick} text="Home" />
      </div> :
        <>
          <h2>Please fill form</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>Display Name</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </>
    }

  </div>
}