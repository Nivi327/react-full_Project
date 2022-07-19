import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  modalCloseHandler = () => {
    this.setState({modalIsOpen: false})
  }

  showModalHandler = () => {
    this.setState({modalIsOpen: true})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button>Toggle</button>
        <br />
        <Transition>
          <div style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            margin: '0 auto'
          }}></div>
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={ this.modalCloseHandler } />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
