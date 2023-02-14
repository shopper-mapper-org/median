import React, { useState } from 'react';
import './styles/App.scss';
import Map from './components/Map';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Form from './components/Form';

function App() {
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userQuery, setUserQuery] = useState('');
  const [userCoordinates, setUserCoordinates] = useState([43.65107, -79.347015]);
  return (
    <div className='App'>
      <Header />
      <Form
        setUserCoordinates={setUserCoordinates}
        userCoordinates={userCoordinates}
        setResults={setResults}
        setUserQuery={setUserQuery}
      />
      <section className="container">
        <div className="results-map-container">
        <Results
          results={results}
          highlight={highlight}
          setHighlight={setHighlight}
        />
        <Map
          results={results}
          setResults={setResults}
          userCoordinates={userCoordinates}
          userQuery={userQuery}
        />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
