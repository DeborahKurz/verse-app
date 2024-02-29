import React, {useState, useEffect} from "react";
import Header from "./Header.js";
import './App.css';

function OldT(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verseObjs => {
            setVerses(verseObjs);
        })
    }, [])

    console.log("OldT", verses)


    return (
        <div className="App">
            <Header />
          {verses.map((verse)=>(
                <h3 key={verse.reference}>{verse.testament}</h3>
            ))}
        </div>
      );
}

export default OldT;