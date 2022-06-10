import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
        <Navbar />
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
