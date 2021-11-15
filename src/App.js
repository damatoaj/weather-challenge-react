import react from "react";
import React, {useState, useEffect} from "react";
import Container from './components/Container'

function App() {
  const [response, setResponse] = useState(null);
  const [city, setCity] = useState('London')
  const [units, setUnits] = useState('imperial')
  const [lang, setLang] = useState('en')
  const APIKey = process.env.REACT_APP_APIKey
  
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=18da0d9d964122cc2b58e005a3db49a4`)
    .then(res => {
      res.json().then(data => {
        if(data != null) {
          let tempArray = [];
          for (let i = 0; i < data.list.length; i++) {
            if(data.list[i].dt_txt.includes('06:00:00')) {
              tempArray.push(data.list[i])
            }
          }
          setResponse(tempArray)
        }

      })
    })
  }, [])

  console.log(response)



  return (
    <>
      {
        (response!= null)? <Container list={response} /> : ''
      }
    </>
  );
}

export default App;
