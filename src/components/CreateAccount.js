import React, { Component } from 'react'

export default class CreateAccount extends Component {

    state={
        user:"",
        email:"",
        pnumber:"",
        Sname:"",
        password:"",
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle submit..")
        console.log(this.state);
        localStorage.setItem(this.state.user,JSON.stringify(this.state));
        this.setState({
            user:"",
        email:"",
        pnumber:"",
        Sname:"",
        password:""
        });
        this.props.history.push("/emps")
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
            <div>
                    <div className="container card md-5 col-md-6">
                <form className="card-body" onSubmit={this.handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">UserName</label>
    <input type="text" className="form-control" id="username" aria-describedby="emailHelp"
     value={this.state.user}
    noChange={this.handleChange}
     name="user"
    />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" id="email"
      value={this.state.email}
     noChange={this.handleChange}
      name="email"
     />
     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phonenumber"
     value={this.state.pnumber}
     noChange={this.handleChange}
     name="pnumber"
     />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Screen Name</label>
    <input type="text" className="form-control" id="screenname"
     value={this.state.Sname}
     noChange={this.handleChange}
     name="Sname"
     />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"
     value={this.state.password}
     noChange={this.handleChange}
     name="password"
     />
  </div>
  <div className="mb-3 form-check">
   
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
            </div>
        )
    }
}
