import React, { useEffect, useState } from 'react'

function Jokes() {


    const [jokes, setJokes] = useState([])

    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'

    const options = {
        method : 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'e9a76b32e4msh8f6b1bd45a44028p1fe207jsn340c69158d4a',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
          }
    }

  
    const getJokes = async() => {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setJokes(result);
     }
    

    useEffect(()=>{
        getJokes();
    },[]) 




  return (
    <>      
       <h1>{jokes.value}</h1>
    </>
  )
}

export default Jokes