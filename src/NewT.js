import React, {useState, useEffect} from "react";
import Header from "./Header.js";
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
    
    console.log(verses);

    return (
        <div className="App">
            <header>
                <Header />
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