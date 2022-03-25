import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Explore from './Explore';
import Learn from './Learn';
import Login from './Login';
import Registration from './Registration';
import LearnMap from './LearnMap';
import Contact from './Contact';
import Settings from './Settings';
import Crypto from './Crypto';
import Article from './Article';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/learnmap' element={<LearnMap />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/crypto' element={<Crypto />} />
          <Route path='/article' element={<Article />} />
        </Routes>
        <div id="return">
          <button id="return-button" onClick={() => navigate(-1)}>Return to Previous Page</button>
        </div>
      </div>
    </div>
  );
}

export default App;
