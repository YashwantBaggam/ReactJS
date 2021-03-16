import React, {Component} from 'react'
import './Counter.css'

class CounterButton extends Component{
    constructor(){
        super();
        // this.state={
        //     counter : 0
        // }

        //  //this.increment = this.increment.bind(this)
        //  this.increment = this.increment.bind(this)
        //  this.decrement = this.decrement.bind(this)



    }
    render(){
       //const style = { fontSize:"20px", padding: "7px 15px"}
       return (
        <div className="counter">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button> 
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button> 
            {/*<span className="count"//style={style} --- this can be used for styling inside counter itself without using Counter.css file
            >{this.state.counter}</span>*/}
        </div>
        )
    }  

    //increment = () => {   ----- The arrow function can be used for binding instead of 'this.increment = this.increment.bind(this)'
    // increment(){
    //     //console.log('increment');
    //     //this.state.counter++;
    //     this.setState(
    //         (prevState)=>{
    //         return {counter: prevState.counter + this.props.by }
    //         }
    //     )

    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement(){
    //     this.setState(
    //         (prevState)=>{
    //             return {counter : prevState.counter - this.props.by};
    //          }
    //     )

    //     this.props.decrementMethod(this.props.by)
    // }
       
   //}
    
}

export default CounterButton
