import React, {useState} from "react"; //STEP 1. Import useState

function Toggle() {
  const [isOn, setIsOn] = useState(false) // STEP 2. set variable & setter function = inital value with useState
  // set to false b/c button should be off when page is rendered

  function handleToggle(event) { // STEP 5. create that call back function handling the event
    // STEP 6. utilize setter function to change the state of our variable
    // NOTE: When need to change state use the callback syntax inside the setter function
    setIsOn((isOn) => !isOn) // bang operator ! returns opposite of that value

  }

  const color = isOn ? 'red' : 'white' // STEP 7. Add background changing feature, doesn't need a new state
  // we can utilize isOn state to compute the color based on it's value

  return <button style={{background : color}} onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</button>;
   // STEP 3. use the state {isOn} variable to dynamically determine text displayed
   // STEP 4. add the call back function that is gonna handle the event triggered
   // STEP 8. Add style value to color variable we created 
}

export default Toggle;
