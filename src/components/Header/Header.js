import { MenuItem, TextField, ThemeProvider } from '@mui/material'
import {createTheme} from '@mui/material/styles'
import React from 'react'
import "./Header.css"
import codes from "../../Data/codes"

function Header({language, LightTheme, setlanguage, word, setword}) {
    // console.log(language);
    // word=word.toUpperCase();
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: LightTheme ? "#000" : "#fff",
          },
          type: LightTheme ? "light" : "dark",
        },
      });
    const handleChange = (language) => {
        setlanguage(language);
        setword("");
    }
    return (
        <div className='header'>
            <span className='title'>{word?word:"Lexis"}</span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className = "searchWord" 
                        id="outlined-basic" 
                        label="Your word" 
                        variant="outlined" 
                        value={word}
                        onChange={(e)=>setword(e.target.value)}
                    />
                    <TextField
                        className="selectLang"
                        id="outlined-select-language"
                        select
                        label="Language"
                        value={language}
                        onChange={(e)=>handleChange(e.target.value)}
                    >
                        {
                            codes.map((lang)=>(
                                <MenuItem key={lang.label} value={lang.value}>{lang.value}</MenuItem>
                            ))
                        }
            
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
