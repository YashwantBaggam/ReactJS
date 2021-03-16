import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage : '',
        }
        this.getname=this.getname.bind(this)
        // this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        // this.handleError = this.handleError.bind(this)
    }

    getname(name){
        return ` ${name}`
    }
   

    render() {
        console.log(this.props)
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome! {this.props.match.params.name}
                    {/* You can manage your todos <Link to="/todos">here</Link>. */}
                </div>
                <div className="container">
                    Click here to get a customized welcome message --
                    <button 
                        className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                
            </>
        )        
    }

    

}


export default HomePage