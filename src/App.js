import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Home from './components/home/home';
import PrimaryButton from './components/primary-button/primary-button';

const Header = (props) =>{
  return <h1>{props.title}</h1>;
}

const MyApp = () => {
  const list = [
    "Amitabh",
    "Rekha",
    "Jaya"
  ];
  return <>
  <Header title="My Title"/>
  <Home list={list}/>
  <PrimaryButton label="Click Me"/>
  <Footer notice="Copyright 2024 from App"/>
  </>;
}

export default MyApp;
