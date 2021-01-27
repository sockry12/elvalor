import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductSreen';

function App() {
    return ( 
    <BrowserRouter>
    <div className = "grid-container" >
        <header className = "row" >
        <div >
        <Link className = "brand" to= "/"> The Valor Group </Link> </div><div>
        <Link to= "/cart" > Carro </Link> 
        <Link to= "/signin" > Ingresar </Link> </div>
        </header> 
    <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        

    </main> 
        <footer className = "row center" > All right reserved </footer> </div>
    </BrowserRouter>
    );
}

export default App;