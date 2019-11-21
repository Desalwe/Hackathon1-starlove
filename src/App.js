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
      CharData: [],
      character: {},
      gender: {
        male: true,
        female: false,
      },
      healthStatus: {
        alive: true,
      },
    }
  }

  componentDidMount() {
    this.setState({ CharData: CharacterPackages });
    console.log(this.state.CharData)
  }

  test = () => {
    return console.log(this.state.CharData)
  }

  selectCharacter = event => {
    const clickedStr = event.target.value;
    const clickedChar = this.state.CharData.find(char => char.name === clickedStr);
    this.setState ({ character: clickedChar || {} });
  }



  render() {

    return (
      <>
        <button onClick={this.test} >re-render</button>
        <Router>
          <div>
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
               genderOptions={this.genderOptions}
               onChange={this.options}
               />
               </Route>

              <Route exact path="/preview">
                <Preview />
              </Route>

              <Route exact path="/top5">
                <Top5 />
              </Route>

              <Route exact path="/chat">
                <Chat />
              </Route>

            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App