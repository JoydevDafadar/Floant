import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Plant from './Pages/Plant/Plant';
import Cart from './Pages/Cart/Cart'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Plant/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
