import React from "react";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #22254b;
}
`

const MovieStyle = styled.div`
  width: 150px;
  height: 300px;
  margin: 15px;
  border-radius: 5px;
  background-color:#373b69;;
  color: white;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  &:hover{
    opacity: 0.2;
  }
`;

const InnerContent = styled.div `
  width: 80%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 80%;
  left: 50%;
  transition: all 600ms ease;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MovieStyle}:hover & {
    opacity: 1;
    top: 50%;

  }
`;


const Poster = styled.img`
  max-width: 100%;
`;

const Data = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  font-size: 12px;

`;
const Overview = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  font-size: 12px;
`;


function Movie({ title, overview, poster_path, vote_average }) {
    return (
        <MovieStyle>
            <Poster src = {poster_path} alt = {title} title = {title} />
            <Data>
                <h3 className = "movie_title">{title}</h3>
                <span className="vote_average">{vote_average}</span>
            </Data>
            <InnerContent>
                <Title>{title}</Title>
                <br />
                <Overview>{overview.slice(0, 100)}...</Overview>
            </InnerContent>
        </MovieStyle>
    );
}

export default Movie;