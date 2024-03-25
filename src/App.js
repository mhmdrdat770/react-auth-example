import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/IranSans/Webfonts/fontiran.css'
import './App.css'
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App;