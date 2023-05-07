import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import routes from './config/routes'
import Home from './Pages/Home'
import CandlesChart from './Pages/CandlesChart'
import Learn from './Pages/Learn'




export const App = () => {

 return (

  <>
  <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CandlesChart" element={<CandlesChart />} />
        <Route path="/Learn" element={<Learn />} />
    </Routes>
   <Footer />
  </>
 );
};
export default App;
