import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Verify from './components/Verify';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword';
import PrivateRoute from './components/routes/PrivateRoute';
import { AuthProvider } from './components/contexts/auth'
import { OTPProvider } from './components/contexts/otp'


function App() {
  return (
    <div>
      <BrowserRouter>
        <OTPProvider>
          <AuthProvider>
            <Routes>
              <Route path='/' exact element={<Login />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/forgotpassword' exact element={<ForgotPassword />} />
                <Route path='/signup' exact element={<Signup />} />
                <Route path='/verify' exact element={<Verify />} />
              <Route element={<PrivateRoute />}>
                <Route path='/home' element={<Home />}/>
              </Route>
            </Routes>
          </AuthProvider>
        </OTPProvider>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
