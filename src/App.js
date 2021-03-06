import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterPackages from './CharacterPackages';
import ChooseCharacter from './ChooseCharacter';
import Preview from './Preview';
import Top5 from './Top5';
import Chat from './Chat';
import cog from './cog1.jpg';
import heartnav from './heart-nav.png';
import top5icon from './top5-icon.jpg'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chattingCharacter: {},
      userMessage: "",
      sentMessages: [],
      characterPackages: [],
      userCharacter: {},
      gender: 'both genders', // can be ['male', 'female', 'both genders'] let's keep it the same name as in 'value' and 'checked' so the default appears as checked in ChooseCharacter.js
      health: 'living',
    }
  }

  // Our API lies down here

  componentDidMount() {
    this.setState({ characterPackages: CharacterPackages });
  }

  chatImageClick = (characterPackage) => {
    this.setState({ chattingCharacter: characterPackage })
  }

  // method to select a character through the page (user's profile)

  selectCharacter = event => {
    const clickedStr = event.target.value;
    const clickedChar = this.state.characterPackages.find(char => char.name === clickedStr);
    this.setState({ userCharacter: clickedChar || {} });
  }

  showCurrentlyTyping = e => {
    this.setState({ userMessage: e.target.value });
  }

  // Gender selection method

  handleSelectGender = (e) => {
    this.setState({ gender: e.target.value })
  }

  // Dead or Alive selection method (same method as Gender but different names)

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

  onClickStar = (ratedCharacter, rating) => {
    this.setState(state => {
      const updatedCharacterPackages = state.characterPackages.map(
        (characterPackage) => {
          if (characterPackage.name === ratedCharacter.name) {
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
                <Link to="/">
                  <img className="icon" src={cog}></img>
                </Link>
              </li>
              <li>
                <Link to="/preview">
                  <img className="icon" src={heartnav}></img>
                </Link>
              </li>
              <li>
                <Link to="/top5">
                  <img className="icon" src={top5icon}></img>
                </Link>
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
                gender={this.state.gender}
                health={this.state.health}
                onClickStar={this.onClickStar}
              />
            </Route>

            <Route exact path="/top5">
              <Top5
                characterPackages={this.state.characterPackages}
                chatImageClick={this.chatImageClick}
              />
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
