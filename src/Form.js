import React, {useState} from "react";
import './App.css';

function Form({addVerse}){
    const [testament, setTestament] = useState("");
    const [reference, setReference] = useState("");
    const [verse, setVerse] = useState("");
    const [url, setUrl] = useState("");

    console.log("Form", testament, reference, verse, url)

    function handleSubmit(event){
        event.preventDefault();
        const configObj = {
            method: 'POST',
            headers: {'Content-Type': 'applicaton/json'},
            body: JSON.stringify({
                testament: testament,
                reference: reference,
                verse: verse,
                url: url
            })
        }
        fetch('http://localhost:3000/movies', configObj)
        .then(res => res.json())
        .then(newVerse => {
            addVerse(newVerse)
            console.log(newVerse);
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
                <h4>URL of Copied Bible Verse:</h4>
                <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)}></input>
                <div>
                    <button type="submit">Add My Bible Verse To My List!</button>
                </div>
            </form>
        </div>
      );
}

export default Form;



//Use Post request to update statevariable fo the array that lives in index. Pass down a prop? Move to App??
//Create a VerseCard Component that renders info about each verse
//in Old and New Components, pass down data array from index.js and map through verses, handing them off to VerseCard to be rendered.
//Clean up Components/files in this app. Get rid of what I'm not using.
//Verify requirements
//Add ReadMe file


        // const formData = {
        //     testament: testament,
        //     reference: reference,
        //     verse: verse,
        //     url: url


    //In the beginning God created the heavens and the earth.


        // console.log("formData: ", formData)
        // fetch("http://localhost:3000/verses", {
        //     method: "POST",
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        // //     body: JSON.stringify(formData)
        // }
        // )
        // .then(r=>r.json())
        // .then(data=>{
            // console.log(data);
            // setTestament("");
            // setReference("");
            // setVerse("");
            // setUrl("");
        // }
        // )