import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import ContactDetail from "./ContactDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const[searchTerm, setSearchTerm] = useState("");
  const[searchResults,setSearchResults]= useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) =>{
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
      <Routes>

       <Route path="/" exact element={<ContactList contacts={ searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler}  term={searchTerm }
       searchKeyword={searchHandler}
       />}/>
       <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler} />}  />
       {/* <Route path="/contact/:id" exact element={<ContactDetail />}  /> */}
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;