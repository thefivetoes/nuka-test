import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import logo from './logo.svg';
import './App.css';

window.c = Carousel;

class App extends Component {
  renderTodo = ({ label, onClick }) => {
    return (
      <div key={`todo-${label.replace(/\W/g, "-")}`} onClick={onClick}>
        <div style={{padding: 100, border: "1px solid #0f0"}}>
          hello
        </div>
        <div>{label}</div>
      </div>
    );
  };

  render() {
    const todos = [
      {
        label: "One",
        onClick: ()=>{alert('one');}
      },
      {
        label: "Two",
        onClick: ()=>{alert('one');}
      }
    ];

    const activeArrowStyles = { cursor: "pointer" };
    const disabledArrowStyles = { cursor: "default" };

    const decorators = [
      {
        component: props => {
          const isActive = props.currentSlide > 0;
          return (
            <div
              style={isActive ? activeArrowStyles : disabledArrowStyles}
              onClick={props.previousSlide}
            >
              <button>prev</button>
            </div>
          );
        },
        position: "CenterLeft"
      },
      {
        component: props => {
          const isActive = props.currentSlide < props.slideCount - 1;
          return (
            <div
              style={isActive ? activeArrowStyles : disabledArrowStyles}
              onClick={props.nextSlide}
            >
              <button>next</button>
            </div>
          );
        },
        position: "CenterRight"
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Carousel
          framePadding="0px 35px"
          slidesToShow={1}
          decorators={decorators}
        >
          {todos.map(todo => this.renderTodo(todo))}
        </Carousel>
      </div>
    );
  }
}

export default App;
