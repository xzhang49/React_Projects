import React from 'react'
import List from './listItem.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    }); // this.setState类似于assign()，于此只改变了input，而不改变items
  };

  handleAdd = () => {
    if (this.state.input) {
      this.setState({
        input: '',
        items: [...this.state.items, this.state.input]
      }) // input:'' 并不会影响后面 this.state.input
    }
  }

  handleRemove = (index) => {
    let arr = this.state.items.slice(0); //不能直接改state
    arr.splice(index, 1);
    this.setState((state) => ({items: arr})
      ,() => {console.log(this.state.items)}
    );
  }

  render() {
    return (
      <div>
        <div>
          <input
            placeholder={'plan'}
            onChange={this.handleInput} // 默认para是event，其他para需要用bind(null，para), 那么同时呢???
            value={this.state.input}
          />
          <button onClick={this.handleAdd}> + </button>
        </div>
        <List items={this.state.items} handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default TodoList;
