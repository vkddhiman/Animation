import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <br />
        {/* {this.state.showBlock ? ( */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("OnEnter")}
          onEntering={() => console.log("OnEntering")}
          onEntered={() => console.log("OnEntered")}
          onExit={() => console.log("OnExit")}
          onExiting={() => console.log("OnExiting")}
          onExited={() => console.log("OnExited")}
        >
          {/* {(state) => <p>{state}</p>} */}
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                height: 100,
                width: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exited" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        {/* ) : null} */}
        {/* <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} /> */}
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {/* {this.state.modalIsOpen && (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        )} */}
        {this.state.modalIsOpen && <Backdrop />}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
