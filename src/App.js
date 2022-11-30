import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import States from './components/pages/StatesPage/States';
import Countries from './components/pages/CountriesPage/Countries';
import WeatherInfo from './components/pages/WeatherPage/WeatherInfo';

const App = () => (
  <>
    <Navbar />
    <Routes className="main-contents">
      <Route path="/" element={<Home />} />
      <Route path="/continent/:continentName" element={<Countries />} />
      <Route path="/:name/states" element={<States />} />
      <Route path="states" element={<States />} />
      <Route path="weather" element={<WeatherInfo />} />
    </Routes>
  </>
);

export default App;
