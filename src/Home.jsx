import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))
    }, []);
    
  return (
    <React.Fragment>
    <Nav />
        <div className="App">
        {
            data ? data.map((d, idx) => (
            <div key={idx}>
                <Link to={`/data/${idx}`}>
                    <h1>{d.title}</h1>
                </Link>
                <p>{d.body}</p>
            </div>
            )) : <h1>Loading...</h1>
        }
        </div>
    </React.Fragment>
  )
}

export default Home
