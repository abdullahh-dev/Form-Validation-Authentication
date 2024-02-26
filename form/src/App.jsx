import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="bg-[url('./assets/images/background.svg')] poppins-regular bg-cover w-[100%] h-[100vh] bg-no-repeat flex justify-center items-center">
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
