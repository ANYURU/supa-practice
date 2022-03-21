import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
