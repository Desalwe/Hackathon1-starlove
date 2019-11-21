import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterPackages from './CharacterPackages'
import ChooseCharacter from './ChooseCharacter';
import Preview from './Preview';
import Top5 from './Top5';
import Chat from './Chat';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charData: CharacterPackages,
      whoAmI: {},
      genderPreference: "",
      healthPreference: "",
      selectedCharacter: {}
    }
  }


  render() {
    console.log(this.state.charData)
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
              <ChooseCharacter />
            </Route>

            <Route exact path="/preview">
              <Preview
                charData={this.state.charData}
              />
            </Route>

            <Route exact path="/top5">
              <Top5 />
            </Route>

            <Route exact path="/chat">
              <Chat />
            </Route>

          </Switch>
        </Router>
      </>
    );
  }


}

export default App