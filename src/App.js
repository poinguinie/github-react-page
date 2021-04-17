import './App.css';
import Navi from './contents/Navi';
import Contents from './contents/Contents';
import Footer from './contents/Footer';
//import { useMediaQuery } from 'react-responsive'

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
}

export default App;