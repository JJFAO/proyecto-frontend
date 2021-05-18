import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import Meme from './Meme';
// import './styles.css';

// install Swiper modules
SwiperCore.use([Navigation]);

const array = [
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
    {
        creador: { nombre: 'jj' },
        createdAt: '2021-05-18',
        imagen: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
        titulo: 'CSS',
    },
];

export default function Memes() {
    const [memes, setMemes] = useState(array);
    // useEffect(() => {
    //     const getMemes = async () => {
    //         const { data } = await axios.get('http://localhost:4000/api/memes');
    //         setMemes(data);
    //     };
    //     getMemes();
    // }, []);

    return (
        <Container className="my-5">
            <Row className=" justify-content-between">
                {memes.map((m, i) => (
                    <Meme meme={m} key={i} />
                ))}
            </Row>
            <>
                <Swiper
                    slidesPerView={3}
                    // spaceBetween={30}
                    // slidesPerGroup={2}
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    className="mySwiper"
                >
                    {memes.map((m, i) => (
                        <SwiperSlide key={i}>
                            {i}
                            <Meme meme={m} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </Container>
    );
}
