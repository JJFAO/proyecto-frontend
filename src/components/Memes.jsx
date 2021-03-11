import { useEffect, useState } from 'react';
import axios from 'axios';
import Meme from './Meme';

export default function Memes() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        const getMemes = async () => {
            const { data } = await axios.get('http://localhost:4000/api/memes');
            setMemes(data);
        };
        getMemes();
    }, []);
    return <div>{memes.map((m) => 
      <Meme
        meme={m}
      />
      )}</div>;
}
