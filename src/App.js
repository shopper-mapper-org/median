import './styles/App.scss';
import Map from './components/Map';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
        <Header />
        <Form />
        <Map />
        <Results />
        <Footer />
    </div>
  );
}

export default App;
