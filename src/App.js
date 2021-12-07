import "./App.css";
import Header from "./Pages/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
