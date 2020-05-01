import React, { Component } from 'react';
import TodoItems from './Component/todoitems/todo'
import AddItem from './Component/additems/additems'

class App extends Component {
  state = {
    items : [
      {id:1,name:'hamed',age:21},
      {id:2,name:'sara',age:26},
      {id:3,name:'shimaa',age:24}
    ]
  }

  deleteitem = (id) =>{
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }
  
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteitem={this.deleteitem} />
        <AddItem addItem={this.addItem} />
      </div>
    )
  }
}
export default App;
