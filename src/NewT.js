import React, {useState, useEffect} from "react";
import Header from "./Header.js";
import './App.css';

function NewT(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verseObjs => {
            setVerses(verseObjs);
        })
    }, [])

    console.log("NewT", verses)

    return (
        <div className="App">
            <Header />
        </div>
      );
}

export default NewT;