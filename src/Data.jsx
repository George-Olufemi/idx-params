import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Data() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setData(response.data))
    }, [id]);
    
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default Data;
