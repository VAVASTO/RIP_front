import './App.css'

import BouquetsPage from './Bouquets';
import BouquetDetailPage from './BouquetDetail';  // Import your BouquetDetail component
//import { useNavigate } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path= '/bouquetss' element={<BouquetsPage />}/>
          <Route path= '/' element={<BouquetsPage />}/>
          <Route path= '/bouquetss/:id/' element={<BouquetDetailPage />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
