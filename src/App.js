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
        <Route path='/' exact element={<Login />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/forgotpassword' exact element={<ForgotPassword />} />
        <Route path='/signup' exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
