import React from 'react';
// import {Link} from 'react-router-dom'
import users from '../images/users.png';

const ContactCard = (props) => {
    const {id, name, email,number}= props.contact;
  return (
    <div className="item">

                
                <img className='ui avatar image' src={users} alt="user" />
                 <div className="content">
                  {/* <Link to={{pathname:`contact/${id}`, state:{contact: props.contact}}}> */}
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{number}</div>
                    {/* </Link> */}
                 </div>

                 
                 <i className='trash alternate outline icon bin  '
                 style={{color:"red" , marginTop: "15px"  }} 
                 onClick={()=>props.clickHander(id)}
                 ></i>
               
            </div>
  )
}

export default ContactCard
