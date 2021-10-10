import logo from './logo.svg';
import Header from './components/Header';
//import ProductLists from './components/ProductLists/ProductLists';
import './App.css';
import ShoppingCarts from './components/ShoppingCarts';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProductLists /> */}
      <ShoppingCarts />
    </div>
  );
}

export default App;
