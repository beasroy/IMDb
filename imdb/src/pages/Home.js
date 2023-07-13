import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import { categoryMovies } from '../services/Api';
import {NOWPLAYING_API_URL} from '../constants/constant';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slides from '../components/Slides';
import { Box ,styled} from '@mui/material';

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;
const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

function Home() {

    const [movies,setMovies]=useState([]);
    const getData =async()=>{
        let response = await categoryMovies(NOWPLAYING_API_URL);
        setMovies(response.results)
    }
    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <Header />
            <Container>
            <Wrapper>
                <Banner movies={movies}/>
                <UpNext movies={movies}/>               
            </Wrapper>
                <Slides movies={movies}/>
                <Slides movies={movies}/>
                <Slides movies={movies}/>
                <Slides movies={movies}/>
            </Container>
        </>
    );
}

export default Home;