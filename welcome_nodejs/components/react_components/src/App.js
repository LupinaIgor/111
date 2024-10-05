import logo from './assets/logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./layOut/Header";
import Footer from "./layOut/Footer";
import InputReactiveComponent from "./components/inputReactiveComponent";
import VendorsViewLayout from "./components/vendorsView/VendorsViewLayout";
import ColorsWrapper from "./components/colors/ColorsWrapper";
import {ToastContainer} from "react-toastify";
import ToastifyComponent from "./components/helpers/ToastifyComponent";

function App() {
  return (
    <div className="App">
      <Header/>
        Main Content
        <hr/>
          {/*<VendorsViewLayout/>*/}
        <ColorsWrapper />
      <Footer/>
        <ToastifyComponent/>
        <ToastContainer />
    </div>
  );
}

export default App;
