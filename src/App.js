import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/education" component={Education}/>
    <Route exact path="/projects" component={Projects}/>
    <Route exact path="/skills" component={Skills}/>
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/contact" component={Contact}/>
    <Route component={NotFound}/>
  </Switch>
  </BrowserRouter>
)

export default App;