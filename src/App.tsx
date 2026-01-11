import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HouseScene from './pages/HouseScene';
import Nav from './components/Nav';

// A simple Home component so the screen isn't empty
const Home = () => (
  <div className='flex h-screen items-center justify-center bg-neutral-10 w-screen flex-col gap-4'>
    <Nav />
    <h1 className='text-primary text-4xl font-bold font-manrope text-center'>
      Welcome to the 3D App
    </h1>
  </div>
);

const App = () => {
  return (
    <Router>
      {/* The Nav stays visible on all pages */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HouseScene' element={<HouseScene />} />
      </Routes>
    </Router>
  );
};

export default App;
