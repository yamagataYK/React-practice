import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Second from './pages/Second.jsx';
import Three from './pages/Three.jsx';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import Cake from './assets/cake.jpg';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <img src={Cake} alt="ケーキの写真" />
            <h1>React</h1>
            <p>練習</p>
            <Button />
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/two" element={<Second />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </Router >
  )
}

export default App
