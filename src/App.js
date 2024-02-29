import logo from './logo.svg';
import NavBar from "./NavBar.js";
import React, {useState, useEffect} from "react";
import Form from "./Form.js";
import Header from "./Header.js";

//Create a VerseCard Component that renders info about each verse
//in Old and New Components, pass down data array from index.js and map through verses, handing them off to VerseCard to be rendered.
//Clean up Components/files in this app. Get rid of what I'm not using.
//Verify requirements
//Add ReadMe file

function App() {
  const [verses, setVerses] = useState([]);
  
  function addVerse(newVerse){
    setVerses([...verses, newVerse])
  }

  useEffect(()=>{
      fetch("http://localhost:3000/verses")
      .then(r=>r.json())
      .then(verseObjs => {
          setVerses(verseObjs);
      })
  }, [])

  console.log("App: ", verses);

  return (
    <div className="App">
      <Header />
      <h2>Welcome!</h2>
      <p>Here you can keep track of your favorite Bible verses. Use the Add A Verse tab to add your favorite verses, then view them in the New Testament and Old Testament tabs in the navigation bar. Below you will see a list of all the verses that have been saved.</p>
      <Form onAddVerse={addVerse}/>
    </div>
  );
}

export default App;
