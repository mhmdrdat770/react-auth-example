import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/IranSans/Webfonts/fontiran.css'
import './App.css'
import { Outlet } from 'react-router-dom';
import { useUser } from './hooks/useUser';
import Spinner from './components/spinner/Spinner';
const App = () => {

  const { loading } = useUser()
  return (
    <>
      {loading ? (
        <Spinner />

      ) : (
        <Outlet />

      )}
    </>

  )
}

export default App;