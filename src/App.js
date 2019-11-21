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
      charData: [
        {
          "name": "Luke Skywalker",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
          "rating": 5
        },
        {
          "name": "C-3PO",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
          "rating": 4
        },
        {
          "name": "Darth Vader",
          "image": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
          "rating": 4
        },
        {
          "name": "Leia Organa",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
          "rating": 5
        },
        {
          "name": "Obi-Wan Kenobi",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
          "rating": 5
        },
        {
          "name": "Anakin Skywalker",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
          "rating": 3
        }
      ],
      whoAmI: {
        "name": "Anakin Skywalker",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "rating": 3
      },
      genderPreference: "",
      healthPreference: "",
      selectedCharacter: {},
      userMessage: "",
      sentMessages: [],
      CharData: [],
      character: {},
      gender: 'both genders', // can be ['male', 'female', '']
      health: 'dead and living',
    }
  }

  componentDidMount() {
    this.setState({ charData: CharacterPackages });
    console.log(this.state.charData)

    chatImageClick = (character) => {
      this.setState({ selectedCharacter: character })
    }

    showCurrentlyTyping = e => {
      this.setState({ userMessage: e.target.value });
    }

    selectCharacter = event => {
      const clickedStr = event.target.value;

      // const clickedChar = this.state.charData.find(char => char.name === clickedStr);

      const clickedChar = this.state.CharData.find(char => char.name === clickedStr);
      this.setState({ character: clickedChar || {} });
    }

    clickingButton = () => {
      this.setState({ isMale: !this.state.isMale });
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
                  character={this.state.character}
                  selectCharacter={this.selectCharacter}
                  gender={this.state.gender}
                  health={this.state.health}
                  onSelectGender={this.handleSelectGender}
                  onSelectHealth={this.handleSelectHealth}
                />
              </Route>

              <Route exact path="/preview">
                <Preview />
              </Route>

              <Route exact path="/top5">
                <Top5 characters={this.state.charData} chatImageClick={this.chatImageClick} />
              </Route>

              <Route exact path="/chat">
                <Chat
                  selectedCharacter={this.state.selectedCharacter}
                  whoAmI={this.state.whoAmI}
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