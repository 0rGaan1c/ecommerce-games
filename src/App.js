import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import BuyGame from "./components/BuyGame";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/cart" component={Cart} />
            <Route exacth path="/:name/:idx" component={BuyGame} />
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
