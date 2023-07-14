import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);

    }

    useEffect(() =>{
        fetchData();
    },[]);


    function clickHandler(){
        fetchData();
    }

  return (
    <div className='w-1/2 mt-4 mb-4 bg-[#C5D8D1] gap-y-10  rounded-xl border border-black flex flex-col items-center random'>
        <h1 className='text-3xl underline uppercase font-bold mt-6'>A Random Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width="300px" height="250px"/>)
        }

        <button onClick={clickHandler} className='w-3/12 bg-[#06BCC1] text-lg py-3 uppercase rounded-lg mb-6 mx-3'>Generate 💘</button>
    </div>
  )
}

export default Random