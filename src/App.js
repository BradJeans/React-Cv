import Header from './Templates/NavBar'
import MainText from './Templates/MainText'
import Footer from './Templates/Footer'

import './App.css';
function App() {
  return (
    <div className="maincontainer">
    <Header></Header>
    <h1 className="mr-5 mt-5"></h1>
     <div className="container mb-5 mt-5">
      <h1 className="mr-5 mt-5"></h1>
      <MainText></MainText>
    </div>
    <Footer></Footer>
  </div>
  );
}

export default App;
