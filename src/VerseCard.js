import React from "react";

console.log("VerseCard.js: Finish making Links hyperlinks")

function VerseCard({verse}){
    return(
        <div>
            <h2>{verse.reference}</h2>
            <h3>{verse.verse}</h3>
            <h6>Citation: {verse.url}</h6>
        </div>
    )
};

export default VerseCard;