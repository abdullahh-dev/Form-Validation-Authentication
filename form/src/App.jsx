import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[url('./assets/images/background.svg')] poppins-regular overflow-hidden bg-cover w-[100%] min-h-[100vh] h-[100vh] bg-no-repeat flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
