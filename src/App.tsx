import './App.css'

import BouquetsPage from './Bouquets';
import BouquetDetailPage from './BouquetDetail';  // Import your BouquetDetail component
//import { useNavigate } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path= '/bouquetss' element={<BouquetsPage />}/>
          <Route path= '/' element={<h1>Это наша страница с чем-то новеньким</h1>}/>
          <Route path= '/bouquetss/:id/' element={<BouquetDetailPage />} />

        </Routes>
      </HashRouter>
  )
}

export default App
