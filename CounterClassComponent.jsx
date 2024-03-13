import React from "react";

class CounterClassComponent extends React.Component
{
   render()
   {
    console.log("Rendering");
    return(
     
       <div>
         <h2>Counter: {this.state.count}</h2>
         <button onClick={()=>this.increase()}>increase</button>
         <button onClick={()=>this.decrease()}>decrease</button>
       </div>
    );
   }

   increase()
   {
      this.setState({count:this.state.count +1})
   }

   decrease()
   {
      this.setState({count:this.state.count -1})
   }
   constructor()
   {
    super();
    this.state={count:0}
   }

   componentDidMount()
   {
     console.log("inside componentDidMount");     
   }

   componentDidUpdate()
   {
      console.log("inside componentDidUpdate");     
   }

   componentWillUnmount()
   {
      console.log("inside componentWillUnmount");  
   }
} 
  
export default CounterClassComponent;
