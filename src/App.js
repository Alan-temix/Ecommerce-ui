import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import Main from './layouts/Main';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';
import Checkout from './views/Checkout';
import PaymentConfirmation from './views/PaymentConfirmation';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Login" exact>
                <p>Solo muestra esto en pantalla</p>
              </Route>
              <Route path="/Product" exact>
                <ProductDetails />
              </Route>
              <Route path="/Checkout" exact>
                <Checkout />
              </Route>
              <Route path="/Checkout/PaymentConfirmation" exact>
                <PaymentConfirmation />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Main>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
