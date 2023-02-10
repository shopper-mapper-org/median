import './styles/App.scss';
import Map from './components/Map';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
        <Form />
        <Map />
        <Results />
        <Footer />
      </header>
    </div>
  );
}

export default App;
