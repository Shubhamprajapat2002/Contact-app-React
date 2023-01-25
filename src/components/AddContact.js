import React from 'react';
import {Link} from 'react-router-dom'


class AddContact extends React.Component {
    state={
        name:"",
        email:"",
        number:"",
    }

    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "" &&  this.state.email === ""  && this.state.number === "" )
        {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'', email:"", number:""});
        console.log(this.props)
     
      }

     



  render() {
    return (
      <div className='ui main'>
        <h1 style={{"marginTop": '5%'  }} >Add Contact</h1>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label >Name</label>
                <input type="text" name="name" placeholder='Name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} />

            </div>
            <div className="field">
                <label >Email</label>
                <input type="text" name="email" placeholder='Email' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                
            </div>
            <div className="field">
                <label >Number</label>
                <input type="number" name="number" placeholder='Number' value={this.state.number} onChange={(e)=>this.setState({number: e.target.value})}/>
                
            </div>
           <span> <button className='ui button blue' style={{"marginLeft":0}} >Add</button> </span>
           <Link to="/">
           <span> <button className='ui button blue'  >Back to Contact List</button> </span>
           </Link>
            {/* <Link to="/">
            <span>
            <div className="center-div">
       <button className='ui button blue '>Back to Contact List</button> 
    </div>
    </span>
            </Link> */}
        
        </form>
      </div>
    )
  }
}

export default AddContact;