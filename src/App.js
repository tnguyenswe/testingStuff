import './App.css';
import BoxSidebar from './components/BoxSidebar';
import Home from './routes/home.js';
import Tracker from './routes/tracker.js';
import Downloads from './routes/downloads.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <BoxSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
