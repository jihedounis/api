import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from './Components/UserList'

const App = () => {
 const [listOfUSer, setListOfUSer] = useState();
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
   function fetchData() {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
           setListOfUSer(result.data);
           setIsLoading(false);      
      })
      .catch(err => setError(err));
  };
   fetchData();
 }, []);

 return (
  <div className="Container">   
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} error={error}/>   
  </div> 
);
};
export default App;
