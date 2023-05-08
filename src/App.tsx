import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './config/routes'
import Home from './Pages/Home'
import CandlesChart from './Pages/CandlesChart'
import Learn from './Pages/Learn'




function App() {

 return (

  <HashRouter>
    <Routes>
          { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              />
          )) }
    </Routes>
  </HashRouter>
 );
};
export default App;
