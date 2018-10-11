import React, { Component } from "react";

class About extends React.Component {
  state = {

    newTodo: "",

    todos: [

      "Buy tea",

      "Buy boba",

      "Boil water",

      "Add boba",

      "Drain water",

      "Add tea"

    ]

  };
  render() {
    
    return (
      <div>
        <h2>About</h2>

{this.state.todos.map(todo => (

  <li key={todo}> {todo}</li>

))}
      </div>
      
    );
  }
}

export default About;
