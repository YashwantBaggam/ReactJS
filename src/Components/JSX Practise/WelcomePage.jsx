import React, {Component} from 'react'
import AuthenticationService from '../todo/AuthenticationService.js'

class WelcomePage extends Component{
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'',
            
        }
        this.handleChange=this.handleChange.bind(this)    
        this.loginClicked = this.loginClicked.bind(this)
    
    }

    handleChange(event){
        // console.log(this.state)
        // console.log(event.target.value)
        // console.log(event.target.name)
        this.setState(
            {
                [event.target.name] :event.target.value
            }
           
        )
    }


    loginClicked() {
        if(this.state.username==='yashwant' && this.state.password==='baggam'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
		}
    }

    render(){
        return(
            <>
            
            <h1 className='Login'>Login
                <div className='UserLogin'>
                    <h6 style={{marginTop:'35px'}}>Username <input type= "text" name="username" value={this.state.username} onChange={this.handleChange}></input></h6>
                    <h6 style={{wordSpacing:'4px'}}>Password <input type= "password" name="password" value={this.state.password} onChange={this.handleChange}></input></h6>
                    <h6 style={{padding:'10px',textAlign:'center'}}> <button style={{backgroundColor:'green',color:'white'}} onClick={this.loginClicked}>Submit</button>
                     <a href='contactAdmin' style={{margin:'10px',color:'black',fontSize:'12px'}}>Forgot Password? </a>
                    </h6>
                </div>
            </h1>
                         
                
            </>
        )
    }

}

export default WelcomePage