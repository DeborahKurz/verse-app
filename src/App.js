import logo from './logo.svg';
import NavBar from "./NavBar.js";
import React, {useState, useEffect} from "react";
import Form from "./Form.js";
import Header from "./Header.js";

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
      {verses.map((verse)=>(
        <div key={verse.reference}>
          <h4>{verse.reference}</h4>
          <h6>{verse.verse}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
