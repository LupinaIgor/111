import logo from './assets/logo.svg';
import './App.css';
import Header from "./layOut/Header";
import Footer from "./layOut/Footer";
import InputReactiveComponent from "./components/inputReactiveComponent";
import VendorsViewLayout from "./components/vendorsView/VendorsViewLayout";
import ColorsWrapper from "./components/colors/ColorsWrapper";

function App() {
  return (
    <div className="App">
      <Header/>
        Main Content
        <hr/>
          {/*<VendorsViewLayout/>*/}
        <ColorsWrapper />
      <Footer/>
    </div>
  );
}

export default App;
