import React from 'react'
import styled from 'styled-components'
import Media from './Media'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem auto 0 auto;
`
const Headline = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin:10rem 0 2rem 0;
`
const PodDate = styled.h3`
    text-align: center;
    font-size: 5rem;
`
const Exp = styled.p`
    text-align: justify;
    font-size: 2rem
`

export default function ApodCard(props) {

const stuff = props.data
                
    return (
        
        <MainContainer>
            
            <Headline>{stuff.title}</Headline>
            <Media
                media_type={stuff.media_type}
                url={stuff.url}
                hdurl={stuff.hdurl}
             />
            <PodDate>{stuff.date}</PodDate>
            <Exp>{stuff.explanation}</Exp>
           
        </MainContainer>
    )
}


