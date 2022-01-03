import React from 'react'
import "./Meanings.css";

function Meanings({word,language,meanings,LightTheme}) {
    return (
        <div className='meanings'>
            {
                word===""? (<span className='type'>Type a word to search</span>):
                (
                    meanings.map((mean)=> mean.meanings.map((item) =>
                        item.definitions.map((def)=>(
                            <div className='singleMean'
                            style={{
                                backgroundColor: LightTheme ? "#171616" : "white",
                                color: LightTheme ? "white" : "black",
                              }}
                            >
                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {def.example && (
                                    <span>
                                        <b>Example :</b> {def.example}
                                    </span>
                                )}
                                <hr></hr>
                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                            
                        )) 
                    )
                )
                )}
        </div>
    )
}

export default Meanings
