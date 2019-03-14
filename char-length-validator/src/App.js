import React from "react";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends React.Component {
  state = {
    userInput: '',
    showChar: false
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
      showChar: true
    });
    
    console.log(this.state)
  }

  deleteHandler = (index) => {
    let userInput = this.state.userInput.split('');
    userInput.splice(index, 1);
    this.setState({ userInput: userInput.join('') })
  }

  render() {

    console.log('Chars', this.state.showChar);
    let chars = null;
    const textLength = this.state.userInput.length;
    if (this.state.showChar) {
      let userInput = this.state.userInput.split('');
      chars = (
        <div>
          {
            userInput.map((char, index) => {
              return (
                <Char
                  click={() => this.deleteHandler(index)}
                  char={char}
                  change={(event) => this.handleInput(event)}
                  key={index}
                  id={index}
                />
              )
            })
          }
        </div>
      )

    }
    return (
      <div style ={{display:`flex`,justifyContent:`center`, alignItems:`center`,padding:`20px`}}>
        <div style ={{display:`flex`,flexDirection:`column`, width:`600px`}}>
        <input type="text" name="userInput" onChange={this.handleInput} value={this.state.userInput} />
        <Validation textLength={textLength} />
        {chars}
        </div>
      </div>
    )
  }
}

export default App