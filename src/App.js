import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(){
      super()
      this.state={
        tasks : [
        
        ],
        textLive : ""
      }
    }
    addTask=()=> this.state.textLive == "" ? alert('Thabet ro7ek') :  this.setState({tasks : [...this.state.tasks,{title : this.state.textLive,isDone : false,id : Math.random()}], textLive : ""})
    
    deleteTask=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=> el.id != a)})
    
    switchDone=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id == a ? {...el,isDone : !el.isDone} : el)})
     render(){
      return(
        <div>
          <h1>ToDo List</h1>

          {
            this.state.tasks.map((task,i,t)=>
            <div className='fedi'>
              <h3 className={task.isDone && "chateb"}>{task.title}</h3>
              <div>              
                {/* <button onClick={()=>this.switchDone(task.id)}>Done</button> */}
                <i class={task.isDone ? "fa-solid fa-circle-xmark fa-xl" : "fa-solid fa-check fa-xl"} onClick={()=>this.switchDone(task.id)}></i>
                <i class="fa-solid fa-trash fa-xl" onClick={()=>this.deleteTask(task.id)}></i>
                {/* <button onClick={()=>this.deleteTask(task.id)}>Delete</button> */}
              </div>
            </div>
            )
          }

          <br/>
          <br/>
         <input value={this.state.textLive} type='text' onChange={(e)=>this.setState({textLive : e.target.value})}/>
         <i class="fa-solid fa-plus fa-xl" onClick={this.addTask}></i>
         


        </div>
      )
    }
}

export default App;
