import { useEffect, useState } from 'react';
import axios from 'axios';
import Meme from './Meme';
import { Container, Row } from 'react-bootstrap';

export default function Memes() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        const getMemes = async () => {
            const { data } = await axios.get('http://localhost:4000/api/memes');
            setMemes(data);
        };
        getMemes();
    }, []);

    return (
        <Container className="my-5">
            <Row className="flex-column justify-content-center">
                {memes.map((m) => (
                    <Meme meme={m} key={m._id} />
                ))}
            </Row>
        </Container>
    );
}
