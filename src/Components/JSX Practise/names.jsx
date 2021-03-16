import React from 'react'
import ReactDOM from 'react-dom'

// class typeofGender {
//     constructor(){
//         this.gender = 'male';
//     }

//     printGender(){
//         <div>Gender is: {this.gender}</div>
//     }
// }




class Human {
  constructor(){
      this.gender='Male'
  }
  
  printGender(){
    console.log(this.gender)
  }
}
  
  
class Person1 extends Human{
  constructor(){
  super();
  this.name='Yashwant'
  }
  
  printMyName(){
    console.log(this.name)
  }
}

const person = new Person1
person.printMyName()
person.printGender()


function Person(props){
  

  return(  
    <>
    <div className="person">
    <h1>{props.name}</h1>
    <p1>Your Age is: {props.age}</p1>
    </div>

    <div className="person">
    <h1>Yashsv</h1>
    <p1>Your Age is: 20</p1>
  </div>
  </>

  )

}
    

ReactDOM.render(<Person name="Yashwant" age="24"/>,document.getElementById('root') );

export default Person