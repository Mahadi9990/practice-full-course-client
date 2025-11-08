import React from 'react';
import User from './components/User';

const userInfo = fetch("http://localhost:3000/users").then((res)=>res.json())

const App = () => {
  return (
    <div>
      <User userInfo={userInfo}/>
    </div>
  );
};

export default App;