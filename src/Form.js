import React, {useState} from "react";
import './App.css';

function Form({onAddVerse}){
    const [testament, setTestament] = useState("");
    const [reference, setReference] = useState("");
    const [verse, setVerse] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const configObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                testament: testament,
                reference: reference,
                verse: verse,
                url: url
            })
        }

        fetch('http://localhost:3000/verses', configObj)
        .then(res => res.json())
        .then(newVerse => {
            onAddVerse(newVerse)

            setTestament("");
            setReference("");
            setVerse("");
            setUrl("");
        }) 
    }

    return (
        <div className="App">
            <h2>Fill Out This Form To Add A Verse</h2>
            <form onSubmit={handleSubmit}>
                <h4>Testament The Bible Verse Is Located In: Old or New?</h4>
                <input type="text" value={testament} onChange={(e)=> setTestament(e.target.value)}></input>
                <h4>Reference (Example: John 3:16 NLT)</h4>
                <input type="text" value={reference} onChange={(e)=> setReference(e.target.value)}></input>
                <h4>Verse (Example: For God so loved the world that He...):</h4>
                <input type="text" value={verse} onChange={(e)=> setVerse(e.target.value)}></input>
                <h4>URL of Copied Bible Verse (if no URL, skip this step):</h4>
                <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)}></input>
                <div>
                    <button type="submit">Add My Bible Verse To My List!</button>
                </div>
            </form>
        </div>
      );
}

export default Form;