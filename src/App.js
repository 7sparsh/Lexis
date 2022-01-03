import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import { Container, styled, Switch } from '@mui/material';
import Header from './components/Header/Header';
import Meanings from './components/Meanings/Meanings';
// import codes from 'Data/codes'

function App() {
  
  const [meanings, setMeanings] = useState([]);
  const [language, setlanguage] = useState("English");
  const [word, setword] = useState("Hello");
  const [code] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


  const getMeanings = async() => {
    try{
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${code}/${word}`);
      setMeanings(res.data);
      // console.log(res);
    }
    catch(e){
      console.log("error", e);
    }
  }

  // console.log(meanings);
  
  useEffect(() => {
   getMeanings();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word,language])

  return (
    <div className="App" style={{
      height: "100vh",
      backgroundColor: LightTheme ? "#fff" : "#282c34",
      color: LightTheme ? "black" : "white",
      transition: "all 0.5s linear",
    }}>
      <Container maxWidth="md">
      <div
          style={{ position: "absolute", top: 0, right: 75, paddingTop: 30 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <IOSSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header language={language} setlanguage={setlanguage} word={word} setword={setword} LightTheme={LightTheme}/> 
        <Meanings word={word} language={language} LightTheme={LightTheme} meanings={meanings}/>
      </Container>
    </div>
  );
}

export default App;
