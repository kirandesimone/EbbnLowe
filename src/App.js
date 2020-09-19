import React  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Instructors from './Components/Instructors'
import Classes from './Components/Classes'
import Blog from './Components/Blog'
import BookAClass from './Components/BookAClass'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/instructors" component={Instructors}/>
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/book-a-class" component={BookAClass}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
