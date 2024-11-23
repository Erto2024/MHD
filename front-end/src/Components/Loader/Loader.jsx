import "./Loader.css"
import React, {useEffect, useRef } from 'react';

function Loader () {
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };
 

  useEffect(() => {
    const refs = [dateInputRef, timeInputRef]; // Combine both refs into an array

    const preventSelection = (e) => {
      e.preventDefault();
    };

    refs.forEach((ref) => {
      const input = ref.current;
      if (input) {
        input.addEventListener('selectstart', preventSelection);
        input.addEventListener('mousedown', preventSelection);
      }
    });

    return () => {
      refs.forEach((ref) => {
        const input = ref.current;
        if (input) {
          input.removeEventListener('selectstart', preventSelection);
          input.removeEventListener('mousedown', preventSelection);
        }
      });
    };
  }, []);



  return <div className="loader">
    <input className="firstInput" type="text" />
    <input className="secondInput" type="text" />
    <input  ref={dateInputRef} className="date" type="date" onClick={() => handleClick(dateInputRef)} />
    <input ref={timeInputRef} onClick={() => handleClick(timeInputRef)} type="time" className="time" />
    <button className="searchButton" >Search</button>
  </div>
}

export default Loader