import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterPackages from './CharacterPackages';
import ChooseCharacter from './ChooseCharacter';
import Preview from './Preview';
import Top5 from './Top5';
import Chat from './Chat';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chattingCharacter: {},
      userMessage: "",
      sentMessages: [],
      characterPackages: [],
      userCharacter: {},
      gender: 'both genders', // can be ['male', 'female', '']
      health: 'dead and living',
    }
  }

  componentDidMount() {
    this.setState({ characterPackages: CharacterPackages });
  }

  chatImageClick = (characterPackage) => {
    this.setState({ chattingCharacter: characterPackage })
  }

  showCurrentlyTyping = e => {
    this.setState({ userMessage: e.target.value });
  }

  selectCharacter = event => {
    const clickedStr = event.target.value;
    const clickedChar = this.state.characterPackages.find(char => char.name === clickedStr);
    this.setState({ userCharacter: clickedChar || {} });
  }

  handleSelectGender = (e) => {
    this.setState({ gender: e.target.value })
  }

  handleSelectHealth = (e) => {
    this.setState({ health: e.target.value })
  }

  sendMessageNow = e => {
    e.preventDefault();
    if (this.state.userMessage) {
      this.setState((state) => {
        return {
          ...state,
          sentMessages: [...state.sentMessages, [state.userMessage,]],
          userMessage: "",
        }
      }

      )
    }
  }



  // ALEX --> INSERT RATING STATE INTO EACH CHARACTER-PACKAGE WHEN THEIR STARS ARE CLICKED ON

  onClickStar = (ratedChar, rating) => {
    this.setState(state => {
      const updatedCharacterPackages = state.CharacterPackages.map(
        (characterPackage) => {
          if (state.characterPackage.name === ratedChar.name) {
            characterPackage.rating = rating;
          }
          return characterPackage;
        }
      );

      return {
        ...state,
        characterPackages: updatedCharacterPackages,
      };
    });
  };






  render() {
    return (
      <>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Choose Character</Link>
              </li>
              <li>
                <Link to="/preview">Preview</Link>
              </li>
              <li>
                <Link to="/top5">Top 5</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route exact path="/">
              <ChooseCharacter
                userCharacter={this.state.userCharacter}
                selectCharacter={this.selectCharacter}
                gender={this.state.gender}
                health={this.state.health}
                onSelectGender={this.handleSelectGender}
                onSelectHealth={this.handleSelectHealth}
              />
            </Route>

            <Route exact path="/preview">
              <Preview
                characterPackages={this.state.characterPackages}
                onClickStar={this.onClickStar}
              />
            </Route>

            <Route exact path="/top5">
              <Top5 characterPackages={this.state.characterPackages} chatImageClick={this.chatImageClick} />
            </Route>

            <Route exact path="/chat">
              <Chat
                chattingCharacter={this.state.chattingCharacter}
                userCharacter={this.state.userCharacter}
                showCurrentlyTyping={this.showCurrentlyTyping}
                sendMessageNow={this.sendMessageNow}
                sentMessages={this.state.sentMessages}
                userMessage={this.state.userMessage}
              />
            </Route>

          </Switch>
        </Router>
      </>
    );
  }
}

export default App