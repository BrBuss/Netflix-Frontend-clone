import React from "react";
import "./App.css";
//components
import Row from "./components/Row";
import Banner from "./components/Banner";

import requests from "./services/requests";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="app__body">
        <Row
          title="Netflix Orignals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchAction} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
