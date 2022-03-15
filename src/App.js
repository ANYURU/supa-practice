import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div style={{height:'100%', border:'1px solid red'}}>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
