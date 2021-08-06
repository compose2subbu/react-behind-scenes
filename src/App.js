import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';


function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  //const [toggleCounter, setToggleCounter] = useState(1);

  console.log('APP_RUNNING')
  // const toggleParaHandler = () => {
  //   //console.log(toggleCounter);
  //   //console.log(toggleCounter%2 === 0);
  //   if(toggleCounter%2 === 0){
  //     setShowParagraph((prevShowParagraph) => {return !prevShowParagraph});
  //   }
  //   setToggleCounter((prevToggleCounter) => {return ++prevToggleCounter ;});
  // };

  // const toggleParaHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const listItems = useMemo(() => [5, 3, 1, 0, 2], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph } items={listItems}/>
      <Button onClick={allowToggleHandler} name={'allow'}>Allow Toggling</Button>
      <Button onClick={toggleParaHandler} name={'toggle'}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
