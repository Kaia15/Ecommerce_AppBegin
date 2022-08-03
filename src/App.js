import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home(1)'
import Navbar from './components/Navbar/Navbar(1)'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
