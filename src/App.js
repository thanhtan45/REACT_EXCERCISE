import logo from './logo.svg';
import './App.css';
import hello from './hello';
import hello2 from './hello2'
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {


    return ( <
        div className = 'App' >
        <
        Navbar dark color = "primary" >
        <
        div className = 'container' >
        <
        NavbarBrand href = "/" > Risorante Con Fusion < /NavbarBrand> < /
        div > <
        /Navbar> < /
        div >

    )
};


export default App;