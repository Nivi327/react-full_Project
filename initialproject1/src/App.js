import React, {useState} from 'react';

import './App.css';

import AddUser from './components/Users/AddUser';

import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const AddUserHandler = (newName, newAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name:newName, age:newAge}];
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
