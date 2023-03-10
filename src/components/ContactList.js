import React,{useRef} from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    const inputEl = useRef("");
    const deleteContactHandler = (id)=>{
        props.getContactId(id)
    };

  
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id} ></ContactCard>
        );
    })

    const getSearchTerm = () =>{
       props.searchKeyword(inputEl.current.value)
    }


    return (
        <div className="main">
          <h1 style={{"marginTop": '5%'  }} >Contact List
          <Link to="/add" >  <button className='ui button blue right' >Add Contact</button></Link>
         </h1>
         <div className="ui search">
            <div className="ui icon input" style={{"width": "1000px"}} >
                <input ref={inputEl} type="text" placeholder="Search Contact" className="prompt" value={props.term}  onChange={getSearchTerm} />
                <i className="search icon"></i>
            </div>
         </div>

    <div className='ui celled list'>{renderContactList.length > 0 ? renderContactList : "No Contact Available"}</div>
    </div>
  )
}

export default ContactList
