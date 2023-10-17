import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import Movie from "./Component/Movie/Movie.style";
import { movies } from "./movieDummy";
import styled, {createGlobalStyle} from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



function App() {
  return (
    <AppContainer>
        {
          movies.results.map((item) => {
            return (
              <Movie 
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
              overview={item.overview}
              />
            );
          })
        }
      </AppContainer>
  );
}

export default App;
