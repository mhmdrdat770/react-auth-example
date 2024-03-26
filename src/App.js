import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/IranSans/Webfonts/fontiran.css'
import './App.css'
import { Outlet } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
const App = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default App;