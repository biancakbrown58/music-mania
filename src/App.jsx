import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/TheChats'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
// import Band from './components/Band'
import MainPage from './pages/MainPage'
import OrvillePeck from './pages/OrvillePeck'
import TheChats from './pages/TheChats'
import BlackSabbath from './pages/Black-Sabbath'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Music Mania!</h1>
        {/* <Band /> */}
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li className="Orville">
              <Link to="/orville-peck">Orville Peck</Link>
            </li>
            <li>
              <Link to="/the-chats">The Chats</Link>
            </li>
            <li>
              <Link to="/black-sabbath">Black Sabbath</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/orville-peck" component={OrvillePeck}></Route>
        <Route exact path="/the-chats" component={TheChats}></Route>
        <Route exact path="/black-sabbath" component={BlackSabbath}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
