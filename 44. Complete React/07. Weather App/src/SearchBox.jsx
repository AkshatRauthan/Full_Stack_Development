import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

    let cityHandler = (event) => {
        setCity((prevCity) => {
            return event.target.value;
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h3>Search For The Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="cityName" label="City Name" variant="outlined"
                 value={city} onChange={cityHandler} required/><br />
                <br /><Button variant="contained" type='submit'> Search</Button>
            </form>
        </div>
    )
}