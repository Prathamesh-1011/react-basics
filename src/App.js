import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Home from './components/home/home';
import PrimaryButton from './components/primary-button/primary-button';
import { Welcome } from './components/welcome';
import HeadCounter1 from './components/HeadCounter1';
import Headcounter2 from './components/Headcounter2';
import HeadCounter3 from './components/HeadCounter3';

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
  <Welcome />
  <HeadCounter1 />
  <HeadCounter3 />
  <Headcounter2 />
  </>;
}

export default MyApp;
