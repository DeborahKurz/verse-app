import React, {useState, useEffect} from "react";
import NavBar from "./NavBar.js";
import './App.css';
import VerseCard from "./VerseCard.js";

function NewT(){
    const [verses, setVerses] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/verses")
        .then(r=>r.json())
        .then(verseObjs => {
            const newTVerses = verseObjs.filter((verse) => {
                return verse.testament.toLowerCase() === "new";
            });
            setVerses(newTVerses);
        })
    }, [])

    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <div>
                {verses.map((verse)=>(
                    <VerseCard key={verse.reference} verse={verse}/>
                ))}
            </div>
        </div>
      );
}

export default NewT;