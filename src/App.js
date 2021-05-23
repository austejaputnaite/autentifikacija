import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import ImagesForm from './components/ImagesForm';
import Home from './components/Home';

function App() {

  const adminUser = {
    email: "test@test.lt"
  }

  const [user, setUser] = useState({email: "", active: "false"});
  const [error, setError] = useState("");

  const Login = details => {
    setUser({
      email: details.email,
      active: "true"
    });
  }

  const SecondStep = details => {
    if (details.email === adminUser.email) {
      setUser({
        email: details.email,
        active: details.active
      });
    } else { 
      setError("El. paštas neregistruotas sistemoje");
    }
  }

  return (
    <div className="App">
    {(user.email !== "") ? 
      (user.active === "true" ? (<Home/>) : (<ImagesForm Login={Login}/>)) : 
      (<LoginForm SecondStep={SecondStep} error={error} />)}  
    </div>
  );
}
export default App;