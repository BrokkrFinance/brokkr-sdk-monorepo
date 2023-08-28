import Navbar from './components/Navbar.js'
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DCA from './pages/DCA.js';
import PortfolioList from './pages/PortfolioList.js';
import IndexPortfolio from './pages/IndexPortfolio.js';
import TokenIssuingPortfolio from './pages/TokenIssuingPortfolio.js';

function App() {
  return (
    <Router>
      <CssBaseline />
        <Navbar />
      <Routes>
        <Route path='/' element={<PortfolioList />}></Route>
        <Route path='/dca' element={<DCA />}></Route>
        <Route path='/index/:chain/:portfolioAddress' element={<IndexPortfolio />}></Route>
        <Route path='/token-issuing/:chain/:portfolioAddress' element={<TokenIssuingPortfolio />}></Route>
      </Routes>
    </Router>
  )
}

export default App
